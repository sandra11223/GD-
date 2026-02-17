export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-48 pb-40 overflow-hidden min-h-[60vh] flex items-center">
        {/* Background Pattern */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-8 px-4 py-2 glass-dark rounded-full border border-emerald-500/30 animate-fadeIn">
            <span className="text-sm font-semibold text-emerald-400">📧 We're Here to Help</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp">Contact Us</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-100">
            Get in touch with our team for any inquiries or support
          </p>
        </div>
      </section>

      <div className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Information Card */}
              <div className="glass-dark rounded-xl shadow-emerald-glow border border-emerald-500/20 p-8 flex flex-col h-full animate-fadeInUp delay-200 hover-lift">
                <h2 className="text-3xl font-bold mb-8 text-white">Get in Touch</h2>
                
                <div className="space-y-6 flex-1">
                  <div className="flex items-start animate-slideInLeft delay-300">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0 border border-emerald-500/30">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-emerald-400 text-lg">Email</h3>
                      <p className="text-gray-400">info@globaleducation.com</p>
                      <p className="text-gray-400">support@globaleducation.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-slideInLeft delay-400">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0 border border-emerald-500/30">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-emerald-400 text-lg">Phone</h3>
                      <p className="text-gray-400">+1 234 567 8900</p>
                      <p className="text-gray-400">+1 234 567 8901</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-slideInLeft delay-500">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0 border border-emerald-500/30">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-emerald-400 text-lg">Address</h3>
                      <p className="text-gray-400">
                        123 Education Street<br />
                        Suite 456<br />
                        City, State 12345<br />
                        Country
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start animate-slideInLeft delay-600">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mr-4 flex-shrink-0 border border-emerald-500/30">
                      <svg className="w-6 h-6 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2 text-emerald-400 text-lg">Business Hours</h3>
                      <p className="text-gray-400">Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p className="text-gray-400">Saturday: 10:00 AM - 4:00 PM</p>
                      <p className="text-gray-400">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Send Message Card */}
              <div className="glass-dark rounded-xl shadow-emerald-glow border border-emerald-500/20 p-8 flex flex-col h-full animate-fadeInUp delay-300 hover-lift">
                <h2 className="text-3xl font-bold mb-8 text-white">Send a Message</h2>
                <p className="text-gray-400 mb-6 leading-relaxed">
                  For inquiries and enrollment, please <a href="/login" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">login</a> or <a href="/register" className="text-emerald-400 hover:text-emerald-300 font-semibold transition-colors">register</a> to submit your inquiry through our portal.
                </p>
                
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6 flex-1">
                  <h3 className="font-bold mb-4 text-white text-lg flex items-center">
                    <svg className="w-5 h-5 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    Quick Links
                  </h3>
                  <ul className="space-y-3">
                    <li>
                      <a href="/register" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                        </svg>
                        Register for an Account
                      </a>
                    </li>
                    <li>
                      <a href="/login" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                        </svg>
                        Login to Your Account
                      </a>
                    </li>
                    <li>
                      <a href="/courses" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Browse Courses
                      </a>
                    </li>
                    <li>
                      <a href="/universities" className="flex items-center text-emerald-400 hover:text-emerald-300 transition-colors font-medium">
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        View Partner Universities
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
