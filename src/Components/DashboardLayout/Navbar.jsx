import React from "react";

const Navbar = () => {
  return (
    <div
      className="w-full h-14 flex justify-between items-center px-6 text-white"
      style={{ backgroundColor: "#0E4456" }}
    >
      <h1 className="text-lg font-semibold">HOME</h1>
      <img
        src="/logo.png" 
        alt="Pulse Passport Logo"
        className="h-8"
      />
    </div>
  );
};

export default Navbar;
