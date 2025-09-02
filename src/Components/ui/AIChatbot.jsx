// src/components/ui/AIChatbot.jsx
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, Mic, Image, X } from 'lucide-react';

const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! I'm your AI assistant. How can I help you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot response
    setTimeout(() => {
      const botMessage = {
        id: Date.now() + 1,
        text: "Thanks for your message! I'm processing your request. This is a demo response.",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-[#9fb8c0] hover:bg-[#8aa8b2] text-gray-800 rounded-full p-4 shadow-lg transition-all duration-300 hover:scale-110 brightness-110"
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-80 h-96 flex flex-col overflow-hidden border border-gray-200">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#C9DCE2] to-[#b8cdd4] px-4 py-3 flex items-center justify-between border-b border-blue-800">
              <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#9fb8c0] bg-opacity-90 rounded-full flex items-center justify-center brightness-110">
                <MessageCircle size={16} className="text-gray-800" />
              </div>
              <div>
                <h3 className="text-gray-700 font-semibold text-sm">ASK Ai CHATBOT</h3>
                <p className="text-gray-600 text-xs">Online now</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-gray-800 transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-[#EAEAEA]">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-2xl text-sm ${
                    message.isBot
                      ? 'bg-white text-gray-800 shadow-sm border border-gray-100'
                      : 'bg-[#C9DCE2] text-gray-700 border border-blue-800'
                  }`}
                >
                  <p>{message.text}</p>
                  <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-400' : 'text-gray-600'}`}>
                    {formatTime(message.timestamp)}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 shadow-sm border border-gray-100 px-3 py-2 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-gray-200 p-3 bg-white">
            <div className="flex items-center space-x-2">
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type here"
                  className="w-full px-4 py-2 pr-20 bg-gray-100 rounded-full border-none outline-none text-sm placeholder-gray-500 focus:bg-white focus:ring-2 focus:ring-[#C9DCE2] transition-all"
                />
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 flex items-center space-x-1">
                  <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                    <Mic size={16} />
                  </button>
                  <button className="p-1 text-gray-400 hover:text-gray-600 transition-colors">
                    <Image size={16} />
                  </button>
                </div>
              </div>
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-[#C9DCE2] hover:bg-[#b8cdd4] disabled:bg-gray-300 disabled:cursor-not-allowed text-gray-700 rounded-full p-2 border border-blue-800 transition-all duration-200"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIChatbot;