# Google Analytics Setup Guide

Your site is ready for Google Analytics! Follow these steps to start tracking visitors:

## Step 1: Create Google Analytics Account

1. Go to https://analytics.google.com/
2. Click "Start measuring"
3. Enter Account name: "Satish Portfolio" (or any name you prefer)
4. Click "Next"

## Step 2: Set Up Property

1. Property name: "Portfolio Website"
2. Reporting time zone: Select your timezone (e.g., "Ireland" or "Europe/Dublin")
3. Currency: EUR (Euro)
4. Click "Next"

## Step 3: Business Information

1. Industry category: "Technology" or "Professional Services"
2. Business size: Select appropriate size
3. How you plan to use Analytics: Check relevant boxes
4. Click "Create"
5. Accept Terms of Service

## Step 4: Set Up Data Stream

1. Choose platform: **Web**
2. Website URL: `https://satishganta98.github.io`
3. Stream name: "Portfolio Site"
4. Click "Create stream"

## Step 5: Get Your Measurement ID

1. You'll see a **Measurement ID** that looks like: `G-XXXXXXXXXX`
2. **Copy this ID** (it starts with "G-")

## Step 6: Update Your Site

1. Open: `frontend/public/index.html`
2. Find the line with: `G-XXXXXXXXXX` (appears twice)
3. Replace **both** occurrences with your actual Measurement ID
4. Save the file

Example:
```html
<!-- Before -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
gtag('config', 'G-XXXXXXXXXX');

<!-- After (with your ID) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123DEF4"></script>
gtag('config', 'G-ABC123DEF4');
```

## Step 7: Commit and Push

```bash
git add frontend/public/index.html
git commit -m "Add Google Analytics tracking ID"
git push
```

## Step 8: Verify It's Working

1. Go to Google Analytics dashboard
2. Click "Reports" → "Realtime"
3. Visit your website: https://satishganta98.github.io/Satishganta98/
4. You should see yourself as a visitor in real-time!

## What You Can Track

Once set up, you'll be able to see:

✅ **Number of visitors** (daily, weekly, monthly)
✅ **Page views** (which pages are most popular)
✅ **Visitor location** (countries, cities)
✅ **Device types** (mobile, desktop, tablet)
✅ **Traffic sources** (direct, LinkedIn, GitHub, search engines)
✅ **Time spent on site**
✅ **Real-time active users**
✅ **User demographics** (age, gender, interests)
✅ **Bounce rate** (how engaging your site is)
✅ **Most viewed sections** (About, Skills, Certifications, etc.)

## Viewing Your Analytics

### Daily Check:
1. Go to https://analytics.google.com/
2. Select your property
3. View dashboard for quick overview

### Popular Reports:
- **Realtime Overview**: See who's on your site RIGHT NOW
- **Acquisition Overview**: Where visitors come from
- **Engagement**: What content they interact with
- **Demographics**: Age, gender, interests of visitors

## Pro Tips

1. **Check weekly** to track trends
2. **Share your portfolio link** on LinkedIn to see traffic spike
3. **Monitor which sections** get the most attention
4. **Track conversions** if people contact you via the form
5. **Export reports** for job applications (show data-driven approach!)

## Privacy Note

Google Analytics is GDPR compliant and anonymous. If you want more privacy-focused analytics, consider:
- Plausible Analytics
- Fathom Analytics
- Simple Analytics

These are paid but don't use cookies and are more privacy-friendly.

## Troubleshooting

**Not seeing data?**
- Wait 24-48 hours for initial data collection
- Check that you replaced BOTH instances of G-XXXXXXXXXX
- Verify your site is published and accessible
- Check browser console for errors

**Need help?**
Google Analytics has excellent documentation: https://support.google.com/analytics

---

**Ready to start?** Follow the steps above and you'll be tracking your portfolio views in minutes!
