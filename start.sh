#!/bin/bash

# Quick Start Script for Traffic Intelligence System Website
# Linux/macOS

echo ""
echo "============================================================"
echo "Starting Traffic Intelligence System Website..."
echo "============================================================"
echo ""

# Check if Python is installed
if ! command -v python3 &> /dev/null; then
    echo "ERROR: Python 3 is not installed"
    echo ""
    echo "Please install Python 3.8 or higher using:"
    echo "  macOS:  brew install python3"
    echo "  Linux:  sudo apt install python3 python3-pip"
    echo ""
    exit 1
fi

# Start the server
echo "Starting server on http://localhost:8000"
echo ""

python3 serve.py
