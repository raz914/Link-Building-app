import { useState, useMemo } from 'react';
import { ExternalLink, DollarSign, Search, Award, TrendingUp } from 'lucide-react';

const LinkBuildingApp = () => {
  const [minBudget, setMinBudget] = useState(100);
  const [maxBudget, setMaxBudget] = useState(500);
  const [searched, setSearched] = useState(false);

  // Sample data of link building services with additional metadata
  const linkBuildingServices = [
    { 
      name: "Ahrefs", 
      pricePerLink: 82, 
      website: "https://ahrefs.com",
      rating: 4.8,
      domain: "Very High",
      description: "Comprehensive SEO toolset with backlink analysis and competitive research features.",
      features: ["Backlink Checker", "Rank Tracker", "Site Audit"]
    },
    { 
      name: "SEMrush", 
      pricePerLink: 119, 
      website: "https://www.semrush.com",
      rating: 4.7,
      domain: "Very High",
      description: "All-in-one digital marketing toolkit with backlink building and analysis capabilities.",
      features: ["Backlink Analytics", "Link Building Tool", "Domain Overview"]
    },
    { 
      name: "Moz", 
      pricePerLink: 99, 
      website: "https://moz.com",
      rating: 4.5,
      domain: "High",
      description: "SEO software for better marketing and improved search rankings.",
      features: ["Link Explorer", "Domain Analysis", "Rank Tracking"]
    },
    { 
      name: "HARO", 
      pricePerLink: 149, 
      website: "https://www.helpareporter.com",
      rating: 4.4,
      domain: "High",
      description: "Connect with journalists and get featured in major publications.",
      features: ["Media Outreach", "Expert Sourcing", "PR Opportunities"]
    },
    { 
      name: "Majestic", 
      pricePerLink: 79, 
      website: "https://majestic.com",
      rating: 4.6,
      domain: "High",
      description: "Specialized backlink checker and site explorer with detailed metrics.",
      features: ["Trust Flow", "Citation Flow", "Backlink History"]
    },
    { 
      name: "Buzzstream", 
      pricePerLink: 199, 
      website: "https://www.buzzstream.com",
      rating: 4.3,
      domain: "Medium",
      description: "Link building and digital PR tool for outreach campaigns.",
      features: ["Relationship Management", "Email Outreach", "Link Monitoring"]
    },
    { 
      name: "Linkody", 
      pricePerLink: 49, 
      website: "https://www.linkody.com",
      rating: 4.2,
      domain: "Medium",
      description: "Affordable backlink tracker and monitoring tool.",
      features: ["Link Monitoring", "Competitor Tracking", "SEO Metrics"]
    },
    { 
      name: "Pitchbox", 
      pricePerLink: 350, 
      website: "https://pitchbox.com",
      rating: 4.8,
      domain: "Very High",
      description: "Influencer outreach and content marketing platform for link building.",
      features: ["Outreach Automation", "CRM Integration", "Campaign Management"]
    },
    { 
      name: "SEOquake", 
      pricePerLink: 75, 
      website: "https://www.seoquake.com",
      rating: 4.0,
      domain: "Low",
      description: "Browser extension for on-page SEO analysis and link metrics.",
      features: ["SEO Audit", "SERP Overlay", "Social Metrics"]
    },
    { 
      name: "Screaming Frog", 
      pricePerLink: 209, 
      website: "https://www.screamingfrog.co.uk",
      rating: 4.7,
      domain: "High",
      description: "SEO spider tool for website auditing and link analysis.",
      features: ["Website Crawler", "Broken Link Finder", "Link Mapping"]
    },
    { 
      name: "BuzzSumo", 
      pricePerLink: 299, 
      website: "https://buzzsumo.com",
      rating: 4.6,
      domain: "High",
      description: "Content research and influencer identification platform.",
      features: ["Content Analysis", "Influencer Research", "Monitoring"]
    },
    { 
      name: "Hunter.io", 
      pricePerLink: 49, 
      website: "https://hunter.io",
      rating: 4.3,
      domain: "Medium",
      description: "Email finding and verification tool for link building outreach.",
      features: ["Email Finder", "Email Verifier", "Email Campaigns"]
    },
    { 
      name: "SpyFu", 
      pricePerLink: 159, 
      website: "https://www.spyfu.com",
      rating: 4.5,
      domain: "High",
      description: "Competitor keyword research and backlink analysis tool.",
      features: ["Competitor Analysis", "Backlink Tracking", "SEO Reports"]
    },
    { 
      name: "SEO PowerSuite", 
      pricePerLink: 399, 
      website: "https://www.seopowersuite.com",
      rating: 4.4,
      domain: "High",
      description: "Comprehensive desktop SEO software with link building tools.",
      features: ["Link Building", "Rank Tracking", "Site Auditing"]
    },
  ];

  // Filter services based on budget range
  const filteredServices = useMemo(() => {
    return linkBuildingServices.filter(
      service => service.pricePerLink >= minBudget && service.pricePerLink <= maxBudget
    );
  }, [minBudget, maxBudget, searched]);

  // Handle search button click
  const handleSearch = () => {
    setSearched(true);
  };

  // Function to render star rating
  const renderRating = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    return (
      <div className="flex items-center">
        {[...Array(fullStars)].map((_, i) => (
          <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#FBBF24" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        ))}
        {hasHalfStar && (
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        )}
        <span className="ml-1 text-sm font-medium text-gray-600">{rating}</span>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gradient-to-br from-gray-50 to-indigo-50 rounded-lg shadow-lg">
      <div className="flex items-center justify-center mb-8">
        <svg className="w-7 h-7 text-indigo-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
        </svg>
        <h1 className="text-3xl font-bold text-center text-indigo-700">SEOGangs link building site finder</h1>
      </div>
      
      <div className="relative mb-12">
        <img 
          src="/api/placeholder/1200/300" 
          alt="SEO Link Building Banner" 
          className="w-full h-48 object-cover rounded-xl shadow-md mb-4"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/70 to-purple-900/50 rounded-xl flex items-center">
          <div className="p-8 text-white max-w-lg">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Find the Perfect Link Building Service</h2>
            <p className="text-indigo-100">Discover top-rated link building services that match your budget and boost your SEO strategy</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-8 rounded-xl shadow-md mb-10 border-l-4 border-indigo-500">
        <div className="flex items-center mb-6">
          <DollarSign className="text-indigo-600 mr-2" size={24} />
          <h2 className="text-2xl font-semibold text-gray-800">What's your budget?</h2>
        </div>
        
        <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
          <div className="w-full md:w-2/5">
            <label htmlFor="minBudget" className="block text-sm font-medium text-gray-700 mb-2">
              Minimum Budget ($)
            </label>
            <input
              type="number"
              id="minBudget"
              value={minBudget}
              onChange={(e) => setMinBudget(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              min="0"
            />
          </div>
          
          <div className="w-full md:w-2/5">
            <label htmlFor="maxBudget" className="block text-sm font-medium text-gray-700 mb-2">
              Maximum Budget ($)
            </label>
            <input
              type="number"
              id="maxBudget"
              value={maxBudget}
              onChange={(e) => setMaxBudget(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all"
              min="0"
            />
          </div>
          
          <div className="w-full md:w-1/5 md:self-end">
            <button
              onClick={handleSearch}
              className="w-full bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center"
            >
              <Search size={18} className="mr-2" />
              Find Services
            </button>
          </div>
        </div>
      </div>
      
      {searched && (
        <div className="mb-10">
          <div className="flex items-center mb-6">
            <TrendingUp className="text-indigo-600 mr-2" size={24} />
            <h2 className="text-2xl font-semibold text-gray-800">
              Available Link Building Services
            </h2>
            <div className="ml-4 px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              ${minBudget} - ${maxBudget}
            </div>
          </div>
          
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100">
                  <div className="relative">
                    <div className="w-full h-40 overflow-hidden bg-gray-100 relative">
                      {/* Website thumbnail */}
                      <img 
                        src={`https://image.thum.io/get/width/400/crop/800/noanimate/https://${service.website.replace('https://', '')}`} 
                        alt={`${service.name} website thumbnail`}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = `/api/placeholder/400/${200 + (index % 3) * 20}`;
                        }}
                        className="w-full h-full object-cover transition-opacity"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    </div>
                    <div className="absolute top-3 right-3 bg-white px-3 py-1 rounded-full text-sm font-bold text-indigo-700 shadow">
                      ${service.pricePerLink}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-indigo-700">{service.name}</h3>
                      {service.domain === "Very High" && (
                        <div className="flex items-center bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs font-medium">
                          <Award size={12} className="mr-1" />
                          Premium
                        </div>
                      )}
                    </div>
                    
                    <div className="mb-3">
                      {renderRating(service.rating)}
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">
                      {service.description}
                    </p>
                    
                    <div className="mb-4">
                      <div className="text-sm font-medium text-gray-700 mb-2">Domain Authority: <span className={`font-semibold ${
                        service.domain === "Very High" ? "text-green-600" :
                        service.domain === "High" ? "text-blue-600" :
                        service.domain === "Medium" ? "text-yellow-600" : "text-gray-600"
                      }`}>{service.domain}</span></div>
                      
                      <div className="flex flex-wrap gap-2 mt-3">
                        {service.features.map((feature, i) => (
                          <span key={i} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4">
                      <a 
                        href={service.website} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Visit Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-yellow-700 font-medium">
                    No link building services found in your budget range. Try adjusting your budget.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default LinkBuildingApp;