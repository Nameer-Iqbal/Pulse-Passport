import React, { useState } from 'react';
import { Search, Calendar, User, Send } from 'lucide-react';

const SearchDoctorsScreen = () => {
  const [specialty, setSpecialty] = useState('');
  const [city, setCity] = useState('');
  const [hospital, setHospital] = useState('');
  const [searchDoctor, setSearchDoctor] = useState('');
  const [gender, setGender] = useState('');
  const [availability, setAvailability] = useState('');
  const [message, setMessage] = useState('');

  const handleBookConsultant = () => {
    console.log('Booking consultant...');
  };

  const handleSendMessage = () => {
    console.log('Sending message:', message);
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ backgroundColor: '#D9D9D9' }}>
      {/* Header */}
      <div className="px-8 py-4 flex items-center justify-between text-white" style={{ backgroundColor: '#0E4456' }}>
        <h1 className="text-lg font-medium tracking-wide">SEARCH DOCTORS</h1>
        <div className="flex items-center">
          <div className="w-8 h-8 bg-slate-500 rounded-full flex items-center justify-center mr-2">
            <User className="w-4 h-4" />
          </div>
          <span className="text-sm">PULSE PASSPORT</span>
        </div>
      </div>

      {/* Main Container */}
      <div className="flex-1 flex justify-center items-start py-12 px-8">
        {/* Inner Blue Background */}
        <div
          className="rounded-2xl w-full max-w-6xl px-12 py-8 flex flex-col justify-between"
          style={{ backgroundColor: '#6F8F99', minHeight: '600px' }}
        >
          <div>
            {/* First Row - Search Filters */}
            <div
              className="rounded-full px-6 py-3 mb-6"
              style={{ backgroundColor: '#0E4456' }}
            >
              <div className="grid grid-cols-4 gap-4">
                {/* Specialty */}
                <select
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full text-white px-3 py-2 rounded-lg text-sm bg-transparent focus:outline-none"
                >
                  <option value="">Specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="neurology">Neurology</option>
                  <option value="orthopedics">Orthopedics</option>
                </select>

                {/* City */}
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full text-white px-3 py-2 rounded-lg text-sm bg-transparent focus:outline-none"
                >
                  <option value="">City</option>
                  <option value="new-york">New York</option>
                  <option value="los-angeles">Los Angeles</option>
                  <option value="chicago">Chicago</option>
                  <option value="houston">Houston</option>
                </select>

                {/* Hospital */}
                <select
                  value={hospital}
                  onChange={(e) => setHospital(e.target.value)}
                  className="w-full text-white px-3 py-2 rounded-lg text-sm bg-transparent focus:outline-none"
                >
                  <option value="">Hospital</option>
                  <option value="general-hospital">General Hospital</option>
                  <option value="city-medical">City Medical Center</option>
                  <option value="regional-health">Regional Health</option>
                </select>

                {/* Search Doctor */}
                <div className="relative">
                  <input
                    type="text"
                    value={searchDoctor}
                    onChange={(e) => setSearchDoctor(e.target.value)}
                    placeholder="Search Doctor"
                    className="w-full text-white px-3 py-2 pr-10 rounded-full text-sm placeholder-slate-300 bg-transparent focus:outline-none"
                  />
                  <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                </div>
              </div>
            </div>

            {/* Second Row - Gender and Availability */}
            <div
              className="rounded-full px-6 py-3 mb-6 max-w-md"
              style={{ backgroundColor: '#0E4456' }}
            >
              <div className="grid grid-cols-2 gap-4">
                {/* Gender */}
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full text-white px-3 py-2 rounded-lg text-sm bg-transparent focus:outline-none"
                >
                  <option value="">Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="any">Any</option>
                </select>

                {/* Availability */}
                <div className="flex items-center px-3 py-2 rounded-lg bg-transparent">
                  <Calendar className="w-4 h-4 text-white mr-2" />
                  <select
                    value={availability}
                    onChange={(e) => setAvailability(e.target.value)}
                    className="bg-transparent text-white text-sm focus:outline-none flex-1"
                  >
                    <option value="">Availability</option>
                    <option value="today">Today</option>
                    <option value="tomorrow">Tomorrow</option>
                    <option value="this-week">This Week</option>
                    <option value="next-week">Next Week</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Book Consultant */}
            <div className="flex justify-end mb-8">
              <button
                onClick={handleBookConsultant}
                className="px-6 py-2 rounded-full text-white text-sm font-medium shadow-md transition hover:opacity-80"
                style={{ backgroundColor: '#0E4456' }}
              >
                BOOK CONSULTANT
              </button>
            </div>
          </div>

          {/* Chatbot inside blue area, at bottom */}
          <div className="mt-auto">
            <div
              className="bg-white rounded-full px-6 py-2 flex items-center shadow-md max-w-lg mx-auto border-2"
              style={{ borderColor: '#0E4456' }}
            >
              <User className="w-4 h-4 mr-3" style={{ color: '#0E4456' }} />
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="ASK AT CHATBOT"
                className="flex-1 text-sm focus:outline-none"
                style={{ color: '#0E4456' }}
              />
              <button
                onClick={handleSendMessage}
                className="transition hover:opacity-70"
                style={{ color: '#0E4456' }}
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchDoctorsScreen;
