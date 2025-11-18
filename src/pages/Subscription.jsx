import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

// Mock Lucide-style Icons (for a single-file mandate)
const Check = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);

const X = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
);

const Server = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>
);

const Shield = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
);

const Cloud = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>
);

const pricingTiers = [
  {
    id: 'startup',
    name: 'Startup Plan',
    icon: '🚀',
    price: 299,
    description: 'Perfect for startups and small businesses looking to establish their digital presence.',
    features: [
      { text: 'Basic Website Development', included: true },
      { text: 'Cloud Hosting & Setup', included: true },
      { text: 'Security Monitoring', included: true },
      { text: '24/7 Basic Support', included: true },
      { text: 'API Integration', included: false },
      { text: 'Advanced Analytics', included: false },
      { text: 'Dedicated Account Manager', included: false },
      { text: 'Custom Software Development', included: false },
    ],
    highlight: false,
    buttonText: 'Get Started',
    popular: false
  },
  {
    id: 'business',
    name: 'Business Plan',
    icon: '💼',
    price: 799,
    description: 'Comprehensive IT solutions for growing businesses with advanced needs.',
    features: [
      { text: 'Custom Web Application', included: true },
      { text: 'Advanced Cloud Infrastructure', included: true },
      { text: 'Enterprise Security Suite', included: true },
      { text: 'API Integration & Development', included: true },
      { text: 'Advanced Analytics Dashboard', included: true },
      { text: '24/7 Priority Support', included: true },
      { text: 'Dedicated Account Manager', included: false },
      { text: 'Custom Software Development', included: false },
    ],
    highlight: true,
    buttonText: 'Go Business',
    popular: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise Plan',
    icon: '🏢',
    price: 1999,
    description: 'End-to-end IT solutions for large organizations with complex requirements.',
    features: [
      { text: 'Full Stack Development', included: true },
      { text: 'Multi-Cloud Architecture', included: true },
      { text: 'Advanced Cybersecurity', included: true },
      { text: 'Custom API Ecosystem', included: true },
      { text: 'Real-time Analytics & AI', included: true },
      { text: '24/7 Premium Support', included: true },
      { text: 'Dedicated Account Manager', included: true },
      { text: 'Custom Software Solutions', included: true },
    ],
    highlight: false,
    buttonText: 'Contact Sales',
    popular: false
  },
];

const FeatureItem = ({ text, included }) => {
  const iconColor = included ? 'text-green-500' : 'text-red-400';
  const textColor = included ? 'text-gray-700' : 'text-gray-500 line-through';

  return (
    <li className="flex items-center space-x-3 mb-3 animate-fade-in">
      {included ? (
        <Check className={`w-5 h-5 ${iconColor} flex-shrink-0 transition-transform duration-300 hover:scale-110`} />
      ) : (
        <X className={`w-5 h-5 ${iconColor} flex-shrink-0 transition-transform duration-300 hover:scale-110`} />
      )}
      <span className={`text-sm font-medium ${textColor} transition-all duration-300`}>
        {text}
      </span>
    </li>
  );
};

const PlanCard = ({ plan, onSelect, delay = 0 }) => {
  const isHighlighted = plan.highlight;
  const [isHovered, setIsHovered] = useState(false);

  // Conditional classes for highlighting the Business plan
  const cardClasses = isHighlighted
    ? 'bg-white border-4 border-blue-500 shadow-2xl scale-[1.02] hover:scale-[1.05] transition-all duration-500 animate-pop-in'
    : 'bg-white border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 animate-slide-up';
  
  const headerClasses = isHighlighted
    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-lg'
    : 'bg-gradient-to-r from-gray-50 to-white p-6';

  const priceColor = isHighlighted ? 'text-white' : 'text-gray-900';
  const buttonClasses = isHighlighted
    ? 'bg-white text-blue-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transform hover:scale-105'
    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-md hover:shadow-lg transform hover:scale-105';

  return (
    <div 
      className={`flex flex-col rounded-2xl overflow-hidden transform ${cardClasses} relative`}
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white mt-8 px-4 py-1 rounded-full text-sm font-bold shadow-lg animate-pulse-slow">
        
          </span>
        </div>
      )}

      {/* Animated background effect for highlighted card */}
      {isHighlighted && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-5 rounded-2xl"></div>
      )}
      
      {/* Floating particles animation on hover */}
      {isHovered && isHighlighted && (
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float"
              style={{
                left: `${20 + i * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            />
          ))}
        </div>
      )}

      {/* Header */}
      <div className={headerClasses}>
        <div className="flex items-center gap-3 mb-2">
          <span className="text-2xl">{plan.icon}</span>
          <h3 className={`text-xl font-extrabold ${isHighlighted ? 'text-white' : 'text-gray-900'} animate-fade-in`}>
            {plan.name}
          </h3>
        </div>
        <p className={`text-sm mb-4 ${isHighlighted ? 'text-blue-200' : 'text-gray-500'} animate-fade-in delay-100`}>
          {plan.description}
        </p>
        
        <div className="flex items-baseline animate-scale-in">
          <span className={`text-5xl font-extrabold tracking-tight ${priceColor}`}>
            ${plan.price}
          </span>
          <span className={`ml-1 text-xl font-medium ${isHighlighted ? 'text-blue-200' : 'text-gray-500'}`}>
            /month
          </span>
        </div>
      </div>

      {/* Features & Button */}
      <div className="flex flex-col flex-grow p-6 relative z-10">
        <ul className="flex-grow space-y-2">
          {plan.features.map((feature, index) => (
            <FeatureItem 
              key={index} 
              text={feature.text} 
              included={feature.included}
            />
          ))}
        </ul>

        {/* Animated Button */}
        <button 
          type="button" 
          onClick={() => onSelect(plan.id)}
          className={`mt-6 w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 ${buttonClasses} animate-pulse-slow`}>
          {plan.buttonText}
        </button>
      </div>
    </div>
  );
};

// Checkout Component with animations
const CheckoutPage = ({ planId, onBack, onComplete }) => {
    const plan = pricingTiers.find(p => p.id === planId);
    const navigate = useNavigate();
    const [isProcessing, setIsProcessing] = useState(false);
    
    if (!plan) {
        return (
            <div className="text-center p-20 animate-fade-in">
                <h2 className="text-2xl font-bold text-red-600 mb-4">Error: Plan Not Found</h2>
                <button 
                    onClick={onBack}
                    className="mt-4 py-2 px-6 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
                    Back to Plans
                </button>
            </div>
        );
    }

    const handleComplete = async () => {
        setIsProcessing(true);
        // Simulate processing delay
        await new Promise(resolve => setTimeout(resolve, 2000));
        onComplete();
        navigate('/404');
    };

    return (
        <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl shadow-2xl animate-slide-up">
            <div className="animate-fade-in">
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6 border-b pb-4">
                    Checkout - {plan.name}
                </h1>
                <p className="text-gray-700 mb-4 animate-fade-in delay-200">
                    You are about to subscribe to the <strong>{plan.name}</strong> plan for <strong>${plan.price}/month</strong>.
                </p>
                <ul className="space-y-3 mb-8 text-sm text-gray-600 bg-gradient-to-r from-gray-50 to-blue-50 p-6 rounded-xl animate-fade-in delay-300">
                    <li className="font-semibold text-blue-600">Key Features:</li>
                    {plan.features.filter(f => f.included).map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2 animate-fade-in" style={{ animationDelay: `${400 + index * 100}ms` }}>
                            <Check className="w-4 h-4 text-green-500 flex-shrink-0" /> 
                            <span>{feature.text}</span>
                        </li>
                    ))}
                </ul>
                
                {/* Additional IT Services Info */}
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 animate-fade-in delay-600">
                    <h3 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                        <Shield className="w-4 h-4" />
                        What's Included:
                    </h3>
                    <ul className="text-sm text-green-700 space-y-1">
                        <li>• Dedicated technical team</li>
                        <li>• 99.9% uptime guarantee</li>
                        <li>• Regular security updates</li>
                        <li>• Performance monitoring</li>
                    </ul>
                </div>

                <div className="flex justify-between items-center pt-6 border-t animate-fade-in delay-700">
                    <button onClick={onBack}
                        className="text-blue-600 hover:text-blue-800 transition transform hover:scale-105 font-semibold">
                        &larr; Change Plan
                    </button>
                    <button 
                        onClick={handleComplete}
                        disabled={isProcessing}
                        className={`py-3 px-8 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 ${
                            isProcessing 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl'
                        }`}>
                        {isProcessing ? (
                            <div className="flex items-center space-x-2">
                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                <span>Processing...</span>
                            </div>
                        ) : (
                            'Complete Payment'
                        )}
                    </button>
                </div>
            </div>
        </div>
    );
}

const SubscriptionView = ({ handleSubscription }) => (
    <div className="max-w-7xl mx-auto pt-10 pb-20">
        
        {/* Animated Header Section */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight bg-gradient-to-r from-gray-900 to-blue-600 bg-clip-text text-transparent">
            Choose Your IT Solution Plan
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up delay-300">
            Scale your business with our comprehensive IT services. From startup to enterprise, we have the perfect solution for your needs.
          </p>
          
          {/* Stats Row */}
          <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
            {[
              { number: '99.9%', label: 'Uptime' },
              { number: '24/7', label: 'Support' },
              { number: '500+', label: 'Clients' }
            ].map((stat, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${500 + index * 200}ms` }}>
                <div className="text-2xl font-bold text-blue-600 mb-1">{stat.number}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Grid with staggered animations */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-10">
          {pricingTiers.map((plan, index) => (
            <PlanCard 
              key={plan.id} 
              plan={plan} 
              onSelect={handleSubscription}
              delay={300 + index * 200}
            />
          ))}
        </div>
        
        {/* Enterprise CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center animate-fade-in delay-1000">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Custom Enterprise Solutions?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer tailored IT solutions for large organizations with specific requirements. 
            Get a custom quote with dedicated resources and premium support.
          </p>
          <Link to="/contact" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
            Contact Enterprise Sales
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center animate-fade-in delay-1200">
          <p className="text-gray-500 text-sm mb-6">Trusted by industry leaders</p>
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl">🏢</div>
            <div className="text-2xl">💻</div>
            <div className="text-2xl">🌐</div>
            <div className="text-2xl">🔒</div>
            <div className="text-2xl">☁️</div>
          </div>
        </div>
    </div>
);

// Main App Component with proper routing logic
const Subscription = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState('home');
  const [selectedPlanId, setSelectedPlanId] = useState(null);
  const [message, setMessage] = useState('');
  const [isAuthReady, setIsAuthReady] = useState(false); 

  // Function to handle moving to checkout
  const handleSubscription = (planId) => {
    setSelectedPlanId(planId);
    setCurrentView('checkout');
    setMessage(`🚀 Loading checkout for ${planId}...`);
    setTimeout(() => setMessage(''), 1500);
  }

  // Function to handle purchase completion
  const handlePurchaseComplete = () => {
    setMessage(`🎉 Purchase complete! Welcome to ${selectedPlanId}! Our team will contact you within 2 hours.`);
    setTimeout(() => setMessage(''), 5000);
    setCurrentView('home');
    setSelectedPlanId(null);
  }

  // Function to go back to subscription view
  const handleBackToPlans = () => {
    setCurrentView('home');
    setSelectedPlanId(null);
  }

  // Mock Firebase initialization hook
  useEffect(() => {
    setIsAuthReady(true);
  }, []);

  // Router Logic
  let content;
  switch (currentView) {
      case 'checkout':
          content = <CheckoutPage 
            planId={selectedPlanId} 
            onBack={handleBackToPlans} 
            onComplete={handlePurchaseComplete}
          />;
          break;
      case 'home':
      default:
          content = <SubscriptionView handleSubscription={handleSubscription} />;
          break;
  }

  return (
    <div className="font-sans bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 min-h-screen p-4 sm:p-8 pt-24">
      {/* Global Message Box with enhanced animation */}
      {message && (
        <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 p-4 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold shadow-2xl transition-all duration-500 animate-slide-down">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white rounded-full animate-pulse"></div>
            <span>{message}</span>
          </div>
        </div>
      )}

      {content}

      {/* Add CSS animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
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
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes popIn {
          0% {
            opacity: 0;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
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
        
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animate-slide-up {
          animation: slideUp 0.6s ease-out forwards;
        }
        
        .animate-slide-down {
          animation: slideDown 0.4s ease-out forwards;
        }
        
        .animate-scale-in {
          animation: scaleIn 0.5s ease-out forwards;
        }
        
        .animate-pop-in {
          animation: popIn 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }
        
        .delay-100 {
          animation-delay: 100ms;
        }
        
        .delay-200 {
          animation-delay: 200ms;
        }
        
        .delay-300 {
          animation-delay: 300ms;
        }
        
        .delay-500 {
          animation-delay: 500ms;
        }
        
        .delay-1000 {
          animation-delay: 1000ms;
        }
        
        .delay-1200 {
          animation-delay: 1200ms;
        }
      `}</style>
    </div>
  );
};

export default Subscription;