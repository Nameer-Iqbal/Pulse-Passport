import React from 'react';
import { Search, MessageCircle, Mic, Camera } from 'lucide-react';

// Search Bar Component (Row 1)
const SearchBar = () => {
  return (
    <div className="w-full px-4 py-2">
      <div className="flex items-center bg-[#0E4456] rounded-full overflow-hidden">
        <div className="flex items-center px-3 py-2 bg-[#0E4456] text-white">
          <span className="text-xs mr-1">▼</span>
          <span className="text-xs">Karachi</span>
        </div>
        <div className="flex-1 px-2">
          <input
            type="text"
            placeholder="Search Doctor"
            className="w-full bg-transparent text-white placeholder-[#A3A3A3] outline-none text-xs"
          />
        </div>
        <button className="px-3 py-2">
          <Search className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  );
};

// Greeting Component
const Greeting = () => {
  return (
    <div className="px-4 pb-2">
      <h1 className="text-white text-lg font-medium">Hi, there Anna!</h1>
    </div>
  );
};

// Appointments Component
const AppointmentsSection = () => {
  const appointments = [
    { time: "09:00", date: "02/08/2025", name: "Dr. James", status: "Waiting", action: "[Details]" },
    { time: "05:00", date: "04/08/2025", name: "Dr.Robert", status: "Waiting", action: "[Details]" }
  ];

  return (
    <div className="bg-[#D9D9D9] rounded-lg p-3 h-48">
      <h2 className="text-[#0E4456] font-medium mb-2 text-sm">You have 2 appointments today.</h2>
      <div className="space-y-1">
        <div className="grid grid-cols-5 gap-1 text-[10px] font-medium text-[#0E4456] border-b border-[#A3A3A3] pb-1">
          <span>Time</span>
          <span>Date</span>
          <span>Name</span>
          <span>Status</span>
          <span>Action</span>
        </div>
        {appointments.map((appointment, index) => (
          <div key={index} className="grid grid-cols-5 gap-1 text-[10px] text-[#0E4456] py-1 border-b border-[#B1BCBF]">
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

// Reminder Component
const ReminderSection = () => {
  const reminders = [
    { medicine: "Ascard 50mg", dosage: "1 tablet", time: "5pm", date: "02/08/2025" },
    { medicine: "Ascard 50mg", dosage: "1 tablet", time: "5pm", date: "03/08/2025" }
  ];

  return (
    <div className="bg-[#D9D9D9] rounded-lg p-3 h-48">
      <h2 className="text-[#0E4456] font-medium mb-2 text-sm">Reminder!</h2>
      <div className="space-y-1">
        <div className="grid grid-cols-4 gap-1 text-[10px] font-medium text-[#0E4456] border-b border-[#A3A3A3] pb-1">
          <span>Medicine</span>
          <span>Dosage</span>
          <span>Time</span>
          <span>Date</span>
        </div>
        {reminders.map((reminder, index) => (
          <div key={index} className="grid grid-cols-4 gap-1 text-[10px] text-[#0E4456] py-1 border-b border-[#B1BCBF]">
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

// Navigation Buttons
const NavigationButtons = () => {
  const buttons = [
    { name: "Medicines", active: true },
    { name: "Appointments", active: false },
    { name: "Labs", active: false },
    { name: "Book an Appointment", active: false }
  ];

  return (
    <div className="px-4 py-2">
      <div className="bg-[#D9D9D9] rounded-lg p-3">
        <div className="grid grid-cols-2 gap-2">
          {buttons.map((button, index) => (
            <button
              key={index}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
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

// Chat Bot
const ChatBot = () => {
  return (
    <div className="px-4 py-2">
      <div className="bg-[#D9D9D9] rounded-full px-4 py-2 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <MessageCircle className="w-4 h-4 text-[#0E4456]" />
          <span className="text-[#0E4456] text-xs font-medium">ASK A.I CHATBOT</span>
        </div>
        <div className="flex items-center space-x-2">
          <button>
            <Mic className="w-4 h-4 text-[#0E4456]" />
          </button>
          <button>
            <Camera className="w-4 h-4 text-[#0E4456]" />
          </button>
        </div>
      </div>
    </div>
  );
};

// Main App
const MedicalDashboard = () => {
  return (
    <div className="w-full min-h-screen bg-[#6F8F99]">
      <SearchBar />
      <Greeting />
      <div className="px-4 py-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          <AppointmentsSection />
          <ReminderSection />
        </div>
      </div>
      <NavigationButtons />
      <ChatBot />
    </div>
  );
};

export default MedicalDashboard; 