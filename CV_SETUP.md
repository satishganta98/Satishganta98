# CV Setup Instructions

Your CV file has been created as `cv.txt`. To make the download button work, you need to convert it to PDF:

## Option 1: Online Conversion (Fastest)
1. Go to https://cloudconvert.com/txt-to-pdf
2. Upload `cv.txt`
3. Download as `cv.pdf`
4. Save to `frontend/public/cv.pdf`

## Option 2: Using Google Docs
1. Go to https://docs.google.com
2. Create a new document
3. Copy and paste the content from `cv.txt`
4. File → Download → PDF Document
5. Save as `cv.pdf` to `frontend/public/cv.pdf`

## Option 3: Using Microsoft Word
1. Open the txt file in Microsoft Word
2. Format as needed (add colors, adjust spacing, etc.)
3. File → Save As → PDF
4. Save as `cv.pdf` to `frontend/public/cv.pdf`

## Option 4: Command Line (If you have wkhtmltopdf installed)
```bash
wkhtmltopdf cv.txt cv.pdf
```

## Testing
Once you've added `cv.pdf` to `frontend/public/`:
1. Go to your site
2. Click the "Download CV" button
3. The PDF should download automatically

## Notes
- The CV content is already created and includes all your achievements and certifications
- Feel free to customize the content before converting to PDF
- You can add your photo/branding to the PDF version
