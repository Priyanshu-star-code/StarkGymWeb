import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTheme } from '../context/ThemeContext';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryItems = [
  {
    type: 'image',
    url: 'https://lh3.googleusercontent.com/p/AF1QipM38-3x8BreO7_frhmzK-gpTGCp1z42jVzb8pUa=w408-h544-k-no',
    title: 'Main Training Area',
    category: 'Facilities'
  },
  {
    type: 'video',
    url: 'https://player.vimeo.com/external/414800265.sd.mp4?s=1e3f5194a8d2feb2afcfec8e92d48c0d1a3b1b1a&profile_id=164&oauth2_token_id=57447761',
    thumbnail: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80',
    title: 'Cardio Zone Tour',
    category: 'Virtual Tour'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1637666062717-1c6bcfa4a4c1?auto=format&fit=crop&q=80',
    title: 'Weight Training Section',
    category: 'Equipment'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80',
    title: 'Yoga Studio',
    category: 'Facilities'
  },
  {
    type: 'video',
    url: 'https://player.vimeo.com/external/414800265.sd.mp4?s=1e3f5194a8d2feb2afcfec8e92d48c0d1a3b1b1a&profile_id=164&oauth2_token_id=57447761',
    thumbnail: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    title: 'Strength Zone Overview',
    category: 'Virtual Tour'
  },
  {
    type: 'image',
    url: 'https://lh3.googleusercontent.com/p/AF1QipM38-3x8BreO7_frhmzK-gpTGCp1z42jVzb8pUa=w408-h544-k-no',
    title: 'Luxury Locker Rooms',
    category: 'Facilities'
  }
];

const categories = ['All', 'Facilities', 'Equipment', 'Virtual Tour'];

const GalleryTour = () => {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedItem, setSelectedItem] = useState<null | typeof galleryItems[0]>(null);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredItems = selectedCategory === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

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
    <section className={`py-20 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`} id="gallery">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className={`text-4xl font-bold mb-4 ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Explore Our Facility
          </h2>
          <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
            Take a virtual tour of our state-of-the-art gym and discover the perfect environment for your fitness journey.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? theme === 'dark'
                    ? 'bg-purple-600 text-white'
                    : 'bg-purple-500 text-white'
                  : theme === 'dark'
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredItems.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group cursor-pointer overflow-hidden rounded-xl"
              onClick={() => setSelectedItem(item)}
            >
              <div className="aspect-w-16 aspect-h-9">
                {item.type === 'image' ? (
                  <img
                    src={item.url}
                    alt={item.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                ) : (
                  <div className="relative">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Play className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                )}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h3 className="text-white text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-300">{item.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl">
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-purple-400 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              
              {selectedItem.type === 'image' ? (
                <img
                  src={selectedItem.url}
                  alt={selectedItem.title}
                  className="w-full h-auto rounded-lg"
                />
              ) : (
                <video
                  controls
                  autoPlay
                  className="w-full h-auto rounded-lg"
                >
                  <source src={selectedItem.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
              
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/60 to-transparent rounded-b-lg">
                <h3 className="text-white text-2xl font-bold mb-2">{selectedItem.title}</h3>
                <p className="text-gray-300">{selectedItem.category}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default GalleryTour;