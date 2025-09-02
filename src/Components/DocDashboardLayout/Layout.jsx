import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import DoctorSidebar from "./Sidebar";
import DoctorNavbar from "./Navbar";

const DoctorDashboardLayout = () => {
  const location = useLocation();

  // Route ke hisaab se Navbar ka title
  const getPageTitle = () => {
    switch (location.pathname) {
      case "/docdashboard":
      case "/docdashboard/home":
        return "Home";
      case "/docdashboard/appointments":
        return "Appointments";
      case "/docdashboard/patient-queue":
        return "Patient Queue";
      case "/docdashboard/aiinsights":
        return "AI Insights";
      case "/docdashboard/helpcenter":
        return "Help Center";
      default:
        return "";
    }
  };

  return (
    <div className="flex h-screen">
      <DoctorSidebar />
      <div className="flex flex-col flex-1">
        {/* Navbar with dynamic title */}
        <DoctorNavbar pageTitle={getPageTitle()} />
        <div className="flex-1 bg-gray-100 p-4 overflow-hidden">
          <Outlet /> {/* Nested doctor dashboard pages will render here */}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardLayout;
