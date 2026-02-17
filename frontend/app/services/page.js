'use client';

import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Services() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data } = await api.get('/services');
      setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#0a0f1a]">
        <div className="spinner"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section - Dark Theme */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-40 pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 tech-grid opacity-20"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-500/10 rounded-full mix-blend-screen filter blur-3xl animate-blob animation-delay-2000"></div>

        {/* Hexagons and Glowing Dots */}
        <div className="absolute top-1/4 right-1/4 opacity-20">
          <div className="hexagon hexagon-network"></div>
        </div>
        
        <div className="absolute top-1/4 left-1/4 glowing-dot"></div>
        <div className="absolute top-1/3 right-1/3 glowing-dot delay-200"></div>
        <div className="absolute bottom-1/4 right-1/4 glowing-dot delay-400"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 glass-dark border border-emerald-500/30 rounded-full shadow-emerald-glow mb-8 animate-fadeInUp">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-semibold text-emerald-400">Comprehensive B2B Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fadeInUp delay-100">
              Our B2B Services for 
              <span className="block mt-2 gradient-text-emerald neon-glow">
                Educational Institutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-200">
              Comprehensive education services to support your institution's global learning journey and partnership development
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-7xl mx-auto">
            {services.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="text-gray-400 text-lg">No services available at the moment.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <div key={service._id} className="glass-dark rounded-xl overflow-hidden hover-lift group flex flex-col h-full border border-emerald-500/20 hover:border-emerald-500/40 shadow-lg hover:shadow-emerald-glow transition-all">
                    {service.icon && (
                      <div className="h-48 overflow-hidden relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-green-600/20 z-10"></div>
                        <img 
                          src={service.icon} 
                          alt={service.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">{service.title}</h3>
                      <p className="text-sm text-gray-300 mb-4 leading-relaxed flex-1 line-clamp-3">{service.description}</p>
                      {service.features && service.features.length > 0 && (
                        <div className="pt-4 border-t border-emerald-500/20 mt-auto">
                          <h4 className="text-xs font-semibold text-white mb-3 flex items-center">
                            <svg className="w-4 h-4 mr-2 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {service.features.map((feature, index) => (
                              <li key={index} className="flex items-start text-xs text-gray-300">
                                <svg className="w-3 h-3 text-emerald-400 mr-2 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
