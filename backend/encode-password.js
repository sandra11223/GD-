#!/usr/bin/env node

/**
 * Password URL Encoder for MongoDB Atlas Connection String
 * 
 * If your MongoDB Atlas password contains special characters,
 * you need to URL encode them before using in the connection string.
 * 
 * Usage: node encode-password.js
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🔐 MongoDB Atlas Password Encoder\n');
console.log('If your password contains special characters like @, #, $, %, &, etc.');
console.log('you need to URL encode them for the MongoDB connection string.\n');

rl.question('Enter your MongoDB Atlas password: ', (password) => {
  if (!password) {
    console.log('❌ No password provided');
    rl.close();
    return;
  }

  const encodedPassword = encodeURIComponent(password);
  
  console.log('\n📋 Results:');
  console.log('─────────────────────────────────────────────────');
  console.log('Original Password:', password);
  console.log('Encoded Password:', encodedPassword);
  console.log('─────────────────────────────────────────────────');
  
  if (password === encodedPassword) {
    console.log('\n✅ Your password doesn\'t contain special characters.');
    console.log('You can use it as-is in your connection string.\n');
  } else {
    console.log('\n⚠️  Your password contains special characters!');
    console.log('Use the ENCODED version in your .env file.\n');
    console.log('Example connection string:');
    console.log(`mongodb+srv://YOUR_USERNAME:${encodedPassword}@cluster0.xxxxx.mongodb.net/global-education-council?retryWrites=true&w=majority\n`);
  }
  
  rl.close();
});

rl.on('close', () => {
  process.exit(0);
});
