import React, { useState } from 'react';

const SettingsScreen = () => {
  const [profileData, setProfileData] = useState({
    name: 'Anna',
    gender: 'Female',
    age: '25 yrs',
    bloodGroup: 'A +ve'
  });
  
  const [profilePicture, setProfilePicture] = useState(null);
  const [availableHours, setAvailableHours] = useState('');
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [paymentDropdownOpen, setPaymentDropdownOpen] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('Payment Methods');

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

  const handlePaymentMethodSelect = (method) => {
    setSelectedPaymentMethod(method);
    setPaymentDropdownOpen(false);
    console.log('Payment method selected:', method);
  };

  return (
    <div style={{
      backgroundColor: '#EAEAEA',
      minHeight: '100vh',
      padding: '30px',
      fontFamily: 'Arial, sans-serif'
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
            height: 'fit-content'
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
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
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
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <svg 
                      width="100" 
                      height="100" 
                      viewBox="0 0 24 25" 
                      fill="white"
                      
                    >
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
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
              <div style={{ marginBottom: '15px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  textAlign: 'left'
                }}>NAME :</label>
                <input
                  type="text"
                  value={profileData.name}
                  onChange={(e) => handleProfileChange('name', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  textAlign: 'left'
                }}>GENDER :</label>
                <select
                  value={profileData.gender}
                  onChange={(e) => handleProfileChange('gender', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '14px'
                  }}
                >
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  textAlign: 'left'
                }}>AGE :</label>
                <input
                  type="text"
                  value={profileData.age}
                  onChange={(e) => handleProfileChange('age', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '14px'
                  }}
                />
              </div>

              <div style={{ marginBottom: '15px' }}>
                <label style={{
                  display: 'block',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  marginBottom: '5px',
                  textAlign: 'left'
                }}>BLOOD GROUP :</label>
                <input
                  type="text"
                  value={profileData.bloodGroup}
                  onChange={(e) => handleProfileChange('bloodGroup', e.target.value)}
                  style={{
                    width: '100%',
                    padding: '8px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '14px'
                  }}
                />
              </div>
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

          {/* Availability & Schedule Container */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            height: 'fit-content'
          }}>
            <h2 style={{
              margin: '0 0 20px 0',
              fontSize: '18px',
              fontWeight: 'bold',
              textAlign: 'left'
            }}>Availability & Schedule</h2>
            
            <div style={{ marginBottom: '15px' }}>
              <label style={{
                display: 'block',
                fontSize: '14px',
                marginBottom: '10px',
                textAlign: 'left'
              }}>Set Available Hours</label>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
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
                    content: '',
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
            height: '300px'
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

          {/* Payment Methods Container */}
          <div style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '20px',
            padding: '25px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
            height: '300px',
            position: 'relative'
          }}>
            <div style={{ position: 'relative' }}>
              <button
                onClick={() => setPaymentDropdownOpen(!paymentDropdownOpen)}
                style={{
                  width: '70%',
                  backgroundColor: '#0E4456',
                  color: 'white',
                  border: 'none',
                  borderRadius: '25px',
                  padding: '15px 20px',
                  fontSize: '14px',
                  cursor: 'pointer',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}
              >
                {selectedPaymentMethod}
                <span style={{
                  marginLeft: '20px',
                  transform: paymentDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s'
                }}>▼</span>
              </button>
              
              {paymentDropdownOpen && (
                <div style={{
                  position: 'absolute',
                  top: '100%',
                  left: '22px',
                  right: '190px',
                  backgroundColor: '#567C89',
                  borderRadius: '0 0 25px 25px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                  zIndex: 10
                }}>
                  <button
                    onClick={() => handlePaymentMethodSelect('Digital Wallets')}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      color: 'white',
                      border: 'none',
                      padding: '15px 20px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      textAlign: 'left',
                      borderBottom: '1px solid rgba(255,255,255,0.2)'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Digital Wallets
                  </button>
                  
                  <button
                    onClick={() => handlePaymentMethodSelect('Bank Transfer')}
                    style={{
                      width: '100%',
                      backgroundColor: 'transparent',
                      color: 'white',
                      border: 'none',
                      padding: '15px 20px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = 'rgba(255,255,255,0.1)'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
                  >
                    Bank Transfer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Empty space for now to maintain layout */}
        <div></div>
      </div>
    </div>
  );
};

export default SettingsScreen;