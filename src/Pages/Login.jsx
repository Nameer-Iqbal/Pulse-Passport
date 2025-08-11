import React, { useState } from 'react';
import { User, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 

  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Handle forgot password logic here
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      

     
      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-between max-w-6xl mx-auto px-4 py-16">
        {/* Login Form */}
     <div className="bg-[#e0e3e4] backdrop-blur-xl rounded-2xl p-8 w-96 shadow-xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>
          
          <div className="space-y-4">
            {/* Username Field */}
            <div className="relative">
              <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                onClick={handleForgotPassword}
                className="text-teal-700 text-sm hover:text-teal-800 transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <Link
               to="/login"
              >
              <button    className="w-full mb-3 bg-[#04838F] text-white px-10 py-2 rounded-full text-lg font-semibold hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
             >   
              Log In
              </button>
            </Link>

            {/* Sign Up Button */}
            <Link
              to="/signup"
               >
              <button    className=" w-full border bg-white border-[#04838F] text-[#04838F] px-10 py-2 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors text-center"
            >Sign Up</button>
             
            </Link>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="w-96 h-96 bg-white rounded-full overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                alt="Medical Professional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements around the image */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-blue-400 rounded-full"></div>
            <div className="absolute top-1/4 -left-6 w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-1/3 -right-8 w-5 h-5 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Bottom Navigation/Social Icons */}
      <div className="absolute bottom-4 left-4 flex space-x-4">
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div className="w-5 h-5 bg-white rounded-sm"></div>
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div className="w-5 h-5 bg-white rounded-full"></div>
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div className="w-5 h-5 bg-white rounded-sm transform rotate-45"></div>
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div className="w-5 h-5 bg-white rounded-sm"></div>
        </div>
        <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
          <div className="w-5 h-5 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
}