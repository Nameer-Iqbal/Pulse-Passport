import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  const location = useLocation();

  // Map routes to titles (short and clean)
  const titles = {
    history: "History",
    "healthsummary": "Health Summary",
    "prescriptions": "Prescriptions",
    "search-doctor": "Search Doctor",
    "reports": "Reports",
    "settings": "Settings",
    "upcoming-appointments": "Upcoming Appointments",
    "book-appointments": "Book Appointments",
    "reminders": "Reminders",
    "help-center": "Help Center",
  };

  // Match route to title or default to Home
  const getTitle = () => {
    const path = Object.keys(titles).find((key) =>
      location.pathname.includes(key)
    );
    return titles[path] || "Home";
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar title={getTitle()} />
        <div className="flex-1 bg-gray-100 p-4 overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
