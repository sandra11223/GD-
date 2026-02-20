# Admin Management System Guide

## Overview

The admin dashboard now includes three management pages where you can add, edit, and delete:
- **Courses** - Skill development courses
- **Universities** - Partner universities
- **Services** - Education services

All data entered through these pages will automatically appear on the public frontend pages.

## Access the Management Pages

After logging in as admin, navigate to:

1. **Manage Courses**: http://localhost:3000/dashboard/manage-courses
2. **Manage Universities**: http://localhost:3000/dashboard/manage-universities
3. **Manage Services**: http://localhost:3000/dashboard/manage-services

## 1. Manage Courses

### Add New Course
Click "+ Add New Course" button and fill in:
- **Course Title**: Name of the course
- **Category**: Course category (e.g., "Business", "Technology")
- **Description**: Detailed course description
- **Duration**: Course length (e.g., "8 weeks", "3 months")
- **Level**: Beginner, Intermediate, or Advanced
- **Price**: Course price in dollars
- **Instructor**: Instructor name
- **Image URL**: Link to course image (optional)

### Edit/Delete Course
- Click "Edit" to modify course details
- Click "Delete" to remove a course (requires confirmation)

### Where It Appears
Courses appear on:
- `/courses` - Public courses page
- `/dashboard/browse-courses` - Student dashboard

## 2. Manage Universities

### Add New University
Click "+ Add New University" button and fill in:
- **University Name**: Full name of the university
- **Country**: Country where university is located
- **Description**: Brief description of the university
- **Ranking**: Global ranking (e.g., "#1 Global", "Top 50")
- **Programs**: Number of programs (e.g., "350+ Programs")
- **Students**: Student population (e.g., "23,000+ Students")
- **Image URL**: Link to university image (optional)
- **Website URL**: University website (optional)

### Edit/Delete University
- Click "Edit" to modify university details
- Click "Delete" to remove a university (requires confirmation)

### Where It Appears
Universities appear on:
- `/universities` - Public universities page
- University cards with expandable details

## 3. Manage Services

### Add New Service
Click "+ Add New Service" button and fill in:
- **Service Title**: Name of the service
- **Category**: Service category (e.g., "Consulting", "Training")
- **Description**: Detailed service description
- **Features**: List of features (one per line)
- **Price**: Service price or "Contact Us" (optional)
- **Icon**: Emoji icon (e.g., 🎓, 📚, 🌍)
- **Image URL**: Link to service image (optional)

### Edit/Delete Service
- Click "Edit" to modify service details
- Click "Delete" to remove a service (requires confirmation)

### Where It Appears
Services appear on:
- `/services` - Public services page
- Service cards with detailed information

## Features

### All Management Pages Include:
✅ **Create** - Add new items with detailed forms
✅ **Read** - View all items in a grid layout
✅ **Update** - Edit existing items
✅ **Delete** - Remove items with confirmation
✅ **Responsive Design** - Works on all devices
✅ **Real-time Updates** - Changes appear immediately
✅ **Form Validation** - Required fields are enforced
✅ **Image Support** - Add images via URLs

## Data Flow

```
Admin Dashboard (Add/Edit)
        ↓
    MongoDB Database
        ↓
Frontend API Calls
        ↓
Public Pages (Display)
```

## Example Workflow

### Adding a New Course:

1. Login as admin
2. Go to `/dashboard/manage-courses`
3. Click "+ Add New Course"
4. Fill in the form:
   ```
   Title: Advanced JavaScript
   Category: Programming
   Description: Master modern JavaScript concepts
   Duration: 12 weeks
   Level: Advanced
   Price: 299
   Instructor: John Doe
   Image: https://example.com/js-course.jpg
   ```
5. Click "Create Course"
6. Course now appears on `/courses` page

### Adding a New University:

1. Go to `/dashboard/manage-universities`
2. Click "+ Add New University"
3. Fill in the form:
   ```
   Name: Stanford University
   Country: United States
   Description: Leading research university
   Ranking: #3 Global
   Programs: 200+ Programs
   Students: 17,000+ Students
   Image: https://example.com/stanford.jpg
   Website: https://stanford.edu
   ```
4. Click "Create University"
5. University now appears on `/universities` page

### Adding a New Service:

1. Go to `/dashboard/manage-services`
2. Click "+ Add New Service"
3. Fill in the form:
   ```
   Title: Overseas Education Consulting
   Category: Consulting
   Description: Expert guidance for international education
   Features:
   University selection assistance
   Application support
   Visa guidance
   Pre-departure orientation
   Price: Contact Us
   Icon: 🎓
   ```
4. Click "Create Service"
5. Service now appears on `/services` page

## Image URLs

You can use images from:
- **Pexels**: https://www.pexels.com (free stock photos)
- **Unsplash**: https://unsplash.com (free stock photos)
- **Your own server**: Upload to your hosting and use the URL

Example image URLs:
```
https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=600
https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80
```

## API Endpoints Used

### Courses
- GET `/api/courses` - Fetch all courses
- POST `/api/courses` - Create new course
- PUT `/api/courses/:id` - Update course
- DELETE `/api/courses/:id` - Delete course

### Universities
- GET `/api/universities` - Fetch all universities
- POST `/api/universities` - Create new university
- PUT `/api/universities/:id` - Update university
- DELETE `/api/universities/:id` - Delete university

### Services
- GET `/api/services` - Fetch all services
- POST `/api/services` - Create new service
- PUT `/api/services/:id` - Update service
- DELETE `/api/services/:id` - Delete service

## Navigation

Add links to these pages in your dashboard navigation:

```jsx
<Link href="/dashboard/manage-courses">Manage Courses</Link>
<Link href="/dashboard/manage-universities">Manage Universities</Link>
<Link href="/dashboard/manage-services">Manage Services</Link>
```

## Security

- Only authenticated admin users can access these pages
- All API calls require JWT authentication
- Delete operations require confirmation
- Form validation prevents invalid data

## Troubleshooting

### Changes not appearing on frontend?
1. Check if backend server is running
2. Verify MongoDB connection
3. Check browser console for errors
4. Refresh the frontend page

### Can't delete items?
1. Check if item is referenced elsewhere
2. Verify admin permissions
3. Check backend console for errors

### Images not loading?
1. Verify image URL is correct
2. Check if URL is publicly accessible
3. Try a different image URL
4. Check browser console for CORS errors

## Next Steps

1. Start backend server: `cd backend && npm start`
2. Start frontend server: `cd frontend && npm run dev`
3. Login as admin
4. Navigate to management pages
5. Add your courses, universities, and services
6. View them on public pages

---

**Your admin management system is ready to use!** 🚀

You can now manage all your content from the dashboard and it will automatically appear on the public-facing pages.
