require('dotenv').config();
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const Course = require('./models/Course');
const University = require('./models/University');
const Service = require('./models/Service');
const Inquiry = require('./models/Inquiry');
const Enrollment = require('./models/Enrollment');
const Partnership = require('./models/Partnership');
const User = require('./models/User');
const Newsletter = require('./models/Newsletter');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

// Sample data for demonstration
const courses = [
  {
    title: "Business Management & Leadership",
    description: "Comprehensive program designed for corporate executives and managers. Learn strategic planning, team management, and organizational leadership with real-world case studies.",
    duration: "12 weeks",
    level: "Advanced",
    category: "Business",
    price: 2500,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800",
    syllabus: ["Strategic Management", "Leadership Skills", "Financial Planning", "Team Building", "Change Management"],
    isActive: true
  },
  {
    title: "Data Science & Analytics",
    description: "Master data analysis, machine learning, and statistical modeling. Perfect for organizations looking to upskill their technical teams in data-driven decision making.",
    duration: "16 weeks",
    level: "Intermediate",
    category: "Technology",
    price: 3000,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    syllabus: ["Python Programming", "Statistical Analysis", "Machine Learning", "Data Visualization", "Big Data"],
    isActive: true
  },
  {
    title: "Digital Marketing Mastery",
    description: "Complete digital marketing course covering SEO, social media, content marketing, and analytics. Ideal for marketing teams and business development professionals.",
    duration: "10 weeks",
    level: "Beginner",
    category: "Marketing",
    price: 1800,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    syllabus: ["SEO Fundamentals", "Social Media Marketing", "Content Strategy", "Email Marketing", "Analytics"],
    isActive: true
  }
];

const universities = [
  {
    name: "Harvard University",
    country: "United States",
    city: "Cambridge, MA",
    description: "One of the world's most prestigious universities, Harvard offers exceptional programs across all disciplines. Strong B2B partnerships for executive education and research collaborations.",
    ranking: "Top 1",
    website: "https://www.harvard.edu",
    logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=400",
    image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
    programs: "Business Administration, Law, Medicine, Engineering, Computer Science",
    students: "20,000+ Students",
    tuitionFee: "$50,000 - $75,000/year",
    isActive: true
  },
  {
    name: "Stanford University",
    country: "United States",
    city: "Stanford, CA",
    description: "Leading institution in technology and innovation. Excellent partnerships for corporate training programs and technology transfer initiatives.",
    ranking: "Top 2",
    website: "https://www.stanford.edu",
    logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=400",
    image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=800",
    programs: "Computer Science, Engineering, Business, Medicine, Law",
    students: "17,000+ Students",
    tuitionFee: "$55,000 - $80,000/year",
    isActive: true
  },
  {
    name: "University of Oxford",
    country: "United Kingdom",
    city: "Oxford",
    description: "Historic institution with cutting-edge research facilities. Strong B2B programs in executive education and international student exchanges.",
    ranking: "Top 3",
    website: "https://www.ox.ac.uk",
    logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=400",
    image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
    programs: "Philosophy, Politics, Economics, Medicine, Law",
    students: "24,000+ Students",
    tuitionFee: "£25,000 - £40,000/year",
    isActive: true
  },
  {
    name: "MIT (Massachusetts Institute of Technology)",
    country: "United States",
    city: "Cambridge, MA",
    description: "World leader in science and technology education. Exceptional corporate partnership programs and research collaboration opportunities.",
    ranking: "Top 4",
    website: "https://www.mit.edu",
    logo: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=400",
    image: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?w=800",
    programs: "Engineering, Computer Science, Physics, Mathematics, Business",
    students: "11,000+ Students",
    tuitionFee: "$53,000 - $77,000/year",
    isActive: true
  }
];

const services = [
  {
    title: "Overseas Education Consulting",
    description: "Comprehensive B2B consulting services for educational institutions. We provide visa support for group applications, scholarship partnership coordination, and access to our searchable database of countries and regions with B2B opportunities.",
    icon: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800",
    features: [
      "Group visa application support",
      "Scholarship partnership coordination",
      "Country/region database with B2B angles",
      "Student placement services",
      "Pre-departure orientation programs"
    ],
    isActive: true
  },
  {
    title: "Corporate Skill Development",
    description: "Tailored training programs for businesses with flexible duration, scalability options, and clear ROI metrics. Our courses are designed specifically for corporate clients looking to upskill their workforce.",
    icon: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800",
    features: [
      "Customizable program duration",
      "Scalable for teams of any size",
      "ROI-focused curriculum",
      "Industry-specific training modules",
      "Progress tracking and certification"
    ],
    isActive: true
  },
  {
    title: "University Partnership Programs",
    description: "Build strategic partnerships with leading universities worldwide. Access our database of partner institutions with detailed B2B affiliation information, bulk enrollment options, and collaborative program development.",
    icon: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800",
    features: [
      "Partner university database with filters",
      "Bulk enrollment management",
      "B2B affiliation details",
      "Joint program development",
      "Student exchange coordination"
    ],
    isActive: true
  }
];

const inquiries = [
  {
    name: "John Smith",
    email: "john.smith@techcorp.com",
    phone: "+1 (555) 123-4567",
    subject: "Course Inquiry - Technology",
    message: "We are interested in enrolling 20 employees in your Data Science & Analytics course. Please provide bulk pricing and scheduling options.",
    status: "pending"
  },
  {
    name: "Sarah Johnson",
    email: "sarah.j@edugroup.com",
    phone: "+1 (555) 234-5678",
    subject: "University Partnership Inquiry - United States",
    message: "Looking to establish partnership with top US universities for our international students. Interested in scholarship opportunities.",
    status: "in-progress"
  },
  {
    name: "Michael Chen",
    email: "m.chen@globalinstitute.edu",
    phone: "+1 (555) 345-6789",
    subject: "Service Inquiry - Corporate Skill Development",
    message: "Need customized training program for our management team. Approximately 50 participants over 3 months.",
    status: "resolved"
  },
  {
    name: "Emily Davis",
    email: "emily.davis@businessacademy.com",
    phone: "+1 (555) 456-7890",
    subject: "Course Inquiry - Business",
    message: "Interested in Business Management & Leadership course for our executive team. Need flexible scheduling.",
    status: "pending"
  }
];

const enrollments = [
  {
    studentName: "Robert Wilson",
    email: "r.wilson@company.com",
    phone: "+1 (555) 567-8901",
    courseName: "Business Management & Leadership",
    institutionName: "Global Business Institute",
    numberOfStudents: 15,
    preferredStartDate: new Date('2024-03-01'),
    message: "Enrolling our senior management team for leadership development.",
    status: "approved"
  },
  {
    studentName: "Lisa Anderson",
    email: "l.anderson@techstart.com",
    phone: "+1 (555) 678-9012",
    courseName: "Data Science & Analytics",
    institutionName: "TechStart Academy",
    numberOfStudents: 25,
    preferredStartDate: new Date('2024-03-15'),
    message: "Bulk enrollment for our data analytics team.",
    status: "approved"
  },
  {
    studentName: "David Martinez",
    email: "d.martinez@marketing.pro",
    phone: "+1 (555) 789-0123",
    courseName: "Digital Marketing Mastery",
    institutionName: "Marketing Pro Institute",
    numberOfStudents: 10,
    preferredStartDate: new Date('2024-04-01'),
    message: "Training our marketing department in digital strategies.",
    status: "pending"
  }
];

const partnerships = [
  {
    companyName: "Global Education Network",
    contactPerson: "James Thompson",
    email: "j.thompson@globaledu.net",
    phone: "+1 (555) 890-1234",
    website: "https://globaledu.net",
    partnershipType: "University Collaboration",
    description: "Seeking partnership to place 100+ students annually in top universities. We have strong network in Asia-Pacific region.",
    status: "approved"
  },
  {
    companyName: "Corporate Training Solutions",
    contactPerson: "Maria Garcia",
    email: "m.garcia@corptraining.com",
    phone: "+1 (555) 901-2345",
    website: "https://corptraining.com",
    partnershipType: "Course Provider",
    description: "Interested in becoming authorized training partner for corporate skill development programs.",
    status: "approved"
  },
  {
    companyName: "International Student Services",
    contactPerson: "Ahmed Hassan",
    email: "a.hassan@intlstudent.org",
    phone: "+1 (555) 012-3456",
    website: "https://intlstudent.org",
    partnershipType: "Student Placement",
    description: "Partnership for student placement and visa support services across multiple countries.",
    status: "pending"
  }
];

// No demo newsletter subscribers - only real subscriptions will appear
const newsletterSubscribers = [];

const seedDatabase = async () => {
  try {
    await connectDB();

    // Clear existing data
    await Course.deleteMany({});
    await University.deleteMany({});
    await Service.deleteMany({});
    await Inquiry.deleteMany({});
    await Enrollment.deleteMany({});
    await Partnership.deleteMany({});
    await User.deleteMany({});
    await Newsletter.deleteMany({});

    console.log('Existing data cleared');

    // Create demo user
    const hashedPassword = await bcrypt.hash('demo123', 10);
    const demoUser = await User.create({
      name: 'Demo User',
      email: 'demo@example.com',
      password: hashedPassword,
      role: 'partner',
      companyName: 'Demo Company'
    });
    console.log('Demo user created');

    // Insert courses, universities, services
    const insertedCourses = await Course.insertMany(courses);
    console.log('Courses seeded successfully');

    await University.insertMany(universities);
    console.log('Universities seeded successfully');

    await Service.insertMany(services);
    console.log('Services seeded successfully');

    // Add user reference to inquiries
    const inquiriesWithUser = inquiries.map(inq => ({
      ...inq,
      user: demoUser._id
    }));
    await Inquiry.insertMany(inquiriesWithUser);
    console.log('Inquiries seeded successfully');

    // Add user and course reference to enrollments
    const enrollmentsWithUser = enrollments.map((enr, index) => ({
      user: demoUser._id,
      course: insertedCourses[index % insertedCourses.length]._id,
      studentName: enr.studentName,
      email: enr.email,
      phone: enr.phone,
      education: enr.institutionName,
      status: enr.status
    }));
    await Enrollment.insertMany(enrollmentsWithUser);
    console.log('Enrollments seeded successfully');

    // Add user reference to partnerships
    const partnershipsWithUser = partnerships.map(part => ({
      ...part,
      user: demoUser._id,
      country: 'United States'
    }));
    await Partnership.insertMany(partnershipsWithUser);
    console.log('Partnerships seeded successfully');

    // Add newsletter subscribers (only if there are any)
    if (newsletterSubscribers.length > 0) {
      await Newsletter.insertMany(newsletterSubscribers);
      console.log('Newsletter subscribers seeded successfully');
    } else {
      console.log('No demo newsletter subscribers - waiting for real subscriptions');
    }

    console.log('Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
