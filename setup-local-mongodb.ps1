# Setup Local MongoDB for Registration
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup Local MongoDB for Registration" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Step 1: Updating backend/.env file..." -ForegroundColor Yellow
Write-Host ""

$envContent = @"
MONGODB_URI=mongodb://localhost:27017/global-education-council
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3001
"@

Set-Content -Path "backend\.env" -Value $envContent

Write-Host "✓ Updated backend/.env with local MongoDB" -ForegroundColor Green
Write-Host ""

Write-Host "Step 2: Testing MongoDB connection..." -ForegroundColor Yellow
Write-Host ""

Set-Location backend
npm run test-db
Set-Location ..

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Setup Complete!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Start backend:  cd backend && npm run dev" -ForegroundColor White
Write-Host "2. Start frontend: cd frontend && npm run dev" -ForegroundColor White
Write-Host "3. Test: http://localhost:3001/register" -ForegroundColor White
Write-Host ""
Read-Host "Press Enter to exit"
