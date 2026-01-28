# Social Preview Image - Canva Quick Guide (10 Minutes)

## Step 1: Go to Canva
1. Open https://www.canva.com/
2. Click "Sign up" or "Log in"
3. Create free account (if needed)

## Step 2: Create New Design
1. Click "Create a design"
2. Click "Custom size"
3. Enter dimensions:
   - **Width:** 1200
   - **Height:** 630
4. Click "Create design"

## Step 3: Design Your Card

### Background:
1. Click "Background" (left sidebar)
2. Choose solid color: **#1a1c1b** (dark, like your site)
3. Or add a subtle gradient

### Add Your Photo:
1. Click "Uploads" → "Upload a file"
2. Upload your professional headshot (the one from your site)
3. Drag it to the left side of the card
4. Resize to fit nicely
5. Option: Add a circle frame around it

### Add Text (Right Side):

**Line 1 (Name) - Large:**
- Font size: 72pt
- Text: `SATISH KUMAR GANTA`
- Color: **#FFFFFF** (white)
- Font: Bold (Montserrat or Inter)

**Line 2 (Title) - Medium:**
- Font size: 40pt
- Text: `Cybersecurity Analyst & SOC Officer`
- Color: **#d9fb06** (lime green - your brand color!)
- Font: Semi-bold

**Line 3 (Stats) - Small:**
- Font size: 28pt
- Text: `7+ Certifications | 500+ Incidents Handled`
- Color: **#888680** (gray)

**Line 4 (Location) - Small:**
- Font size: 24pt
- Text: `📍 Dublin, Ireland`
- Color: **#888680** (gray)

**Line 5 (Contact) - Smallest:**
- Font size: 20pt
- Text: `linkedin.com/in/satishkumarganta`
- Color: **#d9fb06** (lime green)

## Step 4: Colors Reference
```
Dark Background:  #1a1c1b
White Text:       #FFFFFF
Brand Green:      #d9fb06
Gray Text:        #888680
Dark Gray:        #302f2c
```

## Step 5: Layout Tips
```
┌──────────────────────────────────────────────┐
│ [Photo]   SATISH KUMAR GANTA                 │
│ Circle    Cybersecurity Analyst & SOC        │
│ 200x200                                       │
│           7+ Certifications | 500+ Incidents │
│           📍 Dublin, Ireland                  │
│           linkedin.com/in/satishkumarganta   │
│           github.com/satishganta98           │
└──────────────────────────────────────────────┘
```

## Step 6: Download
1. Click "Download" (top right)
2. Choose format: **PNG** (best for web)
3. Quality: High
4. Click "Download"
5. Save as: **social-preview.png**

## Step 7: Add to Your Site

### Where to save:
```
frontend/public/social-preview.png
```

### Verify the path in index.html:
The file should already reference it:
```html
<meta property="og:image" content="https://satishganta98.github.io/Satishganta98/social-preview.png" />
```

## Step 8: Push to GitHub

```bash
git add frontend/public/social-preview.png
git commit -m "Add social preview image for LinkedIn sharing"
git push
```

## Step 9: Test It

### Test on LinkedIn:
1. Go to https://www.linkedin.com/post-inspector/
2. Paste your portfolio URL: `https://satishganta98.github.io/Satishganta98/`
3. See preview
4. Should show your image, title, and description!

### Test on Twitter:
1. Go to https://cards-dev.twitter.com/validator
2. Paste your URL
3. Check preview

## Pro Tips:
✅ Use contrasting colors (dark background, bright text)
✅ Your photo should be high quality
✅ Text must be readable at small sizes
✅ Use your brand colors (#d9fb06)
✅ Keep it clean, not cluttered
✅ Include contact/social handles

## Quick Template Text:

```
SATISH KUMAR GANTA
Cybersecurity Analyst & SOC Officer

7+ Certifications | 500+ Incidents Handled
Master's in Data Analytics | Threat Hunter

📍 Dublin, Ireland
💼 linkedin.com/in/satishkumarganta
🐙 github.com/satishganta98
```

## Done! ✅

Once uploaded and pushed:
1. Wait 5-10 minutes for GitHub Pages to update
2. Share your portfolio link on LinkedIn
3. It will show the beautiful preview card!

---

**Estimated time:** 8-10 minutes
**Difficulty:** Very Easy
**Impact:** HUGE for first impressions!
