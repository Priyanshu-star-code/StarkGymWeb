import React from "react";
import { Instagram, Heart } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

// Testimonials with real random images
const testimonials = [
  {
    name: "Marcus Andersen",
    age: "38y",
    info: "Lost 15kg in 1 month",
    beforeImage: "https://images.unsplash.com/photo-1581009137042-c552e485697a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    afterImage: "https://images.unsplash.com/photo-1577221084712-45b0445d2b00?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    instaId: "@marcus.fit",
    summary: "Transformed my life with dedication and proper nutrition. Never felt better!"
  },
  {
    name: "Sarah Johnson",
    age: "29y",
    info: "Lost 5kg in 3 months",
    beforeImage: "https://images.unsplash.com/photo-1585861200869-cf5cd99c18ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    afterImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    instaId: "@sarahj.fitness",
    summary: "Small consistent changes led to big results. The journey continues!"
  },
  {
    name: "Michael Chen",
    age: "35y",
    info: "Lost 10kg in 6 months",
    beforeImage: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    afterImage: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    instaId: "@mike.chen.fit",
    summary: "Sustainable progress through balanced workouts and mindful eating."
  },
  {
    name: "Emma Davis",
    age: "31y",
    info: "Gained 8kg Muscle in 4 months",
    beforeImage: "https://images.unsplash.com/photo-1550345332-09e3ac987658?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    afterImage: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    instaId: "@emma.strong",
    summary: "Focused on strength training and protein intake. Results speak for themselves!"
  },
];

const Testimonials = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section 
      className={`py-20 ${isDark ? "bg-gray-900" : "bg-gray-100"}`} 
      id="testimonials"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl font-bold mb-4 ${isDark ? "text-white" : "text-gray-900"} transition-colors duration-300`}>
            Transformation Stories
          </h2>
          <p className={`${isDark ? "text-gray-400" : "text-gray-600"} max-w-2xl mx-auto transition-colors duration-300`}>
            Real people, real results. Hover to see their incredible before & after journeys.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="flip-card h-96 w-full"
            >
              <div className="flip-card-inner">
                {/* Front Side (After) */}
                <div className="flip-card-front">
                  {/* Real Image */}
                  <img 
                    src={testimonial.afterImage} 
                    alt={`${testimonial.name} after transformation`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "/api/placeholder/500/600"; 
                    }}
                  />
                  
                  {/* Text indicating "AFTER" */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md">
                    AFTER
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-1">{testimonial.name}</h3>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-gray-300 text-sm">{testimonial.age}</p>
                      <p className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">{testimonial.info}</p>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                      <Instagram size={14} className="text-pink-400" />
                      <span>{testimonial.instaId}</span>
                    </div>
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute top-0 left-0 right-0 p-4 flex justify-center">
                    <span className="bg-white bg-opacity-20 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm opacity-0 transform -translate-y-2 transition-all duration-300 hover-indicator">
                      Hover to see before
                    </span>
                  </div>
                </div>

                {/* Back Side (Before) */}
                <div className="flip-card-back">
                  {/* Real Image */}
                  <img 
                    src={testimonial.beforeImage} 
                    alt={`${testimonial.name} before transformation`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "/api/placeholder/500/600"; 
                    }}
                  />
                  
                  {/* Text indicating "BEFORE" */}
                  <div className="absolute top-4 right-4 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-bold shadow-md">
                    BEFORE
                  </div>
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">Before Journey</h3>
                    <p className="text-sm mb-3 italic">{testimonial.summary}</p>
                    <div className="flex items-center space-x-1">
                      <Heart size={14} className="text-red-500" />
                      <span className="text-xs">Inspiring Story</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Animation decorations */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-green-400 to-blue-500 rounded-full opacity-0 glow-effect-1"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-tr from-pink-400 to-purple-500 rounded-full opacity-0 glow-effect-2"></div>
            </div>
          ))}
        </div>

        {/* Additional note */}
        <div className="text-center mt-12">
          <p className={`text-sm ${isDark ? "text-gray-500" : "text-gray-600"}`}>
            Results may vary. All transformations achieved through dedication, proper nutrition and our fitness programs.
          </p>
        </div>
      </div>

      {/* Add complete CSS for flip card effect */}
      <style jsx>{`
        /* The flip card container */
        .flip-card {
          perspective: 1000px;
          border-radius: 0.75rem;
          position: relative;
          transition: transform 0.3s, box-shadow 0.3s;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        }
        
        .flip-card:hover {
          transform: scale(1.05);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
        }

        /* Position the front and back side */
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          border-radius: 0.75rem;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        /* Flip the card on hover */
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }

        /* Position the front and back side */
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          border-radius: 0.75rem;
          overflow: hidden;
          -webkit-backface-visibility: hidden; /* Safari */
          backface-visibility: hidden;
        }

        /* Style the front side */
        .flip-card-front {
          background-color: #fff;
        }

        /* Style the back side */
        .flip-card-back {
          transform: rotateY(180deg);
        }
        
        /* Hover indicator animation */
        .flip-card:hover .hover-indicator {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Glow effects */
        .flip-card:hover .glow-effect-1,
        .flip-card:hover .glow-effect-2 {
          opacity: 0.75;
          filter: blur(8px);
        }
        
        /* Animation for glow effects */
        .glow-effect-1,
        .glow-effect-2 {
          transition: opacity 0.7s ease;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;