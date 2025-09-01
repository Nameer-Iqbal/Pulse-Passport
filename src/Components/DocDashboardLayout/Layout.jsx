import React from "react";
import { Outlet } from "react-router-dom";
import DoctorSidebar from "./Sidebar";
import DoctorNavbar from "./Navbar";

const DoctorDashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <DoctorSidebar />
      <div className="flex flex-col flex-1">
        <DoctorNavbar />
        <div className="flex-1 bg-gray-100 p-4 overflow-hidden">
          <Outlet /> {/* Doctor dashboard pages will render here */}
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboardLayout;

