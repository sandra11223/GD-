# MongoDB Setup Guide

## Current Configuration

Your MongoDB is already configured! Here's what's set up:

### Backend .env File
Location: `backend/.env`

```env
MONGODB_URI=mongodb://localhost:27017/global-education-council
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

## Option 1: Local MongoDB (Currently Configured)

### Prerequisites
- MongoDB installed locally on your machine

### Installation

**Windows:**
1. Download MongoDB Community Server from: https://www.mongodb.com/try/download/community
2. Run the installer
3. MongoDB will start automatically as a Windows service

**Mac (using Homebrew):**
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get install mongodb
sudo systemctl start mongodb
sudo systemctl enable mongodb
```

### Verify Local MongoDB is Running

```bash
# Check if MongoDB is running
mongosh

# Or check the service status
# Windows: Check Services app for "MongoDB"
# Mac/Linux:
brew services list  # Mac
sudo systemctl status mongodb  # Linux
```

### Start the Backend Server

```bash
cd backend
npm install
npm start
```

You should see:
```
✅ MongoDB Connected: localhost
✅ Database Name: global-education-council
🚀 Server running on port 5000
```

## Option 2: MongoDB Atlas (Cloud - Free Tier)

If you prefer cloud hosting or don't want to install MongoDB locally:

### Step 1: Create MongoDB Atlas Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free account
3. Create a free cluster (M0 Sandbox - Free forever)

### Step 2: Configure Database Access
1. In Atlas dashboard, go to "Database Access"
2. Click "Add New Database User"
3. Create username and password (save these!)
4. Set privileges to "Read and write to any database"

### Step 3: Configure Network Access
1. Go to "Network Access"
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (0.0.0.0/0)
4. Confirm

### Step 4: Get Connection String
1. Go to "Database" → Click "Connect"
2. Choose "Connect your application"
3. Copy the connection string
4. It looks like: `mongodb+srv://username:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`

### Step 5: Update .env File
Edit `backend/.env`:

```env
MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/global-education-council?retryWrites=true&w=majority
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

**Important:** 
- Replace `YOUR_USERNAME` with your database username
- Replace `YOUR_PASSWORD` with your database password
- Replace `cluster0.xxxxx` with your actual cluster URL
- Keep `/global-education-council` before the `?` to specify the database name

### Step 6: Test Connection

```bash
cd backend
npm start
```

You should see:
```
✅ MongoDB Connected: cluster0.xxxxx.mongodb.net
✅ Database Name: global-education-council
🚀 Server running on port 5000
```

## Seed Initial Data

Once connected, seed the database with initial data:

```bash
cd backend
node seed.js
```

This will create:
- Admin user (email: admin@globaleducation.com, password: admin123)
- Sample courses
- Sample universities
- Sample services

## Test the Connection

Run the test script:

```bash
cd backend
node test-connection.js
```

## Troubleshooting

### Error: "MongooseServerSelectionError"
- **Local MongoDB:** Make sure MongoDB service is running
- **Atlas:** Check your IP is whitelisted (0.0.0.0/0)

### Error: "Authentication failed"
- **Atlas:** Verify username and password in connection string
- Make sure password doesn't contain special characters (or URL encode them)

### Error: "ECONNREFUSED"
- **Local MongoDB:** MongoDB service is not running
- Start the service and try again

### Port Already in Use
If port 5000 is busy, change PORT in .env:
```env
PORT=5001
```

## Current Status

✅ Configuration files exist
✅ Database connection code is ready
✅ Models are defined
✅ Seed script is available

**Next Steps:**
1. Ensure MongoDB is running (local or Atlas)
2. Run `npm start` in backend folder
3. Run `node seed.js` to populate initial data
4. Start frontend with `npm run dev`

## Database Structure

Your application uses these collections:
- **users** - Admin and user accounts
- **courses** - Skill development courses
- **universities** - Partner universities
- **services** - Education services
- **enrollments** - Course enrollments
- **inquiries** - Contact form submissions
- **newsletters** - Newsletter subscriptions
- **partnerships** - Partnership requests
