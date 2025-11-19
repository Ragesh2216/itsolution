import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Add this useEffect to scroll to top when form is submitted
  useEffect(() => {
    if (isSubmitted) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }, [isSubmitted]); // This will run every time isSubmitted changes

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Scroll to top immediately when form starts submitting
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ 
        name: "", 
        company: "", 
        email: "", 
        phone: "", 
        service: "", 
        budget: "", 
        message: "" 
      });
    }, 2000);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 pt-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-2xl p-8 text-center animate-success-pop">
            <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-4 animate-fade-in-up">
              Request Received!
            </h2>
            <p className="text-gray-600 mb-8 text-lg animate-fade-in-up delay-200">
              Thank you for contacting Stackly IT Solutions. Our technical team will review your requirements 
              and get back to you within 2 business hours with a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-400">
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  // Scroll to form section when clicking "Submit Another Inquiry"
                  setTimeout(() => {
                    const formSection = document.querySelector('form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }, 100);
                }}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                Submit Another Inquiry
              </button>
              <Link
                to="/"
                className="border-2 border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-center"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-indigo-50 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-20"
            style={{
              width: `${Math.random() * 12 + 4}px`,
              height: `${Math.random() * 12 + 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#3B82F6', '#10B981', '#6366F1', '#06B6D4', '#8B5CF6', '#EF4444'][i % 6],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 15 + 10}s`
            }}
          />
        ))}
      </div>

      <main className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto relative z-10">
        {/* Header Section */}
        <section className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Get IT Solutions
          </h1>
          <p className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-8'
          }`}>
            Ready to transform your business with cutting-edge technology? Let's discuss your IT challenges and build innovative solutions together.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <div className="bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100 rounded-2xl shadow-2xl p-8 h-full transform hover:-translate-y-2 transition-all duration-500 animate-fade-in-left">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Support
              </h2>
              
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-blue-100 to-cyan-100",
                    title: "Sales & Solutions",
                    content: "solutions@stacklytech.com",
                    link: "mailto:solutions@stacklytech.com",
                    color: "text-blue-600 hover:text-blue-700"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-green-100 to-emerald-100",
                    title: "Support Hotline",
                    content: "+1 (555) 123-TECH",
                    link: "tel:+15551238324",
                    color: "text-green-600 hover:text-green-700"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-purple-100 to-pink-100",
                    title: "Headquarters",
                    content: "Tech Park, Silicon Valley, CA 94025, USA",
                    link: null,
                    color: "text-gray-600"
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    bg: "bg-gradient-to-r from-orange-100 to-red-100",
                    title: "Support Hours",
                    content: "24/7 Technical Support Available",
                    link: null,
                    color: "text-gray-600"
                  }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100 + 400}ms` }}
                  >
                    <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-md`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      {item.link ? (
                        <a href={item.link} className={`${item.color} transition-colors duration-300`}>
                          {item.content}
                        </a>
                      ) : (
                        <p className={item.color}>{item.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Emergency Support */}
              <div className="mt-8 p-4 bg-gradient-to-r from-red-500 to-orange-500 rounded-xl text-white transform hover:scale-105 transition-all duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 15.5c-.77.833.192 2.5 1.732 2.5z" />
                  </svg>
                  <h3 className="font-bold">Critical System Down?</h3>
                </div>
                <p className="text-sm opacity-90">
                  For urgent technical emergencies, call our 24/7 emergency line:
                  <a href="tel:+15551238324" className="font-bold ml-1 hover:underline">
                    +1 (555) 123-EMRG
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-right">
              <h2 className="text-2xl font-bold text-white mb-6 drop-shadow-lg">
                Request IT Consultation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {[
                    {
                      label: "Full Name *",
                      name: "name",
                      type: "text",
                      placeholder: "Your full name"
                    },
                    {
                      label: "Company Name *",
                      name: "company",
                      type: "text",
                      placeholder: "Your company/organization"
                    },
                    {
                      label: "Email Address *",
                      name: "email",
                      type: "email",
                      placeholder: "business.email@company.com"
                    },
                    {
                      label: "Phone Number",
                      name: "phone",
                      type: "tel",
                      placeholder: "+1 (555) 123-4567"
                    }
                  ].map((field, index) => (
                    <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 100 + 600}ms` }}>
                      <label htmlFor={field.name} className="block text-sm font-medium text-white mb-2 drop-shadow">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        name={field.name}
                        id={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                        placeholder={field.placeholder}
                        required={field.name !== 'phone'}
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="animate-fade-in-up" style={{ animationDelay: '800ms' }}>
                    <label htmlFor="service" className="block text-sm font-medium text-white mb-2 drop-shadow">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      id="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="cybersecurity">Cybersecurity Solutions</option>
                      <option value="cloud">Cloud Infrastructure & Migration</option>
                      <option value="software">Software Development</option>
                      <option value="consulting">IT Consulting & Managed Services</option>
                      <option value="data-ai">Data Analytics & AI Solutions</option>
                      <option value="devops">DevOps & Automation</option>
                      <option value="other">Other IT Services</option>
                    </select>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '900ms' }}>
                    <label htmlFor="budget" className="block text-sm font-medium text-white mb-2 drop-shadow">
                      Project Budget
                    </label>
                    <select
                      name="budget"
                      id="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                    >
                      <option value="">Select budget range</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                      <option value="undecided">To be determined</option>
                    </select>
                  </div>
                </div>

                <div className="animate-fade-in-up" style={{ animationDelay: '1000ms' }}>
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2 drop-shadow">
                    Project Details & Requirements *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border-2 border-white/30 bg-white/90 rounded-xl focus:ring-2 focus:ring-white focus:border-white focus:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg resize-vertical"
                    placeholder="Describe your project requirements, current challenges, timeline, and any specific technologies you're interested in..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center animate-fade-in-up ${
                    isSubmitting ? 'animate-pulse' : ''
                  }`}
                  style={{ animationDelay: '1200ms' }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting Request...
                    </>
                  ) : (
                    "Request Free Consultation 🚀"
                  )}
                </button>
                
                <p className="text-sm text-white/80 text-center animate-fade-in-up" style={{ animationDelay: '1400ms' }}>
                  * Required fields. We respect your privacy and follow strict data protection policies.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="mt-16">
          <div className="bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 rounded-2xl shadow-2xl p-8 transform hover:-translate-y-1 transition-all duration-500 animate-fade-in-up" style={{ animationDelay: '1600ms' }}>
            <h2 className="text-2xl font-bold text-white mb-8 text-center drop-shadow-lg">
              Technical FAQs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What's your typical response time for technical inquiries?",
                  answer: "We respond to all technical inquiries within 2 business hours. Emergency support requests are addressed immediately 24/7."
                },
                {
                  question: "Do you offer free initial consultations?",
                  answer: "Yes, we provide complimentary 30-minute consultations to understand your requirements and propose tailored solutions."
                },
                {
                  question: "What industries do you specialize in?",
                  answer: "We serve diverse industries including finance, healthcare, e-commerce, manufacturing, and SaaS with specialized IT solutions."
                },
                {
                  question: "Do you provide ongoing support and maintenance?",
                  answer: "Absolutely! We offer comprehensive managed services with 24/7 monitoring, regular updates, and proactive maintenance."
                },
                {
                  question: "What's your project delivery methodology?",
                  answer: "We follow Agile methodology with transparent communication, regular demos, and flexible adaptation to changing requirements."
                },
                {
                  question: "Do you work with startups and small businesses?",
                  answer: "Yes, we offer scalable solutions for businesses of all sizes, from startups to enterprise-level organizations."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 transform hover:scale-105 transition-all duration-300 animate-fade-in-up group hover:bg-white/30"
                  style={{ animationDelay: `${1800 + index * 100}ms` }}
                >
                  <h3 className="font-semibold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <p className="text-white/90 text-sm group-hover:text-white transition-colors duration-300">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInLeft {
          0% {
            opacity: 0;
            transform: translateX(-30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(30px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes float-slow {
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
        
        @keyframes success-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
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
          animation: float-slow 12s ease-in-out infinite;
        }
        
        .animate-success-pop {
          animation: success-pop 0.6s ease-out forwards;
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

export default Contact;