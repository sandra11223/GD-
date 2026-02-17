@echo off
echo ========================================
echo Testing Authentication System
echo ========================================
echo.

echo Step 1: Checking if MongoDB is running...
mongosh --eval "db.version()" > nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] MongoDB is not running!
    echo Please start MongoDB first.
    echo.
    pause
    exit /b 1
)
echo [OK] MongoDB is running
echo.

echo Step 2: Checking Backend Server...
curl -s http://localhost:5000 > nul 2>&1
if %errorlevel% neq 0 (
    echo [WARNING] Backend server is not responding on port 5000
    echo Please start the backend server:
    echo   cd backend
    echo   node server.js
    echo.
) else (
    echo [OK] Backend server is running
)
echo.

echo Step 3: Checking Frontend Server...
curl -s http://localhost:3000 > nul 2>&1
if %errorlevel% equ 0 (
    echo [OK] Frontend server is running on port 3000
    echo Open: http://localhost:3000/register
) else (
    curl -s http://localhost:3001 > nul 2>&1
    if %errorlevel% equ 0 (
        echo [OK] Frontend server is running on port 3001
        echo Open: http://localhost:3001/register
    ) else (
        echo [WARNING] Frontend server is not responding
        echo Please start the frontend server:
        echo   cd frontend
        echo   npm run dev
    )
)
echo.

echo Step 4: Testing Backend API...
echo Testing registration endpoint...
curl -X POST http://localhost:5000/api/auth/register ^
  -H "Content-Type: application/json" ^
  -d "{\"name\":\"Test User\",\"email\":\"testuser@example.com\",\"password\":\"test123\",\"phone\":\"+1234567890\"}" ^
  2>nul
echo.
echo.

echo ========================================
echo Test Complete!
echo ========================================
echo.
echo Next Steps:
echo 1. If backend is not running: cd backend ^&^& node server.js
echo 2. If frontend is not running: cd frontend ^&^& npm run dev
echo 3. Open browser to http://localhost:3000/register or http://localhost:3001/register
echo 4. Try registering with the form
echo.
pause
