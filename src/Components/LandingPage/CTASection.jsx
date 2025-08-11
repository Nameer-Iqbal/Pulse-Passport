import React from 'react';
import { UserPlus, ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-[#E9EEEF] text-[#0E4456]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold  mb-12">
            Get Started - Register as a Patient
          </h2>
          <p className="text-xl  mb-16 leading-relaxed">
            Join thousands of patients who trust us with their healthcare needs. 
            Start your journey to better health today with our easy registration process.
          </p>
          
          <div className="flex   gap-4 justify-center items-center">
            <button className="flex justify-center items-center bg-[#04838F] text-white px-10 py-2 rounded-full text-lg font-semibold hover:bg-teal-700 transform hover:scale-105 transition-all duration-200 shadow-lg">
              <UserPlus className="w-5 h-5 mr-2" />
              Register Now
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
           
          </div>

        </div>
      </div>
    </section>
  );
}