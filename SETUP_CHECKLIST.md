# Setup Checklist ✅

Use this checklist to ensure everything is configured correctly.

## 📋 Pre-Setup Checklist

- [ ] Node.js installed (v16 or higher) - Check with: `node --version`
- [ ] npm installed - Check with: `npm --version`
- [ ] MongoDB Atlas account created
- [ ] Git installed (optional)

## 🗄️ MongoDB Atlas Setup

- [ ] Created a FREE M0 cluster
- [ ] Cluster is in "Running" state
- [ ] Created database user with username and password
- [ ] Saved the password securely
- [ ] Added IP address (0.0.0.0/0 for development)
- [ ] Copied connection string from "Connect" button
- [ ] Connection string includes database name: `/global-education-council`

## 🔧 Backend Configuration

- [ ] Navigated to `backend` folder
- [ ] Ran `npm install` successfully
- [ ] Created `backend/.env` file
- [ ] Updated `MONGODB_URI` with actual credentials
- [ ] Replaced `YOUR_USERNAME` with MongoDB username
- [ ] Replaced `YOUR_PASSWORD` with MongoDB password (URL encoded if needed)
- [ ] Replaced `YOUR_CLUSTER` with actual cluster URL
- [ ] `JWT_SECRET` is set
- [ ] `PORT` is set to 5000

## 🧪 Backend Testing

- [ ] Ran `npm run test-db` successfully
- [ ] Saw "✅ SUCCESS! MongoDB Connected" message
- [ ] Ran `npm run dev` successfully
- [ ] Saw "✅ Server running on port 5000" message
- [ ] Saw "✅ MongoDB Connected" message
- [ ] Can access `http://localhost:5000` in browser
- [ ] API returns JSON response with status

## 🎨 Frontend Configuration

- [ ] Navigated to `frontend` folder (in new terminal)
- [ ] Ran `npm install` successfully
- [ ] `.env.local` file exists
- [ ] `NEXT_PUBLIC_API_URL=http://localhost:5000/api` is set
- [ ] Ran `npm run dev` successfully
- [ ] Saw "ready - started server on 0.0.0.0:3001" message

## 🌐 Frontend Testing

- [ ] Can access `http://localhost:3001` in browser
- [ ] Home page loads with dark theme
- [ ] Emerald/green colors are visible
- [ ] Navigation bar is visible
- [ ] Footer is visible
- [ ] No console errors in browser (F12)

## 🔐 Authentication Testing

### Registration Test
- [ ] Navigated to `http://localhost:3001/register`
- [ ] Registration form is visible
- [ ] Filled in all required fields
- [ ] Clicked "Create Account" button
- [ ] Saw success message or toast notification
- [ ] Redirected to dashboard
- [ ] No errors in browser console
- [ ] No errors in backend terminal

### Login Test
- [ ] Logged out (if logged in)
- [ ] Navigated to `http://localhost:3001/login`
- [ ] Login form is visible
- [ ] Entered registered email and password
- [ ] Clicked "Sign In" button
- [ ] Saw success message
- [ ] Redirected to dashboard
- [ ] User info displayed correctly

## 📊 Database Verification

- [ ] Logged into MongoDB Atlas dashboard
- [ ] Clicked "Browse Collections" on cluster
- [ ] See `global-education-council` database
- [ ] See `users` collection
- [ ] Can see registered user in `users` collection
- [ ] User password is hashed (not plain text)

## 🌱 Optional: Seed Data

- [ ] Ran `npm run seed` in backend folder
- [ ] Saw success messages for seeding
- [ ] Can see additional collections in MongoDB Atlas:
  - [ ] courses
  - [ ] universities
  - [ ] services
- [ ] Can access seeded data through API

## 🎯 Feature Testing

### Navigation
- [ ] All navigation links work
- [ ] Can navigate to: Home, About, Services, Courses, Universities, Contact
- [ ] Logo click returns to home page

### Pages Load Correctly
- [ ] Home page with hero section
- [ ] About page
- [ ] Services page
- [ ] Courses page
- [ ] Universities page
- [ ] Contact page
- [ ] Blog page
- [ ] Dashboard (when logged in)

### Dashboard Access
- [ ] Dashboard requires login
- [ ] Redirected to login if not authenticated
- [ ] Can access dashboard after login
- [ ] Dashboard shows user information
- [ ] Can navigate dashboard sections

### Forms Work
- [ ] Contact form submits
- [ ] Newsletter subscription works
- [ ] Inquiry form submits
- [ ] Enrollment form works (when logged in)
- [ ] Partnership form works

## 🐛 Troubleshooting Completed

If you encountered issues, mark what you fixed:

- [ ] Fixed MongoDB connection issues
- [ ] Fixed CORS errors
- [ ] Fixed port conflicts
- [ ] Fixed environment variable issues
- [ ] Fixed authentication errors
- [ ] Fixed password encoding issues
- [ ] Fixed network access in MongoDB Atlas

## ✅ Final Verification

- [ ] Backend running without errors
- [ ] Frontend running without errors
- [ ] Can register new users
- [ ] Can login with registered users
- [ ] Can access protected routes (dashboard)
- [ ] Data persists in MongoDB Atlas
- [ ] All pages load correctly
- [ ] No console errors
- [ ] Ready for development!

## 📝 Notes

Write any issues you encountered and how you solved them:

```
Issue 1: 
Solution: 

Issue 2:
Solution:

Issue 3:
Solution:
```

## 🎉 Success!

If all items are checked, congratulations! Your application is fully set up and ready for development.

## 📚 Next Steps

1. Read `QUICK_START.md` for usage guide
2. Read `MONGODB_ATLAS_SETUP.md` for detailed MongoDB info
3. Explore the codebase
4. Start building features
5. Customize the design
6. Add your own content

## 🆘 Still Having Issues?

1. Check backend terminal for error messages
2. Check browser console (F12) for frontend errors
3. Verify all environment variables are set correctly
4. Make sure MongoDB Atlas cluster is running
5. Ensure IP address is whitelisted in MongoDB Atlas
6. Try running `npm run test-db` to test database connection
7. Review the troubleshooting section in `QUICK_START.md`

---

**Date Completed:** _______________

**Time Taken:** _______________

**Issues Encountered:** _______________
