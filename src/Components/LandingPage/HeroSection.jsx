import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative s">
     
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Consult a doctor <br />
              <span className="text-teal-600">anytime, anywhere</span>
              <br />
              by <span className="text-[#325E6D] underline decoration-blue-200">video call</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
             Get personalized, secure, and real-time healthcare from anywhere. Powered by advanced AI, trusted by doctors, and designed for you
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/signup">
              <button className="bg-[#325E6D] text-white px-10 py-2 rounded-full text-lg font-semibold hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
                Sign Up
              </button>
              </Link>
               <Link to="/login">
              <button className="border border-[#325E6D] text-[#325E6D] px-10 py-2 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors">
                Login
              </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="flex justify-center lg:justify-end">
           <img
            src="src/assets/doctors.png"
            alt="Doctor Illustration"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl translate-y-6"
            />

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
