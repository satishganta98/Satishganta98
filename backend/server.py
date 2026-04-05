from fastapi import FastAPI, APIRouter, UploadFile, File, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.mail import FastMail, MessageSchema, ConnectionConfig
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import shutil
import logging
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Certificates storage directory (persists across restarts)
CERTIFICATES_DIR = ROOT_DIR / "certificates"
CERTIFICATES_DIR.mkdir(exist_ok=True)

ALLOWED_CERT_FILENAMES = {
    "comptia-security-plus.pdf",
    "comptia-network-plus.pdf",
    "comptia-cysa-plus.pdf",
    "splunk-cybersecurity-defense-analyst.pdf",
    "career-essentials-system-administration.pdf",
    "comptia-csap.pdf",
    "microsoft-sc-300.pdf",
}

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")


# Define Models
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")  # Ignore MongoDB's _id field
    
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    subject: str
    message: str
    recipient: str

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/contact")
async def send_contact_message(contact: ContactMessage):
    try:
        # Store in database
        doc = {
            "id": str(uuid.uuid4()),
            "name": contact.name,
            "email": contact.email,
            "subject": contact.subject,
            "message": contact.message,
            "timestamp": datetime.now(timezone.utc).isoformat(),
            "status": "received"
        }
        
        await db.contact_messages.insert_one(doc)
        
        # Return success response
        return {
            "status": "success",
            "message": f"Thank you for your message, {contact.name}! I'll get back to you soon.",
            "id": doc["id"]
        }
    except Exception as e:
        logger.error(f"Error processing contact message: {str(e)}")
        return {
            "status": "success",
            "message": "Message received. Thank you for contacting me!"
        }

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    
    # Convert to dict and serialize datetime to ISO string for MongoDB
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    
    _ = await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    # Exclude MongoDB's _id field from the query results
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    
    # Convert ISO string timestamps back to datetime objects
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    
    return status_checks

# ── Certificate upload / serve ──────────────────────────────────────────────

@api_router.get("/certificates")
async def list_certificates():
    """Return availability status for every expected certificate."""
    result = []
    for fname in ALLOWED_CERT_FILENAMES:
        path = CERTIFICATES_DIR / fname
        result.append({
            "filename": fname,
            "available": path.exists(),
        })
    return result


@api_router.post("/upload-certificate")
async def upload_certificate(
    file: UploadFile = File(...),
    filename: str = "",
):
    """Upload a certificate PDF.  Pass the target filename as a query param
    or leave blank to use the uploaded file's original name."""
    target = filename.strip() or (file.filename or "").strip()
    if not target:
        raise HTTPException(status_code=400, detail="Filename is required.")
    if target not in ALLOWED_CERT_FILENAMES:
        raise HTTPException(
            status_code=400,
            detail=f"Invalid filename. Allowed values: {sorted(ALLOWED_CERT_FILENAMES)}",
        )
    dest = CERTIFICATES_DIR / target
    with dest.open("wb") as f:
        shutil.copyfileobj(file.file, f)
    logger.info("Certificate uploaded: %s", target)
    return {"status": "success", "filename": target}

# ── Include router & mount static certificates ──────────────────────────────

# Include the router in the main app
app.include_router(api_router)

# Serve uploaded certificates at  /certificates/<filename>
app.mount("/certificates", StaticFiles(directory=str(CERTIFICATES_DIR)), name="certs")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()