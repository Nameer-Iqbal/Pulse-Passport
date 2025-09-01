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
    <div className="dashboard">
      {/* Top Search */}
      <div className="search-bar">
        <select>
          <option>Karachi</option>
        </select>
        <input type="text" placeholder="Search Doctor" />
        <button>🔍</button>
      </div>

      {/* Welcome */}
      <h2>Hi, there Anna!</h2>
      <p>You have {appointments.length} appointments scheduled.</p>

      <div className="main-section" style={{ display: "flex", gap: "2rem" }}>
        {/* Appointments Table */}
        <div className="appointments">
          <h3>Appointments</h3>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Time</th>
                <th>Date</th>
                <th>Name</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((app, index) => (
                <tr key={index}>
                  <td>{app.time}</td>
                  <td>{app.date}</td>
                  <td>{app.name}</td>
                  <td>{app.status}</td>
                  <td>[{app.action}]</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Reminders Table */}
        <div className="reminders">
          <h3>Reminder!</h3>
          <table border="1" cellPadding="8">
            <thead>
              <tr>
                <th>Medicine</th>
                <th>Dosage</th>
                <th>Time</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {reminders.map((rem, index) => (
                <tr key={index}>
                  <td>{rem.medicine}</td>
                  <td>{rem.dosage}</td>
                  <td>{rem.time}</td>
                  <td>{rem.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Buttons */}
      <div className="quick-actions" style={{ marginTop: "2rem" }}>
        <button>Medicines</button>
        <button>Appointments</button>
        <button>Labs</button>
        <button>Book an Appointment</button>
      </div>

      {/* AI Chatbot */}
      <div className="chatbot" style={{ marginTop: "2rem" }}>
        <button>ASK AI CHATBOT</button>
      </div>
    </div>
  );
};

export default PatientDashboardHome;
