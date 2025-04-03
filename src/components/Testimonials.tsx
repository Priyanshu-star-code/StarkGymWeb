import React from 'react';
import { Instagram } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const testimonials = [
  {
    name: 'Sarah Johnson',
    info: 'Lost 5kg in 3 months',
    beforeImage: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80',
    afterImage: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80',
  },
  {
    name: 'Michael Chen',
    info: 'Lost 10kg in 6 months',
    beforeImage: 'https://via.placeholder.com/300x400?text=Before',
    afterImage: 'https://via.placeholder.com/300x400?text=After',
  },
  {
    name: 'Emma Davis',
    info: 'Gained 8kg Muscle in 4 months',
    beforeImage: 'https://via.placeholder.com/300x400?text=Before',
    afterImage: 'https://via.placeholder.com/300x400?text=After',
  },
];

const Testimonials = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`} id="testimonials">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>Success Stories</h2>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Real transformations with real results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
            >
              {/* Before & After Images */}
              <div className="relative w-full h-96 overflow-hidden">
                <img
                  src={testimonial.afterImage}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-0"
                />
                <img
                  src={testimonial.beforeImage}
                  alt="Before"
                  className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                
                {/* Info Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{testimonial.info}</p>
                </div>
              </div>
              
              {/* Instagram Icon */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram size={28} className="text-white bg-pink-600 rounded-full p-1" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;