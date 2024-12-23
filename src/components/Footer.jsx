import React from "react";
import Logo from "../assets/react.svg";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* Logo and Subscribe */}
        <div>
          <div className="flex items-center space-x-2">
            <img
              src={Logo} // Replace with actual logo
              alt="Logo"
              className="w-10 h-10"
            />
            <span className="font-bold text-xl">UNIFY</span>
          </div>
          <div className="mt-4">
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full p-2 rounded-l-md border border-gray-300 text-gray-800 bg-[#081358]"
            />
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold mb-2">Home</h3>
            <ul>
              <li>How It Works</li>
              <li>Properties</li>
              <li>Testimonials</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">About Us</h3>
            <ul>
              <li>Our Story</li>
              <li>Our Mission</li>
              <li>Our Team</li>
              <li>Our Clients</li>
            </ul>
          </div>
        </div>

        {/* Contact Links */}
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <ul>
            <li>Contact Form</li>
            <li>Our Offices</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-4 flex justify-between items-center px-6">
        <p className="text-sm">©2024 UNIFY. All rights reserved.</p>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
