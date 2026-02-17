require('dotenv').config({ path: './.env' });
const mongoose = require('mongoose');

console.log('\n🔍 CHECKING BACKEND & DATABASE STATUS\n');
console.log('=' .repeat(50));

// Check Environment Variables
console.log('\n📋 Environment Variables:');
console.log('  MONGODB_URI:', process.env.MONGODB_URI ? '✅ Set' : '❌ Not Set');
console.log('  JWT_SECRET:', process.env.JWT_SECRET ? '✅ Set' : '❌ Not Set');
console.log('  PORT:', process.env.PORT || '5000');
console.log('  NODE_ENV:', process.env.NODE_ENV || 'development');
console.log('  FRONTEND_URL:', process.env.FRONTEND_URL || 'http://localhost:3001');

// Test MongoDB Connection
async function testConnection() {
  console.log('\n📡 Testing MongoDB Connection...');
  
  if (!process.env.MONGODB_URI) {
    console.log('❌ MONGODB_URI is not set in backend/.env file');
    console.log('\n💡 SOLUTION:');
    console.log('   1. Make sure backend/.env file exists');
    console.log('   2. Add: MONGODB_URI=mongodb://localhost:27017/global-education-council');
    console.log('   3. OR use MongoDB Atlas connection string');
    process.exit(1);
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('✅ MongoDB Connected Successfully!');
    console.log('   Host:', mongoose.connection.host);
    console.log('   Database:', mongoose.connection.name);
    console.log('   Status:', mongoose.connection.readyState === 1 ? 'Connected' : 'Not Connected');
    
    // Check collections
    const collections = await mongoose.connection.db.listCollections().toArray();
    console.log('\n📦 Database Collections:');
    if (collections.length === 0) {
      console.log('   ⚠️  No collections found. Run seed.js to populate database.');
    } else {
      collections.forEach(col => {
        console.log(`   - ${col.name}`);
      });
    }
    
    await mongoose.connection.close();
    console.log('\n✅ All checks passed! Backend is ready.');
    
  } catch (error) {
    console.log('❌ MongoDB Connection Failed!');
    console.log('   Error:', error.message);
    
    console.log('\n💡 TROUBLESHOOTING:');
    
    if (process.env.MONGODB_URI.includes('localhost')) {
      console.log('   You are using LOCAL MongoDB:');
      console.log('   1. Install MongoDB: https://www.mongodb.com/try/download/community');
      console.log('   2. Start MongoDB service');
      console.log('   3. OR switch to MongoDB Atlas (cloud)');
    } else {
      console.log('   You are using MongoDB Atlas:');
      console.log('   1. Check your username and password');
      console.log('   2. Whitelist your IP address in Atlas');
      console.log('   3. Verify cluster is running');
      console.log('   4. URL encode special characters in password');
    }
    
    process.exit(1);
  }
}

testConnection();
