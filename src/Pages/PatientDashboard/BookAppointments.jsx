import React, { useState } from 'react';
import { Search, ChevronDown, ArrowLeft, Calendar, Clock, User, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


// Color palette as per requirements
const colors = {
  primary: '#6F8F99',
  secondary: '#0E4456',
  lightGray: '#D9D9D9',
  mediumGray: '#A3A3A3',
  blueGray: '#B1BCBF',
  brownGray: '#988F8F'
};

// UpcomingAppointments Component
const UpcomingAppointments = () => {
  const navigate = useNavigate();
  const sampleAppointments = [
    {
      id: 1,
      doctorName: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist',
      date: '2025-09-05',
      time: '10:00 AM',
      status: 'Confirmed',
      location: 'Karachi Medical Center'
    },
    {
      id: 2,
      doctorName: 'DR. SARAH AHMED',
      specialty: 'Cardiologist',
      date: '2025-09-08',
      time: '2:30 PM',
      status: 'Pending',
      location: 'City Hospital'
    }
  ];

  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: '#f5f5f5' }}
    >
      <div 
        className="overflow-hidden flex justify-center items-center rounded-3xl shadow-2xl"
        style={{ 
          backgroundColor: colors.primary,
          width: '100%',
          maxWidth: '1200px',
          minHeight: '700px'
        }}
      >
        <div 
          className="rounded-2xl p-8 w-full h-full"
          style={{ 
            backgroundColor: colors.blueGray,
            margin: '20px'
          }}
        >
          {/* Header */}
          <div className="flex items-center mb-8">
            <button
              onClick={() => navigate('/dashboard/book-appointments')}
              className="p-2 rounded-full hover:opacity-80 transition-opacity mr-4"
              style={{ backgroundColor: colors.secondary }}
            >
              <ArrowLeft className="w-5 h-5 text-white" />
            </button>
            <h1 className="text-2xl font-bold" style={{ color: colors.secondary }}>
              Upcoming Appointments
            </h1>
          </div>

          {/* Appointments List */}
          <div className="space-y-4">
            {sampleAppointments.map((appointment) => (
              <div
                key={appointment.id}
                className="p-6 rounded-xl shadow-sm"
                style={{ backgroundColor: colors.secondary }}
              >
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <User className="w-5 h-5 text-white mr-2" />
                      <h3 className="text-lg font-semibold text-white">
                        {appointment.doctorName}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-2">{appointment.specialty}</p>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {new Date(appointment.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {appointment.time}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {appointment.location}
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        appointment.status === 'Confirmed'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}
                    >
                      {appointment.status}
                    </span>
                    
                    <div className="flex gap-2">
                      <button
                        className="px-3 py-1 rounded text-xs font-medium hover:opacity-90 transition-opacity"
                        style={{ 
                          backgroundColor: colors.blueGray,
                          color: colors.secondary 
                        }}
                      >
                        Reschedule
                      </button>
                      <button
                        className="px-3 py-1 rounded text-xs font-medium text-red-600 bg-red-100 hover:bg-red-200 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {sampleAppointments.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-gray-400" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                No Upcoming Appointments
              </h3>
              <p className="text-gray-500">
                You don't have any appointments scheduled yet.
              </p>
            </div>
          )}

          {/* Book New Appointment Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => navigate('/dashboard/book-appointments')}
              className="px-8 py-3 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
              style={{ backgroundColor: colors.secondary }}
            >
              Book New Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// SearchBar Component - First Row
const SearchBar = () => {
  return (
    <div className="flex items-center w-full max-w-2xl mx-auto mb-8">
      {/* Location Dropdown */}
      <div 
        className="flex items-center px-4 py-3 rounded-l-full text-white cursor-pointer min-w-[120px]"
        style={{ backgroundColor: colors.secondary }}
      >
        <ChevronDown className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">Karachi</span>
      </div>
      
      {/* Search Input */}
      <div className="flex-1 relative">
        <input
          type="text"
          placeholder="Search Doctor"
          className="w-full px-4 py-3 text-sm text-white placeholder-gray-300 focus:outline-none border-none"
          style={{ backgroundColor: colors.secondary }}
        />
      </div>
      
      {/* Search Button */}
      <button 
        className="px-6 py-3 rounded-r-full text-white hover:opacity-90 transition-opacity"
        style={{ backgroundColor: colors.secondary }}
      >
        <Search className="w-5 h-5" />
      </button>
    </div>
  );
};

// DoctorCard Component
const DoctorCard = ({ doctor, onViewProfile }) => {
  return (
    <div 
      className="flex items-center justify-between p-4 rounded-lg mb-3 shadow-sm"
      style={{ backgroundColor: colors.secondary }}
    >
      <div className="flex items-center">
        {/* Doctor Avatar */}
        <div 
          className="w-12 h-12 rounded-full flex items-center justify-center mr-4"
          style={{ backgroundColor: colors.primary }}
        >
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <span className="text-sm font-bold" style={{ color: colors.secondary }}>
              {doctor.name.split(' ').map(n => n[0]).join('').substring(0,2)}
            </span>
          </div>
        </div>
        
        {/* Doctor Info */}
        <div>
          <h3 className="text-white font-semibold text-sm mb-1">{doctor.name}</h3>
          <p className="text-gray-300 text-sm mb-1">{doctor.specialty}</p>
          <p className="text-gray-400 text-sm">{doctor.fee}</p>
        </div>
      </div>
      
      {/* View Profile Button */}
      <button
        onClick={() => onViewProfile(doctor)}
        className="px-4 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
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
const DoctorsList = ({ doctors, onDoctorSelect, onConfirmSave }) => {
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
      <div className="flex justify-end mt-6">
        <button
          onClick={onConfirmSave}
          className="px-6 py-3 rounded-lg text-white text-sm font-medium hover:opacity-90 transition-opacity"
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
    <div className="flex justify-center">
      <div 
        className="p-6 rounded-2xl shadow-lg w-40"
        style={{ backgroundColor: colors.blueGray }}
      >
        {/* Time Display */}
        <div className="flex justify-center mb-6">
          <div className="flex rounded-md overflow-hidden">
            <div 
              className="px-4 py-3 text-lg font-bold text-center min-w-[50px]"
              style={{ 
                backgroundColor: colors.primary,
                color: colors.secondary 
              }}
            >
              {selectedTime.hour}
            </div>
            <div 
              className="px-4 py-3 text-lg font-bold text-center min-w-[50px]"
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
          className="w-full py-3 rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
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
  const navigate = useNavigate();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  
  // Sample doctors data
  const doctors = [
    {
      name: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist',
      fee: 'PKR - 1000'
    },
    {
      name: 'DR. SARAH AHMED',
      specialty: 'Cardiologist',
      fee: 'PKR - 1200'
    },
    {
      name: 'DR. HASSAN ALI',
      specialty: 'Neurologist',
      fee: 'PKR - 1500'
    },
    {
      name: 'DR. FATIMA KHAN',
      specialty: 'Pediatrician',
      fee: 'PKR - 800'
    }
  ];
  
  const handleConfirmSave = () => {
    navigate('/dashboard/upcoming-appointments');  // 👈 Navigate to that page
  };
  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    console.log('Selected doctor:', doctor);
  };
  
  return (
    <div 
      className="min-h-screen flex items-center justify-center p-4"
      style={{ backgroundColor: '#f5f5f5' }}
    >
      {/* Outer Container */}
      <div 
        className="overflow-hidden flex justify-center items-center rounded-3xl shadow-2xl"
        style={{ 
          backgroundColor: colors.primary,
          width: '100%',
          maxWidth: '1200px',
          minHeight: '700px'
        }}
      >
        {/* Main Content Container */}
        <div 
          className="rounded-2xl p-8 w-full h-full"
          style={{ 
            backgroundColor: colors.blueGray,
            margin: '20px'
          }}
        >
          {/* Row 1: Search Bar */}
          <div className="mb-8">
            <SearchBar />
          </div>
          
          {/* Row 2: Doctors List and Time Selector */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Column: Doctors List */}
            <div className="flex-1 w-full lg:w-auto">
              <DoctorsList 
                doctors={doctors}
                onDoctorSelect={handleDoctorSelect}
                onConfirmSave={handleConfirmSave}
              />
            </div>
            
            {/* Right Column: Time Selector */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <TimeSelector />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorBookingApp;