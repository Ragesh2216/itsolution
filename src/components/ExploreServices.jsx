import React, { useState, useEffect } from "react";
import investigationImage from "../images/investigation.webp";
import broadcastImage from "../images/broadcast.webp";
import digitalstoryImage from "../images/digitalstory.webp";
import photojournalismImage from "../images/photojournalism.webp";
import editorialImage from "../images/editorial.webp";
import trainingImage from "../images/training.webp";
import prImage from "../images/pr.webp";
import podcastImage from "../images/podcast.webp";
import { Link } from "react-router-dom";

// IT Solutions service data
const servicesData = [
  {
    id: 1,
    title: "Cloud Solutions",
    category: "Infrastructure",
    description:
      "Comprehensive cloud migration, deployment, and management services across AWS, Azure, and Google Cloud platforms.",
    image: investigationImage,
    color: "from-purple-500 to-pink-500",
    hoverColor: "from-purple-600 to-pink-600",
    icon: "☁️"
  },
  {
    id: 2,
    title: "Cybersecurity",
    category: "Security",
    description:
      "End-to-end security solutions including threat detection, vulnerability assessment, and enterprise protection systems.",
    image: broadcastImage,
    color: "from-blue-500 to-cyan-500",
    hoverColor: "from-blue-600 to-cyan-600",
    icon: "🛡️"
  },
  {
    id: 3,
    title: "Web Development",
    category: "Development",
    description:
      "Custom web applications, e-commerce solutions, and responsive websites built with modern frameworks and technologies.",
    image: digitalstoryImage,
    color: "from-green-500 to-emerald-500",
    hoverColor: "from-green-600 to-emerald-600",
    icon: "💻"
  },
  {
    id: 4,
    title: "Data Analytics",
    category: "Analytics",
    description:
      "Transform raw data into actionable insights with advanced analytics, BI tools, and machine learning solutions.",
    image: photojournalismImage,
    color: "from-orange-500 to-red-500",
    hoverColor: "from-orange-600 to-red-600",
    icon: "📊"
  },
  {
    id: 5,
    title: "IT Consulting",
    category: "Consulting",
    description:
      "Strategic IT planning, digital transformation, and technology roadmap development for businesses of all sizes.",
    image: editorialImage,
    color: "from-indigo-500 to-purple-500",
    hoverColor: "from-indigo-600 to-purple-600",
    icon: "📋"
  },
  {
    id: 6,
    title: "IT Training & Workshops",
    category: "Training",
    description:
      "Empower your team with skills in cloud computing, cybersecurity, programming, and emerging technologies.",
    image: trainingImage,
    color: "from-teal-500 to-blue-500",
    hoverColor: "from-teal-600 to-blue-600",
    icon: "👨‍🏫"
  },
  {
    id: 7,
    title: "Network Solutions",
    category: "Infrastructure",
    description:
      "Design, implement, and manage robust network infrastructure for optimal performance and security.",
    image: prImage,
    color: "from-pink-500 to-rose-500",
    hoverColor: "from-pink-600 to-rose-600",
    icon: "🌐"
  },
  {
    id: 8,
    title: "Mobile App Development",
    category: "Development",
    description:
      "Create powerful mobile applications for iOS and Android platforms with seamless user experiences.",
    image: podcastImage,
    color: "from-yellow-500 to-orange-500",
    hoverColor: "from-yellow-600 to-orange-600",
    icon: "📱"
  },
  {
    id: 9,
    title: "DevOps Services",
    category: "Development",
    description:
      "Streamline development workflows with CI/CD pipelines, containerization, and automation solutions.",
    image: investigationImage,
    color: "from-blue-500 to-indigo-500",
    hoverColor: "from-blue-600 to-indigo-600",
    icon: "⚙️"
  },
  {
    id: 10,
    title: "AI & Machine Learning",
    category: "Analytics",
    description:
      "Leverage artificial intelligence and machine learning to drive innovation and business intelligence.",
    image: broadcastImage,
    color: "from-purple-500 to-blue-500",
    hoverColor: "from-purple-600 to-blue-600",
    icon: "🤖"
  },
  {
    id: 11,
    title: "IT Support & Maintenance",
    category: "Support",
    description:
      "24/7 technical support, system maintenance, and proactive monitoring for uninterrupted operations.",
    image: digitalstoryImage,
    color: "from-green-500 to-teal-500",
    hoverColor: "from-green-600 to-teal-600",
    icon: "🔧"
  },
  {
    id: 12,
    title: "Digital Transformation",
    category: "Consulting",
    description:
      "Guide your business through digital evolution with cutting-edge technologies and strategic implementation.",
    image: photojournalismImage,
    color: "from-orange-500 to-yellow-500",
    hoverColor: "from-orange-600 to-yellow-600",
    icon: "🚀"
  }
];

const ExploreServices = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const categories = ["All", "Infrastructure", "Security", "Development", "Analytics", "Consulting", "Training", "Support"];

  const filteredServices = servicesData.filter((service) => {
    const matchesCategory = filter === "All" || service.category === filter;
    const matchesSearch = service.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categoryColors = {
    "Infrastructure": "from-purple-500 to-pink-500",
    "Security": "from-blue-500 to-cyan-500",
    "Development": "from-green-500 to-emerald-500",
    "Analytics": "from-orange-500 to-red-500",
    "Consulting": "from-indigo-500 to-purple-500",
    "Training": "from-teal-500 to-blue-500",
    "Support": "from-yellow-500 to-orange-500"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-indigo-700 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className={`text-center mb-12 transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent animate-gradient">
            IT Solutions & Services
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Comprehensive technology solutions to drive your business forward in the digital age
          </p>
          
          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8">
            {[
              { number: servicesData.length, label: "Services", color: "from-white to-blue-100" },
              { number: categories.length - 1, label: "Categories", color: "from-white to-green-100" },
              { number: "24/7", label: "Support", color: "from-white to-purple-100" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer transform hover:scale-110 transition-all duration-500"
              >
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <div className="text-white/80 group-hover:text-white transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search & Filter Section */}
        <div className={`bg-white/20 backdrop-blur-lg rounded-2xl shadow-lg p-6 mb-12 transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="relative flex-1 w-full">
              <input
                type="text"
                placeholder="Search IT services or technologies..."
                className="w-full px-4 py-3 pl-12 border border-white/30 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 hover:bg-white/30"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/70">
                🔍
              </div>
            </div>

            <div className="relative w-full md:w-64">
              <select
                className="w-full px-4 py-3 pr-10 border border-white/30 bg-white/20 backdrop-blur-sm rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent appearance-none transition-all duration-200 hover:bg-white/30"
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat} className="text-gray-800">
                    {cat}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white/70 pointer-events-none">
                ⬇️
              </div>
            </div>
          </div>
          
          {/* Active Filters */}
          {(searchTerm || filter !== "All") && (
            <div className="mt-4 flex items-center gap-2 flex-wrap animate-fadeIn">
              <span className="text-sm text-white/80">Active filters:</span>
              {searchTerm && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/30 text-white backdrop-blur-sm transform hover:scale-105 transition-all duration-200">
                  Search: "{searchTerm}"
                  <button
                    onClick={() => setSearchTerm("")}
                    className="ml-2 hover:text-white/90 transition-colors duration-200"
                  >
                    ×
                  </button>
                </span>
              )}
              {filter !== "All" && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/30 text-white backdrop-blur-sm transform hover:scale-105 transition-all duration-200">
                  Category: {filter}
                  <button
                    onClick={() => setFilter("All")}
                    className="ml-2 hover:text-white/90 transition-colors duration-200"
                  >
                    ×
                  </button>
                </span>
              )}
              <button
                onClick={() => {
                  setSearchTerm("");
                  setFilter("All");
                }}
                className="text-sm text-white/80 hover:text-white underline transition-colors duration-200 transform hover:scale-105"
              >
                Clear all
              </button>
            </div>
          )}
        </div>

        {/* Service Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredServices.length > 0 ? (
            filteredServices.map((service, index) => (
              <div
                key={service.id}
                className="group relative bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-white/20 hover:border-white/40"
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl -m-0.5`}></div>
                
                <div className="relative bg-gradient-to-br from-white/5 to-white/10 rounded-2xl flex flex-col h-full m-0.5 overflow-hidden">
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-30 group-hover:opacity-40 transition-opacity duration-500`}></div>
                    
                    {/* Icon overlay */}
                    <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                      <span className="text-xl">{service.icon}</span>
                    </div>
                    
                    {/* Category badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm transform group-hover:scale-105 transition-transform duration-300">
                        {service.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-white mb-3 group-hover:text-white transition-colors duration-300 flex items-center gap-2">
                        {service.title}
                        <span className="text-white/80 opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all duration-300">
                          →
                        </span>
                      </h2>
                      <p className="text-white/80 text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-300">
                        {service.description}
                      </p>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-white/20 group-hover:border-white/30 transition-colors duration-300">
                      <span className={`inline-block text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300`}>
                        Get Solution
                      </span>
                    </div>
                  </div>

                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-16 bg-white/10 backdrop-blur-lg rounded-2xl animate-pulse">
              <div className="text-6xl mb-4 text-white/70">🔍</div>
              <h3 className="text-2xl font-semibold text-white mb-2">No IT services found</h3>
              <p className="text-white/70">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Results Count */}
        {filteredServices.length > 0 && (
          <div className="mt-8 text-center animate-fadeIn">
            <p className="text-white/80 bg-white/10 backdrop-blur-sm inline-block px-6 py-3 rounded-full border border-white/20">
              Showing <span className="font-semibold text-white">{filteredServices.length}</span> of{" "}
              <span className="font-semibold text-white">{servicesData.length}</span> IT solutions
            </p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fadeIn">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Need a Custom IT Solution?
            </h3>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Our team of experts can design and implement tailored technology solutions to meet your specific business requirements.
            </p>
            <Link to="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
              Contact Our IT Experts
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ExploreServices;