import React from "react";

const PatientDashboardHome = () => {
  // Dummy data - Appointments
  const appointments = [
    { time: "09:00", date: "02/08/2025", name: "Dr. James", status: "Waiting", action: "Details" },
    { time: "05:00", date: "04/08/2025", name: "Dr. Robert", status: "Waiting", action: "Details" },
    { time: "11:30", date: "05/08/2025", name: "Dr. Sarah", status: "Confirmed", action: "Details" },
    { time: "03:00", date: "07/08/2025", name: "Dr. Ahmed", status: "Pending", action: "Details" }
  ];

  // Dummy data - Reminders
  const reminders = [
    { medicine: "Ascard 50mg", dosage: "1 tablet", time: "5pm", date: "02/08/2025" },
    { medicine: "Panadol 500mg", dosage: "2 tablets", time: "8am", date: "03/08/2025" },
    { medicine: "Vitamin D 1000IU", dosage: "1 capsule", time: "9am", date: "04/08/2025" },
    { medicine: "Omeprazole 20mg", dosage: "1 capsule", time: "7am", date: "05/08/2025" }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-100 px-6 py-6">
      {/* Top Search */}
      <div className="flex flex-col md:flex-row gap-3 items-center mb-6">
        <select className="border rounded-lg px-3 py-2 w-full md:w-48">
          <option>Karachi</option>
        </select>
        <input
          type="text"
          placeholder="Search Doctor"
          className="border rounded-lg px-3 py-2 flex-1"
        />
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg w-full md:w-auto">
          🔍 Search
        </button>
      </div>

      {/* Welcome */}
      <h2 className="text-2xl font-semibold text-gray-800">Hi, there Anna!</h2>
      <p className="text-gray-600 mb-6 text-base">
        You have {appointments.length} appointments scheduled.
      </p>

      {/* Main Section - Appointments + Reminders */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Appointments */}
        <div className="bg-white rounded-lg shadow-md p-4 max-h-[450px] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Appointments</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700 font-medium">
                <tr>
                  <th className="p-2">Time</th>
                  <th className="p-2">Date</th>
                  <th className="p-2">Name</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Action</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((app, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >
                    <td className="p-2">{app.time}</td>
                    <td className="p-2">{app.date}</td>
                    <td className="p-2">{app.name}</td>
                    <td className="p-2">{app.status}</td>
                    <td className="p-2 text-blue-600 cursor-pointer">
                      [{app.action}]
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reminders */}
        <div className="bg-white rounded-lg shadow-md p-4 max-h-[450px] overflow-y-auto">
          <h3 className="text-lg font-semibold mb-4">Reminders</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="bg-gray-200 text-gray-700 font-medium">
                <tr>
                  <th className="p-2">Medicine</th>
                  <th className="p-2">Dosage</th>
                  <th className="p-2">Time</th>
                  <th className="p-2">Date</th>
                </tr>
              </thead>
              <tbody>
                {reminders.map((rem, index) => (
                  <tr
                    key={index}
                    className="border-b last:border-0 hover:bg-gray-50"
                  >
                    <td className="p-2">{rem.medicine}</td>
                    <td className="p-2">{rem.dosage}</td>
                    <td className="p-2">{rem.time}</td>
                    <td className="p-2">{rem.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Quick Buttons */}
      <div className="flex flex-wrap gap-4 mt-8">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
          Medicines
        </button>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
          Appointments
        </button>
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow">
          Labs
        </button>
        <button className="bg-green-600 text-white px-5 py-2 rounded-lg shadow">
          Book an Appointment
        </button>
      </div>

      {/* AI Chatbot */}
      <div className="mt-8">
        <button className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow w-full md:w-auto">
          ASK AI CHATBOT
        </button>
      </div>
    </div>
  );
};

export default PatientDashboardHome;
