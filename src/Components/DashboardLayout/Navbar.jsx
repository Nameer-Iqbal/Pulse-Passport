import React from "react";

const Navbar = ({ title }) => {
  return (
    <div
      className="w-full h-12 flex justify-between items-center px-6 text-white"
      style={{ backgroundColor: "#0E4456" }}
    >
      <h1 className="text-xl font-semibold">{title}</h1>
      <img src="/logo.png" alt="Pulse Passport Logo" className="h-8" />
    </div>
  );
};

export default Navbar;
