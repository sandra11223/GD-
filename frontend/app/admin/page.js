'use client';

import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import DashboardLayout from '../../components/DashboardLayout';
import api from '../../services/api';
import Link from 'next/link';

function AdminContent() {
  const [stats, setStats] = useState({
    courses: 0,
    universities: 0,
    services: 0,
    enrollments: 0,
    inquiries: 0,
    partnerships: 0,
    subscribers: 0
  });
  const [recentActivities, setRecentActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
    fetchRecentActivities();
  }, []);

  const fetchStats = async () => {
    try {
      const [courses, universities, services, enrollments, inquiries, partnerships, newsletter] = await Promise.all([
        api.get('/courses'),
        api.get('/universities'),
        api.get('/services'),
        api.get('/enrollments/all'),
        api.get('/inquiries/all'),
        api.get('/partnerships/all'),
        api.get('/newsletter')
      ]);

      setStats({
        courses: courses.data.length,
        universities: universities.data.length,
        services: services.data.length,
        enrollments: enrollments.data.length,
        inquiries: inquiries.data.length,
        partnerships: partnerships.data.length,
        subscribers: newsletter.data.count
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRecentActivities = async () => {
    try {
      const [enrollments, inquiries, partnerships] = await Promise.all([
        api.get('/enrollments/all'),
        api.get('/inquiries/all'),
        api.get('/partnerships/all')
      ]);

      const activities = [
        ...enrollments.data.slice(0, 3).map(e => ({
          type: 'enrollment',
          title: `New enrollment: ${e.studentName}`,
          time: e.createdAt,
          icon: '📝',
          color: 'text-green-400'
        })),
        ...inquiries.data.slice(0, 3).map(i => ({
          type: 'inquiry',
          title: `New inquiry from ${i.name}`,
          time: i.createdAt,
          icon: '💬',
          color: 'text-blue-400'
        })),
        ...partnerships.data.slice(0, 3).map(p => ({
          type: 'partnership',
          title: `Partnership request: ${p.institutionName}`,
          time: p.createdAt,
          icon: '🤝',
          color: 'text-purple-400'
        }))
      ].sort((a, b) => new Date(b.time) - new Date(a.time)).slice(0, 8);

      setRecentActivities(activities);
    } catch (error) {
      console.error('Error fetching activities:', error);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 min-h-screen">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Admin Dashboard</h1>
          <p className="text-gray-400">Welcome back! Here's what's happening with your platform.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <span className="text-xs text-gray-400">Total</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stats.courses}</h3>
            <p className="text-sm text-gray-400">Courses</p>
          </div>

          <div className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
              <span className="text-xs text-gray-400">Partners</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stats.universities}</h3>
            <p className="text-sm text-gray-400">Universities</p>
          </div>

          <div className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <span className="text-xs text-gray-400">Active</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stats.enrollments}</h3>
            <p className="text-sm text-gray-400">Enrollments</p>
          </div>

          <div className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📧</span>
              </div>
              <span className="text-xs text-gray-400">Active</span>
            </div>
            <h3 className="text-3xl font-bold text-white mb-1">{stats.subscribers}</h3>
            <p className="text-sm text-gray-400">Subscribers</p>
          </div>
        </div>

        {/* Secondary Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="glass-dark rounded-xl p-6 border border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Services</p>
                <p className="text-2xl font-bold text-white">{stats.services}</p>
              </div>
              <div className="text-3xl">⚙️</div>
            </div>
          </div>

          <div className="glass-dark rounded-xl p-6 border border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Inquiries</p>
                <p className="text-2xl font-bold text-white">{stats.inquiries}</p>
              </div>
              <div className="text-3xl">💬</div>
            </div>
          </div>

          <div className="glass-dark rounded-xl p-6 border border-emerald-500/20">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-1">Partnerships</p>
                <p className="text-2xl font-bold text-white">{stats.partnerships}</p>
              </div>
              <div className="text-3xl">🤝</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-6">Quick Actions</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/admin/courses" className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📚</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Manage Courses</h3>
                    <p className="text-gray-400 text-sm">Add, edit, or delete courses</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/universities" className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🎓</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Manage Universities</h3>
                    <p className="text-gray-400 text-sm">Add, edit, or delete universities</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/services" className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">⚙️</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Manage Services</h3>
                    <p className="text-gray-400 text-sm">Add, edit, or delete services</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/enrollments" className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">View Enrollments</h3>
                    <p className="text-gray-400 text-sm">Manage student enrollments</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/inquiries" className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">View Inquiries</h3>
                    <p className="text-gray-400 text-sm">Manage user inquiries</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/partnerships" className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Partnership Applications</h3>
                    <p className="text-gray-400 text-sm">Review and approve partnerships</p>
                  </div>
                </div>
              </Link>

              <Link href="/admin/subscribers" className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <span className="text-2xl">📧</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Newsletter Subscribers</h3>
                    <p className="text-gray-400 text-sm">View and manage subscribers</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Recent Activities</h2>
            <div className="glass-dark rounded-xl p-6 border border-emerald-500/20">
              {recentActivities.length === 0 ? (
                <p className="text-gray-400 text-center py-8">No recent activities</p>
              ) : (
                <div className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3 pb-4 border-b border-gray-800 last:border-0 last:pb-0">
                      <div className="text-2xl flex-shrink-0">{activity.icon}</div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-medium truncate">{activity.title}</p>
                        <p className="text-xs text-gray-400 mt-1">
                          {new Date(activity.time).toLocaleDateString('en-US', {
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function AdminDashboard() {
  return (
    <ProtectedRoute adminOnly={true}>
      <DashboardLayout>
        <AdminContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
