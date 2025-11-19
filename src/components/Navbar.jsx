import React, { useEffect, useRef, useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const toggleHomeDropdown = () => setIsHomeDropdownOpen(!isHomeDropdownOpen);
  const closeHomeDropdown = () => setIsHomeDropdownOpen(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
        setIsHomeDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-gradient-to-r from-[#a09df6] to-[#a09df6] fixed top-0 left-0 w-full shadow-md z-[999]">
      <nav
        ref={navRef}
        className="flex justify-between items-center px-4 sm:px-6 py-3 max-w-7xl mx-auto relative"
      >
        {/* Logo */}
        <div className="z-50">
          <Link to="/" className="hover:opacity-80 transition-opacity duration-200">
            <img src={logo} width={130} alt="Site Logo" />
          </Link>
        </div>

        {/* Mobile menu toggle */}
        <div className="lg:hidden z-50">
          <button
            onClick={toggleMenu}
            className="text-slate-800 focus:outline-none hover:bg-white/30 rounded-lg p-2 transition-all duration-200 hover:scale-105"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  !isOpen
                    ? "M4 6h16M4 12h16m-7 6h7"
                    : "M6 18L18 6M6 6l12 12"
                }
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <ul
          className={`
            ${isOpen ? "flex" : "hidden"} 
            lg:flex
            flex-col lg:flex-row
            gap-4 lg:gap-6
            items-center
            text-base font-medium text-slate-800
            absolute lg:static
            top-full left-0 w-full lg:w-auto
            bg-white lg:bg-transparent
            border border-gray-200 lg:border-none
            shadow-xl lg:shadow-none
            py-4 lg:py-0
            rounded-lg lg:rounded-none
            z-40
            transition-all duration-300 ease-in-out
          `}
        >
          {/* Home Dropdown */}
          <li className="relative">
            <Link to="/"
              onClick={toggleHomeDropdown}
              className="flex items-center text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700 w-full lg:w-auto"
            >
              Home
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 ml-1 transition-transform duration-200 ${
                  isHomeDropdownOpen ? "rotate-180" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </Link>
            
            {/* Dropdown Menu */}
            <div
              className={`
                ${isHomeDropdownOpen ? "block" : "hidden"}
                absolute lg:absolute
                top-full left-0 lg:left-0
                w-full lg:w-48
                bg-white
                border border-gray-200
                rounded-lg
                shadow-lg
                py-2
                z-50
                mt-1
              `}
            >
              
              <Link
                to="/homepage2"
                onClick={() => {
                  closeHomeDropdown();
                  closeMenu();
                }}
                className="block py-2 px-4 hover:bg-gray-100 hover:text-purple-700 transition-colors duration-200"
              >
                Home2
              </Link>
            </div>
          </li>

          <li>
            <Link
              to="/dashboards"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              Dashboard
            </Link>
          </li>

          <li>
            <Link
              to="/subscription"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              Subscription
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="block text-center lg:text-left py-2 px-4 rounded-lg hover:bg-gray-100 lg:hover:bg-white/20 hover:text-purple-700"
            >
              Contact
            </Link>
          </li>

          <li>
            <Link
              to="/login"
              onClick={closeMenu}
              className="block text-center lg:text-left bg-white text-purple-700 hover:bg-gray-100 hover:text-purple-800 transition-colors duration-200 py-2 px-6 rounded-lg font-semibold"
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;