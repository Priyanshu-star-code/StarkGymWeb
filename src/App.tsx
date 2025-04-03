import React, { useEffect, Suspense } from 'react';
import { useTheme } from './context/ThemeContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Classes from './components/Classes';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Trainers from './components/Trainers';
import GalleryTour from './components/GalleryTour';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import { motion, useScroll, useSpring } from 'framer-motion';

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="relative w-20 h-20">
      <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-200 rounded-full"></div>
      <div className="absolute top-0 left-0 w-full h-full border-4 border-purple-500 rounded-full animate-spin border-t-transparent"></div>
    </div>
  </div>
);

function App() {
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('active');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={theme === 'dark' ? 'bg-black' : 'bg-gray-50'}>
      <ScrollProgress />
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-purple-500 transform origin-left z-50"
        style={{ scaleX }}
      />
      <Suspense fallback={<LoadingSpinner />}>
        <Navbar />
        <Hero />
        <Features />
        <Classes />
        <GalleryTour />
        <Pricing />
        <Testimonials />
        <Trainers />
        <CallToAction />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;