import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function NotFound() {
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.title = "404 — Page Not Found | Stackly";
    setIsVisible(true);
  }, []);

  const suggestedPages = [
    { path: "/", name: "Home", icon: "🏠", description: "Return to homepage" },
    { path: "/services", name: "Services", icon: "⚡", description: "Our solutions" },
    { path: "/about", name: "About", icon: "👥", description: "Learn about us" },
    { path: "/contact", name: "Contact", icon: "📞", description: "Get in touch" },
  ];

  const errorMessages = [
    "Lost in digital space? Let's get you back on track.",
    "This page decided to take an unexpected vacation.",
    "Even our best algorithms couldn't find this one.",
    "You've discovered a hidden corner of the internet.",
    "This page is currently off exploring the metaverse.",
  ];

  const randomMessage = errorMessages[Math.floor(Math.random() * errorMessages.length)];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className={`relative pt-24 pb-16 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="text-center mb-16">
            {/* Animated 404 */}
            <div className="relative mb-12">
              <div className="text-8xl md:text-9xl font-black text-white/10 select-none">
                404
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-7xl md:text-8xl font-black bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6 animate-float">
                    404
                  </div>
                  <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full mx-auto mb-8 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Message */}
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Page Not Found
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              {randomMessage}
            </p>
            <p className="text-gray-400 mb-12">
              The page <code className="bg-white/10 px-3 py-1 rounded-lg text-cyan-300 font-mono text-sm">"{location.pathname}"</code> doesn't exist in our universe.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/"
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center gap-3"
              >
                <span>🚀</span>
                Back to Home
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              
              <button
                onClick={() => window.history.back()}
                className="group border-2 border-white/20 bg-white/5 backdrop-blur-lg hover:bg-white/10 text-white px-10 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-3"
              >
                <span>↩️</span>
                Go Back
                <span className="group-hover:rotate-180 transition-transform duration-300">🔄</span>
              </button>
            </div>
          </div>

          {/* Quick Navigation Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {suggestedPages.map((page, index) => (
              <Link
                key={index}
                to={page.path}
                className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-center">
                  <div className="text-3xl mb-3 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300">
                    {page.icon}
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                    {page.name}
                  </h3>
                  <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300">
                    {page.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Help Section */}
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-lg border border-cyan-500/20 rounded-3xl p-8 text-center mb-12">
            <div className="text-4xl mb-4">💫</div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Need Immediate Assistance?
            </h3>
            <p className="text-cyan-100 mb-6 max-w-2xl mx-auto">
              Our support team is ready to help you find what you're looking for and answer any questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Contact Support
              </Link>
              <a
                href="mailto:support@stackly.com"
                className="border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Email Us
              </a>
            </div>
          </div>

          {/* Fun Element */}
          <div className="text-center">
            <div className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full px-6 py-3">
              <span className="text-yellow-400">⭐</span>
              <span className="text-gray-300 text-sm">
                You found a rare 404 page! This happens to only 0.1% of visitors.
              </span>
              <span className="text-yellow-400">⭐</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-10 left-10 animate-bounce-slow">
        <div className="w-6 h-6 bg-cyan-400/30 rounded-full"></div>
      </div>
      <div className="absolute top-20 right-20 animate-bounce-slow delay-1000">
        <div className="w-4 h-4 bg-purple-400/30 rounded-full"></div>
      </div>
      <div className="absolute top-1/3 left-1/4 animate-bounce-slow delay-500">
        <div className="w-3 h-3 bg-blue-400/30 rounded-full"></div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .delay-2000 {
          animation-delay: 2000ms;
        }
      `}</style>
    </div>
  );
}