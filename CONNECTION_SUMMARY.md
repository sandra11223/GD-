# Backend-Frontend-Database Connection Summary

## 🎯 Overview

This document explains how the backend, frontend, and MongoDB Atlas database are connected in the Global Education Council application.

## 🏗️ Architecture

```
┌─────────────────┐         ┌─────────────────┐         ┌─────────────────┐
│                 │         │                 │         │                 │
│    Frontend     │────────▶│     Backend     │────────▶│  MongoDB Atlas  │
│   (Next.js)     │  HTTP   │   (Express)     │  Driver │   (Database)    │
│  Port: 3001     │◀────────│   Port: 5000    │◀────────│   Cloud-hosted  │
│                 │  JSON   │                 │  Data   │                 │
└─────────────────┘         └─────────────────┘         └─────────────────┘
```

## 📡 Connection Flow

### 1. Frontend → Backend Connection

**Configuration File:** `frontend/.env.local`
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

**API Service:** `frontend/services/api.js`
```javascript
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
```

**How it works:**
1. Frontend makes HTTP requests to `http://localhost:5000/api`
2. Axios instance automatically adds JWT token to requests
3. Backend receives requests and processes them
4. Backend sends JSON responses back to frontend

### 2. Backend → Database Connection

**Configuration File:** `backend/.env`
```env
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/global-education-council?retryWrites=true&w=majority
```

**Database Config:** `backend/config/db.js`
```javascript
const mongoose = require('mongoose');

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGODB_URI);
  console.log(`MongoDB Connected: ${conn.connection.host}`);
};
```

**How it works:**
1. Backend reads `MONGODB_URI` from environment variables
2. Mongoose connects to MongoDB Atlas using the connection string
3. Models use Mongoose to interact with database collections
4. Data is stored and retrieved from MongoDB Atlas

## 🔐 Authentication Flow

### Registration Process

```
User (Browser)
    │
    │ 1. Fill registration form
    │
    ▼
Frontend (register page)
    │
    │ 2. POST /api/auth/register
    │    { name, email, password, phone, companyName }
    │
    ▼
Backend (authController.register)
    │
    │ 3. Validate data
    │ 4. Check if user exists
    │ 5. Hash password with bcrypt
    │
    ▼
MongoDB Atlas
    │
    │ 6. Save user to 'users' collection
    │
    ▼
Backend
    │
    │ 7. Generate JWT token
    │ 8. Return user data + token
    │
    ▼
Frontend
    │
    │ 9. Store token in localStorage
    │ 10. Update AuthContext
    │ 11. Redirect to dashboard
    │
    ▼
User sees Dashboard
```

### Login Process

```
User (Browser)
    │
    │ 1. Enter email & password
    │
    ▼
Frontend (login page)
    │
    │ 2. POST /api/auth/login
    │    { email, password }
    │
    ▼
Backend (authController.login)
    │
    │ 3. Find user by email
    │
    ▼
MongoDB Atlas
    │
    │ 4. Query 'users' collection
    │
    ▼
Backend
    │
    │ 5. Compare password with bcrypt
    │ 6. Generate JWT token
    │ 7. Return user data + token
    │
    ▼
Frontend
    │
    │ 8. Store token in localStorage
    │ 9. Update AuthContext
    │ 10. Redirect to dashboard
    │
    ▼
User sees Dashboard
```

## 🛣️ API Routes

### Authentication Routes (`/api/auth`)
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (requires token)
- `PUT /api/auth/profile` - Update profile (requires token)

### Course Routes (`/api/courses`)
- `GET /api/courses` - Get all courses
- `GET /api/courses/:id` - Get single course
- `POST /api/courses` - Create course (admin only)
- `PUT /api/courses/:id` - Update course (admin only)
- `DELETE /api/courses/:id` - Delete course (admin only)

### University Routes (`/api/universities`)
- `GET /api/universities` - Get all universities
- `GET /api/universities/:id` - Get single university
- `POST /api/universities` - Create university (admin only)
- `PUT /api/universities/:id` - Update university (admin only)
- `DELETE /api/universities/:id` - Delete university (admin only)

### Service Routes (`/api/services`)
- `GET /api/services` - Get all services
- `POST /api/services` - Create service (admin only)

### Enrollment Routes (`/api/enrollments`)
- `POST /api/enrollments` - Create enrollment (requires token)
- `GET /api/enrollments` - Get user enrollments (requires token)
- `GET /api/enrollments/all` - Get all enrollments (admin only)

### Inquiry Routes (`/api/inquiries`)
- `POST /api/inquiries` - Submit inquiry
- `GET /api/inquiries` - Get all inquiries (admin only)

### Partnership Routes (`/api/partnerships`)
- `POST /api/partnerships` - Submit partnership request
- `GET /api/partnerships` - Get all partnerships (admin only)

### Newsletter Routes (`/api/newsletter`)
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

## 🔒 Security Features

### 1. Password Hashing
- Passwords are hashed using bcrypt before storing
- Salt rounds: 10
- Original password is never stored

### 2. JWT Authentication
- JSON Web Tokens for stateless authentication
- Token expires in 30 days
- Token stored in localStorage on frontend
- Token sent in Authorization header: `Bearer <token>`

### 3. Protected Routes
- Middleware checks for valid JWT token
- Unauthorized requests return 401 status
- Admin-only routes check user role

### 4. CORS Configuration
- Backend allows requests from frontend URL
- Credentials enabled for cookie support
- Prevents unauthorized cross-origin requests

## 📊 Database Schema

### Users Collection
```javascript
{
  _id: ObjectId,
  name: String,
  email: String (unique, lowercase),
  password: String (hashed),
  role: String (enum: ['admin', 'partner']),
  companyName: String,
  phone: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Courses Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  duration: String,
  level: String,
  price: Number,
  category: String,
  image: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Universities Collection
```javascript
{
  _id: ObjectId,
  name: String,
  country: String,
  city: String,
  description: String,
  ranking: Number,
  programs: [String],
  image: String,
  website: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Enrollments Collection
```javascript
{
  _id: ObjectId,
  user: ObjectId (ref: 'User'),
  course: ObjectId (ref: 'Course'),
  status: String (enum: ['pending', 'approved', 'rejected']),
  enrollmentDate: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 🔄 Data Flow Example: Creating an Enrollment

```
1. User clicks "Enroll" on a course
   ↓
2. Frontend sends POST request to /api/enrollments
   Headers: { Authorization: 'Bearer <token>' }
   Body: { courseId: '...' }
   ↓
3. Backend auth middleware verifies JWT token
   ↓
4. Backend extracts user ID from token
   ↓
5. Backend creates enrollment document
   {
     user: userId,
     course: courseId,
     status: 'pending',
     enrollmentDate: new Date()
   }
   ↓
6. Mongoose saves to MongoDB Atlas 'enrollments' collection
   ↓
7. MongoDB returns saved document
   ↓
8. Backend sends response to frontend
   Status: 201 Created
   Body: { enrollment data }
   ↓
9. Frontend shows success message
   ↓
10. Frontend updates UI to show enrollment status
```

## 🌐 Environment Variables

### Backend (.env)
```env
MONGODB_URI=mongodb+srv://...          # MongoDB Atlas connection
JWT_SECRET=secret_key                  # JWT signing key
PORT=5000                              # Server port
NODE_ENV=development                   # Environment
FRONTEND_URL=http://localhost:3001     # Frontend URL for CORS
```

### Frontend (.env.local)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api  # Backend API URL
```

## 🧪 Testing the Connection

### Test Backend Connection
```bash
cd backend
npm run test-db
```

### Test API Endpoints
```bash
# Test health check
curl http://localhost:5000

# Test registration
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.com","password":"test123","phone":"1234567890"}'

# Test login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123"}'
```

## 🚀 Deployment Considerations

### Backend Deployment
- Set `NODE_ENV=production`
- Use strong `JWT_SECRET`
- Configure CORS for production frontend URL
- Enable MongoDB Atlas IP whitelist for production server
- Use environment variables for all secrets

### Frontend Deployment
- Update `NEXT_PUBLIC_API_URL` to production backend URL
- Enable HTTPS
- Configure proper error handling
- Set up monitoring and logging

### Database
- Enable MongoDB Atlas backups
- Set up monitoring and alerts
- Configure proper indexes for performance
- Restrict network access to production IPs only

## 📝 Summary

The application uses a three-tier architecture:

1. **Frontend (Next.js)**: User interface, makes API calls
2. **Backend (Express)**: Business logic, authentication, API endpoints
3. **Database (MongoDB Atlas)**: Data persistence, cloud-hosted

All communication happens over HTTP/HTTPS with JSON payloads. Authentication uses JWT tokens, and data is stored securely in MongoDB Atlas with hashed passwords and proper validation.
