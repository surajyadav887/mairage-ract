import React, { useState } from "react";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 relative">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Logo" className="h-22 w-auto" />
          </div>

          {/* Center: Nav Links */}
          <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-6 font-medium">
            <li>
              <a
                href="#home"
                onClick={closeMenu}
                className="text-red-500 hover:text-red-600"      
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-red-500"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                onClick={closeMenu}
                className="hover:text-red-500"
              >
                Service
              </a>
            </li>
            <li>
              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-red-500"
              >
                Contact 
              </a>
            </li>
          </ul>

          {/* Right: Book Button (Desktop) and Hamburger (Mobile) */}
          <div className="flex items-center space-x-4">
            <a
              href="#book"
              onClick={closeMenu}
              className="hidden md:inline-block bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
            >
              Book Now
            </a>
            {/* Hamburger Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="focus:outline-none"
                aria-label="Toggle Menu"
              >
                <div className="space-y-1">
                  <span
                    className={`block w-6 h-0.5 bg-black transform transition duration-300 ${
                      isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-black transition duration-300 ${
                      isMobileMenuOpen ? "opacity-0" : ""
                    }`}
                  ></span>
                  <span
                    className={`block w-6 h-0.5 bg-black transform transition duration-300 ${
                      isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  ></span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <ul className="md:hidden bg-white shadow-md px-6 py-4 space-y-4 font-medium">
          <li>
            <a href="#home" onClick={closeMenu} className="text-red-500 block">
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className="block hover:text-red-500"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#service"
              onClick={closeMenu}
              className="block hover:text-red-500"
            >
              Service
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className="block hover:text-red-500"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#book"
              onClick={closeMenu}
              className="block text-center bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition"
            >
              Book Now
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
