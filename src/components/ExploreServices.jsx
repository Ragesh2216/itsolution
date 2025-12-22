import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

// Import icons from react-icons
import { 
  FaCloud, FaShieldAlt, FaCode, FaDatabase, 
  FaNetworkWired, FaMobileAlt, FaRobot, FaChartLine,
  FaLaptopCode, FaServer, FaCogs, FaBrain
} from "react-icons/fa";
import { Explore } from "@mui/icons-material";

const ExploreServices = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Refs for animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const featuresRef = useRef(null);
  const testimonialsRef = useRef(null);
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
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

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
      icon: "🔍",
      delay: 0
    },
    {
      title: "Scalable Architecture",
      description: "Flexible solutions that grow with your business",
      icon: "📈",
      delay: 100
    },
    {
      title: "Expert Support",
      description: "Dedicated team of certified IT professionals",
      icon: "👨‍💻",
      delay: 200
    },
    {
      title: "Fast Deployment",
      description: "Rapid implementation with minimal downtime",
      icon: "⚡",
      delay: 300
    }
  ];

  // Testimonials
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO, TechCorp",
      content: "Their cloud migration transformed our operations. 99.9% uptime and incredible support.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CEO, DataFlow",
      content: "The AI integration gave us a competitive edge we never thought possible.",
      rating: 5
    },
    {
      name: "Emma Rodriguez",
      role: "IT Director, GlobalSoft",
      content: "Outstanding cybersecurity implementation. Our data has never been safer.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-hidden">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform origin-left z-50"
           style={{ transform: `scaleX(${scrollProgress / 100})` }}></div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5" 
             style={{
               backgroundImage: `linear-gradient(90deg, #fff 1px, transparent 1px),
                                linear-gradient(#fff 1px, transparent 1px)`,
               backgroundSize: '50px 50px'
             }}></div>

        {/* Floating Orbs */}
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-orb"
            style={{
              width: `${100 + Math.random() * 300}px`,
              height: `${100 + Math.random() * 300}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                ['#3B82F6', '#8B5CF6', '#06B6D4', '#10B981'][i % 4]
              }20 0%, transparent 70%)`,
              animationDelay: `${i * 2}s`,
              filter: 'blur(40px)'
            }}
          />
        ))}

        {/* Animated Particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`particle-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              opacity: Math.random() * 0.3 + 0.1
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Dynamic Background based on mouse */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0 opacity-30"
               style={{
                 backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #3B82F6 0%, transparent 50%)`
               }}>
          </div>
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto">
          {/* Animated Title */}
          <div className="mb-8">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 tracking-tight">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 animate-gradient-shift">
                Future-Ready
              </span>
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient-shift-reverse">
                IT Solutions
              </span>
            </h1>
            
            <p className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed animate-text-reveal">
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
                <div className="absolute inset-0 bg-gradient-to-r rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
                     style={{ background: `linear-gradient(to right, ${stat.color.split(' ')[1]}, ${stat.color.split(' ')[3]})` }}>
                </div>
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
          <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-500">
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
              to="#services"
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

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow">
            <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full mt-2 animate-scroll"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        id="services"
        ref={servicesRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
                className="relative group perspective-1000"
                onMouseEnter={() => setActiveService(service.id)}
                onMouseLeave={() => setActiveService(null)}
              >
                <div className={`relative h-full rounded-2xl overflow-hidden transition-all duration-700 ${
                  activeService === service.id ? 'rotate-y-0' : 'rotate-y-5'
                }`}>
                  {/* Front of Card */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 transition-all duration-500 group-hover:scale-105">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center text-2xl mb-6 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300"
                        style={{ backgroundImage: `linear-gradient(to right, ${service.color.split(' ')[1]}, ${service.color.split(' ')[3]})` }}>
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
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section 
        ref={featuresRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
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
                style={{ animationDelay: `${feature.delay}ms` }}
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

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
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

          {/* 3D Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transform transition-all duration-500 group-hover:scale-105 group-hover:border-blue-500/30 h-full">
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xl">★</span>
                    ))}
                  </div>
                  
                  <p className="text-gray-300 italic text-lg mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="border-t border-gray-700/50 pt-6">
                    <div className="font-bold text-gray-200">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-transparent"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
              Transform
            </span>{" "}
            Your Business?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's build the future together with innovative IT solutions
          </p>

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

      {/* Custom CSS Animations */}
      <style jsx global>{`
        @keyframes floatOrb {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -40px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 30px) scale(0.9);
          }
        }

        @keyframes particle {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          100% {
            transform: translateY(-1000px) rotate(720deg);
            opacity: 0;
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradientShiftReverse {
          0%, 100% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 0% 50%;
          }
        }

        @keyframes textReveal {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounceSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes scroll {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(10px);
            opacity: 0;
          }
        }

        .animate-float-orb {
          animation: floatOrb 20s ease-in-out infinite;
        }

        .animate-particle {
          animation: particle 15s linear infinite;
        }

        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradientShift 3s ease infinite;
        }

        .animate-gradient-shift-reverse {
          background-size: 200% 200%;
          animation: gradientShiftReverse 3s ease infinite;
        }

        .animate-text-reveal {
          animation: textReveal 1s ease-out forwards;
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
        }

        .animate-scroll {
          animation: scroll 2s ease-in-out infinite;
        }

        .perspective-1000 {
          perspective: 1000px;
        }

        .rotate-y-5 {
          transform: rotateY(5deg);
        }

        .rotate-y-0 {
          transform: rotateY(0deg);
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 80px;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }

        ::-webkit-scrollbar-track {
          background: #1f2937;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #3B82F6, #8B5CF6);
          border-radius: 5px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #2563EB, #7C3AED);
        }

        /* Section fade-in on scroll */
        section {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }

        section.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default ExploreServices;