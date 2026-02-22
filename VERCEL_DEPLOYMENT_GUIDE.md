# Vercel Deployment Guide

## Issue
The newsletter subscription button fails on Vercel because the frontend is trying to connect to `http://localhost:5000/api` which doesn't exist in production.

## Solution
You need to configure the `NEXT_PUBLIC_API_URL` environment variable in Vercel to point to your production backend API.

## Steps to Fix

### 1. Deploy Backend First
Your backend needs to be deployed somewhere accessible (e.g., Render, Railway, Heroku, or another Vercel project).

Example backend deployment options:
- **Render**: https://render.com (Free tier available)
- **Railway**: https://railway.app (Free tier available)
- **Heroku**: https://heroku.com
- **Vercel** (as a separate project)

### 2. Configure Vercel Environment Variables

Go to your Vercel project settings:

1. Navigate to: **Project Settings** → **Environment Variables**
2. Add the following variable:

```
Name: NEXT_PUBLIC_API_URL
Value: https://your-backend-url.com/api
```

**Important**: Replace `https://your-backend-url.com/api` with your actual backend API URL.

### 3. Redeploy Frontend

After adding the environment variable:
1. Go to **Deployments** tab
2. Click on the latest deployment
3. Click **Redeploy** button

## Backend Deployment Example (Render)

If you're deploying the backend to Render:

1. Create a new **Web Service** on Render
2. Connect your GitHub repository
3. Set the following:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `node server.js`
4. Add environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   NODE_ENV=production
   FRONTEND_URL=https://your-vercel-app.vercel.app
   PORT=5000
   ```
5. Deploy

Your backend URL will be something like: `https://your-app-name.onrender.com`

Then in Vercel, set:
```
NEXT_PUBLIC_API_URL=https://your-app-name.onrender.com/api
```

## Testing

After deployment:
1. Visit your Vercel site
2. Scroll to the footer
3. Enter an email in the newsletter subscription form
4. Click "Subscribe"
5. You should see: "Successfully subscribed to our newsletter!"

## Troubleshooting

### Error: "Unable to connect to server"
- Check that `NEXT_PUBLIC_API_URL` is set correctly in Vercel
- Verify your backend is running and accessible
- Check backend CORS settings allow your Vercel domain

### Error: "Failed to subscribe"
- Check backend logs for errors
- Verify MongoDB connection is working
- Check that the `/api/newsletter/subscribe` endpoint is working

### How to Check Backend
Visit: `https://your-backend-url.com/api/newsletter`
- Should return JSON with subscribers list (or empty array)

## Local Development

For local development, create a `.env.local` file in the frontend folder:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

This ensures your local frontend connects to your local backend.

## Important Notes

1. **NEXT_PUBLIC_** prefix is required for environment variables that need to be accessible in the browser
2. Environment variables are only loaded during build time in Next.js
3. After changing environment variables, you must redeploy
4. Never commit `.env.local` files to Git (they're in .gitignore)
