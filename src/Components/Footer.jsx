import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <footer className="bg-teal-800 text-white py-8 shadow-lg bottom-0 left-0 w-full">
      <div className="container mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-between">
          {/* Company Information */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-xl font-bold mb-2 text-white"></h2>
            <p className="mb-2">My Visa Point</p>
            <p className="mb-2">SCO-2433-34,2nd Floor,Sector 22C</p>
            <p className="mb-2">Chandigarh ,160022</p>
            <p className="mb-2">Phone: +91 8146880060</p>
            <p>
              Email:{" "}
              <a
                href="mailto:info@myvisapoint.org"
                className="text-white hover:text-teal-400"
              >
                info@myvisapoint.org
              </a>
            </p>
          </div>

          {/* Useful Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-2 text-white">
              Useful Links
            </h3>
            <ul>
              <li>
                {isHomePage ? (
                  <a
                    href="#hero"
                    className="hover:text-teal-600 transition-colors"
                  >
                    Home
                  </a>
                ) : (
                  <Link
                    to="/#hero"
                    className="hover:text-teal-600 transition-colors"
                  >
                    Home
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a
                    href="#about"
                    className="hover:text-teal-600 transition-colors"
                  >
                    About
                  </a>
                ) : (
                  <Link
                    to="/#about"
                    className="hover:text-teal-600 transition-colors"
                  >
                    About
                  </Link>
                )}
              </li>
              <li>
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
                    testimonials
                  </Link>
                )}
              </li>
              <li>
                {isHomePage ? (
                  <a
                    href="#contact"
                    className="hover:text-teal-600 transition-colors"
                  >
                    Contact
                  </a>
                ) : (
                  <Link
                    to="/#contact"
                    className="hover:text-teal-600 transition-colors"
                  >
                    Contact
                  </Link>
                )}
              </li>

              <li>
                <Link
                  to="/privacy"
                  className="text-white hover:text-teal-500 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold mb-2 text-white">
              Our Services
            </h3>
            <ul>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/student-visa" className="relative group">
                  Study Visa
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/tourist-visa" className="relative group">
                  Tourist Visa
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/super-visa" className="relative group">
                  Super Visa
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/visa-Counselling" className="relative group">
                   Visa Counselling
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>

              </li>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/IeltsPte" className="relative group">
                   IELTS/PTE
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
              <li className="text-white hover:text-gray-800 transition duration-300 transform hover:scale-105">
                <Link to="/Interview" className="relative group">
                   Interview Preparation
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-pink-600 transition-all duration-500 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-8">
          <a
            href="https://wa.me/8146880030"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-500"
          >
            <i className="fab fa-whatsapp fa-lg"></i>
          </a>
          <a
            href="https://www.instagram.com/myvisapoint6"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-500"
          >
            <i className="fab fa-instagram fa-lg"></i>
          </a>
        </div>

        <div className="mt-8 text-center text-white text-sm">
          &copy; {new Date().getFullYear()} Myvisapoint. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
