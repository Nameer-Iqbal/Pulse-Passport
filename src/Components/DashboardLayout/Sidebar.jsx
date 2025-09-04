import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
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
  FaSignOutAlt,
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

const Sidebar = () => {
  const navigate = useNavigate();
  const [showLogoutPopup, setShowLogoutPopup] = useState(false);

  const linkClass =
    "flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-700";
  const activeClass = "bg-white text-gray-900";

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
          backgroundBlendMode: "overlay",
        }}
      >
        {/* Top Section */}
        <div className="p-4">
          {/* Profile */}
          <div className="flex items-start gap-4">
            <div className="flex flex-col items-center">
              <img
                src="https://via.placeholder.com/80"
                alt="Profile"
                className="w-20 h-20 rounded-full border-2 border-white object-cover"
              />
              <div className="text-sm font-semibold mt-0">Sarah Ahmed</div>
            </div>

            <div className="flex flex-col gap-1 mt-1">
              <span className="bg-white text-gray-800 px-2 py-0.5 text-xs rounded-full">
                CODE: 0105
              </span>
              <span className="bg-white text-gray-800 px-2 py-0.5 text-xs rounded-full">
                Female
              </span>
              <span className="bg-white text-gray-800 px-2 py-0.5 text-xs rounded-full">
                20 yrs
              </span>
              <span className="bg-white text-gray-800 px-2 py-0.5 text-xs rounded-full">
                A +ve
              </span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="mt-4 space-y-1">
            <NavLink
              to="/dashboard/home"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaHome /> Home
            </NavLink>

            <NavLink
              to="/dashboard/search-doctor"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaUserMd /> Doctors
            </NavLink>

            <NavLink
              to="/dashboard/book-appointments"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaCalendarCheck /> Appointments
            </NavLink>

            <NavLink
              to="/dashboard/reminders"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaBell /> Reminders
            </NavLink>

            <NavLink
              to="/dashboard/reports"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaFileAlt /> Reports
            </NavLink>

            <NavLink
              to="/dashboard/history"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaHistory /> History
            </NavLink>

            <NavLink
              to="/dashboard/telemedicine"
              className={({ isActive }) =>
                `${linkClass} ${isActive ? activeClass : ""}`
              }
            >
              <FaVideo /> Telemedicine
            </NavLink>
          </nav>
        </div>

        {/* Bottom Section */}
        <div className="p-4 space-y-1">
          <NavLink
            to="/dashboard/settings"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <FaCog /> Settings
          </NavLink>

          <NavLink
            to="/dashboard/help-center"
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ""}`
            }
          >
            <FaQuestionCircle /> Help Center
          </NavLink>

          <button
            onClick={handleLogoutClick}
            className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm w-full text-left"
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

export default Sidebar;