# Quick Start Guide - Global Education Council

## Prerequisites Check

Before starting, ensure you have:
- ✅ Node.js installed (v14 or higher)
- ✅ MongoDB running locally OR MongoDB Atlas account
- ✅ npm or yarn package manager

## Step 1: Install Dependencies

```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

## Step 2: Configure MongoDB

Your `.env` file is already configured for **local MongoDB**:
```
MONGODB_URI=mongodb://localhost:27017/global-education-council
```

### Option A: Use Local MongoDB
Make sure MongoDB is running on your machine:
- **Windows**: Check Services for "MongoDB" service
- **Mac**: `brew services start mongodb-community`
- **Linux**: `sudo systemctl start mongodb`

### Option B: Use MongoDB Atlas (Cloud)
1. Create free account at https://www.mongodb.com/cloud/atlas
2. Create a cluster and get connection string
3. Update `backend/.env` with your Atlas connection string:
   ```
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/global-education-council?retryWrites=true&w=majority
   ```

See `MONGODB_SETUP_GUIDE.md` for detailed instructions.

## Step 3: Test MongoDB Connection

```bash
cd backend
node test-connection.js
```

You should see:
```
✅ SUCCESS! MongoDB Connected
📍 Host: localhost (or your Atlas cluster)
📁 Database: global-education-council
```

## Step 4: Seed Initial Data

```bash
cd backend
node seed.js
```

This creates:
- Admin user: `admin@globaleducation.com` / `admin123`
- Sample courses, universities, and services

## Step 5: Start Backend Server

```bash
cd backend
npm start
```

Server will run on: http://localhost:5000

You should see:
```
✅ MongoDB Connected: localhost
✅ Database Name: global-education-council
🚀 Server running on port 5000
```

## Step 6: Start Frontend

Open a new terminal:

```bash
cd frontend
npm run dev
```

Frontend will run on: http://localhost:3000

## Step 7: Access the Application

### Public Pages
- Home: http://localhost:3000
- About: http://localhost:3000/about
- Services: http://localhost:3000/services
- Courses: http://localhost:3000/courses
- Universities: http://localhost:3000/universities
- Contact: http://localhost:3000/contact
- Blog: http://localhost:3000/blog

### Authentication
- Login: http://localhost:3000/login
- Register: http://localhost:3000/register

### Admin Dashboard (after login)
- Dashboard: http://localhost:3000/dashboard
- Browse Courses: http://localhost:3000/dashboard/browse-courses
- My Enrollments: http://localhost:3000/dashboard/my-enrollments

### Admin Credentials
```
Email: admin@globaleducation.com
Password: admin123
```

## API Endpoints

Backend API is available at: http://localhost:5000/api

### Test Endpoints:
- GET http://localhost:5000/api/courses - List all courses
- GET http://localhost:5000/api/universities - List all universities
- GET http://localhost:5000/api/services - List all services

## Troubleshooting

### Backend won't start
1. Check MongoDB is running: `node test-connection.js`
2. Check port 5000 is available
3. Verify `.env` file exists in backend folder

### Frontend won't start
1. Check `frontend/.env.local` exists
2. Verify backend is running on port 5000
3. Clear cache: `rm -rf .next` then `npm run dev`

### Can't login
1. Make sure you ran `node seed.js`
2. Try registering a new account
3. Check backend console for errors

### Images not loading
- Images use external URLs (Pexels, Unsplash)
- Check your internet connection
- Some images may be blocked by firewall/proxy

## Development Commands

### Backend
```bash
npm start          # Start server
npm run dev        # Start with nodemon (auto-restart)
node seed.js       # Seed database
node test-connection.js  # Test MongoDB connection
```

### Frontend
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm start          # Start production server
npm run lint       # Run linter
```

## Project Structure

```
global-education-council/
├── backend/
│   ├── config/          # Database configuration
│   ├── controllers/     # Route controllers
│   ├── middleware/      # Auth & error handling
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── .env            # Environment variables
│   ├── server.js       # Express server
│   └── seed.js         # Database seeding
│
├── frontend/
│   ├── app/            # Next.js pages
│   ├── components/     # React components
│   ├── services/       # API services
│   ├── .env.local      # Frontend environment
│   └── package.json
│
└── README.md
```

## Next Steps

1. ✅ Explore the application
2. ✅ Customize content and styling
3. ✅ Add your own courses and universities
4. ✅ Configure email notifications
5. ✅ Deploy to production

## Support

For detailed MongoDB setup, see: `MONGODB_SETUP_GUIDE.md`

For design documentation, see the various `.md` files in the root directory.

---

**You're all set! 🚀**

The application is fully configured and ready to use. Both local MongoDB and MongoDB Atlas are supported.
