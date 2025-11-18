import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function ITService() {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: "Cybersecurity Solutions",
      icon: "🛡️",
      description: "Protect your business from evolving cyber threats with our comprehensive security solutions. We offer advanced threat detection, vulnerability assessment, and 24/7 security monitoring services.",
      detailsLink: "/cybersecurity",
      buttonText: "Get Security Audit",
      features: [
        "Advanced threat detection & response",
        "Vulnerability assessment & penetration testing",
        "24/7 security monitoring",
        "Compliance management (GDPR, HIPAA, PCI DSS)",
        "Security awareness training"
      ],
      stats: "Protected 500+ businesses",
      color: "from-blue-500 to-cyan-500",
      hoverColor: "from-blue-600 to-cyan-600",
      iconColor: "text-blue-400"
    },
    {
      title: "Cloud Infrastructure & Migration",
      icon: "☁️",
      description: "Transform your business with scalable cloud solutions. We specialize in cloud migration, infrastructure setup, and optimization across AWS, Azure, and Google Cloud platforms.",
      detailsLink: "/cloud-solutions",
      buttonText: "Plan Migration",
      features: [
        "Cloud migration strategy & execution",
        "Multi-cloud infrastructure setup",
        "Cost optimization & monitoring",
        "Disaster recovery solutions",
        "Containerization & orchestration"
      ],
      stats: "Migrated 200+ workloads",
      color: "from-green-500 to-emerald-500",
      hoverColor: "from-green-600 to-emerald-600",
      iconColor: "text-green-400"
    },
    {
      title: "Software Development",
      icon: "💻",
      description: "Build custom software solutions tailored to your business needs. From web applications to enterprise systems, we deliver scalable and maintainable software products.",
      detailsLink: "/software-development",
      buttonText: "Start Project",
      features: [
        "Custom web & mobile applications",
        "Enterprise software solutions",
        "API development & integration",
        "Legacy system modernization",
        "Agile development methodology"
      ],
      stats: "150+ projects delivered",
      color: "from-purple-500 to-pink-500",
      hoverColor: "from-purple-600 to-pink-600",
      iconColor: "text-purple-400"
    },
    {
      title: "IT Consulting & Managed Services",
      icon: "🔧",
      description: "Get expert IT guidance and comprehensive managed services. We provide strategic technology planning, infrastructure management, and ongoing support for your business.",
      detailsLink: "/managed-services",
      buttonText: "Consult Experts",
      features: [
        "Strategic IT planning & roadmap",
        "Infrastructure management",
        "Help desk & technical support",
        "Network design & optimization",
        "IT budget optimization"
      ],
      stats: "Managing 300+ IT systems",
      color: "from-orange-500 to-red-500",
      hoverColor: "from-orange-600 to-red-600",
      iconColor: "text-orange-400"
    },
    {
      title: "Data Analytics & AI Solutions",
      icon: "📊",
      description: "Leverage the power of data and artificial intelligence to drive business decisions. We implement advanced analytics, machine learning models, and business intelligence solutions.",
      detailsLink: "/data-ai",
      buttonText: "Explore AI Solutions",
      features: [
        "Business intelligence dashboards",
        "Machine learning model development",
        "Data pipeline architecture",
        "Predictive analytics",
        "AI-powered automation"
      ],
      stats: "Improved efficiency by 40% avg.",
      color: "from-indigo-500 to-purple-500",
      hoverColor: "from-indigo-600 to-purple-600",
      iconColor: "text-indigo-400"
    },
    {
      title: "DevOps & Automation",
      icon: "⚡",
      description: "Accelerate your development lifecycle with our DevOps practices and automation solutions. We implement CI/CD pipelines, infrastructure as code, and automated testing frameworks.",
      detailsLink: "/devops",
      buttonText: "Optimize Workflow",
      features: [
        "CI/CD pipeline implementation",
        "Infrastructure as Code (Terraform)",
        "Container orchestration (Kubernetes)",
        "Automated testing & deployment",
        "Performance monitoring"
      ],
      stats: "Reduced deployment time by 70%",
      color: "from-teal-500 to-blue-500",
      hoverColor: "from-teal-600 to-blue-600",
      iconColor: "text-teal-400"
    }
  ];

  const testimonials = [
    {
      quote: "Stackly's cybersecurity solutions transformed our security posture. Their 24/7 monitoring prevented a major breach that could have cost us millions.",
      author: "Sarah Chen",
      company: "CTO, FinTech Solutions",
      rating: 5
    },
    {
      quote: "The cloud migration was seamless and resulted in 40% cost savings. Their team's expertise in AWS optimization was impressive.",
      author: "Michael Rodriguez",
      company: "IT Director, RetailChain Inc",
      rating: 5
    },
    {
      quote: "Their custom software development delivered exactly what we needed. The agile approach allowed us to adapt requirements as we grew.",
      author: "James Wilson",
      company: "CEO, HealthTech Innovations",
      rating: 5
    },
    {
      quote: "The managed services team became an extension of our IT department. Response times are excellent and issues are resolved proactively.",
      author: "Emily Davis",
      company: "Operations Manager, Logistics Pro",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <section className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient">
            IT Solutions & Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions to drive your business forward. From cybersecurity to cloud transformation, 
            we deliver innovative IT services that scale with your growth.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "500+", label: "Businesses Secured", color: "from-blue-500 to-cyan-500" },
              { number: "200+", label: "Cloud Migrations", color: "from-green-500 to-emerald-500" },
              { number: "99.9%", label: "Uptime Guarantee", color: "from-purple-500 to-pink-500" },
              { number: "24/7", label: "Support Coverage", color: "from-orange-500 to-red-500" }
            ].map((stat, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all duration-500 transform hover:scale-105 group overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                <div className="relative">
                  <div className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 ${
                  isHovered === index ? 'border-blue-500' : 'border-transparent'
                } group relative`}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                {/* Animated gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                
                <div className={`p-8 bg-gradient-to-r ${service.color} text-white relative overflow-hidden group-hover:bg-gradient-to-r ${service.hoverColor} transition-all duration-500`}>
                  {/* Subtle shimmer effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
                  
                  <div className="flex items-center gap-4 mb-4 relative">
                    <div className={`text-3xl transform group-hover:scale-110 transition-transform duration-300 ${service.iconColor}`}>
                      {service.icon}
                    </div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                  </div>
                  <p className="text-blue-100 text-lg leading-relaxed group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>
                </div>
                
                <div className="p-6 relative">
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3 group-hover:text-gray-800 transition-colors duration-300">
                      Key Features:
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li 
                          key={featureIndex} 
                          className="flex items-center gap-3 text-gray-700 group-hover:text-gray-900 transition-colors duration-300 transform group-hover:translate-x-1 transition-transform"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <span className={`${service.iconColor} transform group-hover:scale-125 transition-transform duration-300`}>
                            ✓
                          </span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium group-hover:text-gray-700 transition-colors duration-300">
                      {service.stats}
                    </span>
                    <Link
                      to={service.detailsLink}
                      className={`bg-gradient-to-r ${service.color} hover:${service.hoverColor} text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
                    >
                      {service.buttonText}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse"></div>
            
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our IT Solution Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Assessment & Planning",
                  description: "Comprehensive analysis of your current IT infrastructure and business goals",
                  icon: "🔍",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  step: "02",
                  title: "Solution Design",
                  description: "Custom architecture and technology stack recommendation",
                  icon: "📐",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Agile development and seamless integration with your systems",
                  icon: "⚡",
                  color: "from-purple-500 to-pink-500"
                },
                {
                  step: "04",
                  title: "Support & Optimization",
                  description: "Ongoing maintenance, monitoring, and continuous improvement",
                  icon: "🔄",
                  color: "from-orange-500 to-red-500"
                }
              ].map((step, index) => (
                <div 
                  key={index} 
                  className="text-center group cursor-pointer transform hover:-translate-y-2 transition-all duration-500"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:shadow-lg transition-all duration-500 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors duration-300"></div>
                    <span className="text-2xl relative z-10 transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </span>
                  </div>
                  <div className="text-sm font-semibold text-gray-500 mb-2 group-hover:text-gray-700 transition-colors duration-300">
                    {step.step}
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See what businesses say about our IT solutions and services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 group relative overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span 
                      key={i} 
                      className="text-yellow-400 transform group-hover:scale-110 transition-transform duration-300"
                      style={{ transitionDelay: `${i * 100}ms` }}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <blockquote className="text-gray-700 text-lg italic mb-4 group-hover:text-gray-900 transition-colors duration-300 relative">
                  <span className="absolute -top-2 -left-2 text-4xl text-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                  {testimonial.quote}
                  <span className="absolute -bottom-4 -right-2 text-4xl text-blue-200 opacity-50 group-hover:opacity-70 transition-opacity duration-300">"</span>
                </blockquote>
                <div className="relative">
                  <div className="font-semibold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                    {testimonial.author}
                  </div>
                  <div className="text-gray-600 text-sm group-hover:text-gray-700 transition-colors duration-300">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Our Technology Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                { name: "AWS", icon: "☁️", color: "from-orange-500 to-red-500" },
                { name: "Azure", icon: "🔷", color: "from-blue-500 to-cyan-500" },
                { name: "Kubernetes", icon: "⚓", color: "from-blue-600 to-indigo-600" },
                { name: "Docker", icon: "🐳", color: "from-blue-400 to-cyan-400" },
                { name: "React", icon: "⚛️", color: "from-cyan-500 to-blue-500" },
                { name: "Python", icon: "🐍", color: "from-yellow-500 to-blue-500" },
                { name: "Node.js", icon: "🟢", color: "from-green-500 to-emerald-500" },
                { name: "Terraform", icon: "🏗️", color: "from-purple-500 to-pink-500" },
                { name: "MongoDB", icon: "🍃", color: "from-green-600 to-emerald-600" },
                { name: "PostgreSQL", icon: "🐘", color: "from-blue-700 to-indigo-700" },
                { name: "Redis", icon: "🔴", color: "from-red-500 to-orange-500" },
                { name: "Elasticsearch", icon: "🔍", color: "from-green-500 to-teal-500" }
              ].map((tech, index) => (
                <div 
                  key={index}
                  className="text-center group transform hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-16 h-16 bg-gradient-to-r ${tech.color} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:shadow-lg transition-all duration-300`}>
                    <span className="text-2xl">{tech.icon}</span>
                  </div>
                  <div className="font-semibold text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                    {tech.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-12 text-white text-center relative overflow-hidden group">
            {/* Animated background elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-400 animate-pulse"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/50 to-indigo-700/50 group-hover:from-blue-600/60 group-hover:to-indigo-700/60 transition-all duration-1000"></div>
            
            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDelay: `${i * 2}s`,
                    animationDuration: `${15 + i * 5}s`
                  }}
                ></div>
              ))}
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 transform group-hover:scale-105 transition-transform duration-500">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto group-hover:text-white transition-colors duration-300">
                Whether you need cybersecurity, cloud solutions, or custom software development, 
                our expert team is ready to help you achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Contact IT Solutions Team</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
                <Link
                  to="/contact"
                  className="border border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 hover:scale-105 transform transition-all duration-300 relative overflow-hidden group/btn"
                >
                  <span className="relative z-10">Schedule Free Consultation</span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/btn:opacity-10 transition-opacity duration-300"></div>
                </Link>
              </div>
              <p className="text-blue-200 mt-6 text-sm group-hover:text-blue-100 transition-colors duration-300">
                Get a free IT assessment within 24 hours
              </p>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  );
}