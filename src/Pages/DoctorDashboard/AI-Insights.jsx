import React, { useState, useEffect } from "react";

// ✅ mock API function (abhi backend ki jagah ye use hoga)
const fetchPatientDetails = async (name) => {
  // thoda delay feel karne ke liye
  await new Promise((res) => setTimeout(res, 500));

  // abhi sirf Robert ka demo data
  if (name === "Robert Cullen") {
    return {
      age: 57,
      status: "In Consultation",
      riskPredictions: [
        { condition: "Pneumonia", percentage: 87 },
        { condition: "Hypertension Crisis", percentage: 73 },
        { condition: "Cardiac Arrhythmia", percentage: 49 },
      ],
      suggestedTests: ["CBC", "Chest X-ray", "ECG"],
      vitals: {
        heartRate: "110 bpm",
        bloodPressure: "145/95 mmHg",
      },
    };
  }

  // baaki patients ke liye abhi empty data
  return {
    age: null,
    status: "Data not available",
    riskPredictions: [],
    suggestedTests: [],
    vitals: { heartRate: "-", bloodPressure: "-" },
  };
};

const AIinsights = () => {
  const [selectedPatient, setSelectedPatient] = useState("Robert Cullen");
  const [patientData, setPatientData] = useState(null);
  const [loading, setLoading] = useState(false);

  const patients = [
    { name: "Robert Cullen", risk: "High", riskColor: "bg-red-500" },
    { name: "Ethan Wallace", risk: "Medium", riskColor: "bg-orange-500" },
    { name: "Anna Mitchell", risk: "Low", riskColor: "bg-green-500" },
    { name: "Ali Kamal", risk: "High", riskColor: "bg-red-500" },
    { name: "Jane Hart", risk: "Low", riskColor: "bg-green-500" },
    { name: "Sarah O'Connor", risk: "Medium", riskColor: "bg-orange-500" },
    { name: "Fatima Rizvi", risk: "Low", riskColor: "bg-green-500" },
  ];

  // jab bhi selectedPatient change ho, API se data lao
  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchPatientDetails(selectedPatient);
      setPatientData(data);
      setLoading(false);
    };
    getData();
  }, [selectedPatient]);

  return (
    <div className="w-full min-h-screen bg-gray-100 px-6 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Patient Queue */}
        <div className="bg-[#97B9C5] rounded-lg shadow-md p-4 max-h-[500px] overflow-y-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-800">Patient Queue</h2>
          <div className="grid grid-cols-2 text-sm font-semibold text-gray-700 border-b border-gray-400 pb-2 mb-3">
            <span>Patient Name</span>
            <span>Risk Level</span>
          </div>
          {patients.map((patient, index) => (
            <div
              key={index}
              onClick={() => setSelectedPatient(patient.name)}
              className={`grid grid-cols-2 gap-4 p-2 rounded-md cursor-pointer mb-1 transition-all ${
                selectedPatient === patient.name
                  ? "bg-[#0E4456] text-white font-medium"
                  : "hover:bg-gray-200 text-gray-900"
              }`}
            >
              <span>{patient.name}</span>
              <span
                className={`px-2 py-0.5 text-xs rounded-full text-white ${patient.riskColor}`}
              >
                {patient.risk}
              </span>
            </div>
          ))}
        </div>

        {/* AI Insight */}
        <div className="bg-white rounded-lg shadow-md p-4 max-h-[500px] overflow-y-auto">
          <h2 className="text-lg font-bold mb-4 text-gray-800">AI Insight</h2>

          <h3 className="text-xl font-bold text-gray-900">{selectedPatient}</h3>

          {loading ? (
            <p className="text-gray-600 mt-4">Loading data...</p>
          ) : patientData ? (
            <>
              <p className="text-sm text-gray-600 mt-1">
                Age: {patientData.age || "-"}
              </p>
              <p className="text-sm text-gray-600 mb-4">
                Status: {patientData.status}
              </p>

              <h4 className="text-md font-semibold text-gray-800 mb-2">
                Risk Predictions
              </h4>
              {patientData.riskPredictions.length > 0 ? (
                patientData.riskPredictions.map((prediction, i) => (
                  <div key={i} className="flex justify-between text-sm mb-1">
                    <span className="text-gray-700">{prediction.condition}</span>
                    <span className="font-bold text-gray-900">
                      {prediction.percentage}%
                    </span>
                  </div>
                ))
              ) : (
                <p className="text-sm text-gray-500">No predictions available</p>
              )}

              <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">
                Suggested Tests
              </h4>
              {patientData.suggestedTests.length > 0 ? (
                <ul className="list-disc ml-6 text-sm text-gray-700">
                  {patientData.suggestedTests.map((test, i) => (
                    <li key={i}>{test}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">No tests suggested</p>
              )}

              <div className="border-t mt-4 pt-3">
                <h4 className="text-md font-semibold text-gray-800 mb-2">
                  Summary:
                </h4>
                <p className="text-sm text-gray-700">
                  Heart Rate {patientData.vitals.heartRate}
                </p>
                <p className="text-sm text-gray-700">
                  Pressure {patientData.vitals.bloodPressure}
                </p>
              </div>
            </>
          ) : (
            <p className="text-sm text-gray-500">Select a patient to view details</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIinsights;
