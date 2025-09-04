import React, { useState } from 'react';

const DoctorSettingsScreen = () => {
  const [profileData, setProfileData] = useState({
    name: 'Dr. Sarah Johnson',
    specialization: 'Cardiology',
    hospital: 'City Medical Center',
    experience: '8 years',
    qualification: 'MD, MBBS',
    certificate: 'Board Certified Cardiologist'
  });
  
  const [profilePicture, setProfilePicture] = useState(null);
  const [availableHours, setAvailableHours] = useState('');
  const [vacationMode, setVacationMode] = useState(false);
  const [autoApproveAppointments, setAutoApproveAppointments] = useState(true);
  const [notificationEnabled, setNotificationEnabled] = useState(true);

  const handleProfileChange = (field, value) => {
    setProfileData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicture(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleConfirmChanges = () => {
    console.log('Profile changes confirmed:', profileData);
    alert('Changes saved successfully!');
  };

  const handleSetAvailableHours = () => {
    console.log('Setting available hours:', availableHours);
    alert('Available hours updated!');
  };

  const handleChangePassword = () => {
    console.log('Opening change password dialog');
    alert('Change password functionality would open here');
  };

  return (
    <div style={{
      backgroundColor: '#EAEAEA',
      minHeight: '100vh',
      padding: '30px',
      fontFamily: 'Arial, sans-serif',
      overflowY: 'auto'
    }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '25px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* Profile Settings Container */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            height: '700px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '20px'
            }}>
              <div>
                <h2 style={{
                  margin: '0 0 5px 0',
                  fontSize: '18px',
                  fontWeight: 'bold',
                  textAlign: 'left'
                }}>Profile Settings</h2>
                <p style={{
                  margin: '0',
                  fontSize: '14px',
                  color: '#666',
                  textAlign: 'left'
                }}>Edit</p>
              </div>
              
              {/* Profile Picture */}
              <div style={{ position: 'relative' }}>
                <div style={{
                  width: '90px',
                  height: '90px',
                  borderRadius: '80%',
                  backgroundColor: '#988F8F',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  cursor: 'pointer'
                }} onClick={() => document.getElementById('profilePictureInput').click()}>
                  {profilePicture ? (
                    <img 
                      src={profilePicture} 
                      alt="Profile" 
                      style={{
                        width: '100%',
                        height: '150%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <svg 
                      width="90" 
                      height="90" 
                      viewBox="0 0 24 24" 
                      fill="white"
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 
                        1.79-4 4 1.79 4 4 4zm0 2c-2.67 
                        0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                    </svg>
                  )}
                </div>
                <input
                  id="profilePictureInput"
                  type="file"
                  accept="image/*"
                  onChange={handleProfilePictureUpload}
                  style={{ display: 'none' }}
                />
              </div>
            </div>

            {/* Profile Information */}
            <div style={{ marginBottom: '25px' }}>
              {['name','specialization','hospital','experience','qualification','certificate']
                .map((field, index) => (
                <div key={index} style={{ marginBottom: '15px' }}>
                  <label style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    marginBottom: '5px',
                    textAlign: 'left'
                  }}>{field.toUpperCase()} :</label>
                  <input
                    type="text"
                    value={profileData[field]}
                    onChange={(e) => handleProfileChange(field, e.target.value)}
                    style={{
                      width: '100%',
                      padding: '8px',
                      border: '1px solid #ddd',
                      borderRadius: '5px',
                      fontSize: '14px'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Confirm Changes Button */}
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button
                onClick={handleConfirmChanges}
                style={{
                  backgroundColor: '#0E4456',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '12px 25px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  fontWeight: 'bold'
                }}
              >
                Confirm Changes
              </button>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
          
          {/* Notification Container */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            height: '100px'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <h2 style={{
                margin: '0',
                fontSize: '18px',
                fontWeight: 'bold',
                textAlign: 'left'
              }}>Notification</h2>
              
              <label style={{
                position: 'relative',
                display: 'inline-block',
                width: '50px',
                height: '25px'
              }}>
                <input
                  type="checkbox"
                  checked={notificationEnabled}
                  onChange={(e) => setNotificationEnabled(e.target.checked)}
                  style={{ opacity: 0, width: 0, height: 0 }}
                />
                <div style={{
                  position: 'absolute',
                  cursor: 'pointer',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: notificationEnabled ? '#0E4456' : '#ccc',
                  borderRadius: '25px',
                  transition: 'background-color 0.3s'
                }}>
                  <div style={{
                    position: 'absolute',
                    height: '19px',
                    width: '19px',
                    left: notificationEnabled ? '28px' : '3px',
                    bottom: '3px',
                    backgroundColor: 'white',
                    borderRadius: '50%',
                    transition: 'transform 0.3s'
                  }}></div>
                </div>
              </label>
            </div>
          </div>

          {/* Security & Privacy Container */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            height: '250px'
          }}>
            <h2 style={{
              margin: '0 0 15px 0',
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'left'
            }}>Security & Privacy</h2>
            
            <button
              onClick={handleChangePassword}
              style={{
                backgroundColor: 'transparent',
                color: '#0E4456',
                border: 'none',
                fontSize: '14px',
                cursor: 'pointer',
                textAlign: 'left',
                padding: '0',
                textDecoration: 'underline'
              }}
            >
              Change Password
            </button>
          </div>

          {/* Availability & Schedule Container (separate, under Security & Privacy) */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            height: '300px'
          }}>
            <h2 style={{
              margin: '0 0 20px 0',
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'left'
            }}>Availability & Schedule</h2>
            
            <div style={{ marginBottom: '20px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                marginBottom: '10px',
                textAlign: 'left'
              }}>Set Available Hours</label>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '15px' }}>
                <input
                  type="time"
                  value={availableHours}
                  onChange={(e) => setAvailableHours(e.target.value)}
                  style={{
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '14px'
                  }}
                />
                <button
                  onClick={handleSetAvailableHours}
                  style={{
                    backgroundColor: '#0E4456',
                    color: 'white',
                    border: 'none',
                    borderRadius: '15px',
                    padding: '8px 15px',
                    fontSize: '12px',
                    cursor: 'pointer'
                  }}
                >
                  Set
                </button>
              </div>
            </div>

            {/* Vacation Mode */}
            <div style={{ marginBottom: '20px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '15px'
              }}>
                <label style={{
                  fontSize: '14px',
                  textAlign: 'left'
                }}>Vacation Mode</label>
                
                <label style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '50px',
                  height: '25px'
                }}>
                  <input
                    type="checkbox"
                    checked={vacationMode}
                    onChange={(e) => setVacationMode(e.target.checked)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <div style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: vacationMode ? '#0E4456' : '#ccc',
                    borderRadius: '25px',
                    transition: 'background-color 0.3s'
                  }}>
                    <div style={{
                      position: 'absolute',
                      height: '19px',
                      width: '19px',
                      left: vacationMode ? '28px' : '3px',
                      bottom: '3px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      transition: 'transform 0.3s'
                    }}></div>
                  </div>
                </label>
              </div>
            </div>

            {/* Auto Approve */}
            <div style={{ marginBottom: '15px' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <label style={{
                  fontSize: '14px',
                  textAlign: 'left'
                }}>Auto-Approve Appointments</label>
                
                <label style={{
                  position: 'relative',
                  display: 'inline-block',
                  width: '50px',
                  height: '25px'
                }}>
                  <input
                    type="checkbox"
                    checked={autoApproveAppointments}
                    onChange={(e) => setAutoApproveAppointments(e.target.checked)}
                    style={{ opacity: 0, width: 0, height: 0 }}
                  />
                  <div style={{
                    position: 'absolute',
                    cursor: 'pointer',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: autoApproveAppointments ? '#0E4456' : '#ccc',
                    borderRadius: '25px',
                    transition: 'background-color 0.3s'
                  }}>
                    <div style={{
                      position: 'absolute',
                      height: '19px',
                      width: '19px',
                      left: autoApproveAppointments ? '28px' : '3px',
                      bottom: '3px',
                      backgroundColor: 'white',
                      borderRadius: '50%',
                      transition: 'transform 0.3s'
                    }}></div>
                  </div>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorSettingsScreen;
