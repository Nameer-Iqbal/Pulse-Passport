import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react"; // lucide-react icon (optional)

const Navbar = ({ title }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // goes to last visited page
  };

  return (
    <div
      className="w-full h-12 flex justify-between items-center px-6 text-white"
      style={{ backgroundColor: "#0E4456" }}
    >
      <div className="flex items-center gap-3">
        {/* Back Arrow */}
        <button
          onClick={handleBack}
          className="p-1 hover:bg-white/20 rounded-full transition"
        >
          <ArrowLeft size={20} />
        </button>

        {/* Title */}
        <h1 className="text-xl font-semibold">{title}</h1>
      </div>

      <img src="/logo.png" alt="Pulse Passport Logo" className="h-8" />
    </div>
  );
};

export default Navbar;
