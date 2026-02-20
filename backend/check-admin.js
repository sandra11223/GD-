require('dotenv').config({ path: __dirname + '/.env' });
const mongoose = require('mongoose');
const User = require('./models/User');

const checkAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    const users = await User.find();
    console.log(`👤 Total users: ${users.length}\n`);
    
    users.forEach(user => {
      console.log(`Email: ${user.email}`);
      console.log(`Role: ${user.role}`);
      console.log(`Name: ${user.name}`);
      console.log('---');
    });

    const adminUsers = users.filter(u => u.role === 'admin');
    console.log(`\n👑 Admin users: ${adminUsers.length}`);

    await mongoose.connection.close();
    console.log('\n✅ Check complete');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

checkAdmin();
