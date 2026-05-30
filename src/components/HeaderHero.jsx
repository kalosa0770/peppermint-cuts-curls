import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; 
import { motion, AnimatePresence } from 'framer-motion';

export default function HeaderHero() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Gallery', href: '#lookbook' },
    { name: 'About', href: '#about' },
  ];

  return (
    <div className="relative min-h-screen bg-brand-gold/30 text-brand-dark overflow-hidden">
      
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'top-0 bg-brand-bg/95 backdrop-blur-md border-b border-brand-gold/20 py-3 shadow-sm' 
          : 'top-0 md:top-6 bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center group">
            <img 
              src="/ppm-logo.svg" 
              alt="Peppermint Cuts & Curls Logo" 
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
            />
          </a>

          <div className="hidden md:flex items-center font-brand gap-8 text-xs tracking-widest uppercase font-medium">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`transition-colors duration-200 ${
                  isScrolled 
                    ? 'text-brand-dark hover:text-brand-forest' 
                    : 'text-white md:text-brand-dark hover:text-brand-gold'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking" 
              className={`px-6 py-2.5 rounded-full transition-all duration-300 text-xs tracking-widest uppercase font-semibold border ${
                isScrolled
                  ? 'border-brand-forest text-brand-forest hover:bg-brand-forest hover:text-brand-bg'
                  : 'border-brand-dark bg-brand-dark md:bg-transparent text-brand-bg md:text-brand-dark hover:bg-brand-dark hover:text-brand-bg'
              }`}
            >
              Book Now
            </a>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-brand-dark focus:outline-none p-1"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="absolute top-full left-0 right-0 bg-brand-bg/98 backdrop-blur-xl border-b border-brand-gold/20 py-6 px-6 flex flex-col gap-4 md:hidden shadow-xl"
            >
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-brand-dark hover:text-brand-forest py-2 text-sm tracking-wider uppercase font-medium transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#booking" 
                onClick={() => setIsOpen(false)}
                className="bg-brand-forest text-brand-bg text-center py-3.5 rounded-full text-sm font-medium tracking-wide active:bg-brand-forest/90 transition-colors mt-2 uppercase text-xs font-semibold tracking-widest"
              >
                Book Now
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <div className="absolute inset-0 z-0">
        <img
          src="./hero.png"
          alt="Couture curl styling showcase"
          className="w-full h-full object-cover object-top opacity-70"
        />
        <div className="absolute inset-0" />
      </div>

      <div className="relative z-20 max-w-6xl mx-auto w-full min-h-screen flex flex-col justify-end md:justify-center px-6 pt-32 pb-16 md:pt-0 md:pb-0">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-lg md:max-w-xl"
        >
          <div className="space-y-1">
            <h1 className="text-4xl md:text-6xl font-display tracking-tight leading-[1.1]  text-white">
            Luxurious <br />Hair For You
            </h1>
          </div>
          
          <p className="md:text-brand-muted text-white text-sm md:text-base font-brand leading-relaxed max-w-sm">
          Schedule an appointment online for an hair treatment. The salon has comfortable seats and modern music.
          </p>
          
          <div className="pt-3">
            <a
              href="#booking"
              className="inline-block bg-brand-gold hover:bg-brand-forest text-brand-bg px-10 py-3.5 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 ease-out shadow-sm hover:shadow-lg transform hover:-translate-y-0.5 font-brand"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>

    </div>
  );
}