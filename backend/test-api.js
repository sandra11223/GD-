const axios = require('axios');

const testAPI = async () => {
  try {
    console.log('Testing API endpoints...\n');
    
    // Test courses
    const coursesRes = await axios.get('http://localhost:5000/api/courses');
    console.log(`✅ Courses API: ${coursesRes.data.length} courses found`);
    console.log('Sample:', coursesRes.data[0]?.title || 'No courses');
    
    // Test universities
    const universitiesRes = await axios.get('http://localhost:5000/api/universities');
    console.log(`\n✅ Universities API: ${universitiesRes.data.length} universities found`);
    console.log('Sample:', universitiesRes.data[0]?.name || 'No universities');
    
  } catch (error) {
    console.error('❌ API Error:', error.message);
    if (error.response) {
      console.error('Response:', error.response.data);
    }
  }
};

testAPI();
