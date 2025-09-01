import React from "react";
import { Activity, Heart, Droplet, Thermometer } from "lucide-react";

const colors = {
  primary: "#628B98",
  white: "#FFFFFF",
  dark: "#0E4456",
  lightBlue: "#C0E5F2",
  black: "#000000",
  paleBlue: "#DFF2F8"
};

const HealthSummary = () => {
  const summaryData = [
    { label: "Blood Pressure", value: "120/80 mmHg", icon: Activity },
    { label: "Heart Rate", value: "72 bpm", icon: Heart },
    { label: "Blood Sugar", value: "90 mg/dL", icon: Droplet },
    { label: "Temperature", value: "98.6°F", icon: Thermometer }
  ];

  return (
    <div
      className="min-h-screen p-6"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-7xl mx-auto text-white">
        <h1 className="text-3xl font-bold mb-6">Health Summary</h1>
        <p className="mb-8">
          Overview of your latest health data, including vital signs and
          important metrics.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {summaryData.map((item, index) => (
            <div
              key={index}
              className="rounded-lg shadow-lg p-6 flex flex-col items-center text-center"
              style={{ backgroundColor: colors.paleBlue, color: colors.black }}
            >
              <item.icon size={40} className="mb-4" />
              <h2 className="font-semibold text-lg">{item.label}</h2>
              <p className="text-xl font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HealthSummary;