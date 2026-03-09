@echo off
echo Starting Backend Server...
start "Backend" cmd /k "cd /d C:\Users\acer\Desktop\frontend\backend && node server.js"

timeout /t 2 /nobreak >nul

echo Starting Frontend...
start "Frontend" cmd /k "cd /d C:\Users\acer\Desktop\frontend && npm start"

echo Both servers are starting. Check the opened terminal windows.
