import React, { useState } from 'react';
import { User, Mail, Lock, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    age: '',
    gender: 'Gender'
  });

  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCreateAccount = () => {
    // Instead of immediately creating the account, open the modal
    setShowModal(true);
  };

  const handleRoleSelect = (role) => {
    console.log(`User is signing up as: ${role}`);
    console.log('Creating account with:', { ...formData, role });
    setShowModal(false);
    // Continue with account creation logic here
  };

  const handleLogin = () => {
    console.log('Redirecting to login...');
    // Handle login redirect logic here
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-between max-w-6xl mx-auto px-4 py-16">
        {/* Sign Up Form */}
        <div className="bg-[#e0e3e4] backdrop-blur-xl rounded-2xl p-8 w-96 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
          
          <div className="space-y-4">
            {/* Username */}
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

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
            </div>

            {/* Password */}
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

            {/* Age & Gender */}
            <div className="flex space-x-4">
              <input
                type="number"
                name="age"
                placeholder="Age"
                value={formData.age}
                onChange={handleInputChange}
                className="flex-1 px-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              
              <div className="relative flex-1">
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#BBC4C7] border border-[#BBC4C7] rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent appearance-none cursor-pointer"
                >
                  <option value="Gender" disabled>Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
              </div>
            </div>

            {/* Create Account Button */}
            <button
              onClick={handleCreateAccount}
              className="w-full bg-[#04838F] text-white py-3 rounded-full font-semibold hover:bg-teal-800 transition-colors mt-6"
            >
              Create Account
            </button>

            {/* Login Button */}
            <Link to="/login">
            <button
              onClick={handleLogin}
              className="w-full bg-white text-[#04838F] py-3 rounded-full font-semibold border border-[#04838F] hover:bg-teal-50 transition-colors"
            >
              Login
            </button>
            </Link>
          </div>
        </div>

        {/* Doctor Image */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="w-96 h-96 bg-white rounded-full overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=800&q=80"
                alt="Medical Professional"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative dots */}
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-red-400 rounded-full"></div>
            <div className="absolute -bottom-8 -left-8 w-6 h-6 bg-blue-400 rounded-full"></div>
            <div className="absolute top-1/4 -left-6 w-4 h-4 bg-yellow-400 rounded-full"></div>
            <div className="absolute bottom-1/3 -right-8 w-5 h-5 bg-green-400 rounded-full"></div>
          </div>
        </div>
      </main>

      {/* Role Selection Modal */}
   {showModal && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50">
    <div className="bg-white rounded-2xl shadow-xl p-6 w-80">
      <h3 className="text-full font-bold text-[#04838F] mb-10">Register Now</h3>
      <h4 className="text-lg font-semibold text-gray-800 mb-4">Register as Patient or Doctor?</h4>
      <div className="flex flex-col gap-3">
        <button
          onClick={() => handleRoleSelect('Patient')}
          className="bg-[#04838F] hover:bg-[#04838F] text-white py-2 rounded-full"
        >
          Patient
        </button>
        <button
          onClick={() => handleRoleSelect('Doctor')}
          className="bg-[#04838F] hover:bg-[#04838F] text-white py-2 rounded-full"
        >
          Doctor
        </button>
      </div>
      <button
        onClick={() => setShowModal(false)}
        className="mt-4 w-full border border-[#BBC4C7] py-2 rounded-full hover:bg-gray-100"
      >
        Cancel
      </button>
    </div>
  </div>
)}

    </div>
  );
}
