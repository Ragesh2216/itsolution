import React, { useState, useEffect } from "react";

function Latest() {
  const [activeTab, setActiveTab] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // IT Solutions Latest Updates Data
  const latestUpdates = [
    {
      id: 1,
      title: "Cloud Infrastructure Upgrade",
      category: "infrastructure",
      description: "Enhanced our cloud services with new AWS instances and improved load balancing for better performance.",
      date: "2024-01-15",
      readTime: "3 min read",
      image: "☁️",
      color: "from-blue-500 to-cyan-500",
      tags: ["Cloud", "AWS", "Infrastructure"]
    },
    {
      id: 2,
      title: "Cybersecurity Framework v2.0",
      category: "security",
      description: "Launched our updated cybersecurity framework with advanced threat detection and AI-powered monitoring.",
      date: "2024-01-12",
      readTime: "5 min read",
      image: "🛡️",
      color: "from-green-500 to-emerald-500",
      tags: ["Security", "AI", "Framework"]
    },
    {
      id: 3,
      title: "Mobile App Development Kit",
      category: "development",
      description: "New React Native starter kit released with pre-built components and CI/CD pipeline setup.",
      date: "2024-01-10",
      readTime: "4 min read",
      image: "📱",
      color: "from-purple-500 to-pink-500",
      tags: ["Mobile", "React", "Development"]
    },
    {
      id: 4,
      title: "Data Analytics Dashboard",
      category: "analytics",
      description: "Real-time analytics dashboard with machine learning insights and customizable reporting features.",
      date: "2024-01-08",
      readTime: "6 min read",
      image: "📊",
      color: "from-orange-500 to-red-500",
      tags: ["Analytics", "ML", "Dashboard"]
    },
    {
      id: 5,
      title: "DevOps Automation Suite",
      category: "devops",
      description: "Automated deployment pipeline with container orchestration and monitoring integration.",
      date: "2024-01-05",
      readTime: "4 min read",
      image: "⚙️",
      color: "from-indigo-500 to-blue-500",
      tags: ["DevOps", "Automation", "CI/CD"]
    },
    {
      id: 6,
      title: "AI Integration Services",
      category: "ai",
      description: "Comprehensive AI integration package for businesses looking to implement machine learning solutions.",
      date: "2024-01-03",
      readTime: "7 min read",
      image: "🤖",
      color: "from-teal-500 to-green-500",
      tags: ["AI", "Machine Learning", "Integration"]
    },
    {
      id: 7,
      title: "Network Security Update",
      category: "security",
      description: "Enhanced network security protocols with zero-trust architecture implementation.",
      date: "2024-01-02",
      readTime: "3 min read",
      image: "🔒",
      color: "from-red-500 to-pink-500",
      tags: ["Network", "Security", "Zero-Trust"]
    },
    {
      id: 8,
      title: "Cloud Migration Toolkit",
      category: "infrastructure",
      description: "Streamlined cloud migration tools with automated assessment and migration planning.",
      date: "2023-12-28",
      readTime: "5 min read",
      image: "🚀",
      color: "from-yellow-500 to-orange-500",
      tags: ["Migration", "Cloud", "Automation"]
    },
    {
      id: 9,
      title: "API Development Framework",
      category: "development",
      description: "New RESTful API framework with built-in documentation and testing capabilities.",
      date: "2023-12-25",
      readTime: "4 min read",
      image: "🔗",
      color: "from-cyan-500 to-blue-500",
      tags: ["API", "Development", "REST"]
    }
  ];

  const categories = [
    { id: "all", name: "All Updates", count: latestUpdates.length },
    { id: "infrastructure", name: "Infrastructure", count: latestUpdates.filter(item => item.category === "infrastructure").length },
    { id: "security", name: "Security", count: latestUpdates.filter(item => item.category === "security").length },
    { id: "development", name: "Development", count: latestUpdates.filter(item => item.category === "development").length },
    { id: "analytics", name: "Analytics", count: latestUpdates.filter(item => item.category === "analytics").length },
    { id: "devops", name: "DevOps", count: latestUpdates.filter(item => item.category === "devops").length },
    { id: "ai", name: "AI & ML", count: latestUpdates.filter(item => item.category === "ai").length }
  ];

  const filteredUpdates = latestUpdates.filter(item => 
    activeTab === "all" || item.category === activeTab
  ).slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mt-20 mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Stackly  IT Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Stay updated with the latest technology innovations, framework releases, and IT solution updates from our team.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {[
              { number: latestUpdates.length, label: "Total Updates", color: "from-blue-500 to-cyan-500" },
              { number: categories.length - 1, label: "Categories", color: "from-purple-500 to-pink-500" },
              { number: "2024", label: "Latest", color: "from-green-500 to-emerald-500" },
              { number: "24/7", label: "Support", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-105 transition-all duration-500"
              >
                <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className={`mb-12 transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex overflow-x-auto pb-4 hide-scrollbar space-x-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => {
                  setActiveTab(category.id);
                  setVisibleItems(6);
                }}
                className={`flex-shrink-0 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeTab === category.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category.name}
                <span className={`ml-2 text-sm px-2 py-1 rounded-full ${
                  activeTab === category.id
                    ? 'bg-white text-blue-600'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Updates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredUpdates.map((update, index) => (
            <div
              key={update.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
              style={{
                animationDelay: `${index * 100}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Header with gradient */}
              <div className={`h-2 bg-gradient-to-r ${update.color}`}></div>
              
              <div className="p-6">
                {/* Icon and Category */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${update.color} flex items-center justify-center text-white text-xl`}>
                      {update.image}
                    </div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-600 bg-gray-100 rounded-full capitalize">
                        {update.category}
                      </span>
                      <p className="text-sm text-gray-500 mt-1">{update.readTime}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                  {update.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-3">
                  {update.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {update.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Date and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <span className="text-sm text-gray-500">
                    {formatDate(update.date)}
                  </span>
                  <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300">
                    <span>Read More</span>
                    <span>→</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleItems < filteredUpdates.length && (
          <div className="text-center mb-12 animate-fadeIn">
            <button
              onClick={loadMore}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Load More Updates
            </button>
          </div>
        )}

        {/* Newsletter Section */}
        <div className={`bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 text-center text-white mb-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get the latest IT solutions and technology updates delivered directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-blue-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent text-gray-900"
            />
            <button className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          {[
            {
              title: "Documentation",
              description: "Comprehensive guides and API references",
              icon: "📚",
              color: "from-green-500 to-emerald-500"
            },
            {
              title: "Support",
              description: "24/7 technical support and help desk",
              icon: "🛠️",
              color: "from-blue-500 to-cyan-500"
            },
            {
              title: "Community",
              description: "Join our developer community",
              icon: "👥",
              color: "from-purple-500 to-pink-500"
            }
          ].map((link, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${link.color} flex items-center justify-center text-white text-2xl`}>
                {link.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{link.title}</h3>
              <p className="text-gray-600">{link.description}</p>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}

export default Latest;