'use client';

import { useState, useEffect } from 'react';
import api from '../../services/api';

export default function Universities() {
  const [universities, setUniversities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUniversities();
  }, []);

  const fetchUniversities = async () => {
    try {
      const { data } = await api.get('/universities');
      setUniversities(data);
    } catch (error) {
      console.error('Error fetching universities:', error);
    } finally {
      setLoading(false);
    }
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

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 glass-dark rounded-full border border-emerald-500/30 mb-8 animate-fadeInUp">
              <span className="w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-400">200+ Partner Universities Worldwide</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display mb-6 leading-tight animate-fadeInUp delay-100">
              Partner Universities 
              <span className="block mt-2 gradient-text-emerald neon-glow">
                Around the World
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto animate-fadeInUp delay-200">
              Discover our network of prestigious universities across 50+ countries offering world-class education and research opportunities
            </p>
          </div>
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {universities.length === 0 ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/30">
                  <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <p className="text-gray-300 text-lg">No universities available at the moment.</p>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {universities.map((university) => (
                  <div key={university._id} className="rounded-xl glass-dark border border-emerald-500/20 shadow-lg overflow-hidden hover:shadow-emerald-glow hover:border-emerald-500/40 transition-all group flex flex-col h-full">
                    {university.logo && (
                      <div className="h-40 overflow-hidden bg-gray-900/50 flex items-center justify-center p-4 flex-shrink-0">
                        <img 
                          src={university.logo} 
                          alt={university.name}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    )}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-emerald-400 transition-colors">{university.name}</h3>
                      <p className="text-sm text-gray-300 mb-3 flex items-center">
                        <svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {university.city}, {university.country}
                      </p>
                      {university.ranking && (
                        <span className="inline-block text-xs px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full mb-3 font-medium border border-emerald-500/30">
                          🏆 World Ranking: #{university.ranking}
                        </span>
                      )}
                      <p className="text-sm text-gray-300 mb-4 line-clamp-2 flex-grow">{university.description}</p>
                      
                      {university.programs && university.programs.length > 0 && (
                        <div className="mb-4 pt-4 border-t border-gray-800">
                          <h4 className="text-xs font-semibold text-emerald-400 mb-2">Popular Programs:</h4>
                          <div className="flex flex-wrap gap-2">
                            {university.programs.slice(0, 3).map((program, index) => (
                              <span key={index} className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-1 rounded font-medium border border-emerald-500/30">
                                {program}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                      
                      {university.tuitionFee && (
                        <p className="text-sm text-gray-300 mb-4 pt-4 border-t border-gray-800 flex items-center">
                          <svg className="w-4 h-4 mr-1 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <strong className="text-emerald-400 mr-1">Tuition:</strong> {university.tuitionFee}
                        </p>
                      )}
                      
                      <div className="mt-auto">
                        {university.website && (
                          <a
                            href={university.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-full px-6 py-3 bg-emerald-500 text-gray-900 rounded-xl font-semibold hover:bg-emerald-600 transition-all shadow-emerald-glow hover:shadow-emerald-glow-lg"
                          >
                            Visit Website →
                          </a>
                        )}
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
