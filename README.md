# Emergent

A full-stack web application with React frontend and FastAPI backend.

## Project Structure

```
emergent/
├── .emergent/
│   ├── frontend/          # React frontend application
│   ├── emergent.yml       # Project configuration
│   └── yarn.lock          # Frontend dependencies lock
├── backend/               # FastAPI backend server
│   ├── server.py          # Main server file
│   ├── requirements.txt    # Python dependencies
│   └── .env               # Environment variables
├── .github/
│   └── workflows/
│       └── deploy.yml     # GitHub Actions deployment workflow
└── tests/                 # Test files
```

## Getting Started

### Frontend Setup

```bash
cd .emergent/frontend
yarn install
yarn start
```

The frontend will run on `http://localhost:3000`

### Backend Setup

```bash
cd backend
pip install -r requirements.txt
python server.py
```

The backend API will run on `http://localhost:8000`

## Deployment

This project is automatically deployed to GitHub Pages using GitHub Actions when you push to the `main` branch.

The workflow:
1. Installs frontend dependencies
2. Builds the React application
3. Deploys the built files to GitHub Pages

## Technologies

- **Frontend:** React, Create React App, Yarn
- **Backend:** FastAPI, Python, MongoDB (Motor async driver)
- **Deployment:** GitHub Pages + GitHub Actions
- **Database:** MongoDB

## API Endpoints

- `GET /api/` - Health check
- `POST /api/status` - Create status check
- `GET /api/status` - Get all status checks

## Environment Variables

Create `.env` files in both `backend/` and `.emergent/frontend/` directories with required configuration.

## License

All rights reserved.
