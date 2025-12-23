import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function Latest() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [visibleItems, setVisibleItems] = useState(6);
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  
  // Refs for scroll animations
  const headerRef = useRef(null);
  const coursesRef = useRef(null);
  const newsletterRef = useRef(null);
  const featuresRef = useRef(null);

  useEffect(() => {
    // Mouse tracking for parallax effects
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
      setIsScrolled(window.scrollY > 50);
      
      // Check elements in viewport
      const elements = [
        headerRef.current,
        coursesRef.current,
        newsletterRef.current,
        featuresRef.current
      ];

      elements.forEach((element) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          const windowHeight = window.innerHeight;
          
          // Check if element is in viewport
          const isInViewport = rect.top <= windowHeight * 0.85 && rect.bottom >= 0;
          
          if (isInViewport) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
          }
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    // Initialize Intersection Observer for smoother animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all scroll sections
    const sections = document.querySelectorAll('.scroll-section');
    sections.forEach(section => observer.observe(section));

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      sections.forEach(section => observer.unobserve(section));
    };
  }, []);

  // Mock function for newsletter subscription
  const subscribeToNewsletter = async (email) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email.includes('@')) {
          resolve({ success: true });
        } else {
          reject(new Error('Invalid email'));
        }
      }, 1500);
    });
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      await subscribeToNewsletter(email);
      setMessage({ type: 'success', text: 'Successfully subscribed to course updates!' });
      setEmail('');
    } catch (error) {
      setMessage({ type: 'error', text: 'Subscription failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // IT Courses Data
  const courses = [
    {
      id: 1,
      title: "Cloud Computing Fundamentals",
      category: "cloud",
      description: "Master AWS, Azure, and Google Cloud platforms with hands-on projects and real-world scenarios.",
      duration: "8 weeks",
      level: "Beginner",
      students: "1,200+",
      rating: 4.9,
      price: "$299",
      image: "☁️",
      color: "from-blue-500 to-cyan-500",
      tags: ["AWS", "Azure", "DevOps"]
    },
    {
      id: 2,
      title: "Cybersecurity Essentials",
      category: "security",
      description: "Learn ethical hacking, network security, and threat detection with practical lab exercises.",
      duration: "10 weeks",
      level: "Intermediate",
      students: "950+",
      rating: 4.8,
      price: "$349",
      image: "🛡️",
      color: "from-green-500 to-emerald-500",
      tags: ["Ethical Hacking", "Network Security", "Penetration Testing"]
    },
    {
      id: 3,
      title: "Full Stack Web Development",
      category: "development",
      description: "Build modern web applications with React, Node.js, and MongoDB from scratch.",
      duration: "12 weeks",
      level: "Beginner",
      students: "2,500+",
      rating: 4.9,
      price: "$399",
      image: "💻",
      color: "from-purple-500 to-pink-500",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 4,
      title: "Data Science & Machine Learning",
      category: "ai",
      description: "Master Python, TensorFlow, and data visualization for real-world ML applications.",
      duration: "14 weeks",
      level: "Intermediate",
      students: "1,800+",
      rating: 4.7,
      price: "$449",
      image: "🤖",
      color: "from-orange-500 to-red-500",
      tags: ["Python", "TensorFlow", "Data Analysis"]
    },
    {
      id: 5,
      title: "DevOps & CI/CD Pipeline",
      category: "devops",
      description: "Automate deployment pipelines with Docker, Kubernetes, and Jenkins.",
      duration: "8 weeks",
      level: "Intermediate",
      students: "1,100+",
      rating: 4.8,
      price: "$329",
      image: "⚙️",
      color: "from-indigo-500 to-blue-500",
      tags: ["Docker", "Kubernetes", "Jenkins"]
    },
    {
      id: 6,
      title: "Mobile App Development",
      category: "mobile",
      description: "Create cross-platform mobile apps with React Native and Flutter.",
      duration: "10 weeks",
      level: "Beginner",
      students: "1,400+",
      rating: 4.6,
      price: "$369",
      image: "📱",
      color: "from-teal-500 to-green-500",
      tags: ["React Native", "Flutter", "Mobile"]
    },
    {
      id: 7,
      title: "Blockchain Development",
      category: "emerging",
      description: "Learn smart contracts, DApps, and Web3 technologies with Solidity.",
      duration: "12 weeks",
      level: "Advanced",
      students: "650+",
      rating: 4.9,
      price: "$499",
      image: "⛓️",
      color: "from-yellow-500 to-orange-500",
      tags: ["Blockchain", "Solidity", "Web3"]
    },
    {
      id: 8,
      title: "UI/UX Design Masterclass",
      category: "design",
      description: "Master Figma, Adobe XD, and user-centered design principles.",
      duration: "8 weeks",
      level: "Beginner",
      students: "900+",
      rating: 4.7,
      price: "$279",
      image: "🎨",
      color: "from-pink-500 to-rose-500",
      tags: ["Figma", "UI Design", "UX Research"]
    },
    {
      id: 9,
      title: "Python Programming Bootcamp",
      category: "programming",
      description: "Complete Python course from basics to advanced topics and frameworks.",
      duration: "6 weeks",
      level: "Beginner",
      students: "3,200+",
      rating: 4.9,
      price: "$249",
      image: "🐍",
      color: "from-cyan-500 to-blue-500",
      tags: ["Python", "Django", "Automation"]
    }
  ];

  const categories = [
    { id: "all", name: "All Courses", count: courses.length, icon: "📚" },
    { id: "cloud", name: "Cloud Computing", count: courses.filter(item => item.category === "cloud").length, icon: "☁️" },
    { id: "security", name: "Cybersecurity", count: courses.filter(item => item.category === "security").length, icon: "🛡️" },
    { id: "development", name: "Web Development", count: courses.filter(item => item.category === "development").length, icon: "💻" },
    { id: "ai", name: "AI & Data Science", count: courses.filter(item => item.category === "ai").length, icon: "🤖" },
    { id: "devops", name: "DevOps", count: courses.filter(item => item.category === "devops").length, icon: "⚙️" },
    { id: "mobile", name: "Mobile Development", count: courses.filter(item => item.category === "mobile").length, icon: "📱" }
  ];

  const filteredCourses = courses.filter(item => 
    activeCategory === "all" || item.category === activeCategory
  ).slice(0, visibleItems);

  const loadMore = () => {
    setVisibleItems(prev => prev + 3);
  };

  const features = [
    {
      title: "Expert Instructors",
      description: "Learn from industry professionals with years of experience",
      icon: "👨‍🏫",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Hands-on Projects",
      description: "Build real-world projects for your portfolio",
      icon: "🛠️",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Career Support",
      description: "Get job-ready with resume reviews and interview prep",
      icon: "🎯",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Flexible Learning",
      description: "Learn at your own pace with lifetime access",
      icon: "🕒",
      color: "from-orange-500 to-red-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white overflow-x-hidden">
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 transform origin-left z-50 transition-transform duration-300"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      ></div>

      {/* Header Section */}
      <div className="relative pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        {/* Dynamic Background based on mouse */}
        <div 
          className="absolute inset-0 opacity-30 transition-all duration-300 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, #3B82F6 0%, transparent 50%)`
          }}
        ></div>

        <div 
          ref={headerRef}
          className="max-w-7xl mx-auto scroll-section opacity-0 translate-y-10 transition-all duration-1000"
        >
          <div className="relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient">
                Master Modern Tech
              </span>
              <span className="block mt-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent bg-[length:200%_200%] animate-gradient-reverse">
                With Expert Courses
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed animate-fadeIn">
              Transform your career with hands-on IT courses taught by industry experts. 
              Learn cutting-edge technologies and build real-world projects.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 max-w-2xl mx-auto mb-8">
              {[
                { value: "50+", label: "Courses", color: "from-blue-400 to-cyan-500" },
                { value: "10K+", label: "Students", color: "from-purple-400 to-pink-500" },
                { value: "4.8", label: "Avg Rating", color: "from-green-400 to-emerald-500" },
                { value: "98%", label: "Satisfaction", color: "from-orange-400 to-red-500" }
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
                  <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 transition-all duration-500 group-hover:scale-105 group-hover:bg-gray-800/70 border border-gray-700/50 group-hover:border-transparent">
                    <div className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center gap-4">
              <Link
                to="/404"
                className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span className="group-hover:rotate-180 transition-transform duration-500">🎓</span>
                  Explore All Courses
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </div>
              </Link>

              <Link
                to="#features"
                className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden border border-gray-600 hover:border-transparent"
              >
                <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/70 transition-all duration-500"></div>
                <div className="relative z-10 flex items-center justify-center gap-3">
                  <span>⚡</span>
                  Why Choose Us
                  <span className="group-hover:rotate-90 transition-transform duration-500">💡</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Browse by Category
              </span>
            </h2>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setVisibleItems(6);
                  }}
                  className={`group relative px-5 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 overflow-hidden ${
                    activeCategory === category.id
                      ? 'text-white shadow-lg'
                      : 'text-gray-300 hover:text-white bg-gray-800/50 backdrop-blur-sm border border-gray-700/50'
                  }`}
                >
                  {activeCategory === category.id && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex flex-col items-center">
                    <span className="text-xl mb-1">{category.icon}</span>
                    <span>{category.name}</span>
                    <span className={`mt-1 px-2 py-1 text-xs rounded-full ${
                      activeCategory === category.id
                        ? 'bg-white/20'
                        : 'bg-gray-700 text-gray-300'
                    }`}>
                      {category.count} courses
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8" id="courses">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={coursesRef}
            className="scroll-section opacity-0 translate-y-10 transition-all duration-1000"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="group"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="relative h-full rounded-2xl overflow-hidden transition-all duration-500">
                    {/* Front of Card */}
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 transition-all duration-500 group-hover:scale-105">
                      {/* Icon and Category */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${course.color} flex items-center justify-center text-white text-xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                            {course.image}
                          </div>
                          <div>
                            <span className="inline-block px-3 py-1 text-xs font-semibold text-gray-300 bg-gray-700/50 rounded-full capitalize">
                              {course.level}
                            </span>
                            <p className="text-sm text-gray-400 mt-1">{course.duration}</p>
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text transition-all duration-300 line-clamp-2"
                          style={{ 
                            backgroundImage: course.color.includes('from-blue') ? 'linear-gradient(to right, #3B82F6, #06B6D4)' :
                                          course.color.includes('from-green') ? 'linear-gradient(to right, #10B981, #34D399)' :
                                          course.color.includes('from-purple') ? 'linear-gradient(to right, #8B5CF6, #EC4899)' :
                                          course.color.includes('from-orange') ? 'linear-gradient(to right, #F97316, #EF4444)' :
                                          course.color.includes('from-indigo') ? 'linear-gradient(to right, #6366F1, #3B82F6)' :
                                          course.color.includes('from-red') ? 'linear-gradient(to right, #EF4444, #EC4899)' :
                                          course.color.includes('from-yellow') ? 'linear-gradient(to right, #F59E0B, #F97316)' :
                                          course.color.includes('from-pink') ? 'linear-gradient(to right, #EC4899, #F472B6)' :
                                          'linear-gradient(to right, #06B6D4, #3B82F6)'
                          }}>
                        {course.title}
                      </h3>
                      
                      <p className="text-gray-400 leading-relaxed mb-4 line-clamp-3">
                        {course.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {course.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-blue-500/10 text-blue-300 text-xs font-medium rounded-full border border-blue-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Course Info */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <span className="text-yellow-400 mr-1">★</span>
                            <span className="text-sm">{course.rating}</span>
                          </div>
                          <div className="flex items-center text-sm text-gray-400">
                            <span className="mr-1">👥</span>
                            {course.students}
                          </div>
                        </div>
                        <div className="text-lg font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                          {course.price}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4 border-t border-gray-700/50">
                        <Link 
                          to="/404" 
                          className="group w-full relative px-4 py-3 rounded-xl font-semibold text-center transition-all duration-500 overflow-hidden block"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700"></div>
                          <div className="relative z-10 flex items-center justify-center gap-2">
                            <span className="transition-transform duration-500 group-hover:rotate-180">🎯</span>
                            Enroll Now
                            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Back Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${course.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Load More Button */}
      {visibleItems < filteredCourses.length && (
        <div className="text-center mb-12 animate-fadeIn">
          <button
            onClick={loadMore}
            className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10 flex items-center justify-center gap-3">
              <span className="transition-transform duration-500 group-hover:rotate-180">⬇️</span>
              Load More Courses
              <span className="transition-transform duration-300 group-hover:translate-y-2">↓</span>
            </div>
          </button>
        </div>
      )}

      {/* Features Section */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8" id="features">
        <div className="max-w-7xl mx-auto">
          <div 
            ref={featuresRef}
            className="scroll-section opacity-0 translate-y-10 transition-all duration-1000"
          >
            <h2 className="text-3xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Why Learn With Us?
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group"
                >
                  <div className="relative h-full rounded-2xl overflow-hidden transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-blue-500/30">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 text-center">{feature.title}</h3>
                      <p className="text-gray-400 text-center">{feature.description}</p>
                    </div>
                    
                    {/* Back Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <form 
            ref={newsletterRef}
            onSubmit={handleSubscribe} 
            className="scroll-section opacity-0 translate-y-10 transition-all duration-1000 relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-sm rounded-2xl p-8 text-center border border-gray-700/50 mb-12 overflow-hidden"
          >
            {/* Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-transparent"></div>
            </div>

            <div className="relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Stay{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Updated
                </span>
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                Get notified about new courses, special offers, and free learning resources.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 rounded-xl bg-gray-700/50 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative px-6 py-3 rounded-xl font-semibold transition-all duration-500 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative z-10 flex items-center justify-center gap-2">
                    <span className="transition-transform duration-500 group-hover:rotate-180">📧</span>
                    {isLoading ? 'Subscribing...' : 'Subscribe'}
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </div>
                </button>
              </div>
              {message.text && (
                <p className={`mt-4 text-sm font-medium ${
                  message.type === 'success' ? 'text-green-300' : 'text-red-300'
                }`}>
                  {message.text}
                </p>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your Career?
          </h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of successful graduates and start your tech journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/404"
              className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span className="group-hover:rotate-180 transition-transform duration-500">🚀</span>
                Start Learning Free
                <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
              </div>
            </Link>

            <Link
              to="/404"
              className="group relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-500 overflow-hidden border border-gray-600 hover:border-transparent"
            >
              <div className="absolute inset-0 bg-gray-800/50 backdrop-blur-sm group-hover:bg-gray-800/70 transition-all duration-500"></div>
              <div className="relative z-10 flex items-center justify-center gap-3">
                <span>💼</span>
                Career Guidance
                <span className="group-hover:rotate-90 transition-transform duration-500">⚡</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Latest;