@echo off
REM Quick Start Script for Traffic Intelligence System Website
REM Windows PowerShell/CMD

echo.
echo ============================================================
echo Starting Traffic Intelligence System Website...
echo ============================================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH
    echo.
    echo Please install Python 3.8 or higher from:
    echo https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

REM Start the server
echo Starting server on http://localhost:8000
echo.
python serve.py

pause
