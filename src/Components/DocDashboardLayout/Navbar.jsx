import React from "react";

const DoctorNavbar = ({ pageTitle }) => {
  return (
    <div
      className="w-full h-12 flex justify-between items-center px-4 shadow-sm"
      style={{ backgroundColor: "#0E4456" }}
    >
      {/* Left side: Dynamic title */}
      <h1 className="text-white text-lg font-semibold">{pageTitle}</h1>

      {/* Right side: Logo */}
      <img
        src="/logo.png"
        alt="Pulse Passport Logo"
        className="h-8"
      />
    </div>
  );
};

export default DoctorNavbar;