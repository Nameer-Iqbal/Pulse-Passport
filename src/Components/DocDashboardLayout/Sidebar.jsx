import React from "react";
import medicineBg from "../../assets/medicineBg.png";
import {
  FaHome,
  FaCalendarCheck,
  FaUsers,
  FaBrain,
  FaStethoscope,
  FaVideo,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt
} from "react-icons/fa";

const DoctorSidebar = () => {
  return (
    <div
      className="w-64 h-screen text-white flex flex-col justify-between"
      style={{
        backgroundColor: "#0E4456",
        backgroundImage: `url(${medicineBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay"
      }}
    >
      {/* Top Section */}
      <div className="p-6">
        {/* Doctor Profile */}
        <div className="flex flex-col items-center">
          <img
            src="https://via.placeholder.com/100"
            alt="Doctor"
            className="w-24 h-24 rounded-full border-2 border-white object-cover"
          />
          <div className="text-sm font-semibold mt-3">Dr. James Thornton</div>
        </div>

        {/* Navigation */}
        <nav className="mt-6 space-y-2">
          <a href="#" className="flex items-center gap-3 bg-white text-gray-900 px-3 py-2 rounded-lg text-sm">
            <FaHome /> Home
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg text-sm">
            <FaCalendarCheck /> Appointments
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg text-sm">
            <FaUsers /> Patient Queue
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg text-sm">
            <FaBrain /> AI Insights
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg text-sm">
            <FaStethoscope /> Consultation
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg text-sm">
            <FaVideo /> Telemedicine
          </a>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 space-y-2">
        <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg text-sm">
          <FaCog /> Settings
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg text-sm">
          <FaQuestionCircle /> Help Center
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg text-sm">
          <FaSignOutAlt /> Logout
        </a>
      </div>
    </div>
  );
};

export default DoctorSidebar;
