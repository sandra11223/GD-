'use client';

import Link from 'next/link';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
      {/* Hero Section - Modern Minimalist Design with Enhanced Animations */}
      <section className="relative pt-40 pb-28 overflow-hidden min-h-screen flex items-center">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 -z-10">
          {/* Animated Grid */}
          <div className="absolute inset-0 unique-grid opacity-10"></div>
          
          {/* Floating Blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-green-500/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-500/20 rounded-full mix-blend-screen filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
          
          {/* Glowing Dots */}
          <div className="absolute top-1/4 left-1/4 glowing-dot animate-heartbeat"></div>
          <div className="absolute top-1/3 right-1/3 glowing-dot animate-heartbeat delay-200"></div>
          <div className="absolute bottom-1/3 left-1/3 glowing-dot animate-heartbeat delay-400"></div>
          <div className="absolute bottom-1/4 right-1/4 glowing-dot animate-heartbeat delay-600"></div>
          
          {/* Morphing Shapes */}
          <div className="absolute top-1/4 right-1/4 opacity-20">
            <div className="morphing-shape w-32 h-32 bg-emerald-500/20 border-2 border-emerald-500/30"></div>
          </div>
          <div className="absolute bottom-1/3 left-1/5 opacity-20">
            <div className="morphing-shape w-24 h-24 bg-green-500/20 border-2 border-green-500/30 animation-delay-2000"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            {/* Badge with Bounce Animation */}
            <div className="flex justify-center mb-8 animate-bounceIn">
              <div className="inline-flex items-center gap-2 px-4 py-2 glass-dark border border-emerald-500/40 rounded-full hover:border-emerald-500/60 hover:shadow-emerald-glow transition-all duration-300 hover-tada">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-emerald-glow"></span>
                </span>
                <span className="text-sm font-medium text-emerald-400">Trusted by 500+ Educational Institutions</span>
              </div>
            </div>

            {/* Main Heading with Multiple Animations */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-fadeInUp">
                <span className="inline-block animate-slideInLeft">Transform</span>{' '}
                <span className="inline-block animate-slideInRight delay-100">Education</span>
                <span className="block mt-2 gradient-text-emerald animate-shimmer neon-glow">
                  Through Global Partnerships
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-300">
                Empowering educational institutions to expand globally through strategic partnerships with leading universities and innovative skill development programs.
              </p>
            </div>

            {/* CTA Buttons with Staggered Animations */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link href="/register" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-gray-900 rounded-xl font-semibold hover:from-emerald-500 hover:to-green-600 transition-all shadow-emerald-glow hover:shadow-emerald-glow-lg hover:scale-105 animate-slideInBounce delay-400">
                Get Started Free
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-8 py-4 glass-dark text-emerald-400 rounded-xl font-semibold border-2 border-emerald-500/40 hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all hover-jello animate-slideInBounce delay-500">
                Learn More
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>

            {/* Stats Grid with Individual Animations */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center group animate-flipIn delay-600">
                <div className="text-4xl md:text-5xl font-bold gradient-text-emerald mb-2 group-hover:scale-110 group-hover:animate-tada transition-transform">200+</div>
                <div className="text-sm text-gray-300 font-medium">Partner Universities</div>
              </div>
              <div className="text-center group animate-flipIn delay-700">
                <div className="text-4xl md:text-5xl font-bold gradient-text-emerald mb-2 group-hover:scale-110 group-hover:animate-tada transition-transform">50+</div>
                <div className="text-sm text-gray-300 font-medium">Countries</div>
              </div>
              <div className="text-center group animate-flipIn delay-800">
                <div className="text-4xl md:text-5xl font-bold gradient-text-emerald mb-2 group-hover:scale-110 group-hover:animate-tada transition-transform">10K+</div>
                <div className="text-sm text-gray-300 font-medium">Success Stories</div>
              </div>
              <div className="text-center group animate-flipIn delay-900">
                <div className="text-4xl md:text-5xl font-bold gradient-text-emerald mb-2 group-hover:scale-110 group-hover:animate-tada transition-transform">98%</div>
                <div className="text-sm text-gray-300 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section - Modern Card Design */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16 scroll-reveal">
              <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30 animate-bounceIn">
                OUR SERVICES
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Comprehensive B2B Solutions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Tailored services for educational institutions seeking global partnerships and growth opportunities
              </p>
            </div>

            {/* Services Grid - Horizontal Cards */}
            <div className="space-y-6">
              {/* Service 1 - Overseas Education Consulting */}
              <div className="scroll-reveal group glass-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-glow transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40 animate-slideInLeft">
                <div className="flex flex-col md:flex-row gap-0 items-stretch">
                  {/* Image Section */}
                  <div className="md:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80"
                      alt="Overseas Education Consulting"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-emerald-glow">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Overseas Education Consulting</h3>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Expert B2B consulting services for international education partnerships, visa support for groups, and scholarship collaborations.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">Group Visa Processing</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">Scholarship Programs</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">Country Guidance</span>
                    </div>
                    <div>
                      <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-green-500 text-gray-900 rounded-xl font-semibold hover:from-emerald-500 hover:to-green-600 transition-all shadow-emerald-glow hover:shadow-emerald-glow-lg">
                        Learn More
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 2 - Skill Development Programs */}
              <div className="scroll-reveal group glass-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-glow transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40 animate-slideInRight">
                <div className="flex flex-col md:flex-row-reverse gap-0 items-stretch">
                  {/* Image Section */}
                  <div className="md:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                      alt="Skill Development Programs"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-emerald-glow">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">Skill Development Programs</h3>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Scalable corporate training programs with customizable duration, difficulty levels, and ROI-focused curriculum design.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">Custom Training</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">Flexible Scheduling</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">Certifications</span>
                    </div>
                    <div>
                      <Link href="/courses" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-green-500 text-gray-900 rounded-xl font-semibold hover:from-emerald-500 hover:to-green-600 transition-all shadow-emerald-glow hover:shadow-emerald-glow-lg">
                        View Courses
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service 3 - University Partnership Programs */}
              <div className="scroll-reveal group glass-dark rounded-2xl overflow-hidden shadow-lg hover:shadow-emerald-glow transition-all duration-300 border border-emerald-500/20 hover:border-emerald-500/40 animate-slideInLeft">
                <div className="flex flex-col md:flex-row gap-0 items-stretch">
                  {/* Image Section */}
                  <div className="md:w-80 h-64 md:h-auto flex-shrink-0 overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=800&q=80"
                      alt="University Partnership Programs"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content Section */}
                  <div className="flex-1 p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-xl flex items-center justify-center shadow-emerald-glow">
                        <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-white">University Partnership Programs</h3>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      Access our comprehensive database of 200+ partner universities with advanced filters for country, program type, and rankings.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">B2B Affiliations</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">Bulk Enrollment</span>
                      <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-lg text-sm font-medium border border-emerald-500/30">Partnership Managers</span>
                    </div>
                    <div>
                      <Link href="/universities" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-400 to-green-500 text-gray-900 rounded-xl font-semibold hover:from-emerald-500 hover:to-green-600 transition-all shadow-emerald-glow hover:shadow-emerald-glow-lg">
                        View Partners
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30 animate-bounceIn">SUCCESS STORIES</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Trusted by Leading Institutions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear from our partners about their success stories and transformative experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Testimonial 1 */}
            <div className="scroll-reveal glass-dark hover-lift p-8 flex flex-col h-full rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all animate-zoomIn">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4 border-2 border-emerald-500/40">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200"
                    alt="Dr. Michael Chen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-base mb-1">Dr. Michael Chen</h4>
                  <p className="text-sm text-emerald-400 font-medium mb-0.5">Partnership Coordinator</p>
                  <p className="text-xs text-gray-400">Tech University, Singapore</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex text-emerald-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                  "Global Education Council helped us establish partnerships with 15+ international universities, expanding our student exchange programs significantly. Their B2B approach and dedicated support made the entire process seamless."
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs text-gray-400">
                <span>Partnership Since 2021</span>
                <span className="text-emerald-400 font-semibold">15+ Partnerships</span>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="scroll-reveal glass-dark hover-lift p-8 flex flex-col h-full rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all animate-zoomIn delay-200">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4 border-2 border-emerald-500/40">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200"
                    alt="Sarah Williams"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-base mb-1">Sarah Williams</h4>
                  <p className="text-sm text-emerald-400 font-medium mb-0.5">Director of Programs</p>
                  <p className="text-xs text-gray-400">Business Institute, London</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex text-emerald-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                  "Their B2B skill development courses have been instrumental in upskilling our corporate clients. The ROI-focused approach and scalability options perfectly align with our business model. Excellent partnership!"
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs text-gray-400">
                <span>Partnership Since 2020</span>
                <span className="text-emerald-400 font-semibold">500+ Students Trained</span>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="scroll-reveal glass-dark hover-lift p-8 flex flex-col h-full rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all animate-zoomIn delay-400">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 mr-4 border-2 border-emerald-500/40">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200"
                    alt="Rajesh Kumar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-bold text-white text-base mb-1">Rajesh Kumar</h4>
                  <p className="text-sm text-emerald-400 font-medium mb-0.5">CEO & Founder</p>
                  <p className="text-xs text-gray-400">Training Academy, Mumbai</p>
                </div>
              </div>
              <div className="flex-1 flex flex-col">
                <div className="flex text-emerald-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed italic flex-1">
                  "The visa support and group consultation services streamlined our international student placement process. Their expertise in B2B partnerships has been invaluable for our growth. Highly recommended!"
                </p>
              </div>
              <div className="pt-4 mt-4 border-t border-emerald-500/20 flex items-center justify-between text-xs text-gray-400">
                <span>Partnership Since 2019</span>
                <span className="text-emerald-400 font-semibold">1000+ Placements</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Partner Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 scroll-reveal">
            <span className="inline-block px-4 py-2 bg-emerald-500/10 text-emerald-400 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30 animate-bounceIn">WHY CHOOSE US</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Partner With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive support and proven strategies to help your institution thrive globally
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Feature 1 */}
            <div className="scroll-reveal glass-dark hover-lift p-8 flex flex-col h-full rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all animate-fadeInUp">
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 mx-auto flex-shrink-0 border border-emerald-500/30">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-white">Strategic Partnerships</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                  Build long-term B2B relationships with global education leaders
                </p>
                <ul className="space-y-2 text-xs text-gray-400 text-left bg-gray-900/50 rounded-lg p-4 border border-emerald-500/10">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Dedicated account managers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Regular partnership reviews</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Growth strategy planning</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="scroll-reveal glass-dark hover-lift p-8 flex flex-col h-full rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all animate-fadeInUp delay-200">
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 mx-auto flex-shrink-0 border border-emerald-500/30">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-white">Scalable Solutions</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                  Programs designed for institutional growth with flexible options
                </p>
                <ul className="space-y-2 text-xs text-gray-400 text-left bg-gray-900/50 rounded-lg p-4 border border-emerald-500/10">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Flexible pricing models</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Volume-based discounts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Custom program design</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="scroll-reveal glass-dark hover-lift p-8 flex flex-col h-full rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all animate-fadeInUp delay-400">
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 mx-auto flex-shrink-0 border border-emerald-500/30">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-white">Clear ROI Metrics</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                  Business-focused solutions with transparent reporting
                </p>
                <ul className="space-y-2 text-xs text-gray-400 text-left bg-gray-900/50 rounded-lg p-4 border border-emerald-500/10">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Performance dashboards</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Monthly analytics reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Success tracking tools</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Feature 4 */}
            <div className="scroll-reveal glass-dark hover-lift p-8 flex flex-col h-full rounded-2xl border border-emerald-500/20 hover:border-emerald-500/40 transition-all animate-fadeInUp delay-600">
              <div className="w-16 h-16 rounded-xl bg-emerald-500/10 flex items-center justify-center mb-6 mx-auto flex-shrink-0 border border-emerald-500/30">
                <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div className="text-center flex-1 flex flex-col">
                <h3 className="text-lg font-bold mb-3 text-white">End-to-End Support</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4 flex-1">
                  Complete assistance from setup to ongoing collaboration
                </p>
                <ul className="space-y-2 text-xs text-gray-400 text-left bg-gray-900/50 rounded-lg p-4 border border-emerald-500/10">
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>24/7 technical support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Training & onboarding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-400 mr-2">•</span>
                    <span>Marketing assistance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-black border-y border-emerald-500/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-4xl mx-auto scroll-reveal">
            <div className="inline-flex items-center px-4 py-2 glass-dark rounded-full border border-emerald-500/40 shadow-lg mb-6 animate-bounceIn">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-400">Join 500+ Partner Institutions</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight animate-fadeInUp">
              Ready to Expand Your <span className="gradient-text-emerald">Global Reach?</span>
            </h2>

            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto animate-fadeInUp delay-200">
              Join our network of educational institutions and corporate partners. Start building meaningful international collaborations today.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mb-8 animate-fadeInUp delay-400">
              <Link href="/register" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-400 to-green-500 text-gray-900 rounded-xl font-semibold hover:from-emerald-500 hover:to-green-600 transition-all shadow-emerald-glow hover:shadow-emerald-glow-lg text-lg hover:scale-105">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
                Become a Partner
              </Link>
              <Link href="/contact" className="inline-flex items-center gap-2 px-8 py-4 glass-dark text-emerald-400 rounded-xl font-semibold border-2 border-emerald-500/40 hover:border-emerald-500/60 hover:bg-emerald-500/10 transition-all text-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Schedule Consultation
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400 animate-fadeInUp delay-600">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Free consultation
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                24/7 support
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
