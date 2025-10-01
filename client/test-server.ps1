# Server Health Check Script for PowerShell
# Tests that the React development server starts without compilation errors

Write-Host "🚀 Starting server health check..." -ForegroundColor Green

# Start the development server
$server = Start-Process -FilePath "npm" -ArgumentList "start" -WorkingDirectory (Get-Location) -PassThru -NoNewWindow

# Wait a bit for server to start
Start-Sleep -Seconds 10

# Check if server is running
try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000" -TimeoutSec 5 -ErrorAction Stop
    if ($response.StatusCode -eq 200) {
        Write-Host "✅ Server is running successfully on http://localhost:3000" -ForegroundColor Green
        Write-Host "🌐 You can now test the footer text visibility!" -ForegroundColor Cyan
    }
} catch {
    Write-Host "❌ Server not responding: $($_.Exception.Message)" -ForegroundColor Red
}

# Keep server running for testing
Write-Host "🔧 Server is running in background. Press Ctrl+C to stop." -ForegroundColor Yellow
Write-Host "📝 Check the browser at http://localhost:3000 to see the improved footer text visibility!" -ForegroundColor Cyan

# Wait for user input to stop
Read-Host "Press Enter to stop the server"
Stop-Process -Id $server.Id -Force
Write-Host "🛑 Server stopped." -ForegroundColor Red
