import React from 'react';
import { Facebook, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="flex items-center">
           <img 
  src="/logo.png" 
  alt="Logo" 
  className="h-[60px] w-auto" 
/>
     </div>
            </div>
            <p className="text-gray-400 mb-6">
              Connecting patients with qualified healthcare professionals through secure video consultations.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-all hover:scale-110"
              >
                <Facebook size={16} />
              </a>

              {/* Mail */}
              <a
                href="mailto:contact@aivirtualhealth.com"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-all hover:scale-110"
              >
                <Mail size={16} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center cursor-pointer hover:bg-teal-600 transition-all hover:scale-110"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Video Consultation</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Prescription</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Lab Tests</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Specialists</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-end text-gray-400">
          <p>&copy; 2025 AI Virtual Health Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
