// DoctorContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const DoctorContext = createContext(null);

export const DoctorProvider = ({ children }) => {
  const [doctor, setDoctor] = useState(() => {
    const saved = localStorage.getItem("doctor");
    return saved
      ? JSON.parse(saved)
      : {
          name: "Dr. John Doe",
          gender: "Male",
          specialization: "General Physician",
          experience: "5 Years",
          city: "Karachi",
          qualification: "MD, MBBS"
          
        };
  });

  useEffect(() => {
    if (doctor) {
      localStorage.setItem("doctor", JSON.stringify(doctor));
    } else {
      localStorage.removeItem("doctor");
    }
  }, [doctor]);

  return (
    <DoctorContext.Provider value={{ doctor, setDoctor }}>
      {children}
    </DoctorContext.Provider>
  );
};

export const useDoctor = () => {
  const context = useContext(DoctorContext);
  if (!context) {
    throw new Error("useDoctor must be used within a DoctorProvider");
  }
  return context;
};

export default DoctorProvider;
