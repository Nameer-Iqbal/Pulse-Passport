import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Lock, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from "react-router-dom"; // ⬅ added useNavigate

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [formDataToSubmit, setFormDataToSubmit] = useState(null);

  const navigate = useNavigate(); // ⬅ for navigation

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    setFormDataToSubmit(data);
    setShowModal(true);
  };

  const handleRoleSelect = (role) => {
    const finalData = { ...formDataToSubmit, role };
    console.log(`User is signing up as: ${role}`);
    console.log('Creating account with:', finalData);

    setShowModal(false);

    // ✅ Redirect to /detail-signup/:role and pass form data via state
    navigate(`/detail-signup/${role}`, { state: finalData });
  };

  const handleLogin = () => {
    console.log('Redirecting to login...');
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      <main className="relative z-10 flex items-center justify-between max-w-6xl mx-auto px-4 py-16">
        {/* Sign Up Form */}
        <div className="bg-[#e0e3e4] backdrop-blur-xl rounded-2xl p-8 w-96 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign Up</h2>
          <div className="space-y-4">
            {/* Username */}
            <div className="relative">
              <User className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Username"
                {...register("username", { 
                  required: "Username is required",
                  minLength: { value: 3, message: "Username must be at least 3 characters" }
                })}
                className={`w-full pl-12 pr-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                  errors.username ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.username && <p className="text-red-500 text-sm mt-1 ml-4">{errors.username.message}</p>}
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <input
                type="email"
                placeholder="Email Address"
                {...register("email", {
                  required: "Email is required",
                  pattern: { 
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, 
                    message: "Invalid email address" 
                  },
                })}
                className={`w-full pl-12 pr-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && <p className="text-red-500 text-sm mt-1 ml-4">{errors.email.message}</p>}
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Password must be at least 6 characters" }
                })}
                className={`w-full pl-12 pr-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1 ml-4">{errors.password.message}</p>}
            </div>

            {/* Age & Gender */}
            <div className="flex space-x-4">
              <div className="flex-1">
                <input
                  type="number"
                  placeholder="Age"
                  {...register("age", {
                    required: "Age is required",
                    min: { value: 13, message: "Must be at least 13 years old" },
                    max: { value: 120, message: "Please enter a valid age" }
                  })}
                  className={`w-full px-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 ${
                    errors.age ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.age && <p className="text-red-500 text-xs mt-1">{errors.age.message}</p>}
              </div>
              
              <div className="relative flex-1">
                <select
                  {...register("gender", { required: "Please select gender" })}
                  className={`w-full px-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 appearance-none cursor-pointer ${
                    errors.gender ? 'border-red-500' : 'border-[#BBC4C7]'
                  }`}
                >
                  <option value="">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">Prefer not to say</option>
                </select>
                <ChevronDown className="absolute right-3 top-4  w-5 h-5 pointer-events-none" />
                {errors.gender && <p className="text-red-500 text-xs mt-1">{errors.gender.message}</p>}
              </div>
            </div>

            {/* Create Account Button */}
            <button
              onClick={handleSubmit(onSubmit)}
              className="w-full bg-[#04838F] text-white py-3 rounded-full font-semibold hover:bg-teal-800 mt-6"
            >
              Create Account
            </button>

            {/* Login Button */}
            <Link to="/login">
              <button
                onClick={handleLogin}
                className="w-full bg-white text-[#04838F] py-3 rounded-full font-semibold border border-[#04838F] hover:bg-teal-50"
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