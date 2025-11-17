import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // IT Solutions logo placeholder
  const logoPlaceholderUrl = "https://placehold.co/120x40/2563eb/ffffff?text=Stackly+IT";
  
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-gray-700">
        
        {/* Company Info */}
        <div className="lg:col-span-1">
          <img src={logoPlaceholderUrl} width={120} className="mb-4" alt="Stackly IT Solutions" />
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Your trusted partner for comprehensive IT solutions. We deliver cutting-edge technology services including cloud computing, cybersecurity, software development, and digital transformation.
          </p>
          <div className="flex space-x-4">
            {[
              { icon: <TwitterIcon className="hover:text-blue-400 transition-colors duration-200" />, url: "#" },
              { icon: <LinkedInIcon className="hover:text-blue-600 transition-colors duration-200" />, url: "#" },
              { icon: <GitHubIcon className="hover:text-gray-100 transition-colors duration-200" />, url: "#" },
              { icon: <InstagramIcon className="hover:text-pink-500 transition-colors duration-200" />, url: "#" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors duration-200"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="lg:col-span-1">
          <h5 className="text-white text-lg font-semibold mb-6">Our Services</h5>
          <ul className="space-y-3">
            {[
              { label: "Cloud Solutions", url: "/services/cloud" },
              { label: "Cybersecurity", url: "/services/security" },
              { label: "Web Development", url: "/services/web-dev" },
              { label: "Mobile Apps", url: "/services/mobile" },
              { label: "IT Consulting", url: "/services/consulting" },
              { label: "Data Analytics", url: "/services/analytics" }
            ].map((service, index) => (
              <li key={index}>
                <a 
                  href={service.url} 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {service.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="lg:col-span-1">
          <h5 className="text-white text-lg font-semibold mb-6">Quick Links</h5>
          <ul className="space-y-3">
            {[
              { label: "Home", url: "/" },
              { label: "About Us", url: "/about" },
              { label: "Services", url: "/services" },
              { label: "Portfolio", url: "/portfolio" },
              { label: "Blog", url: "/blog" },
              { label: "Careers", url: "/careers" }
            ].map((link, index) => (
              <li key={index}>
                <a 
                  href={link.url} 
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1">
          <h5 className="text-white text-lg font-semibold mb-6">Get In Touch</h5>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <LocationOnIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-300 font-medium">MMR Complex</p>
                <p className="text-sm text-gray-400">Salem, Tamil Nadu</p>
                <p className="text-sm text-gray-400">India - 636008</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <a href="tel:+911234567890" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
                +91 12345 67890
              </a>
            </div>
            
            <div className="flex items-center space-x-3">
              <EmailIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
              <a href="mailto:info@stacklyit.com" className="text-sm text-gray-400 hover:text-blue-400 transition-colors duration-200">
                info@stacklyit.com
              </a>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-6">
            <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter</p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors duration-200">
                Join
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} Stackly IT Solutions. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            {[
              { label: "Privacy Policy", url: "/privacy" },
              { label: "Terms of Service", url: "/terms" },
              { label: "Cookie Policy", url: "/cookies" },
              { label: "Sitemap", url: "/sitemap" }
            ].map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-800 text-center">
          <p className="text-xs text-gray-500">
            Stackly IT Solutions - Transforming businesses through innovative technology solutions. 
            ISO 9001:2015 Certified • Microsoft Gold Partner • AWS Advanced Consulting Partner
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;