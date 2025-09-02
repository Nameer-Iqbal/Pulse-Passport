import React, { useState } from "react";
import { Search, Calendar, User, Send, ChevronDown } from "lucide-react";

const SearchDoctorsScreen = () => {
  const [specialty, setSpecialty] = useState("");
  const [city, setCity] = useState("");
  const [hospital, setHospital] = useState("");
  const [searchDoctor, setSearchDoctor] = useState("");
  const [gender, setGender] = useState("");
  const [availability, setAvailability] = useState("");
  const [message, setMessage] = useState("");

  const handleBookConsultant = () => {
    alert("Booking consultant...");
  };

  const handleSendMessage = () => {
    if (!message.trim()) return;
    alert("Sending message: " + message);
    setMessage("");
  };

  const cities = ["Karachi", "Lahore", "Islamabad", "Peshawar", "Quetta", "Multan", "Faisalabad"];

  return (
    <div className="w-full h-full bg-[#6F8F99] flex flex-col">
      {/* Search Filters */}
      <div className="rounded-full px-4 lg:px-6 py-3 mb-6 bg-[#0E4456] mx-4 mt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Specialty */}
          <div className="relative">
            <select
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
              className="w-full text-white px-3 py-2 rounded-lg text-sm bg-transparent border border-white/30 focus:outline-none appearance-none pr-8"
            >
              <option value="" className="bg-white text-[#0E4456]">Specialty</option>
              <option value="cardiology" className="bg-white text-[#0E4456]">Cardiology</option>
              <option value="dermatology" className="bg-white text-[#0E4456]">Dermatology</option>
              <option value="neurology" className="bg-white text-[#0E4456]">Neurology</option>
              <option value="orthopedics" className="bg-white text-[#0E4456]">Orthopedics</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
          </div>

          {/* City */}
          <div className="relative">
            <select
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full text-white px-3 py-2 rounded-lg text-sm bg-transparent border border-white/30 focus:outline-none appearance-none pr-8"
            >
              <option value="" className="bg-white text-[#0E4456]">Select City</option>
              {cities.map((c, idx) => (
                <option key={idx} value={c.toLowerCase()} className="bg-white text-[#0E4456]">
                  {c}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
          </div>

          {/* Hospital */}
          <div className="relative">
            <select
              value={hospital}
              onChange={(e) => setHospital(e.target.value)}
              className="w-full text-white px-3 py-2 rounded-lg text-sm bg-transparent border border-white/30 focus:outline-none appearance-none pr-8"
            >
              <option value="" className="bg-white text-[#0E4456]">Hospital</option>
              <option value="general-hospital" className="bg-white text-[#0E4456]">General Hospital</option>
              <option value="city-medical" className="bg-white text-[#0E4456]">City Medical Center</option>
              <option value="regional-health" className="bg-white text-[#0E4456]">Regional Health</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
          </div>

          {/* Search Doctor */}
          <div className="relative">
            <input
              type="text"
              value={searchDoctor}
              onChange={(e) => setSearchDoctor(e.target.value)}
              placeholder="Search Doctor"
              className="w-full text-white px-3 py-2 pr-10 rounded-full text-sm placeholder-slate-300 bg-transparent border border-white/30 focus:outline-none"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
          </div>
        </div>
      </div>

      {/* Gender + Availability */}
      <div className="rounded-full px-4 lg:px-6 py-3 mb-6 max-w-md bg-[#0E4456] mx-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Gender */}
          <div className="relative">
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full text-white px-3 py-2 rounded-lg text-sm bg-transparent border border-white/30 focus:outline-none appearance-none pr-8"
            >
              <option value="" className="bg-white text-[#0E4456]">Gender</option>
              <option value="male" className="bg-white text-[#0E4456]">Male</option>
              <option value="female" className="bg-white text-[#0E4456]">Female</option>
              <option value="any" className="bg-white text-[#0E4456]">Any</option>
            </select>
            <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
          </div>

          {/* Availability */}
          <div className="relative flex items-center px-3 py-2 rounded-lg border border-white/30">
            <Calendar className="w-4 h-4 text-white mr-2" />
            <select
              value={availability}
              onChange={(e) => setAvailability(e.target.value)}
              className="bg-transparent text-white text-sm focus:outline-none flex-1 appearance-none pr-6"
            >
              <option value="" className="bg-white text-[#0E4456]">Availability</option>
              <option value="today" className="bg-white text-[#0E4456]">Today</option>
              <option value="tomorrow" className="bg-white text-[#0E4456]">Tomorrow</option>
              <option value="this-week" className="bg-white text-[#0E4456]">This Week</option>
              <option value="next-week" className="bg-white text-[#0E4456]">Next Week</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-white w-4 h-4 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Book Consultant */}
      <div className="flex justify-end mb-8 px-4">
        <button
          onClick={handleBookConsultant}
          className="px-6 py-2 rounded-full text-white text-sm font-medium shadow-md transition hover:opacity-80 bg-[#0E4456]"
        >
          BOOK CONSULTANT
        </button>
      </div>

      {/* Chatbot */}
      <div className="mt-auto px-4 pb-6">
        <div className="bg-white rounded-full px-6 py-2 flex items-center shadow-md max-w-lg mx-auto border-2 border-[#0E4456]">
          <User className="w-4 h-4 mr-3 text-[#0E4456]" />
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="ASK AT CHATBOT"
            className="flex-1 text-sm focus:outline-none text-[#0E4456]"
          />
          <button
            onClick={handleSendMessage}
            className="transition hover:opacity-70 text-[#0E4456]"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchDoctorsScreen;
