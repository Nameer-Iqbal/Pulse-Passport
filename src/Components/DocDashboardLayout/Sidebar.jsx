import React from "react";
import { NavLink } from "react-router-dom";
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
  // Common styles for all links
  const linkClasses =
    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition";

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

        {/* Logout */}
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            `${linkClasses} ${
              isActive ? "bg-white text-gray-900" : "hover:bg-gray-700"
            }`
          }
        >
          <FaSignOutAlt /> Logout
        </NavLink>
      </div>
    </div>
  );
};

export default DoctorSidebar;
