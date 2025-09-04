import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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

// Logout Popup Component
const LogoutPopup = ({ isOpen, onCancel, onConfirm }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onCancel();
    }
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center z-50"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
      onClick={handleBackdropClick}
    >
      <div 
        className="rounded-3xl p-8 max-w-sm w-full mx-4 shadow-2xl transform transition-all duration-300 ease-out"
        style={{ backgroundColor: '#D9D9D9' }}
      >
        {/* Header */}
        <div className="text-center mb-6">
          <h2 
            className="text-3xl font-bold mb-4"
            style={{ color: '#0E4456' }}
          >
            Logout
          </h2>
          <p 
            className="text-lg"
            style={{ color: '#000000' }}
          >
            Are you sure you want to logout?
          </p>
        </div>

        {/* Buttons */}
        <div className="flex gap-4 justify-center">
          <button
            onClick={onCancel}
            className="px-8 py-3 rounded-full font-medium text-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: '#FFFFFF',
              color: '#000000',
              border: '2px solid #0E4456'
            }}
          >
            Cancel
          </button>
          
          <button
            onClick={onConfirm}
            className="px-8 py-3 rounded-full font-medium text-lg transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            style={{ 
              backgroundColor: '#0E4456',
              color: '#FFFFFF'
            }}
          >
            logout
          </button>
        </div>
      </div>
    </div>
  );
};

const DoctorSidebar = () => {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  // Common styles for all links
  const linkClasses =
    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition";

  const handleLogoutClick = () => {
    setShowLogoutPopup(true);
  };

  const handleLogoutCancel = () => {
    setShowLogoutPopup(false);
  };

  const handleLogoutConfirm = () => {
    setShowLogoutPopup(false);
    // Add any cleanup logic here (clear localStorage, etc.)
    navigate("/login");
  };

  return (
    <>
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
            <NavLink
              to="/docdashboard/home"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-gray-900" : "hover:bg-gray-700"
                }`
              }
            >
              <FaHome /> Home
            </NavLink>

            <NavLink
              to="/docdashboard/appointments"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-gray-900" : "hover:bg-gray-700"
                }`
              }
            >
              <FaCalendarCheck /> Appointments
            </NavLink>

            <NavLink
              to="/docdashboard/patient-queue"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-gray-900" : "hover:bg-gray-700"
                }`
              }
            >
              <FaUsers /> Patient Queue
            </NavLink>

            <NavLink
              to="/docdashboard/aiinsights"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-gray-900" : "hover:bg-gray-700"
                }`
              }
            >
              <FaBrain /> AI Insights
            </NavLink>

            <NavLink
              to="/docdashboard/consultation"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-gray-900" : "hover:bg-gray-700"
                }`
              }
            >
              <FaStethoscope /> Consultation
            </NavLink>

            <NavLink
              to="/docdashboard/telemedicine"
              className={({ isActive }) =>
                `${linkClasses} ${
                  isActive ? "bg-white text-gray-900" : "hover:bg-gray-700"
                }`
              }
            >
              <FaVideo /> Telemedicine
            </NavLink>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 space-y-2">
          <NavLink
            to="/docdashboard/settings"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? "bg-white text-gray-900" : "hover:bg-gray-700"
              }`
            }
          >
            <FaCog /> Settings
          </NavLink>

          <NavLink
            to="/docdashboard/helpcenter"
            className={({ isActive }) =>
              `${linkClasses} ${
                isActive ? "bg-white text-gray-900" : "hover:bg-gray-700"
              }`
            }
          >
            <FaQuestionCircle /> Help Center
          </NavLink>

          {/* Logout Button */}
          <button
            onClick={handleLogoutClick}
            className="flex items-center gap-3 px-3 py-2 hover:bg-gray-700 rounded-lg text-sm w-full text-left transition"
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </div>

      {/* Logout Popup */}
      <LogoutPopup 
        isOpen={showLogoutPopup}
        onCancel={handleLogoutCancel}
        onConfirm={handleLogoutConfirm}
      />
    </>
  );
};

export default DoctorSidebar;