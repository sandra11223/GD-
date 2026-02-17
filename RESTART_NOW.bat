@echo off
echo ========================================
echo RESTARTING SERVERS
echo ========================================
echo.

echo Killing existing Node processes...
taskkill /F /IM node.exe 2>nul
timeout /t 2 > nul
echo.

echo Starting Backend Server (Port 5000)...
start "Backend - Port 5000" cmd /k "cd backend && node server.js"
timeout /t 3 > nul
echo.

echo Starting Frontend Server (Port 3000)...
start "Frontend - Port 3000" cmd /k "cd frontend && npm run dev"
echo.

echo ========================================
echo SERVERS RESTARTED!
echo ========================================
echo.
echo Backend:  http://localhost:5000
echo Frontend: http://localhost:3000
echo.
echo Wait 5 seconds, then open:
echo http://localhost:3000/register
echo.
echo Try registering with a NEW email address!
echo.
pause
