import React from "react";

const DoctorNavbar = () => {
  return (
    <div
      className="w-full h-10 flex justify-end items-center px-4 shadow-sm"
      style={{ backgroundColor: "#ffffff" }}
    >
      <img
        src="/colorlogo.png"
        alt="Pulse Passport Logo"
        className="h-6"
      />
    </div>
  );
};

export default DoctorNavbar;
