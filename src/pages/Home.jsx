import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import yuva from '../images/photojournalism.webp';
import sakthi from '../images/training.webp';
import dhara from '../images/editorial.webp';
import mani  from '../images/pr.webp';  
import digital from '../images/digitalstory.webp';
import broad from '../images/broadcast.webp';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  // Refs for scroll animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const ctaRef = useRef(null);
  const aboutRef = useRef(null);
  const qualityRef = useRef(null);
  const testimonialsRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const blogRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
    
    // Initialize scroll animations
    setupScrollAnimations();
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const setupScrollAnimations = () => {
    // Initial check for elements in viewport
    setTimeout(() => {
      handleScroll();
    }, 100);
  };

  const handleScroll = () => {
    const elements = [
      heroRef.current,
      servicesRef.current,
      ctaRef.current,
      aboutRef.current,
      qualityRef.current,
      testimonialsRef.current,
      caseStudiesRef.current,
      blogRef.current
    ];

    elements.forEach((element) => {
      if (element) {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        // Check if element is in viewport
        const isInViewport = rect.top <= windowHeight * 0.75 && rect.bottom >= 0;
        
        if (isInViewport) {
          element.classList.add('scroll-visible');
        }
      }
    });
  };

  const services = [
    {
      icon: '💻',
      title: 'Software',
      subtitle: 'Marketing Strategy',
      description: 'Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow. Before nature his parish boy.'
    },
    {
      icon: '🏗️',
      title: 'Infrastructure Plan',
      subtitle: 'Strategies',
      description: 'Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow. Before nature his parish boy.'
    },
    {
      icon: '⚡',
      title: 'Development',
      subtitle: 'Cloud Computing',
      description: 'Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow. Before nature his parish boy.'
    },
    {
      icon: '🌐',
      title: 'Networking',
      subtitle: 'Cloud Integration',
      description: 'Easy mind life fact with see has bore ten. Parish any chatty can elinor direct for former. Up as meant widow. Before nature his parish boy.'
    }
  ];

  const stats = [
    { number: '875+', label: 'Global Presence' },
    { number: '100%', label: 'Satisfaction' },
    { number: '25+', label: 'Years of Experience' }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Choose a Service',
      description: 'Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.',
      button: 'Request a Meeting'
    },
    {
      step: '02',
      title: 'Receive Custom Plan',
      description: 'Arose mr rapid in so vexed words. Gay welcome led add lasting chiefly say looking better.',
      button: "Let's Make it Happen"
    }
  ];

  const teamMembers = [
    {
      name: 'Monas Paul',
      role: 'Product Designer',
      avatar: '👨‍💼'
    },
    {
      name: 'Adham Jones',
      role: 'President & CEO',
      avatar: '👨‍💻'
    },
    {
      name: 'Duan Evua',
      role: 'Project Manager',
      avatar: '👨‍🔧'
    }
  ];

  const blogPosts = [
    {
      image: sakthi,
      date: '31 July',
      author: 'admin',
      comments: '2 Comments',
      title: 'Consulted admitting is power of  acuteness.',
      description: 'Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode.'
    },
    {
      image: yuva,
      date: '31 July',
      author: 'admin',
      comments: '2 Comments',
      title: 'Unsatiable entreaties may collecting Power.',
      description: 'Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode.'
    },
    {
      image: dhara,
      date: '31 July',
      author: 'admin',
      comments: '2 Comments',
      title: 'Discovery incommode earnestly no he commanded',
      description: 'Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode.'
    }
  ];

  const caseStudies = [
    {
      title: "Enterprise Cloud Migration",
      description: "Successfully migrated 500+ servers to cloud infrastructure with 99.9% uptime.",
      image: mani,
      icon: "🚀",
      tags: ["Cloud", "Migration", "Enterprise"]
    },
    {
      title: "E-commerce Platform Development",
      description: "Built a scalable e-commerce platform handling 10k+ daily transactions.",
      image: digital,
      icon: "🛒",
      tags: ["E-commerce", "Development", "Scalability"]
    },
    {
      title: "AI-Powered Analytics Dashboard",
      description: "Developed real-time analytics dashboard with predictive insights.",
      image: broad,
      icon: "🤖",
      tags: ["AI", "Analytics", "Dashboard"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden scroll-section"
      >
        {/* Background Image with Animations */}
        <div className="absolute inset-0">
          <img
            src="hero.png"
            alt="Digital IT Solutions"
            className="w-full h-full object-cover object-center scale-110 animate-parallax-slow"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-blue-500/15 to-blue-400/10"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 via-transparent to-gray-900/20"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating Gradient Orbs */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-blue-500/20 rounded-full blur-3xl animate-float-orb-1"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/20 to-blue-300/20 rounded-full blur-3xl animate-float-orb-2"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-gradient-to-r from-blue-300/20 to-blue-200/20 rounded-full blur-3xl animate-float-orb-3"></div>
          
          {/* Colorful Floating Particles */}
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full animate-particle-float"
              style={{
                width: `${Math.random() * 8 + 4}px`,
                height: `${Math.random() * 8 + 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                backgroundColor: ['#3B82F6', '#60A5FA', '#93C5FD', '#BFDBFE', '#DBEAFE'][Math.floor(Math.random() * 5)],
                opacity: Math.random() * 0.3 + 0.1,
                animationDelay: `${Math.random() * 20}s`,
                animationDuration: `${Math.random() * 25 + 15}s`
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Animated Main Heading */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-8 leading-tight drop-shadow-2xl">
              <span className="block animate-slide-in-up">
                Stackly Powerful
              </span>
              <span className="block mt-4">
                <span className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500 bg-clip-text text-transparent animate-gradient-flow">
                  Digital IT Solutions
                </span>
              </span>
            </h1>

            {/* Animated Description */}
            <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed animate-fade-in-up delay-300 drop-shadow-lg">
              Transforming businesses with cutting-edge technology solutions. 
              <span className="block mt-3 text-white/60 text-lg">
                Innovation meets excellence in every project we deliver.
              </span>
            </p>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
              <Link
                to="/contact"
                className="group relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 sm:px-12 py-4 sm:py-5 rounded-2xl font-bold text-lg transition-all duration-500 transform hover:scale-105 hover:shadow-2xl shadow-lg overflow-hidden"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                <span className="relative z-10 flex items-center justify-center gap-3">
                  <span className="text-xl">🚀</span>
                  Get Started Now
                  <span className="group-hover:translate-x-2 transition-transform duration-300">→</span>
                </span>
              </Link>
            </div>

            {/* Animated Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-12 sm:mt-16 max-w-2xl mx-auto animate-fade-in-up delay-700">
              {[
                { number: '500+', label: 'Projects', color: 'from-blue-300 to-blue-400' },
                { number: '99%', label: 'Satisfaction', color: 'from-blue-400 to-blue-500' },
                { number: '24/7', label: 'Support', color: 'from-blue-500 to-blue-600' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1 sm:mb-2 animate-count-up`}>
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-xs sm:text-sm font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section 
        ref={servicesRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-section bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-200">
              We provide IT & Business solutions
            </p>
            <p className="text-gray-500 mt-4 max-w-3xl mx-auto animate-fade-in-up delay-300">
              Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group border border-blue-100"
                style={{ animationDelay: `${index * 200 + 400}ms` }}
              >
                <div className="text-4xl mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-3 text-sm sm:text-base">{service.subtitle}</p>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        ref={ctaRef}
        className="py-12 sm:py-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white scroll-section"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Stop wasting time and money on technology.
          </h2>
          <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 animate-fade-in-up delay-200">
            Let's get started
          </p>
          <Link 
            to="/contact" 
            className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-slow"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section 
        ref={aboutRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-section bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-500 border border-blue-100">
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center text-white text-xl sm:text-2xl mb-4 sm:mb-6">
                  🎯
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                  Discover Our Company
                </h2>
                <h3 className="text-lg sm:text-xl text-blue-600 font-semibold mb-4">
                  We Help IT Companies Scale Engineering Capacity
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                  Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose at the reachpoint.
                </p>

                <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <div className="text-xl sm:text-2xl text-blue-600">✅</div>
                  <div>
                    <h4 className="font-semibold text-blue-800 text-sm sm:text-base">Experts around the world</h4>
                    <p className="text-blue-700 text-xs sm:text-sm">Best Practice for industry</p>
                  </div>
                </div>

                <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-blue-800 font-semibold flex items-center gap-2 text-sm sm:text-base">
                    <span className="text-blue-600">📞</span>
                    Join our team – come work with us.
                  </p>
                  <p className="text-blue-600 mt-1 text-sm sm:text-base">+123 456 7890</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
                <div className="text-3xl sm:text-4xl mb-4">🚀</div>
                <h3 className="text-xl sm:text-2xl font-bold mb-4">Work Process</h3>
                <h4 className="text-lg sm:text-xl mb-2">How we help your business</h4>
                <p className="text-blue-100 mb-4 sm:mb-6">Grow and successful</p>
                <p className="text-blue-200 mb-6 sm:mb-8 text-sm sm:text-base">
                  Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
                </p>

                <div className="space-y-4 sm:space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-3 sm:gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center font-bold text-base sm:text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-1 sm:mb-2 text-base sm:text-lg">{step.title}</h5>
                        <p className="text-blue-200 text-xs sm:text-sm mb-2 sm:mb-3">{step.description}</p>
                        <Link to="/404" className="bg-white text-blue-600 hover:bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                          {step.button}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Promise Section */}
      <section 
        ref={qualityRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-section bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 sm:p-8 text-white">
                <div className="text-3xl sm:text-4xl mb-4">⭐</div>
                <h2 className="text-2xl sm:text-3xl font-bold mb-4">25+ Years of Experience</h2>
                <h3 className="text-lg sm:text-xl mb-4">What we promise high quality IT Agency Services</h3>
                <p className="text-blue-100 leading-relaxed text-sm sm:text-base">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptate a quis est ullam impedit, tempora eaque maxime, illum alias repudiandae enim aspernatur, error debitis laudantium, deleniti aperiam rem nihil.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl mb-4 text-blue-600">👥</div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Team Members</h2>
                <p className="text-gray-600 mb-4 sm:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
                  Meet our professional and expert team members
                </p>
                <p className="text-gray-500 mb-6 sm:mb-8 text-sm sm:text-base">
                  Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-4 sm:p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group border border-blue-100"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl mx-auto mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                        {member.avatar}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1 text-sm sm:text-base">{member.name}</h3>
                      <p className="text-blue-600 text-xs sm:text-sm">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section 
        ref={testimonialsRef}
        className="py-16 sm:py-20 scroll-section bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Our Client's Review
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 animate-fade-in-up delay-200">
            What client say about us?
          </p>

          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg max-w-4xl mx-auto transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up delay-400 border border-blue-100">
            <div className="text-4xl sm:text-6xl mb-4 text-blue-600">⭐</div>
            <p className="text-gray-600 text-base sm:text-lg italic mb-4 sm:mb-6">
              "The IT solutions provided transformed our business operations completely. Their team is professional, knowledgeable, and delivered beyond our expectations."
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                👤
              </div>
              <div className="text-center sm:text-left">
                <p className="font-semibold text-gray-900 text-sm sm:text-base">John Anderson</p>
                <p className="text-gray-500 text-xs sm:text-sm">CTO, TechCorp Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section 
        ref={caseStudiesRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-section bg-gradient-to-b from-blue-50 to-white"
      >
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-3xl sm:text-4xl mb-4 text-blue-600">📊</div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base">
            Our Recent Launched Projects Available into Market
          </p>
          <p className="text-gray-500 mb-8 sm:mb-12 text-sm sm:text-base">
            Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {caseStudies.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group border border-blue-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Project Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.description}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-blue-900/20 to-transparent"></div>
                  
                  {/* Icon Badge */}
                  <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-xl sm:text-2xl">
                    {project.icon}
                  </div>
                  
                  {/* Tags */}
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 flex flex-wrap gap-1 sm:gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs font-medium rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 text-base sm:text-lg">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Stats/Results */}
                  <div className="flex items-center justify-between mb-3 sm:mb-4 pt-3 sm:pt-4 border-t border-blue-50">
                    <div className="text-center">
                      <div className="text-blue-600 font-bold text-sm sm:text-lg">99.9%</div>
                      <div className="text-gray-500 text-xs">Uptime</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-bold text-sm sm:text-lg">50%</div>
                      <div className="text-gray-500 text-xs">Cost Saving</div>
                    </div>
                    <div className="text-center">
                      <div className="text-blue-600 font-bold text-sm sm:text-lg">6M</div>
                      <div className="text-gray-500 text-xs">Users Reached</div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Link 
                    to="/404" 
                    className="w-full py-2 sm:py-3 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 text-blue-600 font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center gap-1 sm:gap-2 group text-sm sm:text-base"
                  >
                    View Case Study
                    <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="mt-8 sm:mt-12">
            <Link 
              to="/case-studies" 
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg text-sm sm:text-base"
            >
              View All Case Studies
              <span className="text-base sm:text-lg">📚</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section 
        ref={blogRef}
        className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 scroll-section bg-gradient-to-b from-white to-blue-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Blog</h2>
            <p className="text-lg sm:text-xl text-gray-600 mb-4">Latest News & Articles</p>
            <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
              Directly from Blog. Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group border border-blue-100"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Blog Image */}
                <div className="relative h-40 sm:h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Date Badge */}
                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4 bg-blue-500 text-white px-2 sm:px-3 py-1 rounded-lg font-semibold text-xs sm:text-sm">
                    {post.date}
                  </div>
                </div>

                {/* Blog Content */}
                <div className="p-4 sm:p-6">
                  <div className="flex items-center gap-2 sm:gap-4 mb-2 sm:mb-3 text-xs sm:text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{post.comments}</span>
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-blue-600 transition-colors duration-300 text-base sm:text-lg leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                    {post.description}
                  </p>
                  <Link to="/404" className="text-blue-600 hover:text-blue-700 font-semibold text-xs sm:text-sm flex items-center gap-1 sm:gap-2 group-hover:gap-2 sm:group-hover:gap-3 transition-all duration-300">
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        /* Scroll Animation Classes */
        .scroll-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-section.scroll-visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Fade In from Left */
        .fade-in-left {
          opacity: 0;
          transform: translateX(-50px);
          transition: all 0.8s ease-out;
        }
        
        .fade-in-left.scroll-visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Fade In from Right */
        .fade-in-right {
          opacity: 0;
          transform: translateX(50px);
          transition: all 0.8s ease-out;
        }
        
        .fade-in-right.scroll-visible {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Hero Section Animations */
        @keyframes parallaxSlow {
          0%, 100% {
            transform: scale(1.1) translateY(0);
          }
          50% {
            transform: scale(1.15) translateY(-10px);
          }
        }

        @keyframes gradientFlow {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes floatOrb1 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(50px, -60px) scale(1.2);
          }
          66% {
            transform: translate(-30px, 40px) scale(0.8);
          }
        }

        @keyframes floatOrb2 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(-60px, 50px) scale(1.3);
          }
          66% {
            transform: translate(40px, -30px) scale(0.7);
          }
        }

        @keyframes floatOrb3 {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(40px, 60px) scale(1.1);
          }
          66% {
            transform: translate(-50px, -40px) scale(0.9);
          }
        }

        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0) translateX(0) rotate(0deg);
          }
          25% {
            transform: translateY(-50px) translateX(30px) rotate(90deg);
          }
          50% {
            transform: translateY(30px) translateX(-40px) rotate(180deg);
          }
          75% {
            transform: translateY(-30px) translateX(50px) rotate(270deg);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(100px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes countUp {
          from {
            opacity: 0;
            transform: scale(0.5) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

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
        
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.9;
            transform: scale(1.02);
          }
        }

        /* Animation Classes */
        .animate-parallax-slow {
          animation: parallaxSlow 30s ease-in-out infinite;
        }

        .animate-gradient-flow {
          background-size: 200% 200%;
          animation: gradientFlow 3s ease infinite;
        }

        .animate-float-orb-1 {
          animation: floatOrb1 20s ease-in-out infinite;
        }

        .animate-float-orb-2 {
          animation: floatOrb2 25s ease-in-out infinite;
        }

        .animate-float-orb-3 {
          animation: floatOrb3 18s ease-in-out infinite;
        }

        .animate-particle-float {
          animation: particleFloat 25s ease-in-out infinite;
        }

        .animate-slide-in-up {
          animation: slideInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        .animate-count-up {
          animation: countUp 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-400 {
          animation-delay: 400ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
};

export default Home;