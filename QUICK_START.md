# Quick Start Guide - Global Education Council

## Prerequisites
- Node.js (v16 or higher)
- MongoDB Atlas account (free tier available)
- Git

## 🚀 Quick Setup (5 minutes)

### Step 1: MongoDB Atlas Setup (2 minutes)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) and sign up/login
2. Create a **FREE** cluster (M0 Sandbox)
3. Create a database user:
   - Username: `admin` (or your choice)
   - Password: Click "Autogenerate Secure Password" and **SAVE IT**
4. Add IP Address: Click "Allow Access from Anywhere" (for development)
5. Get connection string:
   - Click "Connect" → "Connect your application"
   - Copy the connection string

### Step 2: Backend Setup (2 minutes)

```bash
# Navigate to backend folder
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the content below and replace with your MongoDB Atlas credentials
```

Create `backend/.env` file:
```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/global-education-council?retryWrites=true&w=majority
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
PORT=5000
NODE_ENV=development
```

**Replace:**
- `YOUR_USERNAME` with your MongoDB Atlas username
- `YOUR_PASSWORD` with your MongoDB Atlas password
- `cluster0.xxxxx.mongodb.net` with your actual cluster URL

**Test the connection:**
```bash
npm run test-db
```

If successful, you'll see: ✅ SUCCESS! MongoDB Connected

**Start the backend:**
```bash
npm run dev
```

You should see:
```
✅ Server running on port 5000
✅ MongoDB Connected: cluster0-xxxxx.mongodb.net
```

### Step 3: Frontend Setup (1 minute)

Open a **NEW terminal** window:

```bash
# Navigate to frontend folder
cd frontend

# Install dependencies
npm install

# Start the frontend
npm run dev
```

The frontend will start on `http://localhost:3001`

### Step 4: Test Registration

1. Open browser to `http://localhost:3001`
2. Click "Register" or go to `http://localhost:3001/register`
3. Fill in the form:
   - Full Name: Test User
   - Email: test@example.com
   - Company Name: Test Company
   - Phone: +1 234 567 8900
   - Password: password123
   - Confirm Password: password123
4. Click "Create Account"
5. You should be redirected to the dashboard ✅

## 🎯 Seed Sample Data (Optional)

To add sample courses, universities, and services:

```bash
cd backend
npm run seed
```

## 🔍 Verify Everything is Working

### Check Backend:
- Open `http://localhost:5000` in browser
- You should see: `{"message":"Global Education Council API","status":"running"}`

### Check Frontend:
- Open `http://localhost:3001`
- You should see the home page with dark theme and emerald colors

### Check Database:
1. Go to MongoDB Atlas dashboard
2. Click "Browse Collections"
3. You should see `global-education-council` database
4. Click on `users` collection to see your registered user

## 📁 Project Structure

```
global-education-council/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Auth & error handling
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── .env            # Environment variables (create this)
│   ├── server.js       # Express server
│   └── package.json
│
├── frontend/
│   ├── app/            # Next.js pages
│   ├── components/     # React components
│   ├── context/        # Auth context
│   ├── services/       # API service
│   ├── .env.local      # Frontend env (already configured)
│   └── package.json
│
└── README.md
```

## 🐛 Troubleshooting

### "MongoServerError: bad auth"
- Check username and password in `.env`
- Make sure password doesn't have special characters (or URL encode them)

### "Could not connect to MongoDB"
- Check Network Access in MongoDB Atlas
- Make sure "Allow Access from Anywhere" is enabled
- Verify connection string format

### "Registration failed" or "Network Error"
- Make sure backend is running on port 5000
- Check backend terminal for errors
- Open browser console (F12) for detailed errors

### Port already in use
```bash
# Kill process on port 5000 (backend)
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Kill process on port 3001 (frontend)
netstat -ano | findstr :3001
taskkill /PID <PID> /F
```

## 🔐 Default Admin Account

After seeding, you can login with:
- Email: `admin@globaleducation.com`
- Password: `admin123`

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile (protected)
- `PUT /api/auth/profile` - Update profile (protected)

### Courses
- `GET /api/courses` - Get all courses
- `POST /api/courses` - Create course (admin only)
- `PUT /api/courses/:id` - Update course (admin only)
- `DELETE /api/courses/:id` - Delete course (admin only)

### Universities
- `GET /api/universities` - Get all universities
- `POST /api/universities` - Create university (admin only)

### Services
- `GET /api/services` - Get all services
- `POST /api/services` - Create service (admin only)

### Enrollments
- `POST /api/enrollments` - Create enrollment (protected)
- `GET /api/enrollments` - Get user enrollments (protected)

### Inquiries
- `POST /api/inquiries` - Submit inquiry
- `GET /api/inquiries` - Get all inquiries (admin only)

### Partnerships
- `POST /api/partnerships` - Submit partnership request
- `GET /api/partnerships` - Get all partnerships (admin only)

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter

## 🚀 Next Steps

1. ✅ Complete MongoDB Atlas setup
2. ✅ Test registration and login
3. ✅ Seed sample data
4. 🎨 Customize the design
5. 📝 Add more features
6. 🌐 Deploy to production

## 📞 Need Help?

Check the detailed guides:
- `MONGODB_ATLAS_SETUP.md` - Detailed MongoDB Atlas setup
- `README.md` - Full project documentation

## 🎉 You're All Set!

Your application is now running with:
- ✅ Backend API on `http://localhost:5000`
- ✅ Frontend on `http://localhost:3001`
- ✅ MongoDB Atlas database connected
- ✅ Authentication working
- ✅ Dark theme with emerald colors

Happy coding! 🚀
