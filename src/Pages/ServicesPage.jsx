import React from 'react';
import { Users, Calendar, Bell, FileText, Video } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Doctors",
      description: "Find and connect with qualified doctors across specialties. Filter by city, availability, and gender to choose the right healthcare professional for you."
    },
    {
      icon: Calendar,
      title: "Appointments",
      description: "Book, reschedule, or cancel appointments with ease. View real-time availability and get instant confirmation for both online and in-person visits."
    },
    {
      icon: Bell,
      title: "Reminders",
      description: "Receive timely SMS and email notifications for upcoming appointments, medication schedules, and follow-up visits so you never miss important care."
    },
    {
      icon: FileText,
      title: "Reports",
      description: "Access your complete medical history, prescriptions, and lab results in one place. Download or share reports securely with doctors or hospitals."
    },
    {
      icon: Video,
      title: "Telemedicine",
      description: "Consult your doctor from anywhere via secure HD video calls. Share reports in real-time and receive prescriptions directly after your consultation."
    }
  ];
  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg">
          <div className="mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-teal-800 mb-4">
              Our services
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* First row - 3 cards */}
            {services.slice(0, 3).map((service, index) => (
              <div 
                key={index}
                className=" rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:transform hover:scale-105"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-teal-50 p-3 rounded-xl group-hover:bg-teal-100 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Second row - 2 cards centered */}
          <div className="flex justify-center mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
              {services.slice(3, 5).map((service, index) => (
                <div 
                  key={index + 3}
                  className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:transform hover:scale-105"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-teal-50 p-3 rounded-xl group-hover:bg-teal-100 transition-colors duration-300">
                      <service.icon className="w-6 h-6 text-teal-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}