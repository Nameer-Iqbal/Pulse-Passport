import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="relative bg-[#325E6D] shadow-md">
      {/* SVG Background Shape */}
      <div className="absolute top-0 left-0 w-full z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30%"
          height="auto"
          viewBox="0 0 399 181"
          preserveAspectRatio="none"
        >
          <path
            fill="#325E6D"
            d="M201.886 169.218c-38.641 20.142-85.809 13.513-117.4-16.5L-76.034.225 398.22 66.877z"
          ></path>
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-2 flex justify-between items-center z-10">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Logo"
            className="translate-y-16 translate-x-5 h-20 w-auto"
          />
        </div>

        {/* Navigation + CTA */}
        <div className="absolute translate-y-16 translate-x-72 flex items-center justify-between space-x-6 bg-white text-[#0A4E4D] px-6 py-2 rounded-full w-[80%] shadow-xl">
          <nav className="hidden md:flex space-x-6">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition hover:text-[#04838F] ${
                  isActive ? "underline underline-offset-4 font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `transition hover:text-[#04838F] ${
                  isActive ? "underline underline-offset-4 font-semibold" : ""
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition hover:text-[#04838F] ${
                  isActive ? "underline underline-offset-4 font-semibold" : ""
                }`
              }
            >
              About Us
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition hover:text-[#04838F] ${
                  isActive ? "underline underline-offset-4 font-semibold" : ""
                }`
              }
            >
              Contact Us
            </NavLink>
          </nav>
          <NavLink
            to="/signup"
            className="bg-[#04838F] text-white px-4 py-2 rounded-full hover:bg-[#036b74] transition"
          >
            Get Started
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
