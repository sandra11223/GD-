'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Partnerships() {
  const [filters, setFilters] = useState({
    country: '',
    programType: '',
    ranking: ''
  });

  const partnershipTypes = [
    {
      title: 'University Partnerships',
      description: 'Connect with top-ranked universities worldwide for student placements and academic collaborations',
      icon: '🎓',
      benefits: ['Student Exchange Programs', 'Joint Degree Programs', 'Research Collaborations', 'Faculty Exchange']
    },
    {
      title: 'Corporate Training',
      description: 'Scalable skill development programs tailored for corporate workforce training',
      icon: '💼',
      benefits: ['Custom Training Modules', 'ROI-Focused Programs', 'Flexible Scheduling', 'Certification Programs']
    },
    {
      title: 'Education Consultancy',
      description: 'B2B consulting services for visa support, scholarship partnerships, and group placements',
      icon: '🌍',
      benefits: ['Visa Support Services', 'Scholarship Partnerships', 'Group Placement Assistance', 'Country-Specific Guidance']
    },
    {
      title: 'Recruitment Agency',
      description: 'Partner with us to streamline student recruitment and placement processes',
      icon: '🤝',
      benefits: ['Lead Generation', 'Application Processing', 'Document Verification', 'Commission Structure']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-40 pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>
        
        <div className="absolute top-1/4 right-1/4 opacity-20">
          <div className="hexagon hexagon-network"></div>
        </div>
        
        <div className="absolute top-1/3 left-1/4 glowing-dot"></div>
        <div className="absolute top-2/3 right-1/3 glowing-dot delay-200"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block mb-8 px-4 py-2 glass-dark rounded-full border border-emerald-500/30 animate-fadeInUp">
            <span className="text-sm font-semibold text-emerald-400">🤝 B2B Partnership Models</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fadeInUp delay-100">Partnership Opportunities</h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            Explore B2B partnership models designed for educational institutions and corporate partners
          </p>
        </div>
      </section>

      <div className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Partnership Models</h2>
              <p className="text-gray-300">Choose the partnership type that aligns with your business goals</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {partnershipTypes.map((type, index) => (
                <div key={index} className="glass-dark rounded-xl p-6 border border-emerald-500/20 hover:border-emerald-500/40 shadow-lg hover:shadow-emerald-glow transition-all group">
                  <div className="flex items-start mb-4">
                    <div className="text-5xl mr-4">{type.icon}</div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-2">{type.title}</h3>
                      <p className="text-gray-300">{type.description}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-semibold text-emerald-400 mb-2">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {type.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start">
                          <span className="text-emerald-400 mr-2">✓</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href="/dashboard/partnership" 
                    className="mt-6 inline-block text-emerald-400 hover:text-emerald-300 transition-colors font-semibold"
                  >
                    Apply for Partnership →
                  </Link>
                </div>
              ))}
            </div>

            <div className="glass-dark rounded-xl p-8 border border-emerald-500/20 shadow-lg mb-12">
              <h3 className="text-2xl font-semibold text-white mb-6">Why Partner With Global Education Council?</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl mb-2">📊</div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Clear ROI</h4>
                  <p className="text-gray-300 text-sm">Measurable returns on investment with transparent reporting and analytics</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🚀</div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Scalability</h4>
                  <p className="text-gray-300 text-sm">Flexible solutions that grow with your business needs</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🌐</div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Global Reach</h4>
                  <p className="text-gray-300 text-sm">Access to 50+ countries and 200+ partner universities</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">💡</div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Expert Support</h4>
                  <p className="text-gray-300 text-sm">Dedicated account managers and 24/7 technical support</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">🔒</div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Secure Platform</h4>
                  <p className="text-gray-300 text-sm">Enterprise-grade security and data protection</p>
                </div>
                <div>
                  <div className="text-3xl mb-2">📈</div>
                  <h4 className="font-semibold text-emerald-400 mb-2">Growth Tools</h4>
                  <p className="text-gray-300 text-sm">Marketing support and lead generation assistance</p>
                </div>
              </div>
            </div>

            <div className="glass-dark rounded-xl p-8 text-center border border-emerald-500/30 shadow-emerald-glow">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Become a Partner?</h3>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Join our network of successful partners and unlock new business opportunities. Login to submit a detailed partnership application.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link href="/register" className="btn-primary">
                  Register as Partner
                </Link>
                <Link href="/login" className="btn-secondary">
                  Login to Apply
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
