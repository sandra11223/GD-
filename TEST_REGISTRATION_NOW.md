# 🚀 QUICK FIX - Test Registration Now

## What I Just Fixed

1. ✅ Set frontend to always use port 3000
2. ✅ Updated backend CORS to allow port 3000
3. ✅ Added detailed console logging
4. ✅ Better error messages

## RESTART SERVERS NOW

### Option 1: Use Script (FASTEST)
```bash
# Double-click this file:
RESTART_NOW.bat
```

### Option 2: Manual Restart
```bash
# Stop both servers (Ctrl+C in each terminal)

# Terminal 1 - Backend
cd backend
node server.js

# Terminal 2 - Frontend  
cd frontend
npm run dev
```

## Test Registration (Use NEW Email!)

1. Open: http://localhost:3000/register

2. Fill in form with NEW email:
   ```
   Name: Test User
   Email: newuser123@example.com  ← MUST BE NEW!
   Company: Test Company
   Phone: +1234567890
   Password: test123
   Confirm: test123
   ```

3. Click "Create Account"

4. Check browser console (F12) for detailed logs

## What to Check

### If you see "User with this email already exists"
- Use a DIFFERENT email address
- Or delete the existing user:
  ```bash
  mongosh
  use global-education-council
  db.users.deleteOne({ email: "your@email.com" })
  ```

### If you see CORS error
- Make sure you restarted BOTH servers
- Backend should show: "Server running on port 5000"
- Frontend should show: "Ready - started server on 0.0.0.0:3000"

### If you see network error
- Check backend terminal - is it running?
- Try: http://localhost:5000 (should show API status)

## Browser Console Will Show

You'll now see detailed logs:
```
Attempting registration with: {name: "Test User", email: "...", ...}
Registration successful: {_id: "...", token: "..."}
```

Or if error:
```
Registration error: ...
Error response: {message: "..."}
```

## Quick Test Commands

### Check Backend
```bash
curl http://localhost:5000
```

### Check if Email Exists
```bash
mongosh
use global-education-council
db.users.find({ email: "your@email.com" })
```

### Delete Test User
```bash
mongosh
use global-education-council
db.users.deleteOne({ email: "testuser123@example.com" })
```

## Success Checklist

- [ ] Ran RESTART_NOW.bat (or restarted manually)
- [ ] Backend shows "Server running on port 5000"
- [ ] Frontend shows "Ready - started server on 0.0.0.0:3000"
- [ ] Opened http://localhost:3000/register
- [ ] Used a NEW email address
- [ ] Clicked "Create Account"
- [ ] Check browser console (F12) for logs

## Expected Result

✅ Success toast appears
✅ Redirects to /dashboard
✅ You're logged in!

---

**RESTART SERVERS NOW AND TRY AGAIN!**
