# MongoDB Atlas Setup Guide

## Step 1: Create MongoDB Atlas Account

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Click "Try Free" or "Sign In"
3. Create a new account or sign in with existing credentials

## Step 2: Create a New Cluster

1. After logging in, click "Build a Database"
2. Choose the **FREE** tier (M0 Sandbox)
3. Select your preferred cloud provider (AWS, Google Cloud, or Azure)
4. Choose a region closest to your location
5. Name your cluster (e.g., "Cluster0")
6. Click "Create Cluster" (this may take 3-5 minutes)

## Step 3: Create Database User

1. In the left sidebar, click "Database Access" under "Security"
2. Click "Add New Database User"
3. Choose "Password" authentication method
4. Enter a username (e.g., "admin" or "dbuser")
5. Click "Autogenerate Secure Password" or create your own
6. **IMPORTANT**: Copy and save the password securely
7. Under "Database User Privileges", select "Read and write to any database"
8. Click "Add User"

## Step 4: Configure Network Access

1. In the left sidebar, click "Network Access" under "Security"
2. Click "Add IP Address"
3. For development, click "Allow Access from Anywhere" (0.0.0.0/0)
   - **Note**: For production, restrict to specific IP addresses
4. Click "Confirm"

## Step 5: Get Connection String

1. Go back to "Database" in the left sidebar
2. Click "Connect" button on your cluster
3. Select "Connect your application"
4. Choose "Node.js" as the driver and latest version
5. Copy the connection string (it looks like this):
   ```
   mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

## Step 6: Update Backend Environment Variables

1. Open `backend/.env` file
2. Replace the MONGODB_URI with your Atlas connection string:
   ```env
   MONGODB_URI=mongodb+srv://YOUR_USERNAME:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/global-education-council?retryWrites=true&w=majority
   ```
3. Replace:
   - `YOUR_USERNAME` with your database username
   - `YOUR_PASSWORD` with your database password
   - `cluster0.xxxxx.mongodb.net` with your actual cluster URL
   - Add `/global-education-council` before the `?` to specify the database name

### Example:
```env
MONGODB_URI=mongodb+srv://admin:MySecurePass123@cluster0.abc123.mongodb.net/global-education-council?retryWrites=true&w=majority
JWT_SECRET=global_education_council_super_secret_jwt_key_2024
PORT=5000
NODE_ENV=development
```

## Step 7: Test the Connection

1. Make sure you're in the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm run dev
   ```

4. You should see:
   ```
   Server running on port 5000
   MongoDB Connected: cluster0-shard-00-00.xxxxx.mongodb.net
   ```

## Step 8: Seed the Database (Optional)

To populate your database with sample data:

```bash
cd backend
node seed.js
```

## Step 9: Start Frontend

1. Open a new terminal
2. Navigate to frontend directory:
   ```bash
   cd frontend
   ```

3. Install dependencies (if not already installed):
   ```bash
   npm install
   ```

4. Start the frontend:
   ```bash
   npm run dev
   ```

5. Open your browser to `http://localhost:3001`

## Troubleshooting

### Issue: "MongoServerError: bad auth"
**Solution**: Double-check your username and password in the connection string. Make sure there are no special characters that need URL encoding.

### Issue: "MongooseServerSelectionError: Could not connect"
**Solution**: 
- Check your network access settings in MongoDB Atlas
- Make sure "Allow Access from Anywhere" is enabled for development
- Verify your connection string is correct

### Issue: "Registration failed" or "Network Error"
**Solution**:
- Make sure backend server is running on port 5000
- Check that `frontend/.env.local` has `NEXT_PUBLIC_API_URL=http://localhost:5000/api`
- Open browser console (F12) to see detailed error messages
- Check backend terminal for error logs

### Issue: Password contains special characters
**Solution**: URL encode special characters in your password:
- `@` becomes `%40`
- `#` becomes `%23`
- `$` becomes `%24`
- `%` becomes `%25`
- `&` becomes `%26`

Example: If password is `Pass@123#`, use `Pass%40123%23` in connection string

## Testing Registration

1. Go to `http://localhost:3001/register`
2. Fill in the registration form:
   - Full Name: Test User
   - Email: test@example.com
   - Company Name: Test Company
   - Phone: +1 234 567 8900
   - Password: password123
   - Confirm Password: password123
3. Click "Create Account"
4. You should be redirected to the dashboard

## Verifying Data in MongoDB Atlas

1. Go to MongoDB Atlas dashboard
2. Click "Browse Collections" on your cluster
3. You should see the `global-education-council` database
4. Click on it to see collections like `users`, `courses`, `universities`, etc.
5. Click on `users` to see your registered user

## Production Deployment Notes

When deploying to production:

1. **Update Network Access**: Restrict IP addresses to your production server IPs
2. **Use Environment Variables**: Never commit `.env` files to version control
3. **Strong JWT Secret**: Use a long, random string for JWT_SECRET
4. **HTTPS**: Always use HTTPS in production
5. **CORS**: Configure CORS to only allow your frontend domain
6. **Database Backups**: Enable automated backups in MongoDB Atlas

## Support

If you encounter any issues:
1. Check the backend terminal for error messages
2. Check the browser console (F12) for frontend errors
3. Verify all environment variables are set correctly
4. Ensure MongoDB Atlas cluster is running and accessible
