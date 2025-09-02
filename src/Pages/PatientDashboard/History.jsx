import React, { useState } from 'react';

const MedicalHistoryScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [allergies, setAllergies] = useState(
    'Known ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu'
  );
  const [medicalRecords, setMedicalRecords] = useState([
    {
      id: 1,
      monthYear: 'MONTH/YEAR',
      diagnosis:
        'DIAGNOSIS\nKnown ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      treatment:
        'TREATMENT\n1. Lorem ipsum dolor sit\n2. enim, consectetur\n3. adipiscing elit. Etiam eu',
    },
    {
      id: 2,
      monthYear: 'MONTH/YEAR',
      diagnosis:
        'DIAGNOSIS\nKnown ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      treatment:
        'TREATMENT\n1. Lorem ipsum dolor sit\n2. enim, consectetur\n3. adipiscing elit. Etiam eu',
    },
    {
      id: 3,
      monthYear: 'MONTH/YEAR',
      diagnosis:
        'DIAGNOSIS\nKnown ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      treatment:
        'TREATMENT\n1. Lorem ipsum dolor sit\n2. enim, consectetur\n3. adipiscing elit. Etiam eu',
    },
    {
      id: 4,
      monthYear: 'MONTH/YEAR',
      diagnosis:
        'DIAGNOSIS\nKnown ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu',
      treatment:
        'TREATMENT\n1. Lorem ipsum dolor sit\n2. enim, consectetur\n3. adipiscing elit. Etiam eu',
    },
  ]);

  const handleSearch = () => {
    console.log('Searching for:', searchTerm);
  };

  const handleViewReport = (recordId) => {
    console.log('Viewing report for record:', recordId);
    alert('Opening report for record ' + recordId);
  };

  const handlePrescription = () => {
    console.log('Navigating to prescriptions screen');
    alert('Navigating to Prescriptions Screen');
  };

  const handleGenerateSummary = () => {
    console.log('Generating medical summary');
    alert('Generating Medical Summary');
  };

  const handleDiagnosticReports = () => {
    console.log('Navigating to diagnostic reports screen');
    alert('Navigating to Diagnostic Reports Screen');
  };

  const handleAiChatBot = () => {
    console.log('Opening AI Chat Bot');
    alert('Opening AI Chat Bot');
  };

  return (
    <div
      style={{
        backgroundColor: '#EAEAEA',
        minHeight: '100vh', // full screen height
        padding: '25px',
        fontFamily: 'Arial, sans-serif',
        borderRadius: '20px',
      }}
    >
      {/* Main Container */}
      <div
        style={{
          backgroundColor: '#567C89',
          borderRadius: '20px',
          padding: '25px',
          maxWidth: '1200px',
          margin: '0 auto',
          minHeight: '90vh', // adjust inside screen
          position: 'relative',
        }}
      >
        {/* Search Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#0E4456',
            borderRadius: '25px',
            padding: '12px 20px',
            marginBottom: '20px',
          }}
        >
          <input
            type="text"
            placeholder="Search Medical History"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              flex: 1,
              backgroundColor: 'transparent',
              border: 'none',
              outline: 'none',
              color: 'white',
              fontSize: '16px',
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              paddingLeft: '10px',
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
              <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </button>
        </div>

        {/* Medical History Heading */}
        <h1
          style={{
            color: 'white',
            fontSize: '28px',
            fontWeight: 'bold',
            marginBottom: '25px',
            textAlign: 'left',
          }}
        >
          Medical History
        </h1>

        {/* Medical Records */}
        <div
          style={{
            backgroundColor: '#C9DCE2',
            borderRadius: '20px',
            padding: '20px',
            marginBottom: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '15px',
            }}
          >
            {medicalRecords.map((record) => (
              <div
                key={record.id}
                style={{
                  display: 'grid',
                  gridTemplateColumns: '150px 1fr 1fr',
                  gap: '20px',
                  padding: '15px 0',
                  borderBottom:
                    record.id !== medicalRecords.length
                      ? '1px solid #999'
                      : 'none',
                }}
              >
                <div
                  style={{
                    fontSize: '14px',
                    fontWeight: 'bold',
                    color: '#333',
                  }}
                >
                  {record.monthYear}
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '10px',
                  }}
                >
                  <div
                    style={{
                      fontSize: '14px',
                      color: '#333',
                      whiteSpace: 'pre-line',
                      lineHeight: '1.4',
                    }}
                  >
                    {record.diagnosis}
                  </div>
                  <button
                    onClick={() => handleViewReport(record.id)}
                    style={{
                      backgroundColor: '#0E4456',
                      color: 'white',
                      border: 'none',
                      borderRadius: '20px',
                      padding: '8px 20px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      alignSelf: 'flex-start',
                    }}
                  >
                    View Reports
                  </button>
                </div>

                <div
                  style={{
                    fontSize: '14px',
                    color: '#333',
                    whiteSpace: 'pre-line',
                    lineHeight: '1.4',
                  }}
                >
                  {record.treatment}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Allergies */}
        <div
          style={{
            backgroundColor: '#C9DCE2',
            borderRadius: '20px',
            padding: '20px',
            marginBottom: '25px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              gap: '15px',
            }}
          >
            <span
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333',
                minWidth: '100px',
              }}
            >
              ALLERGIES:
            </span>
            <textarea
              value={allergies}
              onChange={(e) => setAllergies(e.target.value)}
              style={{
                flex: 1,
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                fontSize: '14px',
                color: '#333',
                resize: 'vertical',
                minHeight: '60px',
                fontFamily: 'Arial, sans-serif',
              }}
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '20px',
            justifyContent: 'center',
            marginBottom: '20px',
          }}
        >
          <button
            onClick={handlePrescription}
            style={{
              backgroundColor: '#0E4456',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              padding: '15px 30px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Prescription
          </button>

          <button
            onClick={handleGenerateSummary}
            style={{
              backgroundColor: '#0E4456',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              padding: '15px 30px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Generate Summary
          </button>

          <button
            onClick={handleDiagnosticReports}
            style={{
              backgroundColor: '#0E4456',
              color: 'white',
              border: 'none',
              borderRadius: '25px',
              padding: '15px 30px',
              fontSize: '16px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Diagnostic Reports
          </button>
        </div>

        {/* AI Chat Bot */}
        <div
          style={{
            position: 'absolute',
            bottom: '25px',
            right: '25px',
          }}
        >
          <button
            onClick={handleAiChatBot}
            style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#C9DCE2',
              border: 'none',
              borderRadius: '50%',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            }}
          >
            <svg width="30" height="30" viewBox="0 0 24 24" fill="#0E4456">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicalHistoryScreen;
