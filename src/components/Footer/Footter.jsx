import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

const Footter = () => {
  const handlechange = () => {
    alert("Thank you for subscribing");
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Hotel Info & Address */}
        <div>
          <h2 className="text-xl font-bold mb-4">Royal Marriage Hotel</h2>
          <p className="text-sm text-gray-300 mb-4">
            Celebrate your special day with elegance and tradition at our
            luxurious Indian wedding venue.
          </p>
          <div className="text-sm text-gray-400 leading-relaxed">
            <p>📍 845103, Kamalnath Nagar</p>
            <p>Bettiah-Bihar, India</p>
            <p>📞 +91-8603409533</p>
            <p>✉️ sudhirhotel@gmail.com</p>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="#home" className="hover:text-red-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-red-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="#service" className="hover:text-red-400 transition">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-red-400 transition">
                Contact
              </a>
            </li>
            <li>
              <a href="#book" className="hover:text-red-400 transition">
                Book Now
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-red-400 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaYoutube />
            </a>
            <a href="#" className="hover:text-red-400 transition">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm text-gray-300 mb-3">
            Get updates and offers straight to your inbox.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-full text-black focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-full transition"
              onClick={handlechange}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Royal Marriage Hotel. All rights reserved.
      </div>
    </footer>
  );
};

export default Footter;
