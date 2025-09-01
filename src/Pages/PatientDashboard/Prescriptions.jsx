import React, { useState } from "react";
import { Search, Plus, ArrowLeft, User } from "lucide-react";

export default function PrescriptionPage() {
  const [prescriptions] = useState([
    { name: "ASCARD", formula: "acetylsalicylic acid", dosage: "75 mg", quantity: "1 Daily" },
    { name: "ASCARD", formula: "acetylsalicylic acid", dosage: "75 mg", quantity: "1 Daily" },
    { name: "ASCARD", formula: "acetylsalicylic acid", dosage: "75 mg", quantity: "1 Daily" },
    { name: "ASCARD", formula: "acetylsalicylic acid", dosage: "75 mg", quantity: "1 Daily" },
    { name: "ASCARD", formula: "acetylsalicylic acid", dosage: "75 mg", quantity: "1 Daily" },
  ]);

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#6F8F99" }}>
      {/* Top Bar (Same as Health Summary) */}
      <div
        className="px-6 py-4 flex items-center justify-between text-white"
        style={{ backgroundColor: "#0E4456" }}
      >
        <div className="flex items-center">
          <ArrowLeft className="w-5 h-5 mr-3 cursor-pointer" />
          <h1 className="text-lg font-medium">PRESCRIPTION</h1>
        </div>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center mr-2">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm">DOCTOR SUPPORT</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex items-center justify-center p-8">
        {/* Outer White Rectangle */}
        <div
          className="rounded-2xl p-8 w-[90%] h-[90vh] shadow-lg"
          style={{ backgroundColor: "white" }}
        >
          {/* Inner Teal Rectangle */}
          <div
            className="rounded-xl p-10 flex flex-col h-full"
            style={{ backgroundColor: "#6F8F99" }}
          >
            {/* Search Bar */}
            <div className="flex justify-center mb-8">
              <div
                className="flex items-center px-6 py-3 rounded-full w-[500px] md:w-[700px]"
                style={{ backgroundColor: "#0E4456" }}
              >
                <input
                  type="text"
                  placeholder="Search Medical History"
                  className="flex-1 bg-transparent outline-none text-white placeholder-white text-base"
                />
                <Search className="text-white" size={20} />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto flex-1">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    {["NAME", "FORMULA", "DOSAGE", "QUANTITY"].map((header, idx) => (
                      <th
                        key={idx}
                        className="py-3 px-4 text-white text-base"
                        style={{
                          backgroundColor: "#0E4456",
                          borderRadius: "20px",
                        }}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {prescriptions.map((item, index) => (
                    <tr key={index} className="text-white text-base text-center">
                      <td className="py-4 px-4 border border-[#aac2c8]">{item.name}</td>
                      <td className="py-4 px-4 border border-[#aac2c8]">{item.formula}</td>
                      <td className="py-4 px-4 border border-[#aac2c8]">{item.dosage}</td>
                      <td className="py-4 px-4 border border-[#aac2c8]">{item.quantity}</td>
                    </tr>
                  ))}
                  {/* Empty Rows for spacing */}
                  {[...Array(5)].map((_, i) => (
                    <tr key={i}>
                      <td className="py-6 px-4 border border-[#aac2c8]"></td>
                      <td className="py-6 px-4 border border-[#aac2c8]"></td>
                      <td className="py-6 px-4 border border-[#aac2c8]"></td>
                      <td className="py-6 px-4 border border-[#aac2c8]"></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Add Button */}
            <div className="flex justify-end mt-6">
              <button className="bg-white p-4 rounded-full shadow-lg hover:bg-gray-200 transition">
                <Plus className="text-[#0E4456]" size={24} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
