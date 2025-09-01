import React, { useState } from "react";
import { ArrowLeft, Search, User, Plus } from "lucide-react";

const HealthSummaryScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const healthData = [
    { label: "CURRENT ISSUES", value: "Blood Pressure - Asthma" },
    { label: "ONGOING PRESCRIPTIONS", value: "Ascard-Entecor" },
    { label: "SURGERIES", value: "Open Heart Surgery" },
    { label: "ALLERGIES", value: "Dust Allergy" },
    { label: "VACCINATIONS", value: "" },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#6F8F99" }}>
      {/* Header */}
      <div
        className="px-6 py-4 flex items-center justify-between text-white"
        style={{ backgroundColor: "#0E4456" }}
      >
        <div className="flex items-center">
          <ArrowLeft className="w-5 h-5 mr-3 cursor-pointer" />
          <h1 className="text-lg font-medium">HEALTH SUMMARY</h1>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center mr-2">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm">DOCTOR SUPPORT</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Outer Container */}
          <div
            className="p-8 min-h-[700px] relative"
            style={{ backgroundColor: "#6F8F99", borderRadius: "20px" }}
          >
            {/* Search Bar in Outer Rectangle */}
            <div className="flex justify-center mb-8">
              <div className="relative w-[750px]">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search Medical History"
                  className="w-full text-white px-6 py-4 pr-14 rounded-full text-sm placeholder-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-600"
                  style={{ backgroundColor: "#0E4456" }}
                />
                <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-300" />
              </div>
            </div>

            {/* Middle White Rectangle */}
            <div
              className="p-8"
              style={{
                backgroundColor: "#FFFFFF",
                borderRadius: "15px",
              }}
            >
              {/* Inner Light Blue Rectangle */}
              <div
                className="p-8"
                style={{
                  backgroundColor: "#97BAC5",
                  borderRadius: "12px", // Less rounded like image
                }}
              >
                {healthData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center mb-6">
                    <div className="flex-1">
                      <h3 className="text-slate-800 font-medium text-sm mb-3">
                        {item.label}
                      </h3>
                      <div
                        className="p-4 min-h-[50px] flex items-center"
                        style={{
                          backgroundColor: "#6F8F99",
                          borderRadius: "10px",
                        }}
                      >
                        <span className="text-slate-800 text-sm">{item.value}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Add Button */}
            <button
              className="absolute bottom-8 right-8 hover:opacity-80 text-white rounded-full w-14 h-14 flex items-center justify-center transition-colors duration-200 shadow-lg"
              style={{ backgroundColor: "#0E4456" }}
            >
              <Plus className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthSummaryScreen;
