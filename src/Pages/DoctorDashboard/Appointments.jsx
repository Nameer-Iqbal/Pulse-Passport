import React from 'react';

const AppointmentsDashboard = () => {
  const appointments = [
    {
      time: "09:00",
      patientName: "Anna Mitchell",
      age: 26,
      type: "In-Person",
      status: "Waiting",
      risk: "Low",
      action: "Start"
    },
    {
      time: "10:30",
      patientName: "Robert Cullen",
      age: 32,
      type: "Telemedicine",
      status: "In Consultation",
      risk: "High",
      action: "Join"
    },
    {
      time: "09:00",
      patientName: "Jane Hart",
      age: 34,
      type: "In-Person",
      status: "Scheduled",
      risk: "Low",
      action: "Start"
    },
    {
      time: "09:00",
      patientName: "Anna Mitchell",
      age: 26,
      type: "In-Person",
      status: "Waiting",
      risk: "High",
      action: "Start"
    },
    {
      time: "09:00",
      patientName: "Anna Mitchell",
      age: 26,
      type: "In-Person",
      status: "Waiting",
      risk: "Low",
      action: "Start"
    },
    {
      time: "09:00",
      patientName: "Anna Mitchell",
      age: 26,
      type: "In-Person",
      status: "Waiting",
      risk: "Low",
      action: "Start"
    }
  ];

  // ✅ Risk Indicator Component
  const RiskIndicator = ({ risk }) => (
    <div className="flex items-center gap-1">
      <div 
        className={`w-2 h-2 rounded-full ${
          risk === 'Low' ? 'bg-green-500' : 'bg-red-500'
        }`}
      />
      <span className="text-[#0E4456] text-[10px]">{risk}</span>
    </div>
  );

  // ✅ Action Button Component
  const ActionButton = ({ action }) => {
    const isStart = action === "Start";
    return (
      <button 
        className={`px-3 py-1 rounded text-white text-[10px] font-medium transition-all duration-200
          ${isStart ? "bg-[#0E4456] hover:bg-[#325E6D]" : "bg-green-600 hover:bg-green-700"}
        `}
      >
        {action}
      </button>
    );
  };

  return (
    <div className="w-full min-h-screen bg-[#6F8F99] p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="bg-[#6F8F99] text-white mb-4">
          <h1 className="text-2xl font-bold text-white">Appointments List</h1>
        </div>

        {/* Main Card */}
        <div className="bg-[#D9D9D9] rounded-lg p-4">
          {/* Table Header */}
          <div className="grid grid-cols-7 gap-2 text-[10px] font-medium text-[#0E4456] border-b border-[#A3A3A3] pb-2 mb-2">
            <span>Time</span>
            <span>Patient Name</span>
            <span>Age</span>
            <span>Type</span>
            <span>Status</span>
            <span>Risk</span>
            <span>Action</span>
          </div>

          {/* Table Body */}
          <div className="space-y-2">
            {appointments.map((appointment, index) => (
              <div key={index}>
                <div className="grid grid-cols-7 gap-2 text-[10px] text-[#0E4456] py-2 items-center">
                  <span className="font-medium">{appointment.time}</span>
                  <span className="font-medium">{appointment.patientName}</span>
                  <span>{appointment.age}</span>
                  <span>{appointment.type}</span>
                  <span>{appointment.status}</span>
                  <div>
                    <RiskIndicator risk={appointment.risk} />
                  </div>
                  <div>
                    <ActionButton action={appointment.action} />
                  </div>
                </div>
                {index < appointments.length - 1 && (
                  <div className="border-b border-[#B1BCBF]"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsDashboard;
