import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Check if the current route is the Home page for internal links
  const isHomePage = location.pathname === "/";

  return (
    <header>
      {/* Pre-Navbar - Hidden on mobile */}
      <div className="bg-teal-800 text-gray-100 py-2 px-6 flex justify-between items-center text-sm hidden md:flex fixed top-0 w-full z-50">
        <div className="flex items-center space-x-4">
          <i className="fas fa-map-marker-alt"></i>
          <span>SCO-2433-34, 2nd Floor, Sector 22c Chandigarh, 160022</span>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/Myvisapointimmigration/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/my-visa-point-59b115128/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://www.instagram.com/myvisapoint6"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-gray-100 text-gray-800 p-4 shadow-md fixed top-0 md:top-8 w-full z-50">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo and Title */}
          <div className="flex items-center space-x-2">
            <Link to="/">
              <img
                src="https://ik.imagekit.io/7uve7qsipm/myVisaPoint_logo.png?updatedAt=1725612878801"
                alt="Logo"
                className="h-10 w-10 sm:h-12 sm:w-12"
              />
            </Link>
            <Link to="/">
              <div className="leading-tight">
                <h1 className="text-lg sm:text-xl font-bold">MY VISA POINT</h1>
                <p className="text-xs sm:text-sm">Gateway to Global Opportunities</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
          {isHomePage ? (
              <a href="#hero" className="hover:text-teal-600 transition-colors">
                Home
              </a>
            ) : (
              <Link to="/#hero" className="hover:text-teal-600 transition-colors">
                Home
              </Link>
            )}
            {isHomePage ? (
              <a href="#about" className="hover:text-teal-600 transition-colors">
                About
              </a>
            ) : (
              <Link to="/#about" className="hover:text-teal-600 transition-colors">
                About
              </Link>
            )}
            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="flex items-center hover:text-teal-600 transition-colors"
              >
                Services
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 bg-white border rounded-lg shadow-lg w-48 z-50">
                  <Link
                    to="/spouse-visa"
                    className="block px-4 py-2 hover:bg-teal-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Spouse Visa
                  </Link>
                  <Link
                    to="/study-visa"
                    className="block px-4 py-2 hover:bg-teal-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Study Visa
                  </Link>
                  <Link
                    to="/top-up-visa"
                    className="block px-4 py-2 hover:bg-teal-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Top-Up Visa
                  </Link>
                  <Link
                    to="/tourist-visa"
                    className="block px-4 py-2 hover:bg-teal-100"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    Tourist Visa
                  </Link>
                </div>
              )}
            </div>
            {isHomePage ? (
              <a
                href="#testimonials"
                className="hover:text-teal-600 transition-colors"
              >
                Testimonials
              </a>
            ) : (
              <Link
                to="/#testimonials"
                className="hover:text-teal-600 transition-colors"
              >
                Testimonials
              </Link>
            )}
            {isHomePage ? (
              <a href="#contact" className="hover:text-teal-600 transition-colors">
                Contact
              </a>
            ) : (
              <Link to="/#contact" className="hover:text-teal-600 transition-colors">
                Contact
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden focus:outline-none" onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} bg-gray-100 text-gray-800 shadow-lg`}
        >
          <Link
            to="/"
            className="block px-4 py-3 hover:bg-teal-100 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          {isHomePage ? (
            <a
              href="#about"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          ) : (
            <Link
              to="/#about"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          )}
          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="block w-full text-left px-4 py-3 hover:bg-teal-100 transition-colors"
            >
              Services
              <svg
                className="w-4 h-4 ml-1 inline"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 bg-gray-100 w-full z-50">
                <Link
                  to="/spouse-visa"
                  className="block px-4 py-2 hover:bg-teal-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Spouse Visa
                </Link>
                <Link
                  to="/study-visa"
                  className="block px-4 py-2 hover:bg-teal-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Study Visa
                </Link>
                <Link
                  to="/top-up-visa"
                  className="block px-4 py-2 hover:bg-teal-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Top-Up Visa
                </Link>
                <Link
                  to="/tourist-visa"
                  className="block px-4 py-2 hover:bg-teal-100"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    setIsMenuOpen(false);
                  }}
                >
                  Tourist Visa
                </Link>
              </div>
            )}
          </div>
          {isHomePage ? (
            <a
              href="#testimonials"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </a>
          ) : (
            <Link
              to="/#testimonials"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Testimonials
            </Link>
          )}
          {isHomePage ? (
            <a
              href="#contact"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          ) : (
            <Link
              to="/#contact"
              className="block px-4 py-3 hover:bg-teal-100 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
