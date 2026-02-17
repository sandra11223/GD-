# Authentication Fix Guide

## What Was Fixed

### 1. Enhanced Error Handling
- Added detailed error messages to registration and login pages
- Errors now display in a styled alert box with clear messaging
- Shows specific backend error messages or connection issues

### 2. Improved User Feedback
- Error messages clear when user starts typing
- Better validation messages for password requirements
- Network error detection with helpful hints

## How to Test Registration & Login

### Step 1: Start Backend Server
```bash
cd backend
npm install
node server.js
```

You should see:
```
✅ MongoDB Connected: localhost:27017
✅ Server running on port 5000
✅ Environment: development
✅ API URL: http://localhost:5000/api
```

### Step 2: Start Frontend Server
```bash
cd frontend
npm install
npm run dev
```

Frontend should start on: http://localhost:3000 or http://localhost:3001

### Step 3: Test Registration
1. Go to http://localhost:3000/register (or 3001)
2. Fill in the form:
   - Full Name: Test User
   - Email: test@example.com
   - Company Name: Test Company (optional)
   - Phone: +1234567890
   - Password: test123 (min 6 characters)
   - Confirm Password: test123
3. Click "Create Account"
4. Should redirect to /dashboard with success toast

### Step 4: Test Login
1. Go to http://localhost:3000/login
2. Use credentials:
   - Email: test@example.com
   - Password: test123
3. Click "Sign In"
4. Should redirect to /dashboard

### Step 5: Test Admin Login
Default admin account:
- Email: admin@globaledu.com
- Password: Admin@123

## Common Issues & Solutions

### Issue 1: "Registration failed. Please check if the backend server is running"
**Solution:**
- Make sure backend server is running on port 5000
- Check: http://localhost:5000 should show API status
- Verify MongoDB is running: `mongosh` or check MongoDB Compass

### Issue 2: "User with this email already exists"
**Solution:**
- Email is already registered
- Try a different email or login with existing credentials
- Or delete the user from MongoDB:
  ```bash
  mongosh
  use global-education-council
  db.users.deleteOne({ email: "test@example.com" })
  ```

### Issue 3: "Invalid email or password"
**Solution:**
- Check email spelling (case-insensitive)
- Verify password is correct
- Make sure you registered first

### Issue 4: CORS Error in Browser Console
**Solution:**
- Backend CORS is configured for http://localhost:3001
- If frontend runs on different port, update backend/.env:
  ```
  FRONTEND_URL=http://localhost:3000
  ```
- Restart backend server

### Issue 5: Network Error / Cannot Connect
**Solution:**
- Verify API URL in frontend/.env.local:
  ```
  NEXT_PUBLIC_API_URL=http://localhost:5000/api
  ```
- Check both servers are running
- Try accessing http://localhost:5000/api/auth/login in browser

## Verification Checklist

- [ ] MongoDB is running (check with `mongosh`)
- [ ] Backend server is running on port 5000
- [ ] Frontend server is running on port 3000 or 3001
- [ ] Backend .env has correct MONGODB_URI and JWT_SECRET
- [ ] Frontend .env.local has correct NEXT_PUBLIC_API_URL
- [ ] No CORS errors in browser console
- [ ] Can access http://localhost:5000 (shows API status)

## Testing Commands

### Check Backend Status
```bash
cd backend
node check-status.js
```

### Test Backend API Directly
```bash
# Test registration
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","password":"test123","phone":"+1234567890"}'

# Test login
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"test123"}'
```

### Check MongoDB Data
```bash
mongosh
use global-education-council
db.users.find().pretty()
```

## What Changed in Code

### frontend/app/register/page.js
- Added `error` state for displaying error messages
- Enhanced error handling with detailed messages
- Added error alert component with icon
- Clear errors when user types

### frontend/app/login/page.js
- Added `error` state for displaying error messages
- Enhanced error handling with detailed messages
- Added error alert component with icon
- Clear errors when user types

## Next Steps

1. Start both servers (backend and frontend)
2. Try registering a new user
3. If you see an error message, it will tell you exactly what's wrong
4. Check the browser console for additional details
5. Verify backend logs for any server-side errors

## Need More Help?

If registration/login still fails:
1. Check browser console (F12) for errors
2. Check backend terminal for error logs
3. Verify all environment variables are set correctly
4. Make sure MongoDB is running and accessible
5. Try the curl commands above to test backend directly
