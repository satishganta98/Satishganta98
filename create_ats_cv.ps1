# Create ATS-formatted CV PDF
Add-Type -AssemblyName System.Drawing

# Create a new bitmap for the PDF
$bitmap = New-Object System.Drawing.Bitmap(850, 1100)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

# Colors - Black text on white background for ATS
$whiteBackground = [System.Drawing.Color]::White
$blackText = [System.Drawing.Color]::Black
$darkGrayText = [System.Drawing.Color]::FromArgb(50, 50, 50)

# Set background to white
$graphics.Clear($whiteBackground)

# Fonts
$titleFont = New-Object System.Drawing.Font("Arial", 16, [System.Drawing.FontStyle]::Bold)
$nameFont = New-Object System.Drawing.Font("Arial", 20, [System.Drawing.FontStyle]::Bold)
$headingFont = New-Object System.Drawing.Font("Arial", 12, [System.Drawing.FontStyle]::Bold)
$bodyFont = New-Object System.Drawing.Font("Arial", 10)
$smallFont = New-Object System.Drawing.Font("Arial", 9)

# Brushes
$blackBrush = New-Object System.Drawing.SolidBrush($blackText)
$grayBrush = New-Object System.Drawing.SolidBrush($darkGrayText)

# Draw Name
$graphics.DrawString("SATISH KUMAR GANTA", $nameFont, $blackBrush, 30, 20)

# Draw Contact Info
$contactInfo = "Dublin, Ireland | +353-876-498-503 | gsk07818@gmail.com"
$graphics.DrawString($contactInfo, $bodyFont, $grayBrush, 30, 50)
$graphics.DrawString("LinkedIn: linkedin.com/in/satishkumarganta | GitHub: github.com/satishganta98", $smallFont, $grayBrush, 30, 65)

# Draw line separator
$pen = New-Object System.Drawing.Pen($darkGrayText, 1)
$graphics.DrawLine($pen, 30, 85, 800, 85)

$yPosition = 100

# Professional Summary
$graphics.DrawString("PROFESSIONAL SUMMARY", $headingFont, $blackBrush, 30, $yPosition)
$yPosition += 20
$summary = "Results-driven Cybersecurity Analyst with 2+ years SOC experience. Expert in SIEM tools (Splunk), " + `
            "threat detection, and incident response. Hold 7 industry certifications including CompTIA Security+, " + `
            "CySA+, and Splunk CCDA. Reduced threats by 15%, handled 500+ incidents with <1hr average response time."
$graphics.DrawString($summary, $bodyFont, $blackBrush, 30, $yPosition, New-Object System.Drawing.SizeF(750, 60))
$yPosition += 80

# Professional Experience
$graphics.DrawString("PROFESSIONAL EXPERIENCE", $headingFont, $blackBrush, 30, $yPosition)
$yPosition += 20
$graphics.DrawString("Response & SOC Officer, Accenture (June 2025 - Present)", $bodyFont, $blackBrush, 30, $yPosition)
$yPosition += 15
$graphics.DrawString("Dublin, Ireland", $smallFont, $grayBrush, 30, $yPosition)
$yPosition += 15
$experience1 = "* Managed security alerts, reducing threat impact by 15% monthly" + "`n" + `
               "* Used Splunk Enterprise to identify and escalate 10 critical incidents weekly" + "`n" + `
               "* Strengthened security protocols, enhancing defense by 20%" + "`n" + `
               "* Improved security awareness through clear incident reporting by 10%"
$graphics.DrawString($experience1, $smallFont, $blackBrush, 30, $yPosition, New-Object System.Drawing.SizeF(750, 60))
$yPosition += 70

# Save the bitmap
$bitmap.Save("frontend/public/cv-ats.pdf")
$bitmap.Dispose()
$graphics.Dispose()

Write-Host "ATS-formatted PDF created at frontend/public/cv-ats.pdf"
