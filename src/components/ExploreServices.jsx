import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Import icons from react-icons
import { 
  FaCloud, FaShieldAlt, FaCode, FaDatabase, 
  FaNetworkWired, FaMobileAlt, FaRobot, FaChartLine,
  FaLaptopCode, FaServer, FaCogs, FaBrain,
  FaInfinity, FaSync, FaRocket, FaHandsHelping,
  FaLightbulb, FaUsers, FaAward, FaChartBar,
  FaLock, FaGlobe, FaCubes, FaMicrochip
} from "react-icons/fa";

const ExploreServices = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [inViewSections, setInViewSections] = useState([]);
  
  // Refs for animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const technologiesRef = useRef(null);
  const processRef = useRef(null);
  const testimonialsRef = useRef(null);
  const partnersRef = useRef(null);
  const ctaRef = useRef(null);

  // Mouse tracking for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      });
    };

    const handleScroll = () => {
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      
      // Check sections in view
      const sections = [heroRef, servicesRef, featuresRef, technologiesRef, 
                       processRef, testimonialsRef, partnersRef, ctaRef];
      const newInViewSections = [];
      
      sections.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.75) {
            newInViewSections.push(index);
          }
        }
      });
      
      setInViewSections(newInViewSections);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Modern IT Services
  const services = [
    {
      id: 1,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure with seamless migration and management",
      icon: <FaCloud />,
      color: "from-blue-500 to-cyan-500",
      stats: { uptime: "99.9%", clients: "500+" }
    },
    {
      id: 2,
      title: "Cybersecurity",
      description: "Advanced threat protection and enterprise security solutions",
      icon: <FaShieldAlt />,
      color: "from-green-500 to-emerald-500",
      stats: { uptime: "100%", clients: "300+" }
    },
    {
      id: 3,
      title: "AI & ML Solutions",
      description: "Intelligent automation and machine learning integration",
      icon: <FaBrain />,
      color: "from-purple-500 to-pink-500",
      stats: { uptime: "99.8%", clients: "200+" }
    },
    {
      id: 4,
      title: "Data Analytics",
      description: "Real-time insights and predictive analytics platforms",
      icon: <FaDatabase />,
      color: "from-orange-500 to-red-500",
      stats: { uptime: "99.7%", clients: "400+" }
    },
    {
      id: 5,
      title: "DevOps Services",
      description: "Automated CI/CD pipelines and container orchestration",
      icon: <FaCogs />,
      color: "from-indigo-500 to-blue-500",
      stats: { uptime: "99.9%", clients: "350+" }
    },
    {
      id: 6,
      title: "IoT Solutions",
      description: "Connected devices and smart infrastructure management",
      icon: <FaNetworkWired />,
      color: "from-teal-500 to-green-500",
      stats: { uptime: "99.6%", clients: "250+" }
    }
  ];

  // Features
  const features = [
    {
      title: "24/7 Monitoring",
      description: "Round-the-clock system monitoring and instant alerts",
      icon: <FaSync />,
      delay: 0
    },
    {
      title: "Scalable Architecture",
      description: "Flexible solutions that grow with your business",
      icon: <FaInfinity />,
      delay: 100
    },
    {
      title: "Expert Support",
      description: "Dedicated team of certified IT professionals",
      icon: <FaUsers />,
      delay: 200
    },
    {
      title: "Fast Deployment",
      description: "Rapid implementation with minimal downtime",
      icon: <FaRocket />,
      delay: 300
    }
  ];

  // Technologies We Use
  const technologies = [
    {
      name: "AWS/Azure",
      description: "Cloud infrastructure and services",
      icon: <FaCloud />,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "React/Node.js",
      description: "Modern web development stack",
      icon: <FaCode />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "TensorFlow",
      description: "AI and machine learning framework",
      icon: <FaBrain />,
      color: "from-yellow-500 to-orange-500"
    },
    {
      name: "Docker/K8s",
      description: "Containerization and orchestration",
      icon: <FaCubes />,
      color: "from-blue-500 to-indigo-500"
    },
    {
      name: "Cyber Security",
      description: "Advanced threat protection",
      icon: <FaLock />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "IoT Platforms",
      description: "Connected device solutions",
      icon: <FaMicrochip />,
      color: "from-purple-500 to-pink-500"
    }
  ];

  // Our Process
  const processSteps = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your business needs and technical requirements",
      icon: <FaLightbulb />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      step: "02",
      title: "Planning & Strategy",
      description: "Create a customized technology roadmap",
      icon: <FaChartBar />,
      color: "from-purple-500 to-pink-500"
    },
    {
      step: "03",
      title: "Implementation",
      description: "Deploy solutions with minimal disruption",
      icon: <FaCogs />,
      color: "from-green-500 to-emerald-500"
    },
    {
      step: "04",
      title: "Support & Optimization",
      description: "Continuous monitoring and improvement",
      icon: <FaHandsHelping />,
      color: "from-orange-500 to-red-500"
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Their cloud migration transformed our operations. 99.9% uptime and incredible support.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      role: "CEO, DataFlow",
      content: "The AI integration gave us a competitive edge we never thought possible.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Emma Rodriguez",
      role: "IT Director, GlobalSoft",
      content: "Outstanding cybersecurity implementation. Our data has never been safer.",
      rating: 5,
      avatar: "👩‍💻"
    }
  ];

  // Industry Partners
  const partners = [
    { name: "Microsoft", logo: "🔷", description: "Cloud Solutions Partner" },
    { name: "AWS", logo: "☁️", description: "Advanced Consulting Partner" },
    { name: "Google Cloud", logo: "🔶", description: "Premier Partner" },
    { name: "IBM", logo: "🔵", description: "Business Partner" },
    { name: "Cisco", logo: "🔴", description: "Gold Partner" },
    { name: "Oracle", logo: "🔸", description: "Platinum Partner" }
  ];

  // Function to check if section is in view
  const isSectionInView = (index) => inViewSections.includes(index);

  return (
    <div className="min-h-screen mt-16 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 mt-8 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform origin-left z-50"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className={`relative min-h-screen mt-8 flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
          isSectionInView(0) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Dynamic Background based on mouse */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div 
            className="absolute inset-0 opacity-30 transition-all duration-300"
            style={{
              backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #3B82F6 0%, transparent 50%)`
            }}
          ></div>
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto">
          {/* Animated Title */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient">
                Future-Ready
              </span>
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-reverse">
                IT Solutions
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-fadeIn">
              Transform your business with cutting-edge technology solutions that drive innovation, 
              efficiency, and growth in the digital age.
            </p>
          </div>

          {/* Interactive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 mt-12 max-w-2xl mx-auto">
            {[
              { value: "99.9%", label: "Uptime", color: "from-green-400 to-emerald-500" },
              { value: "500+", label: "Clients", color: "from-blue-400 to-cyan-500" },
              { value: "24/7", label: "Support", color: "from-purple-400 to-pink-500" },
              { value: "98%", label: "Satisfaction", color: "from-orange-400 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
                onMouseEnter={() => console.log(`Hovered ${stat.label}`)}
              >
                <div 
                  className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                  style={{ 
                    background: stat.color.includes('from-green') ? 'linear-gradient(to right, #34D399, #10B981)' :
                               stat.color.includes('from-blue') ? 'linear-gradient(to right, #60A5FA, #06B6D4)' :
                               stat.color.includes('from-purple') ? 'linear-gradient(to right, #A78BFA, #EC4899)' :
                               'linear-gradient(to right, #FB923C, #EF4444)'
                  }}
                ></div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-500 group-hover:scale-105 group-hover:bg-gray-800/70 border border-gray-700/50 group-hover:border-transparent">
                  <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fadeIn delay-500">
            <Link
              to="/contact"
              className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="group-hover:rotate-180 transition-transform duration-500">🚀</span>
                Start Your Digital Journey
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>

            <Link
              to="/404"
              className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden border border-gray-600 hover:border-transparent"
            >
              <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/70 transition-all duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span>💡</span>
                Explore Solutions
                <span className="group-hover:rotate-90 transition-transform duration-500">⚡</span>
              </div>
            </Link>
          </div>

          
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services"
        ref={servicesRef}
        className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
          isSectionInView(1) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-4 border border-blue-500/30">
              <span className="text-blue-400">💻</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Cutting-Edge
              </span>{" "}
              IT Services
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive technology solutions tailored to your business needs
            </p>
          </div>

          {/* Interactive Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.id}
                className="relative group"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-500 ${
                  activeService === service.id ? 'transform rotate-y-0' : 'transform rotate-y-5'
                }`}>
                  {/* Front of Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:scale-105">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                        style={{ 
                          backgroundImage: service.color.includes('from-blue') ? 'linear-gradient(to right, #3B82F6, #06B6D4)' :
                                        service.color.includes('from-green') ? 'linear-gradient(to right, #10B981, #34D399)' :
                                        service.color.includes('from-purple') ? 'linear-gradient(to right, #8B5CF6, #EC4899)' :
                                        service.color.includes('from-orange') ? 'linear-gradient(to right, #F97316, #EF4444)' :
                                        service.color.includes('from-indigo') ? 'linear-gradient(to right, #6366F1, #3B82F6)' :
                                        'linear-gradient(to right, #14B8A6, #10B981)'
                        }}>
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="flex justify-between text-sm">
                      <div>
                        <div className="text-gray-500">Uptime</div>
                        <div className="font-bold">{service.stats.uptime}</div>
                      </div>
                      <div>
                        <div className="text-gray-500">Clients</div>
                        <div className="font-bold">{service.stats.clients}</div>
                      </div>
                    </div>
                  </div>

                  {/* Back Glow Effect */}
                  <div 
                    className={`absolute inset-0 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}
                    style={{
                      background: service.color.includes('from-blue') ? 'linear-gradient(to right, #3B82F6, #06B6D4)' :
                                  service.color.includes('from-green') ? 'linear-gradient(to right, #10B981, #34D399)' :
                                  service.color.includes('from-purple') ? 'linear-gradient(to right, #8B5CF6, #EC4899)' :
                                  service.color.includes('from-orange') ? 'linear-gradient(to right, #F97316, #EF4444)' :
                                  service.color.includes('from-indigo') ? 'linear-gradient(to right, #6366F1, #3B82F6)' :
                                  'linear-gradient(to right, #14B8A6, #10B981)'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
          isSectionInView(2) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-transparent"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Why{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Choose Us
              </span>
            </h2>
          </div>

          {/* Animated Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/30">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform duration-500">
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-200">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section 
        ref={technologiesRef}
        className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
          isSectionInView(3) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-4 border border-purple-500/30">
              <span className="text-purple-400">⚡</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Technologies
              </span>{" "}
              We Use
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Leveraging the latest technologies to deliver exceptional results
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 transform transition-all duration-500 group-hover:scale-105 group-hover:border-blue-500/30">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center text-white text-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    {tech.icon}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-2 text-center">
                    {tech.name}
                  </h3>
                  
                  <p className="text-gray-400 text-sm text-center">
                    {tech.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section 
        ref={processRef}
        className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
          isSectionInView(4) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-cyan-600/10"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full mb-4 border border-cyan-500/30">
              <span className="text-cyan-400">📋</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                Process
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              A structured approach to delivering successful IT solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-all duration-1000"></div>
                
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-all duration-500 group-hover:-translate-y-2">
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-xl bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center text-2xl font-bold">
                    {step.step}
                  </div>
                  
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${step.color} flex items-center justify-center text-white text-2xl transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                    {step.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3 text-center">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 text-center leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
          isSectionInView(5) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Client{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Success Stories
              </span>
            </h2>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-all duration-500 group-hover:scale-105 group-hover:border-blue-500/30 h-full">
                  {/* Avatar and Info */}
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center text-2xl mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-bold text-gray-200">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}</div>
                    </div>
                  </div>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section 
        ref={partnersRef}
        className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
          isSectionInView(6) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full mb-4 border border-green-500/30">
              <span className="text-green-400">🤝</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              Trusted by{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">
                Industry Leaders
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Partnering with top technology companies to deliver exceptional solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/30 transform transition-all duration-500 group-hover:scale-105 group-hover:bg-gray-800/60 group-hover:border-blue-500/20">
                  <div className="text-4xl mb-4 text-center">{partner.logo}</div>
                  <h3 className="text-lg font-bold text-white text-center mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-gray-400 text-sm text-center">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className={`relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden transition-all duration-1000 ${
          isSectionInView(7) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full mb-4 border border-blue-500/30">
            <span className="text-blue-400">✨</span>
          </div>
          
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Transform
            </span>{" "}
            Your Business?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful businesses that have transformed their operations with our IT solutions
          </p>

          {/* Additional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto">
            {[
              { value: "15+", label: "Years Experience", color: "from-blue-400 to-cyan-500" },
              { value: "100+", label: "Projects Delivered", color: "from-purple-400 to-pink-500" },
              { value: "50+", label: "Team Experts", color: "from-green-400 to-emerald-500" },
              { value: "24/7", label: "Support Available", color: "from-orange-400 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="relative group cursor-pointer"
              >
                <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                     style={{ 
                       background: stat.color.includes('from-blue') ? 'linear-gradient(to right, #3B82F6, #06B6D4)' :
                                  stat.color.includes('from-purple') ? 'linear-gradient(to right, #8B5CF6, #EC4899)' :
                                  stat.color.includes('from-green') ? 'linear-gradient(to right, #10B981, #34D399)' :
                                  'linear-gradient(to right, #F97316, #EF4444)'
                     }}>
                </div>
                <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 transform transition-all duration-500 group-hover:scale-105 group-hover:bg-gray-800/70 border border-gray-700/50 group-hover:border-transparent">
                  <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="group-hover:rotate-180 transition-transform duration-500">💬</span>
                Get Free Consultation
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>

            <Link
              to="/latest"
              className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden border border-gray-600 hover:border-transparent"
            >
              <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/70 transition-all duration-500"></div>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span>📰</span>
                View Case Studies
                <span className="group-hover:rotate-90 transition-transform duration-500">⚡</span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExploreServices;