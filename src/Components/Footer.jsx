import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  return (
    <footer className="bg-teal-800 text-white py-10 px-6">
      {" "}
      {/* Added padding on both left and right */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Section 1: About Description */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-teal-400">About Us</h3>
          <p className="mb-4">
            At My Visa Point, we are more than just an immigration consultancy;
            we are your steadfast companions on the journey to realizing your
            global aspirations. With a commitment to excellence and a passion
            for facilitating seamless transitions across borders, we specialize
            in providing comprehensive visa services for the UK, Canada, New
            Zealand, Australia, and the USA.
          </p>
          <p>
            &copy; {new Date().getFullYear()} My Visa Point. All rights
            reserved.
          </p>
        </div>

        {/* Section 2: Our Services & Useful Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-teal-400">Quick Links</h3>
          <div className="grid grid-cols-2 gap-4">
            <ul>
              <li>
                <Link to="/study-visa" className="hover:text-teal-400">
                  Study Visa
                </Link>
              </li>
              <li>
                <Link to="/tourist-visa" className="hover:text-teal-400">
                  Tourist Visa
                </Link>
              </li>
              <li>
                <Link to="/super-visa" className="hover:text-teal-400">
                  Super Visa
                </Link>
              </li>
              <li>
                <Link to="/visa-Counselling" className="hover:text-teal-400">
                  Visa Counselling
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                {isHomePage ? (
                  <a href="#Home" className="hover:text-teal-400">
                    Home
                  </a>
                ) : (
                  <Link to="/#Home" className="hover:text-teal-400">
                    Home
                  </Link>
                )}
              </li>
              <li>
                <Link to="/about-us" className="hover:text-teal-400">
                  About
                </Link>
              </li>
              <li>
                <Link to="/#testimonials" className="hover:text-teal-400">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-teal-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Section 3: Map API */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-teal-400">Our Location</h3>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d54874.27328534107!2d76.77103100000001!3d30.728461!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390feda86e949637%3A0xd325b6572506e281!2sMy%20Visa%20Point!5e0!3m2!1sen!2sin!4v1727634220970!5m2!1sen!2sin"
            width="100%"
            height="200"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>

        {/* Section 4: Contact Us */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-teal-400">Contact Us</h3>
          <p>SCO-2433-34, 2nd Floor, Sector 22C, Chandigarh, 160022</p>
          <p>
            Phone:
            <a
              href="tel:+917340761339
"
            >
              +91 7340761339
            </a>
          </p>
          <p>
            Email:{" "}
            <a href="mailto:info@myvisapoint.org">info@myvisapoint.org</a>
          </p>

          {/* Social Media Links */}
          <div className="flex space-x-4 mt-4">
            <a
              href="https://wa.me/918146880060"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500"
            >
              <i className="fab fa-whatsapp fa-lg"></i> {/* Clickable */}
            </a>
            <a
              href="https://www.instagram.com/myvisapoint6"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500"
            >
              <i className="fab fa-instagram fa-lg"></i> {/* Clickable */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
