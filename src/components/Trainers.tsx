import React from 'react';
import { Instagram, Twitter } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const trainers = [
  {
    name: 'John Smith',
    role: 'Head Trainer',
    specialties: ['Strength Training', 'HIIT', 'Nutrition'],
    image: 'https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&fit=crop&q=80',
    instagram: '#',
    twitter: '#',
  },
  {
    name: 'Lisa Chen',
    role: 'Yoga Specialist',
    specialties: ['Yoga', 'Meditation', 'Flexibility'],
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80',
    instagram: '#',
    twitter: '#',
  },
  {
    name: 'Marcus Johnson',
    role: 'CrossFit Coach',
    specialties: ['CrossFit', 'Olympic Lifting', 'Conditioning'],
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&q=80',
    instagram: '#',
    twitter: '#',
  },
  {
    name: 'Sarah Williams',
    role: 'Nutrition Expert',
    specialties: ['Meal Planning', 'Weight Management', 'Sports Nutrition'],
    image: 'https://images.unsplash.com/photo-1611691543545-f19c70f74a29?auto=format&fit=crop&q=80',
    instagram: '#',
    twitter: '#',
  },
];

const Trainers = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`} id="trainers">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Expert Trainers
          </h2>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Work with our certified professionals who are passionate about helping you achieve your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className={`${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-50 shadow-lg'
              } rounded-lg overflow-hidden transform hover:-translate-y-2 transition-all duration-300`}
            >
              <div className="relative group">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a href={trainer.instagram} className="text-white hover:text-purple-400 transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href={trainer.twitter} className="text-white hover:text-purple-400 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {trainer.name}
                </h3>
                <p className="text-purple-500 mb-4">{trainer.role}</p>
                <div className="flex flex-wrap gap-2">
                  {trainer.specialties.map((specialty, specialtyIndex) => (
                    <span
                      key={specialtyIndex}
                      className={`text-sm px-3 py-1 rounded-full ${
                        theme === 'dark'
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;