import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <div className="flex-1 bg-gray-100 p-4">
          <Outlet /> {/* Dashboard pages go here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
