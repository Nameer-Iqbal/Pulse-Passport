import React from 'react';
import { CheckCircle, Heart, Shield, Zap, Users, Award, TrendingUp, Globe } from 'lucide-react';

function AboutUs() {
  const features = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI-Powered Care",
      description: "Intelligent symptom analysis, health risk alerts, and diagnostic support."
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Secure Health Records",
      description: "Safe and centralized access to your complete medical history."
    },
    {
      icon: <Heart className="w-5 h-5" />,
      title: "Seamless Telemedicine",
      description: "HD video consultations with real-time vitals and note-taking tools."
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Wearable Insights",
      description: "Continuous monitoring for proactive health management."
    }
  ];

 

  return (
    <section className="relative py-12 overflow-hidden" >
      

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Heading Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6" style={{backgroundColor: 'rgba(50, 94, 109, 0.1)', color: '#325E6D'}}>
            <Heart className="w-4 h-4 mr-2" />
            Transforming Healthcare
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #325E6D, #4a7085, #325E6D)'}}>
              Pulse Passport
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Making quality healthcare smarter, faster, and more human through 
            <span className="font-semibold" style={{color: '#325E6D'}}> AI-driven innovation</span> that puts patients first.
          </p>
        </div>

        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="prose prose-lg">
                <p className="text-gray-700 leading-relaxed">
                  At <strong style={{color: '#325E6D'}}>Pulse Passport</strong>, we believe healthcare should be{' '}
                  <strong className="bg-gradient-to-r bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(to right, #325E6D, #4a7085)'}}>
                    accessible, intelligent, and personalized
                  </strong>{' '}
                  for everyone. Our AI-Integrated Virtual Healthcare Platform bridges the gap between patients and doctors—anytime, anywhere.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  From booking appointments to real-time video consultations, from managing prescriptions to analyzing wearable device data, 
                  we deliver a seamless, end-to-end virtual care experience that adapts to your unique health journey.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  With secure <strong style={{color: '#325E6D'}}>Electronic Health Records (EHR)</strong>, smart{' '}
                  <strong style={{color: '#325E6D'}}>Patient Management</strong>, advanced{' '}
                  <strong style={{color: '#325E6D'}}>Telemedicine</strong>, and continuous{' '}
                  <strong style={{color: '#325E6D'}}>Wearable Integration</strong>, we empower patients and equip doctors 
                  with AI-powered tools to make faster, better-informed decisions.
                </p>
              </div>
            </div>
            
            {/* Enhanced Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-white/50" style={{'--hover-border-color': 'rgba(50, 94, 109, 0.3)'}} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(50, 94, 109, 0.3)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.5)'}>
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 flex-shrink-0" style={{backgroundColor: '#325E6D'}}>
                      {feature.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 group-hover:transition-colors duration-300" style={{'--hover-color': '#325E6D'}} onMouseEnter={(e) => e.target.style.color = '#325E6D'} onMouseLeave={(e) => e.target.style.color = ''}>
                        {feature.title}
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Image Column */}
          <div className="relative">
            <div className="relative group">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                   src="src/assets/doctors.png" alt="Healthcare technology and innovation" 
                  className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent"></div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-8 -left-8 bg-white rounded-2xl p-6 shadow-2xl max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{backgroundColor: '#325E6D'}}></div>
                  <span className="text-sm font-semibold text-gray-900">AI Analysis Active</span>
                </div>
                <div className="text-xs text-gray-600">
                  Processing patient vitals and symptoms...
                </div>
              </div>
              
              <div className="absolute -bottom-8 -right-8 text-white p-8 rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300" style={{backgroundColor: '#325E6D'}}>
                <div className="text-3xl font-bold mb-2">AI + Care</div>
                <div className="text-sm opacity-90">The future of healthcare, today.</div>
                <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full flex items-center justify-center" style={{backgroundColor: '#F9F9F9'}}>
                  <Zap className="w-3 h-3" style={{color: '#325E6D'}} />
                </div>
              </div>
            </div>
            
            {/* Background Decorations */}
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%]">
              <div className="absolute top-0 left-0 w-20 h-20 rounded-full opacity-30 animate-ping" style={{backgroundColor: '#325E6D', animationDuration: '4s'}}></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 rounded-full opacity-25 animate-ping" style={{backgroundColor: '#325E6D', animationDuration: '3s', animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 right-0 w-12 h-12 rounded-full opacity-20 animate-ping" style={{backgroundColor: '#325E6D', animationDuration: '5s', animationDelay: '2s'}}></div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-24 text-center">
          <div className="rounded-3xl p-12 text-white relative overflow-hidden" style={{backgroundColor: '#325E6D'}}>
            <div className="absolute inset-0">
              <div className="absolute top-0 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
              <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-white/10 rounded-full blur-xl"></div>
            </div>
            <div className="relative">
              <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto opacity-95">
                To revolutionize healthcare accessibility by seamlessly connecting patients with world-class medical professionals 
                through innovative AI-powered technology, ensuring everyone receives personalized, timely, and effective care 
                regardless of their location or circumstances.
              </p>
              <div className="flex justify-center mt-8">
                <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
                  <Heart className="w-5 h-5" style={{color: '#F9F9F9'}} />
                  <span className="text-sm font-medium">Empowering Health, Everywhere</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;