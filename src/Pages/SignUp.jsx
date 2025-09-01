import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { User, Mail, Lock } from 'lucide-react';
import { Link } from "react-router-dom";

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const [showModal, setShowModal] = useState(false);
  const [formDataToSubmit, setFormDataToSubmit] = useState(null);

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
  };

  const handleLogin = () => {
    console.log('Redirecting to login...');
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
              <User className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Username"
                {...register("username", {
                  required: "Username is required",
                  minLength: { value: 3, message: "Username must be at least 3 characters" }
                })}
                className={`w-full pl-12 pr-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
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
                className={`w-full pl-12 pr-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
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
                className={`w-full pl-12 pr-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.password && <p className="text-red-500 text-sm mt-1 ml-4">{errors.password.message}</p>}
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <Lock className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match"
                })}
                className={`w-full pl-12 pr-4 py-3 bg-white border rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent ${
                  errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1 ml-4">{errors.confirmPassword.message}</p>
              )}
            </div>

            {/* Verify Email Button (smaller & centered) */}
            <div className="flex justify-center">
              <button
                type="button"
                className="w-1/2 bg-[#04838F] text-white py-2 rounded-full font-semibold hover:bg-teal-800 transition-colors mt-2"
              >
                Verify Email
              </button>
            </div>

            {/* Create Account Button */}
            <button
              onClick={handleSubmit(onSubmit)}
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
