import React, { useState } from 'react';
import { MessageCircle, X, Mic, Image, Send, MicOff } from 'lucide-react';

const AIChatbotPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! How can I help you today?", sender: 'bot', timestamp: new Date() }
  ]);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: message,
        sender: 'user',
        timestamp: new Date()
      };
      setMessages([...messages, newMessage]);
      setMessage('');
      
      // Simulate bot response
      setTimeout(() => {
        const botResponse = {
          id: messages.length + 2,
          text: "I received your message. How else can I assist you?",
          sender: 'bot',
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleRecording = () => {
    setIsRecording(!isRecording);
    // Here you would implement actual audio recording logic
    if (!isRecording) {
      console.log('Starting audio recording...');
    } else {
      console.log('Stopping audio recording...');
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Image uploaded:', file.name);
      // Here you would handle image upload logic
      const imageMessage = {
        id: messages.length + 1,
        text: `Image uploaded: ${file.name}`,
        sender: 'user',
        timestamp: new Date(),
        type: 'image'
      };
      setMessages([...messages, imageMessage]);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Popup */}
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-300 flex flex-col overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-[#0E4456] text-white p-4 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-[#0E4456]" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">ASK AI CHATBOT</h3>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                  <span className="text-xs opacity-90">Online</span>
                </div>
              </div>
            </div>
            <button
              onClick={togglePopup}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-xs px-4 py-2 rounded-2xl ${
                    msg.sender === 'user'
                      ? 'bg-[#0E4456] text-white'
                      : 'bg-white text-black border border-[#D9D9D9]'
                  }`}
                >
                  <p className="text-sm">{msg.text}</p>
                  {msg.type === 'image' && (
                    <div className="mt-2 text-xs opacity-75">📷</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-[#D9D9D9]">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type here"
                  className="w-full px-4 py-2 pr-20 border border-[#D9D9D9] rounded-full focus:outline-none focus:ring-2 focus:ring-[#0E4456] text-sm"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  {/* Audio Recording Button */}
                  <button
                    onClick={toggleRecording}
                    className={`p-1.5 rounded-full transition-colors ${
                      isRecording 
                        ? 'bg-red-500 text-white' 
                        : 'text-[#0E4456] hover:bg-[#D9D9D9]'
                    }`}
                    title={isRecording ? 'Stop Recording' : 'Start Recording'}
                  >
                    {isRecording ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
                  </button>
                  
                  {/* Image Upload Button */}
                  <label className="cursor-pointer p-1.5 rounded-full text-[#0E4456] hover:bg-[#D9D9D9] transition-colors">
                    <Image className="w-4 h-4" />
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
              
              {/* Send Button */}
              <button
                onClick={handleSendMessage}
                className="p-2 bg-[#0E4456] text-white rounded-full hover:bg-opacity-90 transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            {isRecording && (
              <div className="mt-2 text-xs text-red-500 flex items-center space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span>Recording audio...</span>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={togglePopup}
        className={`w-14 h-14 bg-[#0E4456] text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center ${
          isOpen ? 'rotate-180' : 'hover:scale-110'
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Notification Badge */}
      {!isOpen && (
        <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center animate-pulse">
          1
        </div>
      )}
    </div>
  );
};

export default AIChatbotPopup;