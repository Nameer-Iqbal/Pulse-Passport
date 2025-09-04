import React, { useState } from 'react';
import Prescriptions from "./Prescriptions";

import { 
  Search, 
  ChevronDown, 
  Plus, 
  MousePointer, 
  Edit3, 
  Trash2, 
  Download, 
  MessageCircle, 
  Eye 
} from 'lucide-react';
import AIChatbotPopup from "../../Components/AIChatbotPopup";
import { useNavigate } from 'react-router-dom';


export default function ReportsScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Recently Viewed');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([
    { id: 1, src: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop' },
    { id: 2, src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop' },
    { id: 3, src: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=300&h=200&fit=crop' },
    { id: 4, src: 'https://images.unsplash.com/photo-1582560469781-1965b9af903d?w=300&h=200&fit=crop' }
  ]);

  const categoryOptions = ['Recently Viewed', 'Recently Added'];

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const newImage = {
          id: Date.now(),
          src: e.target.result,
          type: 'New Report'
        };
        setUploadedImages(prev => [...prev, newImage]);
      };
      reader.readAsDataURL(file);
    }
  };


  const styles = {
    container: {
      minHeight: '100vh',
      backgroundColor: '#f5f7fa',
      padding: '0',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    },
    mainContainer: {
      backgroundColor: '#6B8E95',
      minHeight: '100vh',
      padding: '24px 32px',
      position: 'relative'
    },
    header: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: '32px',
      gap: '32px',
      position: 'relative'
    },
    searchContainer: {
      position: 'relative',
      width: '600px',
    },
    searchBar: {
      backgroundColor: '#0E4456',
      borderRadius: '25px',
      padding: '14px 24px',
      display: 'flex',
      alignItems: 'center',
      border: 'none'
    },
    searchInput: {
      backgroundColor: 'transparent',
      color: 'white',
      border: 'none',
      outline: 'none',
      flex: '1',
      marginLeft: '12px',
      fontSize: '14px',
      placeholder: 'white'
    },
    dropdownContainer: { 
      position: 'relative'
    },
    dropdownButton: {
      backgroundColor: '#0E4456',
      color: 'white',
      padding: '14px 28px',
      borderRadius: '25px',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      minWidth: '180px',
      cursor: 'pointer',
      fontSize: '15px',
      fontWeight: '500'
    },
    dropdownMenu: {
      position: 'absolute',
      top: '100%',
      right: '0',
      backgroundColor: '#2B5B6A',
      borderRadius: '8px',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      padding: '8px 0',
      minWidth: '180px',
      zIndex: '10',
      marginTop: '4px'
    },
    dropdownItem: {
      width: '100%',
      textAlign: 'left',
      padding: '10px 16px',
      border: 'none',
      backgroundColor: 'transparent',
      color: 'white',
      cursor: 'pointer',
      fontSize: '14px'
    },
    viewReportsTitle: {
      color: 'white',
      fontSize: '28px',
      fontWeight: '600',
      marginBottom: '24px',
      marginTop: '0'
    },
    mainContent: {
      display: 'flex',
      gap: '24px',
      position: 'relative',
      flexDirection: 'column'
    },
    imagesSection: {
      flex: '1'
    },
    imagesContainer: {
      backgroundColor:'#D9D9D9',
      borderRadius: '16px',
      padding: '24px'
    },
    imagesGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '20px',
      marginBottom: '24px'
    },
    addImageBox: {
      backgroundColor: '#628B98',
      border: '3px dashed #cbd5e1',
      borderRadius: '12px',
      height: '280px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'all 0.2s ease'
    },
    imageCard: { 
      position: 'relative',
      borderRadius: '12px',
      overflow: 'hidden'
    },
    imageContainer: {
      backgroundColor: '#f1f5f9',
      borderRadius: '12px',
      overflow: 'hidden',
      height: '280px',
      position: 'relative'
    },
    image: { 
      width: '100%', 
      height: '100%', 
      objectFit: 'cover' 
    },
    viewOverlay: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      backgroundColor: '#628B98',
      color: 'white',
      padding: '8px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    viewText: { 
      fontSize: '12px', 
      fontWeight: '600',
      letterSpacing: '0.5px'
    },
    bottomButtons: {
      display: 'flex',
      justifyContent: 'center',
      gap: '24px',
      marginTop: '20px',
      marginBottom: '34px'
    },
    bottomButton: {
      backgroundColor: '#0E4456',
      color: 'white',
      padding: '12px 24px',
      borderRadius: '9999px',   // ✅ pill shape
      border: 'none',
      fontWeight: '500',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      fontSize: '16px',
      minWidth:'180px',
    },
    actionCircles: {
      position: 'absolute',    
      right: '20px',           
      top: '70%',              
      transform: 'translateY(-50%)',  
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    },
    actionCircle: {
      width: '40px',
      height: '40px',
      backgroundColor: '#292B49', // ✅ dark navy instead of grey
      borderRadius: '50%',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background-color 0.2s ease',
      color: 'white',
      boxShadow: '0 6px 4px rgba(1, 1, 1, 0.1)'
    },
    chatbotContainer: { 
      position: 'absolute', 
      bottom: '20px', 
      right: '30px' 
    },
    chatbotButton: {
      width: '50px',
      height: '50px',
      backgroundColor: '#e0f2fe',
      borderRadius: '50%',
      border: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
      transition: 'background-color 0.2s ease'
    },
    hiddenInput: { display: 'none' }
  };
  
  const navigate = useNavigate();
  const handleAction = (action, imageId = null) => {
    if(action === 'prescriptions') {
      navigate('/dashboard/prescriptions');
    } else {
      console.log(`${action} action triggered`, imageId ? `for image ${imageId}` : '');
    }
  };
  return (
    <div style={styles.container}>
      <div style={styles.mainContainer}>
        
        {/* Header */}
        <div style={styles.header}>
          <div style={styles.searchContainer}>
            <div style={styles.searchBar}>
              <Search size={20} color="white" />
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  ...styles.searchInput,
                  fontSize: '15px'
                }}
              />
            </div>
          </div>

          <div style={styles.dropdownContainer}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              style={styles.dropdownButton}
              onMouseEnter={(e) => e.target.style.backgroundColor = '#0a3844'}
              onMouseLeave={(e) => e.target.style.backgroundColor = '#0E4456'}
            >
              <span>Categorize by</span>
              <ChevronDown size={16} />
            </button>
            {dropdownOpen && (
              <div style={styles.dropdownMenu}>
                {categoryOptions.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      setSelectedCategory(option);
                      setDropdownOpen(false);
                    }}
                    style={styles.dropdownItem}
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <h2 style={styles.viewReportsTitle}>View Reports</h2>

        {/* Main Content */}
        <div style={styles.mainContent}>
          <div style={styles.imagesSection}>
            <div style={styles.imagesContainer}>
              <div style={styles.imagesGrid}>
                {uploadedImages.map((image) => (
                  <div key={image.id} style={styles.imageCard}>
                    <div style={styles.imageContainer}>
                      <img src={image.src} alt={image.type} style={styles.image} />
                    </div>
                    <div style={styles.viewOverlay}>
                      <span style={styles.viewText}>VIEW</span>
                      <Eye size={14} />
                    </div>
                  </div>
                ))}
                
                {/* Add Image Box */}
                <div>
                  <label style={{ cursor: 'pointer', display: 'block' }}>
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={styles.hiddenInput} />
                    <div style={styles.addImageBox}>
                      <Plus size={32} color="#94a3b8" />
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* ✅ Bottom Buttons moved OUTSIDE gray box */}
            <div style={styles.bottomButtons}>
              {['Prescriptions', 'Medical History', 'Diagnostic Reports'].map((label, i) => (
                <button
                  key={i}
                  onClick={() => handleAction(label.toLowerCase().replace(' ', '-'))}
                  style={styles.bottomButton}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0a3844'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#0E4456'}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Action Circles */}
          <div style={styles.actionCircles}>
            {[ 
              { icon: <MousePointer size={14} />, action: 'select' },
              { icon: <Edit3 size={14} />, action: 'edit' },
              { icon: <Trash2 size={14} />, action: 'delete' },
              { icon: <Download size={14} />, action: 'download' }
            ].map((btn, i) => (
              <button
                key={i}
                onClick={() => handleAction(btn.action)}
                style={styles.actionCircle}
              >
                {btn.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Chatbot */}
        <AIChatbotPopup />
      </div>
    </div>
  );
}
 