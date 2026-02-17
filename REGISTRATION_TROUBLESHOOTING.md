# Registration Troubleshooting Guide

## 🔍 Diagnosing Registration Issues

If registration is failing, follow this systematic approach to identify and fix the problem.

---

## Step 1: Check Backend is Running

### What to Check:
Open the terminal where you started the backend server.

### What You Should See:
```
✅ Server running on port 5000
✅ Environment: development
✅ MongoDB Connected: cluster0-xxxxx.mongodb.net
✅ Database Name: global-education-council
```

### If Backend is NOT Running:
```bash
cd backend
npm run dev
```

### If You See Errors:
- **"Error: Cannot find module"** → Run `npm install`
- **"Port 5000 is already in use"** → Kill the process or use different port
- **"MongoDB connection error"** → Check your `.env` file

---

## Step 2: Check Frontend is Running

### What to Check:
Open the terminal where you started the frontend.

### What You Should See:
```
ready - started server on 0.0.0.0:3001
```

### If Frontend is NOT Running:
```bash
cd frontend
npm run dev
```

---

## Step 3: Check Browser Console

### How to Open Console:
- Press `F12` in your browser
- Or right-click → "Inspect" → "Console" tab

### What to Look For:

#### ✅ Good Signs:
- No red error messages
- API calls show status 200 or 201

#### ❌ Bad Signs and Solutions:

**Error: "Network Error" or "ERR_CONNECTION_REFUSED"**
- **Problem**: Frontend can't reach backend
- **Solution**: Make sure backend is running on port 5000

**Error: "CORS policy" or "Access-Control-Allow-Origin"**
- **Problem**: CORS not configured properly
- **Solution**: Backend should already have CORS enabled. Restart backend server.

**Error: "401 Unauthorized"**
- **Problem**: Authentication issue
- **Solution**: This shouldn't happen during registration. Check backend logs.

**Error: "400 Bad Request"**
- **Problem**: Invalid data sent to backend
- **Solution**: Check what error message backend is returning

**Error: "500 Internal Server Error"**
- **Problem**: Backend crashed or database issue
- **Solution**: Check backend terminal for error details

---

## Step 4: Check Backend Terminal Logs

### What to Look For:

When you click "Create Account", you should see in backend terminal:
```
POST /api/auth/register 201 - - 234.567 ms
```

### Common Error Messages:

#### "MongoServerError: bad auth"
**Problem**: Wrong MongoDB username or password

**Solution**:
1. Go to MongoDB Atlas → Database Access
2. Verify your username
3. Reset password if needed
4. Update `backend/.env` with correct credentials

#### "MongooseServerSelectionError"
**Problem**: Can't connect to MongoDB Atlas

**Solution**:
1. Check internet connection
2. Go to MongoDB Atlas → Network Access
3. Make sure `0.0.0.0/0` is in the IP whitelist
4. Verify connection string in `backend/.env`

#### "User already exists"
**Problem**: Email already registered

**Solution**:
- Use a different email address
- Or delete the user from MongoDB Atlas and try again

#### "ValidationError"
**Problem**: Missing required fields or invalid data

**Solution**:
- Make sure all required fields are filled
- Check password is at least 6 characters
- Verify email format is valid

---

## Step 5: Test API Directly

### Using curl (Command Line):

```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "password123",
    "phone": "+1234567890",
    "companyName": "Test Company"
  }'
```

### Using Browser (Postman Alternative):

1. Open browser to: `http://localhost:5000`
2. You should see: `{"message":"Global Education Council API","status":"running"}`
3. If this works, backend is running correctly

---

## Step 6: Check Environment Variables

### Backend .env File

Open `backend/.env` and verify:

```env
# Should look like this (with your actual values):
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/global-education-council?retryWrites=true&w=majority
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
PORT=5000
NODE_ENV=development
```

### Common Mistakes:

❌ **Missing `/global-education-council` in URI**
```env
# WRONG:
MONGODB_URI=mongodb+srv://user:pass@cluster0.mongodb.net/?retryWrites=true

# CORRECT:
MONGODB_URI=mongodb+srv://user:pass@cluster0.mongodb.net/global-education-council?retryWrites=true
```

❌ **Spaces in connection string**
```env
# WRONG:
MONGODB_URI = mongodb+srv://...

# CORRECT:
MONGODB_URI=mongodb+srv://...
```

❌ **Special characters not encoded**
If password is `Pass@123`, use `Pass%40123`

### Frontend .env.local File

Open `frontend/.env.local` and verify:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## Step 7: Test Database Connection

### Run Connection Test:

```bash
cd backend
npm run test-db
```

### Expected Output:
```
✅ SUCCESS! MongoDB Connected
📍 Host: cluster0-xxxxx.mongodb.net
📁 Database: global-education-council
```

### If Test Fails:

1. **Check MongoDB Atlas is running**
   - Go to MongoDB Atlas dashboard
   - Cluster should show "Active" status

2. **Verify credentials**
   - Username and password are correct
   - Password is URL encoded if it has special characters

3. **Check network access**
   - IP address `0.0.0.0/0` is whitelisted

---

## Step 8: Check MongoDB Atlas

### Verify Cluster is Running:

1. Go to https://cloud.mongodb.com
2. Click on "Database" in left sidebar
3. Your cluster should show status: "Active"
4. If it says "Paused", click "Resume"

### Verify Database User:

1. Click "Database Access" in left sidebar
2. You should see your user listed
3. User should have "Read and write to any database" privilege

### Verify Network Access:

1. Click "Network Access" in left sidebar
2. You should see `0.0.0.0/0` in the list
3. Status should be "Active"

---

## Step 9: Clear Browser Cache

Sometimes old cached data causes issues.

### Clear Cache:

1. Press `Ctrl+Shift+Delete` (Windows) or `Cmd+Shift+Delete` (Mac)
2. Select "Cached images and files"
3. Click "Clear data"
4. Refresh the page

### Or Use Incognito Mode:

1. Press `Ctrl+Shift+N` (Windows) or `Cmd+Shift+N` (Mac)
2. Go to `http://localhost:3001/register`
3. Try registering again

---

## Step 10: Restart Everything

Sometimes a fresh start fixes mysterious issues.

### Complete Restart:

1. **Stop Backend**: Press `Ctrl+C` in backend terminal
2. **Stop Frontend**: Press `Ctrl+C` in frontend terminal
3. **Close all browser tabs**
4. **Start Backend**:
   ```bash
   cd backend
   npm run dev
   ```
5. **Start Frontend** (in new terminal):
   ```bash
   cd frontend
   npm run dev
   ```
6. **Open fresh browser tab**: `http://localhost:3001/register`
7. **Try registration again**

---

## 🔧 Specific Error Solutions

### "User already exists"

**Solution 1**: Use different email
```
Try: yourname+test@gmail.com
```

**Solution 2**: Delete user from database
1. Go to MongoDB Atlas
2. Click "Browse Collections"
3. Find `users` collection
4. Find and delete the user with that email

### "Password must be at least 6 characters"

**Solution**: Use longer password
```
Minimum: 6 characters
Example: password123
```

### "Please provide a valid email address"

**Solution**: Check email format
```
❌ Wrong: test@test
❌ Wrong: test.com
✅ Correct: test@test.com
```

### "Failed to create user"

**Solution**: Check backend logs for specific error
```bash
# In backend terminal, you should see detailed error
# Look for lines starting with "Registration error:"
```

---

## 📊 Registration Flow Diagram

```
User fills form
    ↓
Click "Create Account"
    ↓
Frontend validates form
    ↓
Frontend sends POST to /api/auth/register
    ↓
Backend receives request
    ↓
Backend validates data
    ↓
Backend checks if email exists
    ↓
Backend hashes password
    ↓
Backend saves to MongoDB
    ↓
MongoDB returns saved user
    ↓
Backend generates JWT token
    ↓
Backend sends response
    ↓
Frontend stores token
    ↓
Frontend redirects to dashboard
    ↓
SUCCESS! ✅
```

**Where can it fail?**
- ❌ Frontend validation (check form fields)
- ❌ Network request (check backend is running)
- ❌ Backend validation (check data format)
- ❌ Database connection (check MongoDB Atlas)
- ❌ Database save (check credentials)

---

## 🧪 Manual Testing Checklist

Test each step individually:

- [ ] Backend starts without errors
- [ ] Frontend starts without errors
- [ ] Can access `http://localhost:5000` (shows API message)
- [ ] Can access `http://localhost:3001` (shows home page)
- [ ] Can access `http://localhost:3001/register` (shows form)
- [ ] Form fields are visible and editable
- [ ] Can type in all form fields
- [ ] "Create Account" button is clickable
- [ ] No console errors before clicking button
- [ ] Backend terminal shows POST request after clicking
- [ ] Browser console shows API response
- [ ] Success message appears
- [ ] Redirected to dashboard
- [ ] User data visible in MongoDB Atlas

---

## 🆘 Still Not Working?

### Collect This Information:

1. **Backend terminal output** (copy all text)
2. **Frontend terminal output** (copy all text)
3. **Browser console errors** (F12 → Console tab, screenshot)
4. **Network tab** (F12 → Network tab, screenshot of failed request)
5. **Your .env file** (remove password before sharing!)

### Check These Files:

```bash
# Backend
backend/.env
backend/server.js
backend/controllers/authController.js
backend/models/User.js

# Frontend
frontend/.env.local
frontend/services/api.js
frontend/context/AuthContext.js
frontend/app/register/page.js
```

### Last Resort - Fresh Install:

```bash
# Backend
cd backend
rm -rf node_modules
rm package-lock.json
npm install
npm run dev

# Frontend (in new terminal)
cd frontend
rm -rf node_modules
rm -rf .next
rm package-lock.json
npm install
npm run dev
```

---

## ✅ Success Indicators

You know registration is working when:

1. ✅ No errors in backend terminal
2. ✅ No errors in frontend terminal
3. ✅ No errors in browser console
4. ✅ See success toast notification
5. ✅ Redirected to `/dashboard`
6. ✅ User name appears in navbar
7. ✅ User exists in MongoDB Atlas `users` collection
8. ✅ Can logout and login again with same credentials

---

## 📞 Additional Resources

- `SETUP_INSTRUCTIONS.md` - Step-by-step setup
- `QUICK_START.md` - Quick start guide
- `MONGODB_ATLAS_SETUP.md` - MongoDB Atlas details
- `CONNECTION_SUMMARY.md` - Architecture overview
- `SETUP_CHECKLIST.md` - Complete checklist
