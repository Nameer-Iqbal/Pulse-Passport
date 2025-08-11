import React from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, AlertCircle } from 'lucide-react';

// Mock React Hook Form implementation since we don't have the actual library
const useForm = () => {
  const [formData, setFormData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const register = (name, options = {}) => ({
    name,
    onChange: (e) => {
      const value = e.target.value;
      setFormData(prev => ({ ...prev, [name]: value }));
      
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: null }));
      }

      // Real-time validation
      if (options.required && !value.trim()) {
        setErrors(prev => ({ ...prev, [name]: options.required }));
      }
      if (options.pattern && value && !options.pattern.value.test(value)) {
        setErrors(prev => ({ ...prev, [name]: options.pattern.message }));
      }
      if (options.minLength && value.length > 0 && value.length < options.minLength.value) {
        setErrors(prev => ({ ...prev, [name]: options.minLength.message }));
      }
    },
    value: formData[name] || '',
  });

  const handleSubmit = (onSubmit) => (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    
    // Check required fields
    if (!formData.firstName?.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName?.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email?.trim()) newErrors.email = "Email is required";
    if (!formData.message?.trim()) newErrors.message = "Message is required";
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation (if provided)
    if (formData.phone && formData.phone.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      onSubmit(formData);
    }
  };

  const formState = { errors, isSubmitting };

  const reset = () => {
    setFormData({});
    setErrors({});
    setIsSubmitting(false);
  };

  return { register, handleSubmit, formState, reset };
};

function ContactUs() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm();
  const [submitStatus, setSubmitStatus] = React.useState(null);

  const onSubmit = async (data) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Form submitted:', data);
      setSubmitStatus('success');
      reset();
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      description: "Available 24/7 for emergencies",
      contact: "+1 (555) 123-PULSE",
      color: "#325E6D"
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      description: "We'll respond within 24 hours",
      contact: "support@pulsepassport.com",
      color: "#325E6D"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Office Location",
      description: "Visit our headquarters",
      contact: "123 Healthcare Ave, Medical District",
      color: "#325E6D"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Business Hours",
      description: "Monday - Friday",
      contact: "9:00 AM - 6:00 PM EST",
      color: "#325E6D"
    }
  ];

  return (
    <section className="py-12 relative overflow-hidden" >
    

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: 'rgba(50, 94, 109, 0.1)', color: '#325E6D'}}>
            <Mail className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Contact <span style={{color: '#325E6D'}}>Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Have questions about our services? Need help getting started? 
            Our team is here to provide you with the support you need.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div key={index} className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group text-center">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: info.color}}>
                {info.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{info.description}</p>
              <p className="font-medium text-sm" style={{color: '#325E6D'}}>{info.contact}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Form */}
          <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 lg:p-12 border border-white/50">
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you as soon as possible.</p>
            </div>

            {/* Success/Error Messages */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 rounded-xl flex items-center space-x-3" style={{backgroundColor: 'rgba(50, 94, 109, 0.1)', color: '#325E6D'}}>
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Thank you! Your message has been sent successfully.</span>
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center space-x-3 text-red-700">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span className="font-medium">Sorry, there was an error sending your message. Please try again.</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    {...register('firstName', { 
                      required: 'First name is required',
                      minLength: { value: 2, message: 'First name must be at least 2 characters' }
                    })}
                    className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200 ${
                      errors.firstName 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={!errors.firstName ? {focusRingColor: '#325E6D'} : {}}
                    onFocus={(e) => !errors.firstName && (e.target.style.boxShadow = `0 0 0 2px rgba(50, 94, 109, 0.2)`)}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.firstName}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    {...register('lastName', { 
                      required: 'Last name is required',
                      minLength: { value: 2, message: 'Last name must be at least 2 characters' }
                    })}
                    className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200 ${
                      errors.lastName 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onFocus={(e) => !errors.lastName && (e.target.style.boxShadow = `0 0 0 2px rgba(50, 94, 109, 0.2)`)}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.lastName}
                    </p>
                  )}
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    {...register('email', { 
                      required: 'Email is required',
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: 'Please enter a valid email address'
                      }
                    })}
                    className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200 ${
                      errors.email 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onFocus={(e) => !errors.email && (e.target.style.boxShadow = `0 0 0 2px rgba(50, 94, 109, 0.2)`)}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter your email"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    {...register('phone', { 
                      minLength: { value: 10, message: 'Phone number must be at least 10 digits' }
                    })}
                    className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200 ${
                      errors.phone 
                        ? 'border-red-300 focus:ring-red-500' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onFocus={(e) => !errors.phone && (e.target.style.boxShadow = `0 0 0 2px rgba(50, 94, 109, 0.2)`)}
                    onBlur={(e) => e.target.style.boxShadow = 'none'}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="mt-2 text-sm text-red-600 flex items-center">
                      <AlertCircle className="w-4 h-4 mr-1" />
                      {errors.phone}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  {...register('subject')}
                  className="w-full px-4 py-4 border border-gray-200 rounded-xl focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200 hover:border-gray-300"
                  onFocus={(e) => e.target.style.boxShadow = `0 0 0 2px rgba(50, 94, 109, 0.2)`}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing Question</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  {...register('message', { 
                    required: 'Message is required',
                    minLength: { value: 10, message: 'Message must be at least 10 characters' }
                  })}
                  rows={6}
                  className={`w-full px-4 py-4 border rounded-xl focus:ring-2 focus:ring-opacity-50 focus:border-transparent transition-all duration-200 resize-none ${
                    errors.message 
                      ? 'border-red-300 focus:ring-red-500' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onFocus={(e) => !errors.message && (e.target.style.boxShadow = `0 0 0 2px rgba(50, 94, 109, 0.2)`)}
                  onBlur={(e) => e.target.style.boxShadow = 'none'}
                  placeholder="Tell us how we can help you..."
                ></textarea>
                {errors.message && (
                  <p className="mt-2 text-sm text-red-600 flex items-center">
                    <AlertCircle className="w-4 h-4 mr-1" />
                    {errors.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full text-white py-4 px-8 rounded-xl font-semibold text-lg hover:opacity-90 transform hover:scale-105 transition-all duration-200 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-3"
                  style={{backgroundColor: '#325E6D'}}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Why Contact Us */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Contact Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{backgroundColor: '#325E6D'}}>
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Expert Healthcare Support</h4>
                    <p className="text-gray-600 text-sm">Get personalized assistance from our healthcare technology experts.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{backgroundColor: '#325E6D'}}>
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Quick Response Time</h4>
                    <p className="text-gray-600 text-sm">We typically respond to inquiries within 24 hours during business days.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{backgroundColor: '#325E6D'}}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">24/7 Emergency Support</h4>
                    <p className="text-gray-600 text-sm">For urgent medical technology issues, our emergency line is always available.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border border-white/50">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
              <div className="space-y-4">
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">How secure is your platform?</h4>
                  <p className="text-gray-600 text-sm">Our platform uses end-to-end encryption and is HIPAA compliant to ensure your medical data is fully protected.</p>
                </div>
                
                <div className="border-b border-gray-100 pb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Do you accept insurance?</h4>
                  <p className="text-gray-600 text-sm">Yes, we work with most major insurance providers. Contact us to verify your coverage.</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">How do I schedule an appointment?</h4>
                  <p className="text-gray-600 text-sm">You can schedule appointments through our platform 24/7 or call our support line for assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;