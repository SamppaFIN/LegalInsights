/**
 * Compilation Test Script
 * Tests that the React app compiles without errors
 */

const { spawn } = require('child_process');

function testCompilation() {
  console.log('🔧 Testing compilation...');

  return new Promise((resolve, reject) => {
    // Run npm run build to test compilation
    const build = spawn('npm', ['run', 'build'], {
      cwd: process.cwd(),
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true
    });

    let output = '';
    let hasErrors = false;

    // Capture stdout
    build.stdout.on('data', (data) => {
      const text = data.toString();
      output += text;
      console.log('📝 Build output:', text.trim());

      if (text.includes('Compiled successfully')) {
        console.log('✅ Compilation successful!');
      }

      if (text.includes('Failed to compile') || text.includes('ERROR')) {
        hasErrors = true;
        console.log('❌ Compilation failed!');
      }
    });

    // Capture stderr
    build.stderr.on('data', (data) => {
      const text = data.toString();
      output += text;
      console.log('⚠️  Build error:', text.trim());

      if (text.includes('ERROR') || text.includes('Failed to compile')) {
        hasErrors = true;
      }
    });

    // Handle process completion
    build.on('close', (code) => {
      console.log(`🔚 Build process exited with code ${code}`);

      resolve({
        success: code === 0 && !hasErrors,
        exitCode: code,
        hasErrors,
        output
      });
    });

    // Timeout after 60 seconds
    setTimeout(() => {
      build.kill();
      reject(new Error('Build timeout after 60 seconds'));
    }, 60000);
  });
}

// Run the test
testCompilation()
  .then((result) => {
    console.log('\n🎉 Compilation Test Results:');
    console.log('✅ Success:', result.success);
    console.log('📊 Exit Code:', result.exitCode);
    console.log('❌ Has Errors:', result.hasErrors);

    if (result.hasErrors) {
      console.log('\n🚨 Compilation errors found:');
      console.log(result.output);
      process.exit(1);
    } else {
      console.log('\n🌟 Compilation successful! No errors found.');
      process.exit(0);
    }
  })
  .catch((error) => {
    console.error('\n💥 Compilation test failed:', error.message);
    process.exit(1);
  });
