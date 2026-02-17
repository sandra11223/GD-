'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Blog() {
  const [articles] = useState([
    {
      id: 1,
      title: "Top 10 Universities for International Students in 2024",
      excerpt: "Discover the best universities worldwide offering exceptional programs for international students, including scholarship opportunities and B2B partnership benefits.",
      category: "Education Trends",
      date: "2024-01-15",
      image: "🎓",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Successful B2B Education Partnerships",
      excerpt: "Learn how educational institutions can create strategic partnerships that drive growth, enhance student outcomes, and expand global reach.",
      category: "Partnership Case Studies",
      date: "2024-01-10",
      image: "🤝",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "ROI of Corporate Training Programs: A Complete Guide",
      excerpt: "Understand how to measure and maximize the return on investment for corporate skill development programs and bulk enrollment strategies.",
      category: "Business Insights",
      date: "2024-01-05",
      image: "📊",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Visa Support Services for Group Applications",
      excerpt: "Navigate the complexities of group visa applications for educational institutions with our comprehensive guide and B2B support services.",
      category: "Visa & Immigration",
      date: "2023-12-28",
      image: "✈️",
      readTime: "8 min read"
    },
    {
      id: 5,
      title: "Scholarship Partnerships: Creating Win-Win Opportunities",
      excerpt: "Explore how universities and corporate partners can collaborate on scholarship programs that benefit students and strengthen institutional relationships.",
      category: "Partnership Case Studies",
      date: "2023-12-20",
      image: "💰",
      readTime: "5 min read"
    },
    {
      id: 6,
      title: "Digital Transformation in Higher Education",
      excerpt: "How technology is reshaping B2B education services, from online learning platforms to AI-powered student matching systems.",
      category: "Education Trends",
      date: "2023-12-15",
      image: "💻",
      readTime: "6 min read"
    }
  ]);

  const categories = ["All", "Education Trends", "Partnership Case Studies", "Business Insights", "Visa & Immigration"];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  // Function to generate and download PDF
  const downloadPDF = (title, content) => {
    // Create PDF content
    const pdfContent = `
Global Education Council
${title}

${content}

---
For more information, visit: www.globaleducationcouncil.com
Contact: info@globaleducationcouncil.com
Phone: +1 (555) 123-4567

© ${new Date().getFullYear()} Global Education Council. All rights reserved.
    `.trim();

    // Create blob and download
    const blob = new Blob([pdfContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${title.replace(/\s+/g, '-').toLowerCase()}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  const resources = [
    {
      icon: "📄",
      title: "B2B Partnership Guide",
      description: "Complete whitepaper on establishing successful education partnerships",
      buttonText: "Download PDF (2.5 MB)",
      fileSize: "2.5 MB",
      pages: "45 pages",
      content: `B2B PARTNERSHIP GUIDE

TABLE OF CONTENTS
1. Introduction to B2B Education Partnerships
2. Benefits of Strategic Partnerships
3. Partnership Models and Frameworks
4. Step-by-Step Partnership Development
5. Legal and Compliance Considerations
6. Success Metrics and KPIs
7. Case Studies from Leading Institutions
8. Best Practices and Common Pitfalls

CHAPTER 1: INTRODUCTION
B2B education partnerships represent a strategic approach to expanding institutional reach, enhancing program offerings, and creating mutual value between educational organizations...

CHAPTER 2: BENEFITS
- Access to global networks
- Shared resources and expertise
- Enhanced student opportunities
- Revenue diversification
- Brand strengthening

CHAPTER 3: PARTNERSHIP MODELS
1. Articulation Agreements
2. Dual Degree Programs
3. Student Exchange Programs
4. Research Collaborations
5. Corporate Training Partnerships

[Full detailed content continues...]`
    },
    {
      icon: "📊",
      title: "ROI Calculator",
      description: "Calculate the return on investment for corporate training programs",
      buttonText: "Download Tool (Excel - 1.2 MB)",
      fileSize: "1.2 MB",
      format: "Excel Spreadsheet",
      content: `ROI CALCULATOR FOR CORPORATE TRAINING

INSTRUCTIONS:
This tool helps you calculate the return on investment for your corporate training programs.

KEY METRICS TO TRACK:
1. Training Costs
   - Program fees
   - Employee time
   - Materials and resources
   - Technology and platform costs

2. Benefits Measured
   - Productivity improvements
   - Error reduction
   - Employee retention
   - Revenue increase
   - Customer satisfaction

3. ROI FORMULA
   ROI = (Benefits - Costs) / Costs × 100%

EXAMPLE CALCULATION:
Total Training Investment: $50,000
Measured Benefits (Annual): $150,000
ROI = ($150,000 - $50,000) / $50,000 × 100% = 200%

TRACKING TEMPLATE:
Quarter | Investment | Benefits | ROI %
Q1      | $12,500   | $35,000  | 180%
Q2      | $12,500   | $40,000  | 220%
Q3      | $12,500   | $38,000  | 204%
Q4      | $12,500   | $37,000  | 196%

[Full calculator template continues...]`
    },
    {
      icon: "🎯",
      title: "University Selection Matrix",
      description: "Comprehensive guide for matching students with partner universities",
      buttonText: "Download Guide (PDF - 3.8 MB)",
      fileSize: "3.8 MB",
      pages: "62 pages",
      content: `UNIVERSITY SELECTION MATRIX

INTRODUCTION
This comprehensive guide helps educational institutions match students with the most suitable partner universities based on multiple criteria.

SELECTION CRITERIA:
1. Academic Programs
   - Program availability
   - Specializations offered
   - Accreditation status
   - Faculty expertise

2. Geographic Preferences
   - Country selection
   - Climate considerations
   - Cultural fit
   - Language requirements

3. Financial Factors
   - Tuition fees
   - Scholarship availability
   - Cost of living
   - Part-time work opportunities

4. Career Outcomes
   - Employment rates
   - Industry connections
   - Internship programs
   - Alumni network

5. Student Support Services
   - International student office
   - Housing assistance
   - Career counseling
   - Mental health services

DECISION MATRIX TEMPLATE:
University | Programs | Location | Cost | Career | Support | Total Score
Harvard    | 9/10    | 8/10    | 6/10 | 10/10  | 9/10   | 42/50
Oxford     | 10/10   | 9/10    | 7/10 | 9/10   | 8/10   | 43/50

[Full matrix and evaluation criteria continue...]`
    },
    {
      icon: "📋",
      title: "Visa Application Checklist",
      description: "Step-by-step checklist for group visa applications",
      buttonText: "Download Checklist (PDF - 890 KB)",
      fileSize: "890 KB",
      pages: "18 pages",
      content: `GROUP VISA APPLICATION CHECKLIST

OVERVIEW
This checklist ensures all required documents and steps are completed for successful group visa applications.

PRE-APPLICATION PHASE
☐ Determine visa type required for each student
☐ Verify passport validity (minimum 6 months)
☐ Collect acceptance letters from universities
☐ Gather proof of financial support
☐ Obtain travel insurance quotes
☐ Schedule group information session

DOCUMENT PREPARATION
☐ Completed visa application forms
☐ Recent passport-size photographs
☐ Valid passports (originals + copies)
☐ University acceptance letters
☐ Proof of tuition payment or scholarship
☐ Bank statements (last 6 months)
☐ Sponsor letters (if applicable)
☐ Academic transcripts and certificates
☐ English proficiency test results
☐ Medical examination certificates
☐ Police clearance certificates
☐ Travel itinerary
☐ Accommodation confirmation

APPLICATION SUBMISSION
☐ Complete online application portal
☐ Pay visa application fees
☐ Schedule biometric appointments
☐ Submit documents to visa center
☐ Track application status
☐ Prepare for visa interviews

POST-APPROVAL
☐ Collect passports with visas
☐ Verify visa details and validity
☐ Brief students on entry requirements
☐ Arrange pre-departure orientation
☐ Confirm travel arrangements

COUNTRY-SPECIFIC REQUIREMENTS
USA: F-1 Student Visa
- SEVIS fee payment
- I-20 form from university
- DS-160 confirmation

UK: Student Visa (Tier 4)
- CAS number from university
- TB test certificate
- Financial evidence (28 days)

[Detailed requirements for other countries continue...]`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section - Dark Theme */}
      <section className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white pt-48 pb-40 overflow-hidden min-h-[60vh] flex items-center">
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
          <div className="inline-block mb-8 px-4 py-2 glass-dark rounded-full border border-emerald-500/30" style={{animation: 'fadeIn 0.8s ease-out forwards'}}>
            <span className="text-sm font-semibold text-emerald-400">📚 Insights & Resources</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{animation: 'fadeInUp 0.8s ease-out 0.15s forwards', opacity: 0}}>
            Blog & Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed" style={{animation: 'fadeInUp 0.8s ease-out 0.3s forwards', opacity: 0}}>
            B2B articles on education trends, partnership case studies, and industry insights
          </p>
        </div>
      </section>

      <div className="py-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center" style={{animation: 'fadeInUp 0.8s ease-out 0.45s forwards', opacity: 0}}>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-emerald-500 text-gray-900 shadow-emerald-glow'
                      : 'glass-dark text-gray-300 hover:bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Articles Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {filteredArticles.map((article, index) => {
                const delay = 0.6 + (index * 0.1);
                return (
                  <div 
                    key={article.id} 
                    className="glass-dark rounded-xl shadow-lg border border-emerald-500/20 overflow-hidden hover:shadow-emerald-glow hover:border-emerald-500/40 transition-all group cursor-pointer flex flex-col h-full hover-lift"
                    style={{animation: `fadeInUp 0.8s ease-out ${delay}s forwards`, opacity: 0}}
                  >
                  <div className="p-8 flex flex-col flex-1">
                    <div className="text-6xl mb-6 text-center">{article.image}</div>
                    <div className="mb-4">
                      <span className="text-xs px-3 py-1.5 bg-primary-100 text-primary-700 rounded-full font-medium">
                        {article.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-emerald-400 transition-colors leading-tight flex-shrink-0">
                      {article.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3 flex-1">{article.excerpt}</p>
                    <div className="flex justify-between items-center text-xs text-gray-500 pt-4 border-t border-gray-800 mt-auto">
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                      <span>{article.readTime}</span>
                    </div>
                    <Link href={`/blog/${article.id}`} className="mt-4 inline-flex items-center text-emerald-400 hover:text-emerald-300 transition-colors text-sm font-semibold">
                      Read More 
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </Link>
                  </div>
                </div>
              );
              })}
            </div>

            {/* Downloadable Resources Section */}
            <div className="mt-16">
              <div className="text-center mb-12" style={{animation: 'fadeInUp 0.8s ease-out 1.2s forwards', opacity: 0}}>
                <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-semibold mb-4 border border-emerald-500/30">
                  RESOURCES
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Downloadable Resources</h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                  Essential tools and guides for educational partnerships
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {resources.map((resource, index) => {
                  const delay = 1.35 + (index * 0.15);
                  return (
                    <div 
                      key={index}
                      className="glass-dark rounded-xl shadow-lg border border-emerald-500/20 p-8 hover:shadow-emerald-glow hover:border-emerald-500/40 transition-all group hover-lift" 
                      style={{animation: `fadeInUp 0.8s ease-out ${delay}s forwards`, opacity: 0}}
                    >
                      <div className="flex flex-col h-full">
                        <div className="flex items-start mb-6">
                          <div className="text-5xl mr-6 flex-shrink-0">{resource.icon}</div>
                          <div className="flex-1">
                            <h3 className="font-bold text-xl text-white mb-3 group-hover:text-emerald-400 transition-colors">
                              {resource.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-3">
                              {resource.description}
                            </p>
                            <div className="flex flex-wrap gap-2 text-xs text-gray-500">
                              {resource.fileSize && (
                                <span className="px-2 py-1 bg-gray-800/50 rounded">
                                  📦 {resource.fileSize}
                                </span>
                              )}
                              {resource.pages && (
                                <span className="px-2 py-1 bg-gray-800/50 rounded">
                                  📄 {resource.pages}
                                </span>
                              )}
                              {resource.format && (
                                <span className="px-2 py-1 bg-gray-800/50 rounded">
                                  📊 {resource.format}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        <div className="mt-auto pt-4 border-t border-gray-800">
                          <button 
                            onClick={() => downloadPDF(resource.title, resource.content)}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-lg font-medium hover:bg-emerald-500/30 hover:text-emerald-300 transition-all text-sm border border-emerald-500/40 hover:border-emerald-500/60"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            {resource.buttonText}
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
