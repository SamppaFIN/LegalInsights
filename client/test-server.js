/**
 * Server Health Check Script
 * Tests that the React development server starts without compilation errors
 */

const { spawn } = require('child_process');
const http = require('http');

function testServer() {
  console.log('🚀 Starting server health check...');
  
  return new Promise((resolve, reject) => {
    // Start the development server
    const server = spawn('npm', ['start'], {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true
    });

    let serverStarted = false;
    let compilationComplete = false;
    let hasErrors = false;
    let errorOutput = '';

    // Capture stdout for compilation status
    server.stdout.on('data', (data) => {
      const output = data.toString();
      console.log('📝 Server output:', output.trim());
      
      if (output.includes('webpack compiled')) {
        compilationComplete = true;
        console.log('✅ Compilation successful!');
      }
      
      if (output.includes('Compiled with problems')) {
        hasErrors = true;
        console.log('❌ Compilation errors detected!');
      }
      
      if (output.includes('Local:') && output.includes('finnish:')) {
        console.log('📊 Cases loaded successfully');
      }
    });

    // Capture stderr for errors
    server.stderr.on('data', (data) => {
      const error = data.toString();
      errorOutput += error;
      console.log('⚠️  Server error:', error.trim());
      
      if (error.includes('ERROR') || error.includes('Failed to compile')) {
        hasErrors = true;
      }
    });

    // Check if server is running
    const checkServer = () => {
      const req = http.get('http://localhost:3000', (res) => {
        if (res.statusCode === 200) {
          serverStarted = true;
          console.log('🌐 Server is running on http://localhost:3000');
          resolve({
            success: true,
            serverStarted: true,
            compilationComplete,
            hasErrors,
            errorOutput
          });
        }
      });
      
      req.on('error', () => {
        // Server not ready yet, check again
        setTimeout(checkServer, 2000);
      });
    };

    // Start checking after 5 seconds
    setTimeout(checkServer, 5000);

    // Timeout after 30 seconds
    setTimeout(() => {
      if (!serverStarted) {
        server.kill();
        reject(new Error('Server failed to start within 30 seconds'));
      }
    }, 30000);

    // Handle process exit
    server.on('close', (code) => {
      console.log(`🔚 Server process exited with code ${code}`);
    });
  });
}

// Run the test
testServer()
  .then((result) => {
    console.log('\n🎉 Server Health Check Results:');
    console.log('✅ Server Started:', result.serverStarted);
    console.log('✅ Compilation Complete:', result.compilationComplete);
    console.log('❌ Has Errors:', result.hasErrors);
    
    if (result.hasErrors) {
      console.log('\n🚨 Errors found:');
      console.log(result.errorOutput);
      process.exit(1);
    } else {
      console.log('\n🌟 All tests passed! Server is healthy.');
      process.exit(0);
    }
  })
  .catch((error) => {
    console.error('\n💥 Server health check failed:', error.message);
    process.exit(1);
  });
