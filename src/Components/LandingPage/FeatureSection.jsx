import React from 'react';

export default function Features() {
  const features = [
    {
      
      image: "src/assets/feature01.png", 
      title: "24/7 Availability",
      description:
        "Access healthcare professionals anytime, day or night. Our doctors are always ready to help you."
    },
    {
      
      image: "src/assets/privacyIcon.png", 
      title: "Expert Doctors",
      description:
        "Connect with board-certified physicians and specialists with years of experience in their fields."
    },
    {
    
      image: "src/assets/chatboticon.png", 
      title: "Quality Service",
      description:
        "Receive top-quality medical consultations with personalized care and attention to your needs."
    }
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why you should trust us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get to know about us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#F9F9F9] py-8 text-center group hover:transform hover:scale-105 transition-all duration-300 rounded-2xl shadow-2xl overflow-hidden"
            >
            <div className='flex items-center justify-center'>
             
              <img
                src={feature.image}
                alt={feature.title}
                className="w-auto object-cover"
              />
</div>
              

              {/* Text */}
              <div className="px-6 pb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
