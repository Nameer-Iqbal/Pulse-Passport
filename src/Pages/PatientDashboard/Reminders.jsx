import React, { useState } from 'react';
import { Plus, Star, Mic, Phone } from 'lucide-react';

// Header Component
const Header = () => {
  return (
    <div className="text-white text-2xl font-semibold mb-6">
      Reminder !
    </div>
  );
};

// Medication History Component
const MedicationHistory = () => {
  const medications = [
    { medicine: 'Ascard 50mg', dosage: '1 tablet', time: '5pm', date: '02/08/2025' },
    { medicine: 'Ascard 50mg', dosage: '1 tablet', time: '5pm', date: '03/08/2025' },
    { medicine: 'Ascard 50mg', dosage: '1 tablet', time: '5pm', date: '03/08/2025' },
    { medicine: 'Ascard 50mg', dosage: '1 tablet', time: '5pm', date: '03/08/2025' }
  ];

  return (
    <div className="bg-gray-300 rounded-lg p-4 mb-4" style={{ backgroundColor: '#D9D9D9' }}>
      <div className="grid grid-cols-4 gap-4 mb-3 text-sm font-medium text-gray-700 border-b border-gray-400 pb-2">
        <div>Medicine</div>
        <div>Dosage</div>
        <div>Time</div>
        <div>Date</div>
      </div>
      
      {medications.map((med, index) => (
        <div key={index} className="grid grid-cols-4 gap-4 py-2 text-sm rounded-lg mb-2" style={{ backgroundColor: '#B1BCBF' }}>
          <div className="px-3 py-1">{med.medicine}</div>
          <div className="px-3 py-1">{med.dosage}</div>
          <div className="px-3 py-1">{med.time}</div>
          <div className="px-3 py-1">{med.date}</div>
        </div>
      ))}
    </div>
  );
};

// Medication Tracker Component
const MedicationTracker = () => {
  const [reminders, setReminders] = useState([
    { id: 1, medicine: 'Ascard 50mg', frequency: 'Once daily', timing: 'In the evening', enabled: false },
    { id: 2, medicine: 'Ascard 50mg', frequency: 'Once daily', timing: 'In the evening', enabled: false }
  ]);

  const toggleReminder = (id) => {
    setReminders(reminders.map(reminder => 
      reminder.id === id ? { ...reminder, enabled: !reminder.enabled } : reminder
    ));
  };

  return (
    <div className="bg-gray-300 rounded-lg p-4 mb-4" style={{ backgroundColor: '#D9D9D9' }}>
      <h3 className="text-gray-700 font-medium mb-4">Medication Tracker</h3>
      
      {reminders.map((reminder) => (
        <div key={reminder.id} className="rounded-lg p-4 mb-3" style={{ backgroundColor: '#B1BCBF' }}>
          <div className="flex justify-between items-start">
            <div>
              <div className="font-medium text-gray-800 mb-1">{reminder.medicine}</div>
              <div className="text-sm text-gray-600 mb-1">{reminder.frequency}</div>
              <div className="text-sm text-gray-600">{reminder.timing}</div>
            </div>
            <div className="flex items-center">
              <span className="text-sm text-gray-700 mr-2">Remind me</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={reminder.enabled}
                  onChange={() => toggleReminder(reminder.id)}
                />
                <div className={`w-11 h-6 rounded-full transition-colors ${
                  reminder.enabled ? 'bg-blue-500' : 'bg-gray-400'
                }`}>
                  <div className={`w-5 h-5 bg-white rounded-full transition-transform transform ${
                    reminder.enabled ? 'translate-x-5' : 'translate-x-0.5'
                  } mt-0.5`}></div>
                </div>
              </label>
            </div>
          </div>
        </div>
      ))}
      
      <button className="w-full rounded-lg py-3 text-gray-700 font-medium flex items-center justify-center" style={{ backgroundColor: '#A3A3A3' }}>
        <Plus size={20} className="mr-2" />
        Add medication
      </button>
    </div>
  );
};

// SMS Reminder Component
const SMSReminder = () => {
  const [smsEnabled, setSmsEnabled] = useState(false);
  const [reminderTime, setReminderTime] = useState('1 day before');

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
      <div className="bg-gray-300 rounded-lg p-4" style={{ backgroundColor: '#D9D9D9' }}>
        <div className="flex items-center mb-4">
          <label className="relative inline-flex items-center cursor-pointer mr-3">
            <input
              type="checkbox"
              className="sr-only"
              checked={smsEnabled}
              onChange={() => setSmsEnabled(!smsEnabled)}
            />
            <div className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
              smsEnabled ? 'bg-blue-500 border-blue-500' : 'bg-white border-gray-400'
            }`}>
              {smsEnabled && <div className="w-2 h-2 bg-white rounded-sm"></div>}
            </div>
          </label>
          <span className="text-gray-700 font-medium">Receive SMS Reminder</span>
        </div>
        
        <div className="mb-4">
          <div className="text-gray-700 mb-2">Remind me:</div>
          <select 
            className="w-full p-2 rounded border border-gray-400 bg-white"
            value={reminderTime}
            onChange={(e) => setReminderTime(e.target.value)}
          >
            <option>1 day before</option>
            <option>2 hours before</option>
            <option>30 minutes before</option>
            <option>At the time</option>
          </select>
        </div>
        
        <button className="w-full bg-white rounded-lg py-2 text-gray-700 font-medium border border-gray-400">
          Send test notification
        </button>
      </div>
      
      <div className="bg-gray-300 rounded-lg p-4" style={{ backgroundColor: '#D9D9D9' }}>
        <h3 className="text-gray-700 font-medium mb-4">Contact Information</h3>
        
        <div className="mb-4">
          <label className="block text-sm text-gray-600 mb-2">Phone number</label>
          <input
            type="tel"
            className="w-full p-2 rounded border border-gray-400"
            style={{ backgroundColor: '#A3A3A3' }}
            placeholder="Enter phone number"
          />
        </div>
        
        <div>
          <label className="block text-sm text-gray-600 mb-2">Email address</label>
          <input
            type="email"
            className="w-full p-2 rounded border border-gray-400"
            style={{ backgroundColor: '#A3A3A3' }}
            placeholder="Enter email address"
          />
        </div>
      </div>
    </div>
  );
};

// Chatbot Component
const ChatbotInterface = () => {
  return (
    <div className="bg-gray-300 rounded-lg p-4 flex items-center" style={{ backgroundColor: '#D9D9D9' }}>
      <Star size={24} className="mr-3" style={{ color: '#0E4456' }} />
      <span className="text-gray-700 flex-1">ASK AI CHATBOT</span>
      <Mic size={20} className="mr-3 text-gray-600 cursor-pointer" />
      <Phone size={20} className="text-gray-600 cursor-pointer" />
    </div>
  );
};

// Main App Component
const MedicationReminderApp = () => {
  return (
    <div className="min-h-screen p-6" style={{ backgroundColor: '#6F8F99' }}>
      <div className="max-w-4xl mx-auto">
        <Header />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <MedicationHistory />
          <MedicationTracker />
        </div>
        
        <SMSReminder />
        <ChatbotInterface />
      </div>
    </div>
  );
};

export default MedicationReminderApp;