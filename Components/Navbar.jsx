// src/components/Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav style={{ backgroundColor: "#c9def4" }}className="bg-white shadow-md sticky top-0 z-50">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
           
              <img
                src="../src/assets/logo.svg"
                alt="Logo"
                className="h-14 w-14"
              />
              <span>RentMyRide</span>
           
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-800 hover:text-gray-600">
              Home
            </Link>
            <Link to="/vehicle" className="text-gray-800 hover:text-gray-600">
              Browse Vehicle
            </Link>
            <Link to="/price" className="text-gray-800 hover:text-gray-600">
              Pricing
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-600">
              About
            </Link>
            <Link to="/services" className="text-gray-800 hover:text-gray-600">
              Services
            </Link>
            <Link to="/contact" className="text-gray-800 hover:text-gray-600">
              Contact
            </Link>
            <Link
              to="/log-in"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Login/SignUp
            </Link>
            <Link
              to="/rent-out"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Rent Your Vehicle
            </Link>
             <Link to="/destination"><div className="flex items-center space-x-2 max-w-md mx-auto">
              <input
                type="text"
                placeholder="Find Your Destination..."
                className="bg-white w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700">
                Search
              </button>
            </div>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-800 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"/>
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              Home
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              About
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              Services
            </a>
            <a href="#" className="block text-gray-800 hover:text-gray-600">
              Contact
            </a>
            
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
