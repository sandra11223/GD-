'use client';

import { useState, useEffect } from 'react';
import api from '../../services/api';
import Link from 'next/link';

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [downloadSuccess, setDownloadSuccess] = useState(null);
  const [downloadingId, setDownloadingId] = useState(null);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const { data } = await api.get('/courses');
      setCourses(data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadDetails = (course) => {
    setDownloadingId(course._id);
    
    // Create course details content
    const courseDetails = `
COURSE DETAILS
================================================================================

Course Title: ${course.title}
Category: ${course.category}
Level: ${course.level}
Duration: ${course.duration}
Price: $${course.price}

DESCRIPTION
--------------------------------------------------------------------------------
${course.description}

WHAT YOU'LL LEARN
--------------------------------------------------------------------------------
${course.syllabus ? course.syllabus.map((item, index) => `${index + 1}. ${item}`).join('\n') : 'No syllabus available'}

COURSE INFORMATION
--------------------------------------------------------------------------------
- Flexible scheduling options
- Industry-recognized certification
- Expert instructors
- Hands-on projects
- 24/7 support access

ENROLLMENT
--------------------------------------------------------------------------------
To enroll in this course, please visit:
${window.location.origin}/dashboard/enroll

For more information, contact:
Email: info@globaleducationcouncil.com
Phone: +1 (555) 123-4567

================================================================================
Downloaded on: ${new Date().toLocaleString()}
    `.trim();

    // Create blob and download
    const blob = new Blob([courseDetails], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${course.title.replace(/[^a-z0-9]/gi, '_')}_Details.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);

    // Show success message
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadSuccess(course._id);
      
      // Hide success message after 3 seconds
      setTimeout(() => {
        setDownloadSuccess(null);
      }, 3000);
    }, 500);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section - Matching Home Page */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-40 pb-32 overflow-hidden spotlight">
        {/* Background Pattern */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="absolute top-1/4 right-1/4 opacity-20">
          <div className="hexagon hexagon-network"></div>
        </div>
        
        <div className="absolute top-1/3 left-1/4 glowing-dot"></div>
        <div className="absolute top-2/3 right-1/3 glowing-dot delay-200"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 glass-dark rounded-full border border-emerald-500/30 mb-8 animate-fadeInUp">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-400">Explore Our Course Catalog</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight animate-fadeInUp delay-100">
              Professional Courses for 
              <span className="block mt-2 gradient-text-emerald neon-glow">
                Skill Development
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-200">
              Explore our wide range of courses designed to enhance your skills and advance your career through expert-led training programs
            </p>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {courses.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg">No courses available at the moment.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.map((course) => (
                  <div key={course._id} className="rounded-xl glass-dark border border-emerald-500/20 shadow-lg overflow-hidden hover:shadow-emerald-glow hover:border-emerald-500/40 transition-all group flex flex-col h-full">
                    {course.image && (
                      <div className="h-48 overflow-hidden flex-shrink-0">
                        <img 
                          src={course.image} 
                          alt={course.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3 flex-wrap">
                        <span className="text-xs px-2 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                          {course.level}
                        </span>
                        <span className="text-xs px-2 py-1 bg-accent-100 text-accent-700 rounded-full font-medium">
                          {course.category}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-400 transition-colors font-display">{course.title}</h3>
                      
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed line-clamp-2">{course.description}</p>
                      
                      {course.syllabus && course.syllabus.length > 0 && (
                        <div className="mb-4 pb-4 border-b border-gray-800">
                          <h4 className="text-sm font-semibold text-white mb-3 flex items-center">
                            <svg className="w-4 h-4 text-emerald-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            What You'll Learn
                          </h4>
                          <ul className="space-y-2">
                            {course.syllabus.slice(0, 3).map((item, index) => (
                              <li key={index} className="flex items-start text-sm text-gray-300">
                                <svg className="w-4 h-4 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span className="leading-relaxed">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      
                      <div className="mt-auto pt-4 border-t border-gray-800">
                        <div className="flex justify-between items-center mb-4">
                          <span className="text-sm text-gray-300 flex items-center font-medium">
                            <svg className="w-4 h-4 mr-1.5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {course.duration}
                          </span>
                          {course.price > 0 && (
                            <span className="text-2xl font-bold gradient-text-emerald">${course.price}</span>
                          )}
                        </div>
                        
                        {/* Success Message */}
                        {downloadSuccess === course._id && (
                          <div className="mb-3 p-3 bg-green-50 border border-green-200 rounded-lg flex items-center gap-2 animate-fadeIn">
                            <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm font-medium text-green-800">Downloaded Successfully!</span>
                          </div>
                        )}
                        
                        <div className="flex gap-2">
                          <Link href={`/dashboard/enroll?courseId=${course._id}`} className="btn-primary flex-1 text-center">
                            Enroll Now
                          </Link>
                          <button
                            onClick={() => handleDownloadDetails(course)}
                            disabled={downloadingId === course._id}
                            className="px-4 py-3 glass-dark border-2 border-emerald-500/30 text-emerald-400 rounded-lg font-semibold hover:bg-emerald-500/10 hover:border-emerald-500/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                            title="Download Course Details"
                          >
                            {downloadingId === course._id ? (
                              <svg className="w-5 h-5 animate-spin" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                            ) : (
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                              </svg>
                            )}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
