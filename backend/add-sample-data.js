require('dotenv').config();
const mongoose = require('mongoose');
const Course = require('./models/Course');
const University = require('./models/University');

const addSampleData = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ Connected to MongoDB\n');

    // Clear existing data
    await Course.deleteMany({});
    await University.deleteMany({});
    console.log('🗑️ Cleared existing data\n');

    // Add sample courses
    const courses = await Course.insertMany([
      {
        title: 'Business Administration',
        description: 'Comprehensive business management program covering leadership, strategy, finance, and operations for corporate executives.',
        duration: '12 weeks',
        level: 'Advanced',
        price: 2999,
        category: 'Business',
        instructor: 'Harvard Business School',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
        isActive: true
      },
      {
        title: 'Computer Science & AI',
        description: 'Advanced computer science program focusing on artificial intelligence, machine learning, and software engineering.',
        duration: '16 weeks',
        level: 'Advanced',
        price: 3499,
        category: 'Technology',
        instructor: 'Stanford Engineering',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800',
        isActive: true
      },
      {
        title: 'International Law',
        description: 'Comprehensive legal studies program covering international law, corporate law, and legal frameworks for global business.',
        duration: '14 weeks',
        level: 'Advanced',
        price: 3299,
        category: 'Law',
        instructor: 'Oxford Law Faculty',
        image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800',
        isActive: true
      }
    ]);
    console.log(`✅ Added ${courses.length} courses\n`);

    // Add sample universities
    const universities = await University.insertMany([
      {
        name: 'Harvard University',
        country: 'United States',
        city: 'Cambridge, MA',
        ranking: '#1 Global',
        programs: '350+ Programs',
        students: '23,000+ Students',
        description: 'One of the world\'s most prestigious universities, Harvard offers exceptional programs across all disciplines. Strong B2B partnerships for executive education and research collaborations.',
        image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'https://www.harvard.edu',
        tuitionFee: '$50,000 - $75,000/year',
        isActive: true
      },
      {
        name: 'Stanford University',
        country: 'United States',
        city: 'Stanford, CA',
        ranking: '#2 Global',
        programs: '300+ Programs',
        students: '17,000+ Students',
        description: 'Leading institution in technology and innovation. Excellent partnerships for corporate training programs and technology transfer initiatives.',
        image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'https://www.stanford.edu',
        tuitionFee: '$55,000 - $80,000/year',
        isActive: true
      },
      {
        name: 'University of Oxford',
        country: 'United Kingdom',
        city: 'Oxford',
        ranking: '#3 Global',
        programs: '400+ Programs',
        students: '24,000+ Students',
        description: 'Historic institution with cutting-edge research facilities. Strong B2B programs in executive education and international student exchanges.',
        image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800',
        website: 'https://www.ox.ac.uk',
        tuitionFee: '£25,000 - £40,000/year',
        isActive: true
      }
    ]);
    console.log(`✅ Added ${universities.length} universities\n`);

    await mongoose.connection.close();
    console.log('✅ Sample data added successfully!');
  } catch (error) {
    console.error('❌ Error:', error.message);
    process.exit(1);
  }
};

addSampleData();
