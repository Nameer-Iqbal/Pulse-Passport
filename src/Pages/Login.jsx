import React from "react";
import { useForm } from "react-hook-form";
import { User, Lock } from "lucide-react";
import { Link } from "react-router-dom";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form submitted:", data);
    // Handle login logic here
  };

  const handleForgotPassword = () => {
    console.log("Forgot password clicked");
    // Handle forgot password logic here
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Main Content */}
      <main className="relative z-10 flex items-center justify-between max-w-6xl mx-auto px-4 py-16">
        {/* Login Form */}
        <div className="bg-[#e0e3e4] backdrop-blur-xl rounded-2xl p-8 w-96 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Username Field */}
            <div className="relative">
              <User className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Username"
                {...register("username", { required: "Username is required" })}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div className="relative">
              <Lock className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className="w-full pl-12 pr-4 py-3 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-transparent"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Forgot Password Link */}
            <div className="text-right">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="text-teal-700 text-sm hover:text-teal-800 transition-colors"
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full mb-3 bg-[#04838F] text-white px-10 py-2 rounded-full text-lg font-semibold hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg text-center"
            >
              Log In
            </button>

            {/* Sign Up Button */}
            <Link to="/signup">
              <button
                type="button"
                className="w-full border bg-white border-[#04838F] text-[#04838F] px-10 py-2 rounded-full text-lg font-semibold hover:bg-gray-50 transition-colors text-center"
              >
                Sign Up
              </button>
            </Link>
          </form>
        </div>

        {/* Doctor Image */}
        <div className="hidden lg:block">
          <div className="relative">
            <div className="w-96 h-96 bg-white rounded-full overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
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
    </div>
  );
}
