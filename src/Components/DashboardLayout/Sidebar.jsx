import React from "react";
import medicineBg from "../../assets/medicineBg.png";
import {
  FaHome,
  FaUserMd,
  FaCalendarCheck,
  FaBell,
  FaFileAlt,
  FaHistory,
  FaVideo,
  FaCog,
  FaQuestionCircle,
  FaSignOutAlt
} from "react-icons/fa";

const Sidebar = () => {
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
      <div className="p-4">
        {/* Profile Row */}
        <div className="flex items-start gap-4">
          {/* Profile Column */}
          <div className="flex flex-col items-center">
            <img
              src="https://via.placeholder.com/80"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-white object-cover"
            />
            <div className="text-sm font-semibold mt-0">Sarah Ahmed</div>
          </div>

          {/* Info Chips */}
          <div className="flex flex-col gap-1 mt-1">
            <span className="bg-white text-gray-800 px-2 py-0.5 text-xs rounded-full">CODE: 0105</span>
            <span className="bg-white text-gray-800 px-2 py-0.5 text-xs rounded-full">Female</span>
            <span className="bg-white text-gray-800 px-2 py-0.5 text-xs rounded-full">20 yrs</span>
            <span className="bg-white text-gray-800 px-2 py-0.5 text-xs rounded-full">A +ve</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="mt-4 space-y-1">
          <a href="#" className="flex items-center gap-3 bg-white text-gray-900 px-3 py-1.5 rounded-lg text-sm">
            <FaHome /> Home
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm">
            <FaUserMd /> Doctors
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm">
            <FaCalendarCheck /> Appointments
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm">
            <FaBell /> Reminders
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm">
            <FaFileAlt /> Reports
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm">
            <FaHistory /> History
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm">
            <FaVideo /> Telemedicine
          </a>
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="p-4 space-y-1">
        <a href="#" className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm">
          <FaCog /> Settings
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm">
          <FaQuestionCircle /> Help Center
        </a>
        <a href="#" className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm">
          <FaSignOutAlt /> Logout
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
