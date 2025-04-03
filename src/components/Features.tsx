import React from 'react';
import { Users, Dumbbell, ClipboardList, Group, UtensilsCrossed, Wind } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80',
    title: 'Expert Personal Trainers',
    description: 'Work with certified professionals who are passionate about your success.',
    icon: <Users className="w-6 h-6" />
  },
  {
    image: 'https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4c1?auto=format&fit=crop&q=80',
    title: 'State-of-the-Art Equipment',
    description: 'Train with top-notch gym equipment for optimal results.',
    icon: <Dumbbell className="w-6 h-6" />
  },
  {
    image: 'https://images.unsplash.com/photo-1599058917765-a780eda07a3e?auto=format&fit=crop&q=80',
    title: 'Customized Workout Plans',
    description: 'Get personalized fitness plans tailored to your needs.',
    icon: <ClipboardList className="w-6 h-6" />
  },
  {
    image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?auto=format&fit=crop&q=80',
    title: 'Group Fitness Classes',
    description: 'Join high-energy group workouts that keep you motivated.',
    icon: <Group className="w-6 h-6" />
  },
  {
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80',
    title: 'Nutrition Guidance',
    description: 'Receive expert dietary advice to complement your fitness journey.',
    icon: <UtensilsCrossed className="w-6 h-6" />
  },
  {
    image: 'https://images.unsplash.com/photo-1630983358494-96012d838b84?auto=format&fit=crop&q=80',
    title: 'Premium Facilities',
    description: 'Stay comfortable while working out in our state-of-the-art facilities.',
    icon: <Wind className="w-6 h-6" />
  }
];

const Features = () => {
  const { theme } = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section 
      className={`py-20 ${theme === 'dark' ? 'gradient-dark' : 'bg-gradient-to-br from-purple-50 to-indigo-50'}`}
      ref={ref}
    >
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-5xl font-extrabold mb-6 ${
            theme === 'dark' ? 'gradient-text' : 'text-gray-900'
          }`}>
            Why Choose FitPro?
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Experience the perfect blend of expert guidance, premium equipment, and a motivating atmosphere
            to achieve your fitness goals.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`hover-card rounded-2xl overflow-hidden ${
                theme === 'dark' ? 'bg-gray-800' : 'bg-white'
              } shadow-xl`}
            >
              <div className="image-zoom h-48">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className={`rounded-full w-12 h-12 flex items-center justify-center mb-4 ${
                  theme === 'dark' ? 'gradient-purple' : 'bg-purple-100'
                }`}>
                  <div className={theme === 'dark' ? 'text-white' : 'text-purple-600'}>
                    {feature.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {feature.title}
                </h3>
                <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                  {feature.description}
                </p>
                <a 
                  href="#" 
                  className={`arrow-link inline-block mt-4 ${
                    theme === 'dark' ? 'text-purple-400' : 'text-purple-600'
                  }`}
                >
                  Learn more
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;