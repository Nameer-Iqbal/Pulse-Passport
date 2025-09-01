import React, { useState } from 'react';
import { Search, User, FileText, BarChart3, Pill } from 'lucide-react';

// Color palette as CSS variables
const colors = {
  primary: '#628B98',
  white: '#FFFFFF',
  dark: '#0E4456',
  lightBlue: '#C0E5F2',
  black: '#000000',
  paleBlue: '#DFF2F8'
};

// SearchBar Component (Row 1)
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="w-full mb-6">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Medical History"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-300"
          style={{ backgroundColor: colors.dark }}
        />
        <Search 
          className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white cursor-pointer hover:text-gray-300" 
          size={20}
        />
      </div>
    </div>
  );
};

// Medical History Component (Row 2)
const MedicalHistory = () => {
  const [medicalRecords, setMedicalRecords] = useState([
    {
      id: 1,
      date: '23/8/2024',
      time: '10:00 am',
      weight: '',
      pulse: '',
      bp: '',
      temperature: '',
      symptoms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      diagnosis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      prescriptions: [
        'Lorem ipsum dolor sit',
        'amet, consectetur',
        'adipiscing elit. Etiam eu'
      ]
    },
    {
      id: 2,
      date: '',
      time: '',
      weight: '',
      pulse: '',
      bp: '',
      temperature: '',
      symptoms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      diagnosis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      prescriptions: [
        'Lorem ipsum dolor sit',
        'amet, consectetur',
        'adipiscing elit. Etiam eu'
      ]
    },
    {
      id: 3,
      date: '',
      time: '',
      weight: '',
      pulse: '',
      bp: '',
      temperature: '',
      symptoms: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      diagnosis: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      prescriptions: [
        'Lorem ipsum dolor sit',
        'amet, consectetur',
        'adipiscing elit. Etiam eu'
      ]
    },
    {
      id: 4,
      date: '',
      time: '',
      weight: '',
      pulse: '',
      bp: '',
      temperature: '',
      symptoms: '',
      diagnosis: '',
      prescriptions: []
    }
  ]);

  return (
    <div className="mb-6">
      <h2 className="text-2xl font-bold text-white mb-4">Medical History</h2>
      <div className="overflow-x-auto rounded-lg" style={{ backgroundColor: colors.paleBlue }}>
        <table className="w-full">
          <tbody>
            {medicalRecords.map((record, index) => (
              <tr key={record.id} className={index % 2 === 0 ? 'bg-opacity-50' : ''} 
                  style={{ backgroundColor: index % 2 === 0 ? colors.lightBlue : 'transparent' }}>
                
                {/* Date/Time Column */}
                <td className="p-4 border-r" style={{ borderColor: colors.primary, color: colors.black }}>
                  <div className="font-medium text-sm">
                    <div>DATE /</div>
                    <div>TIME</div>
                    <div className="mt-2">{record.date}</div>
                    <div>{record.time}</div>
                  </div>
                </td>

                {/* Vitals Column */}
                <td className="p-4 border-r" style={{ borderColor: colors.primary, color: colors.black }}>
                  <div className="text-sm space-y-1">
                    <div>
                      <span className="font-medium">WEIGHT:</span>
                      <span className="ml-2">{record.weight}</span>
                    </div>
                    <div>
                      <span className="font-medium">PULSE:</span>
                      <span className="ml-2">{record.pulse}</span>
                    </div>
                    <div>
                      <span className="font-medium">BP:</span>
                      <span className="ml-2">{record.bp}</span>
                    </div>
                    <div>
                      <span className="font-medium">TEMPERATURE:</span>
                      <span className="ml-2">{record.temperature}</span>
                    </div>
                  </div>
                </td>

                {/* Symptoms Column */}
                <td className="p-4 border-r" style={{ borderColor: colors.primary, color: colors.black }}>
                  <div className="text-sm">
                    <div className="font-medium mb-2">SYMPTOMS:</div>
                    <div>{record.symptoms}</div>
                    {record.symptoms && (
                      <button 
                        className="mt-2 px-3 py-1 rounded text-white text-xs hover:opacity-80"
                        style={{ backgroundColor: colors.dark }}
                      >
                        View Reports
                      </button>
                    )}
                  </div>
                </td>

                {/* Diagnosis Column */}
                <td className="p-4 border-r" style={{ borderColor: colors.primary, color: colors.black }}>
                  <div className="text-sm">
                    <div className="font-medium mb-2">DIAGNOSIS:</div>
                    <div>{record.diagnosis}</div>
                    {record.diagnosis && (
                      <button 
                        className="mt-2 px-3 py-1 rounded text-white text-xs hover:opacity-80"
                        style={{ backgroundColor: colors.dark }}
                      >
                        View Reports
                      </button>
                    )}
                  </div>
                </td>

                {/* Prescriptions Column */}
                <td className="p-4" style={{ color: colors.black }}>
                  <div className="text-sm">
                    <div className="font-medium mb-2">PRESCRIPTIONS:</div>
                    <ol className="list-decimal list-inside space-y-1">
                      {record.prescriptions.map((prescription, idx) => (
                        <li key={idx}>{prescription}</li>
                      ))}
                    </ol>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

// Action Buttons Component (Row 3)
const ActionButtons = () => {
  const buttons = [
    { label: 'Prescriptions', icon: Pill, color: colors.dark },
    { label: 'Generate Summary', icon: FileText, color: colors.dark },
    { label: 'Diagnostic Reports', icon: BarChart3, color: colors.dark }
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center mb-6">
      {buttons.map((button, index) => (
        <button
          key={index}
          className="flex items-center gap-2 px-6 py-3 rounded-lg text-white font-medium hover:opacity-80 transition-opacity"
          style={{ backgroundColor: button.color }}
        >
          <button.icon size={18} />
          {button.label}
        </button>
      ))}
    </div>
  );
};

// Footer Component (Row 4)
const Footer = () => {
  return (
    <div className="flex justify-end">
      <button 
        className="p-3 rounded-full text-gray-600 hover:bg-gray-100 transition-colors"
        style={{ backgroundColor: colors.white }}
      >
        <User size={24} />
      </button>
    </div>
  );
};

// Main App Component
const MedicalHistoryApp = () => {
  return (
    <div 
      className="min-h-screen p-6"
      style={{ backgroundColor: colors.primary }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Row 1: Search Bar */}
        <SearchBar />
        
        {/* Row 2: Medical History */}
        <MedicalHistory />
        
        {/* Row 3: Action Buttons */}
        <ActionButtons />
        
        {/* Row 4: Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default MedicalHistoryApp;