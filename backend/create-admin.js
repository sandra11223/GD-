require('dotenv').config({ path: __dirname + '/.env' });
const mongoose = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@globaledu.com' });
    if (existingAdmin) {
      console.log('⚠️ Admin user already exists');
      await mongoose.connection.close();
      return;
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10);
    const admin = await User.create({
      name: 'Admin',
      email: 'admin@globaledu.com',
      password: hashedPassword,
      role: 'admin',
      companyName: 'Global Education Council'
    });

    console.log('✅ Admin user created successfully!');
    console.log('\nAdmin credentials:');
    console.log('Email: admin@globaledu.com');
    console.log('Password: admin123');
    console.log('\n⚠️ Please change the password after first login!');

    await mongoose.connection.close();
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

createAdmin();
