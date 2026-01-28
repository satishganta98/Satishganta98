# Create placeholder PNG image
$base64Png = 'iVBORw0KGgoAAAANSUhEUgAABLAAAAJ6CAYAAAAP2QZAAAAAA0lEQVQIW2NgYGD4z8DAwAAEAR0A9AxyVk4AAAAASUVORK5CYII='
$bytes = [System.Convert]::FromBase64String($base64Png)
if (-not (Test-Path 'frontend/public')) { New-Item -ItemType Directory -Path 'frontend/public' -Force | Out-Null }
[System.IO.File]::WriteAllBytes('frontend/public/og-image.png', $bytes)
Write-Host 'Placeholder image created at frontend/public/og-image.png'
