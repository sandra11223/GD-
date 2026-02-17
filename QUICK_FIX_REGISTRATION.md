# Quick Fix for Registration Issue

## Problem
Registration is failing because MongoDB is not connected. The `.env` file still has placeholder values.

## Solution Options

You have 2 options:

---

## Option 1: Use MongoDB Atlas (Recommended - Free Cloud Database)

### Step 1: Create MongoDB Atlas Account (2 minutes)

1. Go to: https://www.mongodb.com/cloud/atlas
2. Click "Try Free" and sign up
3. After login, click "Build a Database"
4. Choose **"M0 FREE"** tier
5. Click "Create"

### Step 2: Create Database User (1 minute)

1. You'll see a popup "Security Quickstart"
2. Username: `admin`
3. Click "Autogenerate Secure Password"
4. **COPY THE PASSWORD** and save it somewhere
5. Click "Create User"

### Step 3: Whitelist IP Address (30 seconds)

1. In the same popup, scroll down
2. Click "Add My Current IP Address"
3. Also add `0.0.0.0/0` for development
4. Click "Finish and Close"

### Step 4: Get Connection String (30 seconds)

1. Click "Connect" button on your cluster
2. Click "Connect your application"
3. Copy the connection string (looks like):
   ```
   mongodb+srv://admin:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### Step 5: Update .env File (1 minute)

1. Open `backend/.env` file
2. Find the line starting with `MONGODB_URI=`
3. Replace it with your connection string
4. Replace `<password>` with the password you copied in Step 2
5. Add `/global-education-council` before the `?`

**Example:**
```env
MONGODB_URI=mongodb+srv://admin:MySecurePass123@cluster0.abc123.mongodb.net/global-education-council?retryWrites=true&w=majority
```

### Step 6: Test Connection

```bash
cd backend
npm run test-db
```

You should see: ✅ SUCCESS! MongoDB Connected

### Step 7: Start Backend

```bash
npm run dev
```

### Step 8: Start Frontend (in new terminal)

```bash
cd frontend
npm run dev
```

### Step 9: Test Registration

Go to: http://localhost:3001/register

---

## Option 2: Use Local MongoDB (If you have MongoDB installed)

### Step 1: Install MongoDB Locally

**Windows:**
1. Download from: https://www.mongodb.com/try/download/community
2. Install with default settings
3. MongoDB will run automatically

**Mac:**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux:**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
```

### Step 2: Update .env File

Open `backend/.env` and change:

```env
MONGODB_URI=mongodb://localhost:27017/global-education-council
```

### Step 3: Test Connection

```bash
cd backend
npm run test-db
```

### Step 4: Start Backend

```bash
npm run dev
```

### Step 5: Start Frontend (in new terminal)

```bash
cd frontend
npm run dev
```

### Step 6: Test Registration

Go to: http://localhost:3001/register

---

## Quick Verification Checklist

Before testing registration, make sure:

- [ ] Backend terminal shows: "✅ MongoDB Connected"
- [ ] Backend terminal shows: "✅ Server running on port 5000"
- [ ] Frontend terminal shows: "ready - started server on 0.0.0.0:3001"
- [ ] Can access http://localhost:5000 (shows API message)
- [ ] Can access http://localhost:3001 (shows home page)

---

## Still Having Issues?

### Check Backend Terminal

When you try to register, you should see in the backend terminal:
```
POST /api/auth/register 201 - - 234.567 ms
```

If you see errors, they will show here.

### Check Browser Console

1. Press F12 in your browser
2. Go to "Console" tab
3. Try to register
4. Look for error messages (red text)

### Common Errors

**"Network Error"**
- Backend is not running
- Solution: Start backend with `npm run dev` in backend folder

**"MongoServerError: bad auth"**
- Wrong username or password
- Solution: Check your MongoDB Atlas credentials

**"User already exists"**
- Email is already registered
- Solution: Use a different email or delete the user from MongoDB

---

## Need Help?

Run this command to see detailed error:

```bash
cd backend
npm run test-db
```

This will tell you exactly what's wrong with the database connection.

---

## After Setup Works

Once registration works, you can add sample data:

```bash
cd backend
npm run seed
```

This adds sample courses, universities, and services to your database.
