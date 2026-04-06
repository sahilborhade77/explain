#!/usr/bin/env python3
"""
Simple HTTP Server for Traffic Intelligence System Website
Run this script to serve the website locally on http://localhost:8000
"""

import http.server
import socketserver
import os
import sys
from pathlib import Path

# Configuration
PORT = 8000
HANDLER = http.server.SimpleHTTPRequestHandler

def start_server():
    """Start the HTTP server"""
    # Change to the directory where this script is located
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    try:
        with socketserver.TCPServer(("", PORT), HANDLER) as httpd:
            print("=" * 60)
            print("🚦 Traffic Intelligence System Website")
            print("=" * 60)
            print(f"\n✓ Server started successfully!")
            print(f"\n📍 Open your browser and go to:")
            print(f"   👉 http://localhost:{PORT}")
            print(f"\n📁 Serving files from: {script_dir}")
            print(f"\n⌨️  Press CTRL+C to stop the server")
            print("\n" + "=" * 60 + "\n")
            
            httpd.serve_forever()
    
    except KeyboardInterrupt:
        print("\n\n✓ Server stopped.")
        sys.exit(0)
    except OSError as e:
        if e.errno == 48 or e.errno == 98:  # Port already in use
            print(f"\n❌ Error: Port {PORT} is already in use!")
            print(f"\nTry one of the following:")
            print(f"  1. Close the application using port {PORT}")
            print(f"  2. Use a different port by editing this script")
            print(f"  3. Wait a moment and try again")
        else:
            print(f"\n❌ Error: {e}")
        sys.exit(1)

if __name__ == "__main__":
    start_server()
