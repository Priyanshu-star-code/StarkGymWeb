import React from 'react';
import { Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const plans = [
  {
    name: 'Basic',
    price: '29',
    duration: 'month',
    features: [
      'Access to gym facilities',
      '2 group classes per week',
      'Basic fitness assessment',
      'Locker room access',
    ],
    isPopular: false,
    discount: '20% off first 3 months',
  },
  {
    name: 'Pro',
    price: '59',
    duration: 'month',
    features: [
      'Unlimited gym access',
      'Unlimited group classes',
      'Personal trainer (2x/month)',
      'Nutrition consultation',
      'Access to all facilities',
      'Free protein shake/day',
    ],
    isPopular: true,
    discount: '30% off first 3 months',
  },
  {
    name: 'Elite',
    price: '99',
    duration: 'month',
    features: [
      'All Pro features',
      'Unlimited personal training',
      'Monthly massage session',
      'Customized meal plans',
      'Private locker',
      'Guest passes (2/month)',
    ],
    isPopular: false,
    discount: '25% off first 3 months',
  },
];

const Pricing = () => {
  const { theme } = useTheme();

  return (
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`} id="membership">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Membership Plans
          </h2>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Choose the perfect plan that fits your fitness journey. Join now and get exclusive new member discounts!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative ${
                theme === 'dark'
                  ? 'bg-gray-800 hover:bg-gray-700'
                  : 'bg-white hover:bg-gray-50 shadow-lg'
              } rounded-2xl p-8 transform hover:-translate-y-2 transition-all duration-300 ${
                plan.isPopular ? 'ring-2 ring-purple-500' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}>
                  {plan.name}
                </h3>
                <div className="flex items-center justify-center mb-2">
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>$</span>
                  <span className={`text-5xl font-bold ${
                    theme === 'dark' ? 'text-white' : 'text-gray-900'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}>
                    /{plan.duration}
                  </span>
                </div>
                <p className="text-purple-500 font-semibold">{plan.discount}</p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-purple-500 mr-3" />
                    <span className={theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-3 px-6 rounded-full ${
                theme === 'dark'
                  ? 'bg-purple-600 hover:bg-purple-700'
                  : 'bg-purple-500 hover:bg-purple-600'
              } text-white font-semibold transition-colors duration-300`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;