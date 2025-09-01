import React, { useState } from 'react';
import { Search, Plus } from 'lucide-react';

// Search Bar Component
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="flex-1 max-w-2xl">
      <div className="relative">
        <input
          type="text"
          placeholder="Search Medical History"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-6 py-4 rounded-full bg-[#0E4456] text-[#C0E5F2] placeholder-[#C0E5F2] focus:outline-none focus:ring-2 focus:ring-[#C0E5F2] text-base"
        />
        <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-[#C0E5F2] w-6 h-6" />
      </div>
    </div>
  );
};

// Add Button Component
const AddButton = ({ onAdd }) => {
  return (
    <button 
      onClick={onAdd}
      className="px-10 py-4 bg-[#0E4456] text-[#C0E5F2] rounded-full font-medium hover:bg-[#1a5a6b] transition-colors text-base"
    >
      ADD
    </button>
  );
};

// File Upload Component
const FileUploadButton = ({ onFileSelect, hasFile }) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div className="relative">
      <input
        type="file"
        accept="image/*,.pdf"
        onChange={handleFileChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
      />
      <button className={`px-3 py-2 rounded-full border-2 border-[#0E4456] text-xs font-medium hover:bg-gray-50 transition-colors ${
        hasFile ? 'bg-green-100 text-green-700' : 'bg-white text-[#0E4456]'
      }`}>
        {hasFile ? '✓ File Selected' : 'Upload Image or PDF'}
      </button>
    </div>
  );
};

// Editable Cell Component
const EditableCell = ({ value, onChange, placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      className="w-full text-center bg-transparent text-[#0E4456] font-semibold text-base border-none outline-none focus:bg-white focus:rounded px-2 py-1"
    />
  );
};

// Prescription Table Component
const PrescriptionTable = ({ prescriptions, searchTerm, onUpdatePrescription, onDeletePrescription }) => {
  const headers = [
    'NAME',
    'TIMES PER DAY',
    'DOSAGE',
    'QUANTITY',
    'DURATION',
    'STRENGTH',
    'UPLOAD',
    'VERIFICATION'
  ];

  const filteredPrescriptions = prescriptions.filter(prescription =>
    prescription.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    prescription.dosage.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleFileUpload = (index, file) => {
    const updatedPrescription = { 
      ...prescriptions[index], 
      uploadedFile: file,
      status: 'Pending'
    };
    onUpdatePrescription(index, updatedPrescription);
    
    // Simulate verification process
    setTimeout(() => {
      const finalPrescription = { 
        ...updatedPrescription, 
        status: Math.random() > 0.3 ? 'Approved' : 'Rejected'
      };
      onUpdatePrescription(index, finalPrescription);
    }, 2000);
  };

  return (
    <div className="bg-white rounded-3xl mx-6 mb-8 shadow-lg border-4 border-white">
      {/* Header Pills */}
      <div className="bg-[#97B9C5] rounded-t-3xl p-6 pb-4">
        <div className="grid grid-cols-8 gap-4">
          {headers.map((header, index) => (
            <div key={index} className="flex justify-center relative">
              <div className="bg-[#0E4456] text-[#C0E5F2] px-4 py-3 rounded-full text-xs font-semibold whitespace-nowrap">
                {header}
              </div>
              {index < headers.length - 1 && (
                <div className="absolute right-0 top-1/2 transform translate-x-2 -translate-y-1/2 w-px h-6 bg-[#0E4456]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
      
      {/* Table Content */}
      <div className="bg-[#97B9C5] rounded-b-3xl px-6 pb-6">
        <div className="space-y-0">
          {filteredPrescriptions.map((prescription, index) => (
            <div key={prescription.id} className={`grid grid-cols-8 gap-4 py-4 ${index < filteredPrescriptions.length - 1 ? 'border-b border-[#87A9B5]' : ''}`}>
              <div className="flex justify-center items-center relative border-r border-[#87A9B5]">
                {prescription.isEditing ? (
                  <EditableCell
                    value={prescription.name}
                    onChange={(value) => onUpdatePrescription(index, { ...prescription, name: value })}
                    placeholder="Medicine name"
                  />
                ) : (
                  <span className="text-[#0E4456] font-semibold text-base">{prescription.name}</span>
                )}
              </div>
              
              <div className="flex justify-center items-center relative border-r border-[#87A9B5]">
                {prescription.isEditing ? (
                  <EditableCell
                    value={prescription.timesPerDay}
                    onChange={(value) => onUpdatePrescription(index, { ...prescription, timesPerDay: value })}
                    placeholder="Times"
                    type="number"
                  />
                ) : (
                  <span className="text-[#0E4456] font-semibold text-base">{prescription.timesPerDay}</span>
                )}
              </div>
              
              <div className="flex justify-center items-center relative border-r border-[#87A9B5]">
                {prescription.isEditing ? (
                  <EditableCell
                    value={prescription.dosage}
                    onChange={(value) => onUpdatePrescription(index, { ...prescription, dosage: value })}
                    placeholder="Dosage"
                  />
                ) : (
                  <span className="text-[#0E4456] font-semibold text-base">{prescription.dosage}</span>
                )}
              </div>
              
              <div className="flex justify-center items-center relative border-r border-[#87A9B5]">
                {prescription.isEditing ? (
                  <EditableCell
                    value={prescription.quantity}
                    onChange={(value) => onUpdatePrescription(index, { ...prescription, quantity: value })}
                    placeholder="Quantity"
                  />
                ) : (
                  <span className="text-[#0E4456] font-semibold text-base">{prescription.quantity}</span>
                )}
              </div>
              
              <div className="flex justify-center items-center relative border-r border-[#87A9B5]">
                {prescription.isEditing ? (
                  <EditableCell
                    value={prescription.duration}
                    onChange={(value) => onUpdatePrescription(index, { ...prescription, duration: value })}
                    placeholder="Duration"
                  />
                ) : (
                  <span className="text-[#0E4456] font-semibold text-base">{prescription.duration}</span>
                )}
              </div>
              
              <div className="flex justify-center items-center relative border-r border-[#87A9B5]">
                {prescription.isEditing ? (
                  <EditableCell
                    value={prescription.strength}
                    onChange={(value) => onUpdatePrescription(index, { ...prescription, strength: value })}
                    placeholder="Strength"
                  />
                ) : (
                  <span className="text-[#0E4456] font-semibold text-base">{prescription.strength}</span>
                )}
              </div>
              
              <div className="flex justify-center items-center relative border-r border-[#87A9B5]">
                <FileUploadButton
                  onFileSelect={(file) => handleFileUpload(index, file)}
                  hasFile={!!prescription.uploadedFile}
                />
              </div>
              
              <div className="flex justify-center items-center">
                <span className={`font-semibold text-base ${
                  prescription.status === 'Approved' 
                    ? 'text-green-600'
                    : prescription.status === 'Rejected'
                    ? 'text-red-600'
                    : 'text-yellow-600'
                }`}>
                  {prescription.status}
                </span>
              </div>
            </div>
          ))}
          
          {/* Empty rows for visual consistency */}
          {[...Array(Math.max(0, 6 - filteredPrescriptions.length))].map((_, index) => (
            <div key={`empty-${index}`} className="grid grid-cols-8 gap-4 py-4 border-b border-[#87A9B5]">
              {[...Array(7)].map((_, cellIndex) => (
                <div key={cellIndex} className="h-12 border-r border-[#87A9B5]"></div>
              ))}
              <div className="h-12"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Floating Button Component
const FloatingButton = ({ onAdd }) => {
  return (
    <button 
      onClick={onAdd}
      className="fixed bottom-12 right-12 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow z-10 hover:scale-110"
    >
      <Plus className="w-8 h-8 text-[#0E4456]" />
    </button>
  );
};

// Main Prescriptions Page Component
const PrescriptionsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [prescriptions, setPrescriptions] = useState([
    {
      id: 1,
      name: 'ASCARD',
      timesPerDay: 2,
      dosage: '75 mg',
      quantity: '1 Daily',
      duration: 'Week',
      strength: '100mg',
      status: 'Approved',
      uploadedFile: null,
      isEditing: false
    },
    {
      id: 2,
      name: 'ASCARD',
      timesPerDay: 3,
      dosage: '75 mg',
      quantity: '1 Daily',
      duration: '1-Day',
      strength: '250mg',
      status: 'Approved',
      uploadedFile: null,
      isEditing: false
    },
    {
      id: 3,
      name: 'ASCARD',
      timesPerDay: 2,
      dosage: '75 mg',
      quantity: '1 Daily',
      duration: '2-Days',
      strength: '100mg',
      status: 'Approved',
      uploadedFile: null,
      isEditing: false
    },
    {
      id: 4,
      name: 'ASCARD',
      timesPerDay: 2,
      dosage: '75 mg',
      quantity: '1 Daily',
      duration: 'Week',
      strength: '550mg',
      status: 'Rejected',
      uploadedFile: null,
      isEditing: false
    }
  ]);

  const addNewPrescription = () => {
    const newPrescription = {
      id: Date.now(),
      name: '',
      timesPerDay: '',
      dosage: '',
      quantity: '',
      duration: '',
      strength: '',
      status: 'Pending',
      uploadedFile: null,
      isEditing: true
    };
    setPrescriptions([...prescriptions, newPrescription]);
  };

  const updatePrescription = (index, updatedPrescription) => {
    const newPrescriptions = [...prescriptions];
    newPrescriptions[index] = updatedPrescription;
    setPrescriptions(newPrescriptions);
  };

  const deletePrescription = (index) => {
    const newPrescriptions = prescriptions.filter((_, i) => i !== index);
    setPrescriptions(newPrescriptions);
  };

  return (
    <div className="min-h-screen bg-[#97B9C5] py-8">
      {/* Search and Add Section */}
      <div className="px-8 mb-8">
        <div className="flex items-center justify-between space-x-8 max-w-7xl mx-auto">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <AddButton onAdd={addNewPrescription} />
        </div>
      </div>
      
      {/* Table Section */}
      <div className="max-w-7xl mx-auto">
        <PrescriptionTable 
          prescriptions={prescriptions}
          searchTerm={searchTerm}
          onUpdatePrescription={updatePrescription}
          onDeletePrescription={deletePrescription}
        />
      </div>
      
      {/* Floating Button */}
      <FloatingButton onAdd={addNewPrescription} />
    </div>
  );
};

export default PrescriptionsPage;