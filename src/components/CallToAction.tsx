import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const CallToAction = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'} relative`} id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className={`text-4xl font-bold mb-6 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'
            }`}>
              Start Your Fitness Journey Today
            </h2>
            <p className={`mb-8 text-lg ${
              theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
            }`}>
              Get your first training session absolutely free! Our expert trainers will help you create a personalized fitness plan.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className={`flex items-center ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <MapPin className="w-6 h-6 text-purple-500 mr-4" />
                <span>Stark 2.0 Gym, 2/34, Avas Vikas, Shahjahanpur, Marha, Uttar Pradesh 242001</span>
              </div>
              <div className={`flex items-center ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <Phone className="w-6 h-6 text-purple-500 mr-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className={`flex items-center ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <Mail className="w-6 h-6 text-purple-500 mr-4" />
                <span>contact@fitpro.com</span>
              </div>
            </div>

            <button className={`px-8 py-4 ${
              theme === 'dark'
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-purple-500 hover:bg-purple-600'
            } text-white rounded-full transition-all duration-300 transform hover:scale-105`}>
              Claim Your Free Session
            </button>
          </div>

          <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14110.035371427883!2d79.87432024774938!3d27.855635417562112!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399fbd003c4aa3b7%3A0x2a952609b2dc8eb!2sStark%202.0%20Gym!5e0!3m2!1sen!2sin!4v1743678687997"
  width="600"
  height="450"
  style={{ border: 0 }}  // ✅ Correct JSX syntax
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade">
</iframe>


          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;