import React, { useState } from 'react';
import { Search, ChevronDown } from 'lucide-react';

// Color palette as per requirements
const colors = {
  primary: '#6F8F99',
  secondary: '#0E4456',
  lightGray: '#D9D9D9',
  mediumGray: '#A3A3A3',
  blueGray: '#B1BCBF',
  brownGray: '#988F8F'
};

// SearchBar Component - First Row
const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-lg mx-auto mb-6">
      {/* Location Dropdown */}
      <div 
        className="flex items-center px-3 py-2 rounded-l-full text-white cursor-pointer min-w-[100px]"
        style={{ backgroundColor: colors.secondary }}
      >
        <ChevronDown className="w-3 h-3 mr-1" />
        <span className="text-xs font-medium">Karachi</span>
      </div>
      
      {/* Search Input */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search Doctor"
          className="w-full px-3 py-2 text-xs text-gray-600 focus:outline-none"
          style={{ backgroundColor: colors.lightGray }}
        />
      </div>
      
      {/* Search Button */}
      <button 
        className="px-4 py-2 rounded-r-full text-white hover:opacity-90 transition-opacity"
        style={{ backgroundColor: colors.secondary }}
      >
        <Search className="w-4 h-4" />
      </button>
    </div>
  );
};

// DoctorCard Component
const DoctorCard = ({ doctor, onViewProfile }) => {
  return (
    <div 
      className="flex items-center justify-between p-3 rounded-lg mb-2 shadow-sm"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="flex items-center">
        {/* Doctor Avatar */}
        <div 
          className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
          style={{ backgroundColor: colors.primary }}
        >
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
            <span className="text-xs font-bold" style={{ color: colors.secondary }}>
              {doctor.name.split(' ').map(n => n[0]).join('').substring(0,2)}
            </span>
          </div>
        </div>
        
        {/* Doctor Info */}
        <div>
          <h3 className="text-white font-semibold text-xs">{doctor.name}</h3>
          <p className="text-gray-300 text-xs">{doctor.specialty}</p>
          <p className="text-gray-400 text-xs">{doctor.fee}</p>
        </div>
      </div>
      
      {/* View Profile Button */}
      <button
        onClick={() => onViewProfile(doctor)}
        className="px-3 py-1 rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
        style={{ 
          backgroundColor: colors.blueGray,
          color: colors.secondary 
        }}
      >
        VIEW PROFILE
      </button>
    </div>
  );
};

// DoctorsList Component - Second Row Left Column
const DoctorsList = ({ doctors, onDoctorSelect }) => {
  return (
    <div className="space-y-2">
      {doctors.map((doctor, index) => (
        <DoctorCard
          key={index}
          doctor={doctor}
          onViewProfile={onDoctorSelect}
        />
      ))}
      
      {/* Confirm & Save Button */}
      <div className="flex justify-end mt-4">
        <button
          className="px-4 py-2 rounded-lg text-white text-xs font-medium hover:opacity-90 transition-opacity"
          style={{ backgroundColor: colors.secondary }}
        >
          Confirm & Save
        </button>
      </div>
    </div>
  );
};

// TimeSelector Component - Second Row Right Column
const TimeSelector = () => {
  const [selectedTime, setSelectedTime] = useState({ hour: '10', minute: '00' });
  
  return (
    <div className="ml-6">
      <div 
        className="p-4 rounded-2xl shadow-lg w-32"
        style={{ backgroundColor: colors.blueGray }}
      >
        {/* Time Display */}
        <div className="flex justify-center mb-4">
          <div className="flex rounded-md overflow-hidden">
            <div 
              className="px-3 py-2 text-sm font-bold text-center min-w-[40px]"
              style={{ 
                backgroundColor: colors.primary,
                color: colors.secondary 
              }}
            >
              {selectedTime.hour}
            </div>
            <div 
              className="px-3 py-2 text-sm font-bold text-center min-w-[40px]"
              style={{ 
                backgroundColor: colors.primary,
                color: colors.secondary 
              }}
            >
              {selectedTime.minute}
            </div>
          </div>
        </div>
        
        {/* Select Time Button */}
        <button
          className="w-full py-2 rounded-md text-xs font-medium hover:opacity-90 transition-opacity"
          style={{ 
            backgroundColor: colors.primary,
            color: colors.secondary 
          }}
        >
          Select time
        </button>
      </div>
    </div>
  );
};

// Main App Component
const DoctorBookingApp = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  // Sample doctors data
  const doctors = [
    {
      name: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist',
      fee: 'PKR - 1000'
    },
    {
      name: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist',
      fee: 'PKR - 1000'
    },
    {
      name: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist',
      fee: 'PKR - 1000'
    },
    {
      name: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist',
      fee: 'PKR - 1000'
    }
  ];
  
  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    console.log('Selected doctor:', doctor);
  };
  
  return (
    <div 
      className="overflow-hidden"
      style={{ 
        backgroundColor: colors.primary,
        width: '1466px',
        height: '800px'
      }}
    >
      {/* Main Content Container */}
      <div 
        className="w-full h-full rounded-2xl p-6 m-4"
        style={{ 
          backgroundColor: colors.blueGray,
          width: 'calc(100% - 32px)',
          height: 'calc(100% - 32px)'
        }}
      >
        {/* Row 1: Search Bar */}
        <div className="mb-4">
          <SearchBar />
        </div>
        
        {/* Row 2: Doctors List and Time Selector */}
        <div className="flex items-start justify-between h-full">
          {/* Left Column: Doctors List */}
          <div className="flex-1 max-w-md pr-4">
            <DoctorsList 
              doctors={doctors}
              onDoctorSelect={handleDoctorSelect}
            />
          </div>
          
          {/* Right Column: Time Selector */}
          <div className="flex-shrink-0 mt-8">
            <TimeSelector />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBookingApp;