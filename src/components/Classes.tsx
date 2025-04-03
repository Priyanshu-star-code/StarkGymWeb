import React from 'react';
import { useTheme } from '../context/ThemeContext';

const classes = [
  {
    title: 'HIIT Training',
    image: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80',
    duration: '45 min',
    intensity: 'High'
  },
  {
    title: 'Yoga Flow',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80',
    duration: '60 min',
    intensity: 'Medium'
  },
  {
    title: 'Strength Training',
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?auto=format&fit=crop&q=80',
    duration: '50 min',
    intensity: 'High'
  },
  {
    title: 'Boxing',
    image: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80',
    duration: '45 min',
    intensity: 'High'
  }
];

const Classes = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`} id="classes">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Our Classes
          </h2>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Choose from a variety of classes designed to challenge and inspire you.
            Each class is led by expert trainers who will guide you to success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((classItem, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <img
                src={classItem.image}
                alt={classItem.title}
                className="w-full h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{classItem.title}</h3>
                <div className="flex items-center space-x-4 text-gray-300">
                  <span>{classItem.duration}</span>
                  <span>•</span>
                  <span>{classItem.intensity}</span>
                </div>
                <button className={`mt-4 px-6 py-2 ${
                  theme === 'dark'
                    ? 'bg-purple-600 hover:bg-purple-700'
                    : 'bg-purple-500 hover:bg-purple-600'
                } text-white rounded-full opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300`}>
                  Join Class
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Classes;