import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const linkClass = (path) =>
    `px-4 py-2 rounded-md text-sm font-medium transition ${
      location.pathname === path
        ? "bg-blue-100 text-blue-600"
        : "text-gray-800 hover:text-blue-600 hover:bg-blue-50"
    }`;

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50 w-full border-b border-gray-200">
      <div className="max-w-screen-2xl mx-auto px-4 py-2 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <img src="../src/assets/logo.svg" alt="Logo" className="h-20 w-20" />
          <span className="text-3xl font-extrabold text-blue-600 whitespace-nowrap">RentMyRide</span>
        </Link>

        
        <div className="hidden md:flex items-center justify-end flex-grow space-x-4">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/vehicle" className={linkClass("/vehicle")}>Browse Vehicle</Link>
          <Link to="/services" className={linkClass("/services")}>Services</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
          <Link to="/log-in" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
            Login/SignUp
          </Link>
          <Link to="/rent-out">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 whitespace-nowrap rounded-md">
              Rent Your Vehicle
            </button>
          </Link>

          
          <form className="flex items-center border rounded-md overflow-hidden w-80 ml-4">
            <input
              type="text"
              placeholder="Find your Vehicle"
              className="px-4 py-2 w-full outline-none"
            />
            <button type="submit" className="bg-blue-500 px-4 py-2 text-white">
              Search
            </button>
          </form>
        </div>

        
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none">
            {isOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden px-6 pb-4 pt-2 space-y-3 bg-white shadow-md">
          <Link to="/" className={linkClass("/")}>Home</Link>
          <Link to="/vehicle" className={linkClass("/vehicle")}>Browse Vehicle</Link>
          <Link to="/services" className={linkClass("/services")}>Services</Link>
          <Link to="/contact" className={linkClass("/contact")}>Contact</Link>
          <Link to="/log-in" className="block bg-blue-500 text-white px-4 py-2 rounded-md">Login/SignUp</Link>
          <Link to="/rent-out" className="block bg-green-500 text-white px-4 py-2 rounded-md whitespace-nowrap">Rent Your Vehicle</Link>
          <form className="flex items-center border rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Find your Vehicle"
              className="px-4 py-2 w-full outline-none"
            />
            <button type="submit" className="bg-blue-500 px-4 py-2 text-white">
              Search
            </button>
          </form>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
