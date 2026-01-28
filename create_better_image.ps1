# Create a proper PNG image using .NET
Add-Type -AssemblyName System.Drawing

# Create bitmap: 1200x630 pixels
$bitmap = New-Object System.Drawing.Bitmap(1200, 630)

# Create graphics context
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)

# Set background color (dark: #1a1c1b)
$backgroundColor = [System.Drawing.Color]::FromArgb(26, 28, 27)
$graphics.Clear($backgroundColor)

# Define colors
$limeGreen = [System.Drawing.Color]::FromArgb(217, 251, 6)
$white = [System.Drawing.Color]::White

# Define fonts
$titleFont = New-Object System.Drawing.Font("Arial", 80, [System.Drawing.FontStyle]::Bold)
$subtitleFont = New-Object System.Drawing.Font("Arial", 45)
$textFont = New-Object System.Drawing.Font("Arial", 35)

# Create brushes
$greenBrush = New-Object System.Drawing.SolidBrush($limeGreen)
$whiteBrush = New-Object System.Drawing.SolidBrush($white)

# Draw text
$graphics.DrawString("Satish Ganta", $titleFont, $greenBrush, 60, 80)
$graphics.DrawString("Cybersecurity Specialist", $subtitleFont, $whiteBrush, 60, 200)
$graphics.DrawString("7 Certifications  •  500+ Incidents Handled", $textFont, $greenBrush, 60, 300)
$graphics.DrawString("2+ Years Experience  •  <1hr Response Time", $textFont, $whiteBrush, 60, 390)

# Dispose of resources
$graphics.Dispose()
$titleFont.Dispose()
$subtitleFont.Dispose()
$textFont.Dispose()
$greenBrush.Dispose()
$whiteBrush.Dispose()

# Save the image
$bitmap.Save("frontend/public/og-image.png")
$bitmap.Dispose()

Write-Host "Social preview image created successfully!"
Write-Host "File size: $((Get-Item 'frontend/public/og-image.png').Length) bytes"
