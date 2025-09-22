import React from 'react';
import { useDoctor } from "../../components/DoctorContext";


const MedicalHome = () => {
  const scheduledConsultations = [
    { time: '09:00', patient: 'Anna', name: 'Mitchell', status: 'Waiting', risk: 'Low' },
    { time: '09:00', patient: 'Anna', name: 'Mitchell', status: 'Waiting', risk: 'Low' },
    { time: '09:00', patient: 'Anna', name: 'Mitchell', status: 'Waiting', risk: 'Low' },
    { time: '09:00', patient: 'Anna', name: 'Mitchell', status: 'Waiting', risk: 'Low' }
  ];

  const criticalPatients = [
    { name: 'Robert', condition: 'Hypertension + Age 57', prediction: 'High Risk Alert' },
    { name: 'Robert', condition: 'Hypertension + Age 57', prediction: 'High Risk Alert' },
    { name: 'Robert', condition: 'Hypertension + Age 57', prediction: 'High Risk Alert' },
    { name: 'Robert', condition: 'Hypertension + Age 57', prediction: 'High Risk Alert' }
  ];

  const vitals = [
    { label: 'Heart Rate:', value: '110 bpm' },
    { label: 'SpO2:', value: '95%' },
    { label: 'Blood Pressure:', value: '145/95' },
    { label: 'Temp:', value: '98.6°F' }
  ];

  const { doctor } = useDoctor();

  return (
    <div className="w-full min-h-screen bg-[#6F8F99]">
      {/* Header */}
      <div className="bg-[#6F8F99] text-white px-4 py-4">
        <h1 className="text-xl font-medium">Welcome back, {doctor.name}</h1>
        <hr className="border-white my-2" />
        <p className="text-white text-sm">You have 4 consultations scheduled today.</p>
      </div>

      {/* Main Content - Two Side-by-Side Panels */}
      <div className="px-4 py-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
          {/* Left Panel - Scheduled Consultations */}
          <div className="bg-[#D9D9D9] rounded-lg p-3 h-64">
            <div className="space-y-1">
              <div className="grid grid-cols-6 gap-1 text-[10px] font-medium text-[#0E4456] border-b border-[#A3A3A3] pb-1">
                <span>Time</span>
                <span>Patient</span>
                <span>Name</span>
                <span>Status</span>
                <span>Risk</span>
                <span>Action</span>
              </div>
              {scheduledConsultations.map((consultation, index) => (
                <div key={index} className="grid grid-cols-6 gap-1 text-[10px] text-[#0E4456] py-1 border-b border-[#B1BCBF]">
                  <span>{consultation.time}</span>
                  <span>{consultation.patient}</span>
                  <span>{consultation.name}</span>
                  <span>{consultation.status}</span>
                  <span>{consultation.risk}</span>
                  <span className="text-blue-600">[Details]</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Panel - Critical Patients */}
          <div className="bg-[#D9D9D9] rounded-lg p-3 h-64">
            <h2 className="text-[#0E4456] font-medium mb-2 text-sm">Critical Patients (AI Flagged)</h2>
            <div className="space-y-1">
              <div className="grid grid-cols-3 gap-1 text-[10px] font-medium text-[#0E4456] border-b border-[#A3A3A3] pb-1">
                <span>Name</span>
                <span>Risk Condition</span>
                <span>Prediction</span>
              </div>
              {criticalPatients.map((patient, index) => (
                <div key={index} className="grid grid-cols-3 gap-1 text-[10px] text-[#0E4456] py-1 border-b border-[#B1BCBF]">
                  <span className="font-medium">{patient.name}</span>
                  <span>{patient.condition}</span>
                  <span className="text-red-700 font-bold">{patient.prediction}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Current Consult */}
      <div className="px-4 py-2">
        <div className="bg-[#D9D9D9] rounded-lg p-3">
          <h2 className="text-[#0E4456] font-medium mb-3 text-sm">Current Consult: Robert Cullen</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {vitals.map((vital, index) => (
              <div key={index} className="bg-[#988F8F] text-white rounded-full px-4 py-3 text-center">
                <div className="text-[10px] font-medium">{vital.label}</div>
                <div className="text-sm font-bold mt-1">{vital.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MedicalHome;
