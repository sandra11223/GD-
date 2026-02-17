#!/usr/bin/env node

/**
 * Interactive MongoDB Setup Script
 * This script helps you configure MongoDB for the Global Education Council application
 */

const readline = require('readline');
const fs = require('fs');
const path = require('path');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n╔════════════════════════════════════════════════════════════╗');
console.log('║   Global Education Council - MongoDB Setup Wizard         ║');
console.log('╚════════════════════════════════════════════════════════════╝\n');

console.log('This wizard will help you configure MongoDB for your application.\n');

function question(query) {
  return new Promise(resolve => rl.question(query, resolve));
}

async function main() {
  console.log('Choose your MongoDB setup:\n');
  console.log('1. MongoDB Atlas (Free cloud database - Recommended)');
  console.log('2. Local MongoDB (If you have MongoDB installed locally)');
  console.log('3. Exit\n');

  const choice = await question('Enter your choice (1, 2, or 3): ');

  if (choice === '3') {
    console.log('\n👋 Setup cancelled. Run this script again when ready.\n');
    rl.close();
    return;
  }

  if (choice === '1') {
    await setupAtlas();
  } else if (choice === '2') {
    await setupLocal();
  } else {
    console.log('\n❌ Invalid choice. Please run the script again.\n');
    rl.close();
  }
}

async function setupAtlas() {
  console.log('\n📡 MongoDB Atlas Setup\n');
  console.log('First, you need to create a MongoDB Atlas account and cluster:');
  console.log('1. Go to: https://www.mongodb.com/cloud/atlas');
  console.log('2. Sign up and create a FREE M0 cluster');
  console.log('3. Create a database user and save the password');
  console.log('4. Whitelist your IP address (0.0.0.0/0 for development)');
  console.log('5. Get your connection string\n');

  const ready = await question('Have you completed these steps? (yes/no): ');

  if (ready.toLowerCase() !== 'yes' && ready.toLowerCase() !== 'y') {
    console.log('\n📚 Please follow the detailed guide in MONGODB_ATLAS_SETUP.md');
    console.log('Then run this script again.\n');
    rl.close();
    return;
  }

  console.log('\nGreat! Now let\'s configure your connection string.\n');

  const connectionString = await question('Paste your MongoDB Atlas connection string: ');

  if (!connectionString || !connectionString.includes('mongodb+srv://')) {
    console.log('\n❌ Invalid connection string. It should start with mongodb+srv://');
    console.log('Please run the script again with the correct connection string.\n');
    rl.close();
    return;
  }

  // Check if connection string has database name
  let finalConnectionString = connectionString.trim();
  
  if (!finalConnectionString.includes('/global-education-council?')) {
    // Add database name
    finalConnectionString = finalConnectionString.replace('/?', '/global-education-council?');
    finalConnectionString = finalConnectionString.replace('?', '/global-education-council?');
  }

  // Create .env file
  const envContent = `# MongoDB Atlas Configuration
MONGODB_URI=${finalConnectionString}

# JWT Secret Key
JWT_SECRET=global_education_council_super_secret_jwt_key_2024

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:3001
`;

  const envPath = path.join(__dirname, 'backend', '.env');
  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Configuration saved to backend/.env\n');
  console.log('Testing connection...\n');

  // Test connection
  const { spawn } = require('child_process');
  const testProcess = spawn('npm', ['run', 'test-db'], {
    cwd: path.join(__dirname, 'backend'),
    shell: true
  });

  testProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  testProcess.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  testProcess.on('close', (code) => {
    if (code === 0) {
      console.log('\n🎉 Success! MongoDB is connected!\n');
      console.log('Next steps:');
      console.log('1. Start backend: cd backend && npm run dev');
      console.log('2. Start frontend: cd frontend && npm run dev');
      console.log('3. Open browser: http://localhost:3001/register\n');
    } else {
      console.log('\n❌ Connection failed. Please check:');
      console.log('1. Your connection string is correct');
      console.log('2. Your password is correct (check for special characters)');
      console.log('3. Your IP address is whitelisted in MongoDB Atlas');
      console.log('4. Your cluster is running\n');
      console.log('See MONGODB_ATLAS_SETUP.md for detailed troubleshooting.\n');
    }
    rl.close();
  });
}

async function setupLocal() {
  console.log('\n💻 Local MongoDB Setup\n');
  console.log('This option requires MongoDB to be installed and running on your computer.\n');

  const hasMongoDb = await question('Do you have MongoDB installed locally? (yes/no): ');

  if (hasMongoDb.toLowerCase() !== 'yes' && hasMongoDb.toLowerCase() !== 'y') {
    console.log('\n📥 You need to install MongoDB first:');
    console.log('Windows: https://www.mongodb.com/try/download/community');
    console.log('Mac: brew install mongodb-community');
    console.log('Linux: sudo apt-get install mongodb\n');
    console.log('After installation, run this script again.\n');
    rl.close();
    return;
  }

  // Create .env file for local MongoDB
  const envContent = `# Local MongoDB Configuration
MONGODB_URI=mongodb://localhost:27017/global-education-council

# JWT Secret Key
JWT_SECRET=global_education_council_super_secret_jwt_key_2024

# Server Configuration
PORT=5000
NODE_ENV=development

# Frontend URL
FRONTEND_URL=http://localhost:3001
`;

  const envPath = path.join(__dirname, 'backend', '.env');
  fs.writeFileSync(envPath, envContent);

  console.log('\n✅ Configuration saved to backend/.env\n');
  console.log('Testing connection...\n');

  // Test connection
  const { spawn } = require('child_process');
  const testProcess = spawn('npm', ['run', 'test-db'], {
    cwd: path.join(__dirname, 'backend'),
    shell: true
  });

  testProcess.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  testProcess.stderr.on('data', (data) => {
    console.log(data.toString());
  });

  testProcess.on('close', (code) => {
    if (code === 0) {
      console.log('\n🎉 Success! MongoDB is connected!\n');
      console.log('Next steps:');
      console.log('1. Start backend: cd backend && npm run dev');
      console.log('2. Start frontend: cd frontend && npm run dev');
      console.log('3. Open browser: http://localhost:3001/register\n');
    } else {
      console.log('\n❌ Connection failed. Please check:');
      console.log('1. MongoDB is installed');
      console.log('2. MongoDB service is running');
      console.log('3. MongoDB is accessible on localhost:27017\n');
      console.log('To start MongoDB:');
      console.log('Windows: MongoDB should start automatically');
      console.log('Mac: brew services start mongodb-community');
      console.log('Linux: sudo systemctl start mongodb\n');
    }
    rl.close();
  });
}

main().catch(err => {
  console.error('\n❌ Error:', err.message);
  rl.close();
});
