import React from 'react';
import { Search, Clock, Calendar, Eye } from 'lucide-react';

// Search Bar Component (Row 1)
const SearchBar = () => {
  return (
    <div className="px-4 py-3" style={{ backgroundColor: '#6F8F99' }}>
      <div className="flex items-center rounded-lg overflow-hidden" style={{ backgroundColor: '#0E4456' }}>
        <div className="flex items-center px-4 py-2 text-white border-r border-gray-600">
          <span className="text-sm">📍 Karachi</span>
        </div>
        <div className="flex-1 flex items-center px-4">
          <input
            type="text"
            placeholder="Search Doctor"
            className="flex-1 bg-transparent text-white placeholder-gray-300 outline-none text-sm"
          />
          <Search className="text-gray-300 w-5 h-5 ml-2" />
        </div>
      </div>
    </div>
  );
};

// Appointment Header Component
const AppointmentHeader = ({ count }) => {
  return (
    <div className="px-6 py-4">
      <h2 className="text-lg font-medium text-gray-800">
        You have {count} appointments today.
      </h2>
    </div>
  );
};

// Doctor Profile Image Component
const DoctorImage = ({ doctorName }) => {
  return (
    <div className="flex-shrink-0 w-16 h-16 rounded-full overflow-hidden">
      <img
        src="/api/placeholder/64/64"
        alt={doctorName}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

// Appointment Info Component
const AppointmentInfo = ({ time, date, doctorName, specialty }) => {
  return (
    <div className="flex-1 ml-4">
      <div className="flex items-center text-white mb-1">
        <Clock className="w-4 h-4 mr-2" />
        <span className="text-sm font-medium">{time}</span>
      </div>
      <div className="flex items-center text-white mb-2">
        <Calendar className="w-4 h-4 mr-2" />
        <span className="text-sm">{date}</span>
      </div>
      <div className="text-white">
        <p className="font-medium text-sm">WITH {doctorName}</p>
        <p className="text-xs opacity-90">{specialty}</p>
      </div>
    </div>
  );
};

// Action Buttons Component
const ActionButtons = () => {
  return (
    <div className="flex flex-col space-y-2 ml-4">
      <button
        className="px-4 py-1 rounded text-xs font-medium flex items-center justify-center"
        style={{ backgroundColor: '#B1BCBF', color: '#0E4456' }}
      >
        <Eye className="w-3 h-3 mr-1" />
        VIEW PROFILE
      </button>
      <button
        className="px-4 py-1 rounded text-xs font-medium"
        style={{ backgroundColor: '#A3A3A3', color: '#0E4456' }}
      >
        JOIN MEETING
      </button>
      <button
        className="px-4 py-1 rounded text-xs font-medium"
        style={{ backgroundColor: '#988F8F', color: 'white' }}
      >
        CANCEL APPOINTMENT
      </button>
    </div>
  );
};

// Individual Appointment Card Component
const AppointmentCard = ({ appointment }) => {
  return (
    <div
      className="rounded-lg p-4 mb-4 mx-4"
      style={{ backgroundColor: '#0E4456' }}
    >
      <div className="flex items-start">
        <DoctorImage doctorName={appointment.doctorName} />
        <AppointmentInfo
          time={appointment.time}
          date={appointment.date}
          doctorName={appointment.doctorName}
          specialty={appointment.specialty}
        />
        <ActionButtons />
      </div>
    </div>
  );
};

// Appointments List Component (Row 2)
const AppointmentsList = ({ appointments }) => {
  return (
    <div className="flex-1">
      <AppointmentHeader count={appointments.length} />
      <div className="pb-4">
        {appointments.map((appointment, index) => (
          <AppointmentCard key={index} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

// Main Container Component
const MedicalAppointments = () => {
  const appointments = [
    {
      time: '11 AM',
      date: '23 - 07 - 25',
      doctorName: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist'
    },
    {
      time: '11 AM',
      date: '23 - 07 - 25',
      doctorName: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist'
    },
    {
      time: '11 AM',
      date: '23 - 07 - 25',
      doctorName: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist'
    },
    {
      time: '11 AM',
      date: '23 - 07 - 25',
      doctorName: 'DR. MUHAMMAD AMJAD',
      specialty: 'Dermatologist'
    }
  ];

  return (
    <div 
      className="min-h-screen flex flex-col max-w-2xl mx-auto"
      style={{ backgroundColor: '#D9D9D9' }}
    >
      {/* Row 1: Search Bar */}
      <SearchBar />
      
      {/* Row 2: Appointments Content */}
      <div 
        className="flex-1 m-4 rounded-lg shadow-lg"
        style={{ backgroundColor: 'white' }}
      >
        <AppointmentsList appointments={appointments} />
      </div>
    </div>
  );
};

export default MedicalAppointments;