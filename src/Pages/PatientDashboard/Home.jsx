import React from 'react';
import { Search, MessageCircle, Mic, Camera } from 'lucide-react';

// Search Bar Component (Row 1)
const SearchBar = () => {
  return (
    <div className="w-full px-6 py-4">
      <div className="flex items-center bg-[#0E4456] rounded-full overflow-hidden">
        <div className="flex items-center px-4 py-3 bg-[#0E4456] text-white">
          <span className="text-sm mr-2">▼</span>
          <span className="text-sm">Karachi</span>
        </div>
        <div className="flex-1 px-4">
          <input 
            type="text" 
            placeholder="Search Doctor" 
            className="w-full bg-transparent text-white placeholder-[#A3A3A3] outline-none text-sm"
          />
        </div>
        <button className="px-4 py-3">
          <Search className="w-5 h-5 text-white" />
        </button>
      </div>
    </div>
  );
};

// Greeting Component
const Greeting = () => {
  return (
    <div className="px-6 pb-4">
      <h1 className="text-white text-xl font-medium">Hi , there Anna !</h1>
    </div>
  );
};

// Appointments Component (Row 2, Column 1)
const AppointmentsSection = () => {
  const appointments = [
    {
      time: "09:00",
      date: "02/08/2025",
      name: "Dr. James",
      status: "Waiting",
      action: "[Details]"
    },
    {
      time: "05:00", 
      date: "04/08/2025",
      name: "Dr.Robert",
      status: "Waiting",
      action: "[Details]"
    }
  ];

  return (
    <div className="bg-[#D9D9D9] rounded-lg p-4 h-64">
      <h2 className="text-[#0E4456] font-medium mb-4">You have 2 appointments today.</h2>
      
      <div className="space-y-2">
        <div className="grid grid-cols-5 gap-2 text-xs font-medium text-[#0E4456] border-b border-[#A3A3A3] pb-2">
          <span>Time</span>
          <span>Date</span>
          <span>Name</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        
        {appointments.map((appointment, index) => (
          <div key={index} className="grid grid-cols-5 gap-2 text-xs text-[#0E4456] py-2 border-b border-[#B1BCBF]">
            <span>{appointment.time}</span>
            <span>{appointment.date}</span>
            <span>{appointment.name}</span>
            <span>{appointment.status}</span>
            <span className="text-blue-600">{appointment.action}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Reminder Component (Row 2, Column 2)
const ReminderSection = () => {
  const reminders = [
    {
      medicine: "Ascard 50mg",
      dosage: "1 tablet",
      time: "5pm",
      date: "02/08/2025"
    },
    {
      medicine: "Ascard 50mg",
      dosage: "1 tablet", 
      time: "5pm",
      date: "03/08/2025"
    }
  ];

  return (
    <div className="bg-[#D9D9D9] rounded-lg p-4 h-64">
      <h2 className="text-[#0E4456] font-medium mb-4">Reminder !</h2>
      
      <div className="space-y-2">
        <div className="grid grid-cols-4 gap-2 text-xs font-medium text-[#0E4456] border-b border-[#A3A3A3] pb-2">
          <span>Medicine</span>
          <span>Dosage</span>
          <span>Time</span>
          <span>Date</span>
        </div>
        
        {reminders.map((reminder, index) => (
          <div key={index} className="grid grid-cols-4 gap-2 text-xs text-[#0E4456] py-2 border-b border-[#B1BCBF]">
            <span>{reminder.medicine}</span>
            <span>{reminder.dosage}</span>
            <span>{reminder.time}</span>
            <span>{reminder.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

// Navigation Buttons Component (Row 3)
const NavigationButtons = () => {
  const buttons = [
    { name: "Medicines", active: true },
    { name: "Appointments", active: false },
    { name: "Labs", active: false },
    { name: "Book an Appointment", active: false }
  ];

  return (
    <div className="px-6 py-4">
      <div className="bg-[#D9D9D9] rounded-lg p-4">
        <div className="grid grid-cols-2 gap-3">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                button.active 
                  ? 'bg-[#988F8F] text-white' 
                  : 'bg-[#A3A3A3] text-[#0E4456] hover:bg-[#988F8F] hover:text-white'
              }`}
            >
              {button.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

// Chat Bot Component (Row 4)
const ChatBot = () => {
  return (
    <div className="px-6 py-4">
      <div className="bg-[#D9D9D9] rounded-full px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <MessageCircle className="w-5 h-5 text-[#0E4456]" />
          <span className="text-[#0E4456] text-sm font-medium">ASK A.I CHATBOT</span>
        </div>
        <div className="flex items-center space-x-3">
          <button>
            <Mic className="w-5 h-5 text-[#0E4456]" />
          </button>
          <button>
            <Camera className="w-5 h-5 text-[#0E4456]" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const MedicalDashboard = () => {
  return (
    <div className="min-h-screen bg-[#6F8F99]">
      {/* Row 1: Search Bar */}
      <SearchBar />
      
      {/* Greeting */}
      <Greeting />
      
      {/* Row 2: Two Columns - Appointments and Reminders */}
      <div className="px-6 py-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AppointmentsSection />
          <ReminderSection />
        </div>
      </div>
      
      {/* Row 3: Navigation Buttons */}
      <NavigationButtons />
      
      {/* Row 4: Chat Bot */}
      <ChatBot />
    </div>
  );
};

export default MedicalDashboard;