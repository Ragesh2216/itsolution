import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home  = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      date: '31 July',
      author: 'admin',
      comments: '2 Comments',
      title: 'Consulted admitting is power acuteness.',
      description: 'Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode.'
    },
    {
      date: '31 July',
      author: 'admin',
      comments: '2 Comments',
      title: 'Unsatiable entreaties may collecting Power.',
      description: 'Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode.'
    },
    {
      date: '31 July',
      author: 'admin',
      comments: '2 Comments',
      title: 'Discovery incommode earnestly no he commanded',
      description: 'Wooded ladies she basket season age her uneasy saw. Discourse unwilling am no described dejection incommode.'
    }
  ];

  return (
   <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
  {/* Hero Section */}
  <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
    {/* Background Image */}
    <div 
      className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=2072&q=80")'
        // You can replace this with your own image URL
      }}
    ></div>
    
    {/* Background Overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-white/80 to-blue-50/80"></div>

    <div className="max-w-7xl mx-auto text-center relative z-10">
      <div className={`mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6 animate-pulse">
          For millions of users
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Stackly Powerful Digital<br />
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            IT solutions Company
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
          Affixed pretend account ten natural. Need eat week even yet that. Incommode delighted he resolving sportsmen do in listening.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-bounce-slow">
            Get started
          </button>
        </div>
      </div>
    </div>

    {/* Floating elements */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-20">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float-slow opacity-10"
          style={{
            width: `${Math.random() * 100 + 50}px`,
            height: `${Math.random() * 100 + 50}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, rgba(59,130,246,0.3) 0%, rgba(147,51,234,0.1) 100%)`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${Math.random() * 20 + 10}s`
          }}
        />
      ))}
    </div>
  </section>


      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200 + 400}ms` }}
              >
                <div className="text-4xl mb-4 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">{service.subtitle}</p>
                <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 animate-fade-in-up">
            Stop wasting time and money on technology.
          </h2>
          <p className="text-xl mb-8 opacity-90 animate-fade-in-up delay-200">
            Let's get started
          </p>
          <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl animate-pulse-slow">
            Get Free Consultation
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-white rounded-2xl p-8 shadow-lg transform hover:-translate-y-2 transition-all duration-500">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-2xl mb-6">
                  🎯
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Discover Our Company
                </h2>
                <h3 className="text-xl text-blue-600 font-semibold mb-4">
                  We Help IT Companies Scale Engineering Capacity
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Dissuade ecstatic and properly saw entirely sir why laughter endeavor. In on my jointure horrible margaret suitable he followed speedily. Indeed vanity excuse or mr lovers of on. By offer scale an stuff. Blush be sorry no sight sang lose at the reachpoint.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                  <div className="text-2xl">✅</div>
                  <div>
                    <h4 className="font-semibold text-green-800">Experts around the world</h4>
                    <p className="text-green-700 text-sm">Best Practice for industry</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200">
                  <p className="text-blue-800 font-semibold flex items-center gap-2">
                    <span>📞</span>
                    Join our team – come work with us.
                  </p>
                  <p className="text-blue-600 mt-1">+123 456 7890</p>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-4">Work Process</h3>
                <h4 className="text-xl mb-2">How we help your business</h4>
                <p className="text-blue-100 mb-6">Grow and successful</p>
                <p className="text-blue-200 mb-8">
                  Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
                </p>

                <div className="space-y-6">
                  {processSteps.map((step, index) => (
                    <div key={index} className="flex items-start gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 200}ms` }}>
                      <div className="w-12 h-12 bg-white text-blue-600 rounded-xl flex items-center justify-center font-bold text-lg flex-shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h5 className="font-bold text-white mb-2">{step.title}</h5>
                        <p className="text-blue-200 text-sm mb-3">{step.description}</p>
                        <button className="bg-white text-blue-600 hover:bg-gray-100 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 transform hover:scale-105">
                          {step.button}
                        </button>
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
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl p-8 text-white">
                <div className="text-4xl mb-4">⭐</div>
                <h2 className="text-3xl font-bold mb-4">25+ Years of Experience</h2>
                <h3 className="text-xl mb-4">What we promise high quality IT Agency Services</h3>
                <p className="text-orange-100 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere voluptate a quis est ullam impedit, tempora eaque maxime, illum alias repudiandae enim aspernatur, error debitis laudantium, deleniti aperiam rem nihil.
                </p>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="text-center">
                <div className="text-4xl mb-4">👥</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Team Members</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Meet our professional and expert team members
                </p>
                <p className="text-gray-500 mb-8">
                  Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {teamMembers.map((member, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        {member.avatar}
                      </div>
                      <h3 className="font-bold text-gray-900 mb-1">{member.name}</h3>
                      <p className="text-blue-600 text-sm">{member.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            Our Client's Review
          </h2>
          <p className="text-xl text-gray-600 mb-12 animate-fade-in-up delay-200">
            What client say about us?
          </p>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-up delay-400">
            <div className="text-6xl mb-4">⭐</div>
            <p className="text-gray-600 text-lg italic mb-6">
              "The IT solutions provided transformed our business operations completely. Their team is professional, knowledgeable, and delivered beyond our expectations."
            </p>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white">
                👤
              </div>
              <div className="text-left">
                <p className="font-semibold text-gray-900">John Anderson</p>
                <p className="text-gray-500 text-sm">CTO, TechCorp Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-4xl mb-4">📊</div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Case Studies</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Our Recent Launched Projects Available into Market
          </p>
          <p className="text-gray-500 mb-12">
            Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="w-full h-48 bg-gradient-to-r from-blue-400 to-purple-500 rounded-xl mb-4 flex items-center justify-center text-white text-4xl">
                  🚀
                </div>
                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  Enterprise Cloud Migration
                </h3>
                <p className="text-gray-600 text-sm">
                  Successfully migrated 500+ servers to cloud infrastructure with 99.9% uptime.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
            Contact us
          </h2>
          <p className="text-xl text-gray-300 text-center mb-12 animate-fade-in-up delay-200">
            You can connect with us when need help!
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="animate-fade-in-left">
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="font-semibold mb-1">Office Location</h3>
                    <p className="text-gray-300">22 Baker Street, London,<br />United Kingdom, W1U 3BW</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300">
                  <div className="text-2xl">📞</div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-gray-300">+44-20-7328-4499<br />+99-34-8878-9989</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-800 rounded-xl hover:bg-gray-700 transition-all duration-300">
                  <div className="text-2xl">✉️</div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-gray-300">info@yourdomain.com<br />admin@yourdomain.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-right">
              <div className="bg-gray-800 rounded-2xl p-8">
                <div className="space-y-4">
                  <input
                    type="text"
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  />
                  <textarea
                    placeholder="Please describe what you need. *"
                    rows="4"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
                  ></textarea>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                    Free consultation
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Blog</h2>
            <p className="text-xl text-gray-600 mb-4">Latest News & Articles</p>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Directly from Blog. Outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves very extreme future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 animate-fade-in-up group"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-blue-500 text-white px-3 py-1 rounded-lg font-semibold">
                    {post.date}
                  </div>
                  <span className="text-gray-500 text-sm">{post.author}</span>
                  <span className="text-gray-500 text-sm">{post.comments}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {post.description}
                </p>
                <button className="text-blue-600 hover:text-blue-700 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
                  Read More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx global>{`
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
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
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
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
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
        
        .animate-float-slow {
          animation: floatSlow 15s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounceSlow 2s ease-in-out infinite;
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
      `}</style>
    </div>
  );
};

export default Home;