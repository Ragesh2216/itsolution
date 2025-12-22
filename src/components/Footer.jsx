import React from "react";
import { Link } from "react-router-dom";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // IT Solutions logo placeholder - changed to dark text for light background
  const logoPlaceholderUrl = "https://placehold.co/120x40/4f46e5/ffffff?text=Stackly+IT";
  
  return (
    <footer className="bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700 py-12">
      {/* Light color options you can try:
          bg-gradient-to-br from-gray-50 to-gray-100 (lightest)
          bg-gradient-to-br from-gray-100 to-gray-200 (current)
          bg-gradient-to-br from-blue-50 to-indigo-50 (cool blue)
          bg-gradient-to-br from-purple-50 to-violet-50 (cool purple)
          bg-gradient-to-br from-slate-100 to-slate-200 (neutral)
          bg-gradient-to-br from-amber-50 to-orange-50 (warm)
      */}
      
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 pb-8 border-b border-gray-300">
        
        {/* Company Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <Link to="/">
              <img src={logoPlaceholderUrl} width={120} className="mb-4" alt="Stackly IT Solutions" />
            </Link>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed mb-4">
            Your trusted partner for comprehensive IT solutions. We deliver cutting-edge technology services including cloud computing, cybersecurity, software development, and digital transformation.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            {[
              { icon: <TwitterIcon className="hover:text-blue-500 transition-colors duration-200" /> },
              { icon: <LinkedInIcon className="hover:text-blue-700 transition-colors duration-200" /> },
              { icon: <GitHubIcon className="hover:text-gray-800 transition-colors duration-200" /> },
              { icon: <InstagramIcon className="hover:text-pink-600 transition-colors duration-200" /> }
            ].map((social, index) => (
              <Link
                key={index}
                to="/404"
                className="w-10 h-10 bg-white rounded-lg flex items-center justify-center hover:bg-gray-50 transition-all duration-200 shadow-sm hover:shadow"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-gray-800 text-lg font-semibold mb-6">Our Services</h5>
          <ul className="space-y-3">
            {[
              { label: "Cloud Solutions" },
              { label: "Cybersecurity" },
              { label: "Web Development" },
              { label: "Mobile Apps" },
              { label: "IT Consulting" },
              { label: "Data Analytics" }
            ].map((service, index) => (
              <li key={index}>
                <Link 
                  to="/404" 
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Quick Links */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-gray-800 text-lg font-semibold mb-6">Quick Links</h5>
          <ul className="space-y-3">
            {[
              { label: "Home", url: "/" },
              { label: "About Us", url: "/about" },
              { label: "Services", url: "/services" },
              { label: "Contact Us", url: "/contact" },
              { label: "Login", url: "/login" },
              { label: "Signup", url: "/login" }
            ].map((link, index) => (
              <li key={index}>
                <Link 
                  to={link.url}
                  className="text-gray-600 hover:text-indigo-600 transition-colors duration-200 text-sm font-normal block py-1"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="lg:col-span-1 text-center md:text-left">
          <h5 className="text-gray-800 text-lg font-semibold mb-6">Get In Touch</h5>
          <div className="space-y-4">
            <div className="flex flex-col items-center md:items-start md:flex-row md:space-x-3">
              <LocationOnIcon className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0 mb-2 md:mb-0" />
              <div className="text-center md:text-left">
                <p className="text-sm text-gray-800 font-medium">MMR Complex</p>
                <p className="text-sm text-gray-600">Salem, Tamil Nadu</p>
                <p className="text-sm text-gray-600">India - 636008</p>
              </div>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <Link
                to="/404"
                className="text-indigo-600 hover:text-indigo-800 underline text-sm"
              >
                View on Google Maps
              </Link>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <PhoneIcon className="w-5 h-5 text-indigo-600 flex-shrink-0" />
              <Link to="/404" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                +91 12345 67890
              </Link>
            </div>
            
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <EmailIcon className="w-5 h-5 text-indigo-600 flex-shrink-0" />
              <Link to="/404" className="text-sm text-gray-600 hover:text-indigo-600 transition-colors duration-200">
                info@stacklyit.com
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-600">
              &copy; {currentYear} Stackly IT Solutions. All rights reserved.
            </p>
          </div>

          {/* Legal Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-6 text-sm">
            {[
              { label: "Privacy Policy" },
              { label: "Terms of Service" },
              { label: "Cookie Policy" },
              { label: "Sitemap" }
            ].map((link, index) => (
              <Link
                key={index}
                to="/404"
                className="text-gray-600 hover:text-indigo-600 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-6 pt-6 border-t border-gray-300 text-center">
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