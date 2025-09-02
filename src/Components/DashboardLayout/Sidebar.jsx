import React from "react";
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

const Sidebar = () => {
  const navigate = useNavigate();

  const linkClass =
    "flex items-center gap-3 px-3 py-1.5 rounded-lg text-sm hover:bg-gray-700";
  const activeClass = "bg-white text-gray-900";

  return (
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
            to="/dashboard/upcoming-appointments"
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
          onClick={() => navigate("/login")}
          className="flex items-center gap-3 px-3 py-1.5 hover:bg-gray-700 rounded-lg text-sm w-full text-left"
        >
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
