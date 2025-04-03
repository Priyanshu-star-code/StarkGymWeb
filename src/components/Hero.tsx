import React, { useState, useEffect } from 'react';
import { PlayCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const backgroundContent = [
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&q=80',
    position: 'center 30%'
  },
  {
    type: 'video',
    url: 'https://assets.mixkit.co/active_storage/video_items/100548/1725385743/100548-video-720.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&q=80',
    position: 'center'
  },
  {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80',
    position: 'center'
  },
  {
    type: 'video',
    url: 'https://cdn.coverr.co/videos/coverr-doing-deadlifts-4366/1080p.mp4',
    thumbnail: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?auto=format&fit=crop&q=80',
    position: 'center'
  }
];

const SLIDE_DURATION = 12000; // 12 seconds for both images and videos
const TRANSITION_DURATION = 1000; // 1 second transition

const Hero = () => {
  const { theme } = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [videoRefs] = useState<{ [key: number]: HTMLVideoElement | null }>({});

  const handleVideoPlay = async (video: HTMLVideoElement | null) => {
    if (video) {
      try {
        video.currentTime = 0;
        await video.play();
      } catch (error) {
        console.log('Video autoplay failed:', error);
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % backgroundContent.length);
        setNextIndex((prev) => (prev + 1) % backgroundContent.length);
        setIsTransitioning(false);
      }, TRANSITION_DURATION);
    }, SLIDE_DURATION);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentContent = backgroundContent[currentIndex];
    if (currentContent.type === 'video') {
      handleVideoPlay(videoRefs[currentIndex]);
    }
  }, [currentIndex, videoRefs]);

  const renderContent = (content: typeof backgroundContent[0], index: number, isNext: boolean = false) => {
    if (content.type === 'image') {
      return (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isTransitioning ? (isNext ? 'opacity-100' : 'opacity-0') : (isNext ? 'opacity-0' : 'opacity-100')
          }`}
          style={{
            backgroundImage: `url(${content.url})`,
            backgroundSize: 'cover',
            backgroundPosition: content.position,
            zIndex: isNext ? 9 : 10,
            filter: 'blur(2px)',
            transform: 'scale(1.1)'
          }}
        />
      );
    } else {
      return (
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            isTransitioning ? (isNext ? 'opacity-100' : 'opacity-0') : (isNext ? 'opacity-0' : 'opacity-100')
          }`}
          style={{ zIndex: isNext ? 9 : 10 }}
        >
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${content.thumbnail})`,
              backgroundSize: 'cover',
              backgroundPosition: content.position,
              filter: 'blur(2px)',
              transform: 'scale(1.1)'
            }}
          />
          <video
            ref={(el) => {
              videoRefs[index] = el;
              if (el && !isNext) {
                handleVideoPlay(el);
              }
            }}
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              filter: 'blur(2px) brightness(0.9)',
              transform: 'scale(1.1)'
            }}
            muted
            loop
            playsInline
            preload="auto"
          >
            <source src={content.url} type="video/mp4" />
          </video>
        </div>
      );
    }
  };

  return (
    <div className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Content */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-20"></div>
        
        {/* Current Content */}
        {renderContent(backgroundContent[currentIndex], currentIndex)}

        {/* Next Content (preloaded) */}
        {renderContent(backgroundContent[nextIndex], nextIndex, true)}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-30 relative">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            Transform Your Body,
            <br />
            <span className="text-purple-500">Transform Your Life</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fade-in-delay">
            Join our community of fitness enthusiasts and experience
            world-class training with expert coaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-delay-2">
            <button className={`px-8 py-4 ${
              theme === 'dark'
                ? 'bg-purple-600 hover:bg-purple-700'
                : 'bg-purple-500 hover:bg-purple-600'
            } text-white rounded-full transition-all duration-300 transform hover:scale-105`}>
              Start Your Journey
            </button>
            <button className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300">
              <PlayCircle className="w-6 h-6 mr-2" />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      {/* Content Navigation Dots */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {backgroundContent.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-purple-500 w-8'
                : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => {
              setIsTransitioning(true);
              setTimeout(() => {
                setCurrentIndex(index);
                setNextIndex((index + 1) % backgroundContent.length);
                setIsTransitioning(false);
              }, TRANSITION_DURATION);
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;