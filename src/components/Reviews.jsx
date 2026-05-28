import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const reviews = [
  { name: "Vera", role: "Regular Client", text: "The best curly haircut I've ever had. They treat your curls with absolute love." },
  { name: "Natali", role: "Regular Client", text: "Luxury vibe you can actually afford. The space feels premium and smells fresh." },
  { name: "Lana", role: "Regular Client", text: "Incredibly professional. The peppermint scalp treatment is an absolute dream." },
];

export default function Reviews() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play loop logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Cycles every 5 seconds
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
      
      {/* Left Column: 4.5 Stars Branding Banner */}
      <div className="md:col-span-5 h-auto min-h-[250px] md:min-h-[400px] flex flex-col justify-center items-center text-center bg-brand-gold/10 rounded-[2rem] shadow-sm p-8 border border-brand-gold/5">
        
        {/* SVG Star Matrix */}
        <div className="flex items-center gap-1.5 mb-4">
          {/* 4 Full Stars */}
          {[...Array(4)].map((_, i) => (
            <svg 
              key={i} 
              className="w-6 h-6 text-brand-gold fill-brand-gold" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 24 24"
            >
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
          
          {/* 1 Precise Half Star */}
          <svg 
            className="w-6 h-6 text-brand-gold" 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24"
          >
            <defs>
              <linearGradient id="halfStarGrad">
                <stop offset="50%" stopColor="currentColor" />
                <stop offset="50%" stopColor="transparent" stopOpacity="1" />
              </linearGradient>
            </defs>
            <path 
              fill="url(#halfStarGrad)" 
              stroke="currentColor" 
              strokeWidth="1"
              strokeLinejoin="round"
              d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" 
            />
          </svg>
        </div>

        <h3 className="text-3xl md:text-4xl font-display tracking-tight leading-tight text-brand-dark uppercase">
          <span className="font-normal font-brand tracking-wide text-brand-forest block text-xl md:text-2xl mt-1 normal-case">
            Based on peoples responses
          </span>
        </h3>
      </div>

      {/* Right Column: Animated Slideshow Frame */}
      <div className="md:col-span-7 flex flex-col justify-between h-full min-h-[320px] md:min-h-[350px]">
        
        {/* Section Title */}
        <div className="space-y-3">
          <h2 className="text-4xl font-display text-brand-forest font-medium">Reviews</h2>
          <div className="w-16 h-[2px] bg-brand-gold/40"></div>
        </div>

        {/* Dynamic Card Slot */}
        <div className="relative flex-grow mt-8 min-h-[160px] sm:min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="absolute inset-x-0 bg-white border font-brand border-brand-gold/15 rounded-2xl p-8 flex flex-col justify-between shadow-sm md:max-w-xl"
            >
              <p className="text-brand-muted text-sm md:text-base leading-relaxed italic font-light">
                "{reviews[activeIndex].text}"
              </p>
              
              <div className="mt-6 pt-4 border-t border-brand-bg flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-sm font-bold text-brand-forest">
                  {reviews[activeIndex].name[0]}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-brand-dark">{reviews[activeIndex].name}</h4>
                  <span className="text-xs text-brand-muted block">{reviews[activeIndex].role}</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Navigation Indicator Dots */}
        <div className="flex items-center gap-2.5 mt-8 pl-2">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                activeIndex === idx 
                  ? 'w-8 bg-brand-forest' 
                  : 'w-2 bg-brand-gold/40 hover:bg-brand-forest/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}