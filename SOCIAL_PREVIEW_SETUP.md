# Social Preview Image Setup

Your site now has SEO and Open Graph tags configured! However, you need to add a social preview image.

## What is a Social Preview Image?

When you share your portfolio on LinkedIn, Twitter, or other platforms, this image appears as a preview card. It's crucial for making a great first impression!

## Required Specifications:

- **Size:** 1200 x 630 pixels (exact)
- **Format:** PNG or JPG
- **File name:** `social-preview.png`
- **Location:** `frontend/public/social-preview.png`
- **Content suggestions:**
  - Your name in large text
  - Job title: "Cybersecurity Analyst & SOC Officer"
  - Key stats: "7+ Certifications | 2+ Years Experience"
  - Your photo (professional headshot)
  - Background: Your site's color scheme (#1a1c1b background, #d9fb06 accents)

## Quick Options to Create:

### Option 1: Canva (Easiest - Free)
1. Go to https://www.canva.com/
2. Click "Custom size" → 1200 x 630 px
3. Use template or create from scratch
4. Add your info:
   ```
   SATISH KUMAR GANTA
   Cybersecurity Analyst & SOC Officer
   
   7+ Certifications | 500+ Incidents Handled
   Threat Hunter | Splunk Expert | Dublin, Ireland
   ```
5. Download as PNG
6. Save to `frontend/public/social-preview.png`

### Option 2: Figma (Professional)
1. Go to https://www.figma.com/
2. Create 1200x630 frame
3. Design your card
4. Export as PNG

### Option 3: Use a Generator
- https://www.bannerbear.com/
- https://www.opengraph.xyz/
- https://metatags.io/ (preview and generate)

### Option 4: Professional Designer
- Hire on Fiverr ($5-20)
- Get a polished, professional look

## Design Tips:

✅ **Do:**
- Use high contrast (dark background, bright text)
- Include your photo
- Keep text readable at small sizes
- Use your brand colors (#d9fb06 lime green)
- Show key credentials (7 certs)
- Add LinkedIn/GitHub icons with handles

❌ **Don't:**
- Use small fonts
- Overcrowd with information
- Use low-quality images
- Forget your contact info

## Example Layout:

```
┌─────────────────────────────────────────────────┐
│  [Your Photo]    SATISH KUMAR GANTA             │
│   (Circle)       Cybersecurity Analyst & SOC    │
│                                                  │
│   🛡️ 7+ Certifications                          │
│   🎯 500+ Incidents Handled                     │
│   ⚡ <1hr Avg Response Time                     │
│                                                  │
│   📍 Dublin, Ireland                            │
│   💼 linkedin.com/in/satishkumarganta           │
└─────────────────────────────────────────────────┘
```

## Testing Your Image:

After adding the image:

1. **LinkedIn Post Inspector:**
   https://www.linkedin.com/post-inspector/
   - Paste your URL
   - See how it will appear

2. **Twitter Card Validator:**
   https://cards-dev.twitter.com/validator
   - Check Twitter preview

3. **Facebook Debugger:**
   https://developers.facebook.com/tools/debug/
   - See Facebook preview

## After Creating:

1. Save as `social-preview.png` in `frontend/public/`
2. Push to GitHub:
   ```bash
   git add frontend/public/social-preview.png
   git commit -m "Add social preview image"
   git push
   ```

3. Wait 5-10 minutes for GitHub Pages to update
4. Test with LinkedIn Post Inspector
5. Share your portfolio!

## Current Status:

✅ SEO meta tags configured
✅ Open Graph tags added
✅ Twitter Card tags added
✅ JSON-LD structured data added
⏳ **Need to add:** social-preview.png image

Once you add the image, your portfolio will look amazing when shared on social media!
