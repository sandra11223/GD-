@echo off
echo ========================================
echo   Setup Local MongoDB for Registration
echo ========================================
echo.

echo Step 1: Updating backend/.env file...
echo.

(
echo MONGODB_URI=mongodb://localhost:27017/global-education-council
echo JWT_SECRET=global_education_council_super_secret_jwt_key_2024
echo PORT=5000
echo NODE_ENV=development
echo FRONTEND_URL=http://localhost:3001
) > backend\.env

echo ✓ Updated backend/.env with local MongoDB
echo.

echo Step 2: Testing MongoDB connection...
echo.
cd backend
call npm run test-db
cd ..

echo.
echo ========================================
echo   Setup Complete!
echo ========================================
echo.
echo Next steps:
echo 1. Start backend:  cd backend ^&^& npm run dev
echo 2. Start frontend: cd frontend ^&^& npm run dev
echo 3. Test: http://localhost:3001/register
echo.
pause
