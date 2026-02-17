'use client';

import Link from 'next/link';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const { user, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900/95 border-b border-emerald-500/20 sticky top-0 z-50 shadow-lg shadow-emerald-500/10 backdrop-blur-md">
      <div className="w-full px-2 sm:px-3">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Far Left Corner Design */}
          <Link href="/" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center shadow-md shadow-emerald-500/30 group-hover:shadow-lg group-hover:shadow-emerald-500/50 group-hover:scale-105 transition-all duration-200">
              <svg className="w-5 h-5 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div className="hidden lg:flex flex-col leading-none">
              <span className="text-sm font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Global Education
              </span>
              <span className="text-xs font-semibold text-gray-400">
                Council
              </span>
            </div>
            <span className="hidden sm:block lg:hidden text-base font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
              GEC
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-300 hover:bg-gray-800 hover:text-emerald-400 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/" className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
              Home
            </Link>
            <Link href="/about" className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
              About
            </Link>
            <Link href="/services" className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
              Services
            </Link>
            <Link href="/courses" className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
              Courses
            </Link>
            <Link href="/universities" className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
              Universities
            </Link>
            <Link href="/blog" className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
              Blog
            </Link>
            <Link href="/contact" className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
              Contact
            </Link>
            
            <div className="h-8 w-px bg-gray-700 mx-3"></div>
            
            {user ? (
              <>
                <Link href="/dashboard" className="flex items-center space-x-2 px-4 py-2.5 text-sm font-semibold text-gray-900 bg-emerald-400 hover:bg-emerald-500 border border-emerald-500 rounded-lg transition-all shadow-lg shadow-emerald-500/30">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                  <span>Dashboard</span>
                </Link>
                {user.role === 'admin' && (
                  <Link href="/admin" className="flex items-center space-x-2 px-4 py-2.5 text-sm font-semibold text-emerald-400 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 rounded-lg transition-all">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span>Admin</span>
                  </Link>
                )}
                <button onClick={logout} className="px-4 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="px-5 py-2.5 text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all">
                  Login
                </Link>
                <Link href="/register" className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-gray-900 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50">
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-800 animate-fadeInUp">
            <div className="space-y-1">
              <Link href="/" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
                Home
              </Link>
              <Link href="/about" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
                About
              </Link>
              <Link href="/services" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
                Services
              </Link>
              <Link href="/courses" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
                Courses
              </Link>
              <Link href="/universities" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
                Universities
              </Link>
              <Link href="/blog" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
                Blog
              </Link>
              <Link href="/contact" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-emerald-400 hover:bg-gray-800/50 rounded-lg transition-all">
                Contact
              </Link>
              
              <div className="pt-4 mt-4 border-t border-gray-800">
                {user ? (
                  <>
                    <Link href="/dashboard" className="flex items-center space-x-2 px-3 py-2 text-base font-semibold text-gray-900 bg-emerald-400 border border-emerald-500 rounded-lg mb-2 shadow-lg shadow-emerald-500/30">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                      <span>Dashboard</span>
                    </Link>
                    {user.role === 'admin' && (
                      <Link href="/admin" className="flex items-center space-x-2 px-3 py-2 text-base font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 rounded-lg mb-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                        <span>Admin</span>
                      </Link>
                    )}
                    <button onClick={logout} className="block w-full text-left px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all">
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link href="/login" className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg mb-2 transition-all">
                      Login
                    </Link>
                    <Link href="/register" className="block text-center inline-flex items-center justify-center px-6 py-3 text-base font-semibold text-gray-900 bg-gradient-to-r from-emerald-400 to-green-400 rounded-xl shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/40 hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-500/50">
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
