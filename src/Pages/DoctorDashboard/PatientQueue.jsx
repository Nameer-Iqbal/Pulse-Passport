import React, { useState } from 'react';

const PatientQueueDashboard = () => {
  const [patients, setPatients] = useState([
    { id: 1, name: 'Anna Mitchell', status: 'waiting', riskLevel: 'low' },
    { id: 2, name: 'Robert Cullen', status: 'inconsultation', riskLevel: 'high' },
    { id: 3, name: 'Ethan Wallace', status: 'done', riskLevel: 'medium' },
    { id: 4, name: 'Jane Hart', status: 'waiting', riskLevel: 'low' },
    { id: 5, name: 'Ali Kamal', status: 'inconsultation', riskLevel: 'high' },
    { id: 6, name: 'Sarah O\'Connor', status: 'done', riskLevel: 'medium' },
    { id: 7, name: 'Fatima Rizvi', status: 'waiting', riskLevel: 'low' }
  ]);

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'high': return '#FF0000';
      case 'medium': return '#FFA500';
      case 'low': return '#FFFF00';
      default: return '#FFFF00';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'waiting': return '#4A90E2';
      case 'inconsultation': return '#FF0000';
      case 'done': return '#00FF00';
      default: return '#4A90E2';
    }
  };

  const movePatient = (patientId, newStatus) => {
    setPatients(prevPatients =>
      prevPatients.map(patient =>
        patient.id === patientId ? { ...patient, status: newStatus } : patient
      )
    );
  };

  const removePatient = (patientId) => {
    setPatients(prevPatients => prevPatients.filter(patient => patient.id !== patientId));
  };

  const getPatientsByStatus = (status) => {
    return patients.filter(patient => patient.status === status);
  };

  const PatientCard = ({ patient }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 15px',
        marginBottom: '8px',
        backgroundColor: 'transparent',
        borderBottom: '1px solid #ccc',
        cursor: 'pointer'
      }}
      onClick={() => {
        if (patient.status === 'waiting') {
          movePatient(patient.id, 'inconsultation');
        } else if (patient.status === 'inconsultation') {
          movePatient(patient.id, 'done');
        }
      }}
    >
      <span style={{
        fontSize: '14px',
        color: '#333',
        textAlign: 'left'
      }}>
        {patient.name}
      </span>
      <div
        style={{
          width: '12px',
          height: '12px',
          borderRadius: '50%',
          backgroundColor: getRiskColor(patient.riskLevel)
        }}
      ></div>
    </div>
  );

  return (
    <div style={{
      backgroundColor: '#EAEAEA',
      minHeight: '100vh',
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      borderRadius: '20px'
    }}>
      {/* Main Container */}
      <div style={{
        backgroundColor: '#567C89',
        borderRadius: '20px',
        padding: '25px',
        maxWidth: '1500px',
        margin: '0 auto',
        minHeight: '750px'
      }}>
        
        {/* Header */}
        <h1 style={{
          color: 'white',
          fontSize: '24px',
          fontWeight: 'bold',
          margin: '0 0 25px 0',
          textAlign: 'left'
        }}>
          Patient Queue
        </h1>

        {/* Inner Container */}
        <div style={{
          backgroundColor: '#EAEAEA',
          borderRadius: '20px',
          padding: '20px',
          minHeight: '600px'
        }}>
          
          {/* Column Headers */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '20px',
            marginBottom: '15px'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#4A90E2',
                borderRadius: '2px'
              }}></div>
              <span style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333'
              }}>Waiting</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#FF0000',
                borderRadius: '2px'
              }}></div>
              <span style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333'
              }}>In Consultation</span>
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <div style={{
                width: '12px',
                height: '12px',
                backgroundColor: '#00FF00',
                borderRadius: '2px'
              }}></div>
              <span style={{
                fontSize: '16px',
                fontWeight: 'bold',
                color: '#333'
              }}>Done</span>
            </div>
          </div>

          {/* Separator Line */}
          <div style={{
            width: '100%',
            height: '2px',
            backgroundColor: '#999',
            marginBottom: '20px'
          }}></div>

          {/* Patient Columns */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '20px',
            minHeight: '400px'
          }}>
            
            {/* Waiting Column */}
            <div style={{
              backgroundColor: 'transparent'
            }}>
              {getPatientsByStatus('waiting').map(patient => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>

            {/* In Consultation Column */}
            <div style={{
              backgroundColor: 'transparent'
            }}>
              {getPatientsByStatus('inconsultation').map(patient => (
                <PatientCard key={patient.id} patient={patient} />
              ))}
            </div>

            {/* Done Column */}
            <div style={{
              backgroundColor: 'transparent'
            }}>
              {getPatientsByStatus('done').map(patient => (
                <div
                  key={patient.id}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '10px 15px',
                    marginBottom: '8px',
                    backgroundColor: 'transparent',
                    borderBottom: '1px solid #ccc'
                  }}
                >
                  <span style={{
                    fontSize: '14px',
                    color: '#333',
                    textAlign: 'left'
                  }}>
                    {patient.name}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div
                      style={{
                        width: '12px',
                        height: '12px',
                        borderRadius: '50%',
                        backgroundColor: getRiskColor(patient.riskLevel)
                      }}
                    ></div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removePatient(patient.id);
                      }}
                      style={{
                        backgroundColor: '#FF4444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '4px 8px',
                        fontSize: '10px',
                        cursor: 'pointer'
                      }}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div style={{
        maxWidth: '1000px',
        margin: '20px auto 0',
        padding: '15px',
        backgroundColor: '#FFFFFF',
        borderRadius: '15px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)'
      }}>
        <h3 style={{
          margin: '0 0 10px 0',
          fontSize: '16px',
          fontWeight: 'bold',
          color: '#333'
        }}>Risk Level Legend:</h3>
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#FF0000'
            }}></div>
            <span style={{ fontSize: '14px' }}>High Risk</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#FFA500'
            }}></div>
            <span style={{ fontSize: '14px' }}>Medium Risk</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <div style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              backgroundColor: '#FFFF00'
            }}></div>
            <span style={{ fontSize: '14px' }}>Low Risk</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientQueueDashboard;