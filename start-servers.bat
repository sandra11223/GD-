@echo off
echo ========================================
echo Starting Global Education Council
echo ========================================
echo.

echo Checking MongoDB...
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

echo Starting Backend Server...
start "Backend Server" cmd /k "cd backend && echo Starting backend on port 5000... && node server.js"
timeout /t 3 > nul
echo.

echo Starting Frontend Server...
start "Frontend Server" cmd /k "cd frontend && echo Starting frontend... && npm run dev"
echo.

echo ========================================
echo Servers Starting!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000 (or 3001)
echo.
echo Two new windows have opened:
echo - Backend Server (port 5000)
echo - Frontend Server (port 3000/3001)
echo.
echo Wait a few seconds for servers to start, then:
echo 1. Open http://localhost:3000/register in your browser
echo 2. Try registering a new account
echo 3. Or login with: admin@globaledu.com / Admin@123
echo.
echo Press any key to exit this window...
pause > nul
