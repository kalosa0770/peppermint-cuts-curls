import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // Cleaned up unused Leaf import
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
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
    { name: 'Services', href: '#services' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'About', href: '#about' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-brand-bg/90 backdrop-blur-md border-b border-brand-gold/15 py-3 shadow-sm' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Container - Optimized Scaling */}
        <a href="#" className="flex items-center group">
          <img 
            src="/ppm-logo.svg" 
            alt="Peppermint Cuts & Curls Logo" 
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center font-brand gap-8 text-xs tracking-widest uppercase font-medium">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-brand-muted hover:text-brand-forest transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#booking" 
            className="border border-brand-forest/40 hover:border-brand-forest text-brand-forest px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-brand-forest hover:text-white"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden text-brand-forest focus:outline-none p-1"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 bg-brand-bg/98 backdrop-blur-xl border-b border-brand-gold/15 py-6 px-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-brand-muted hover:text-brand-forest py-2 text-sm tracking-wider uppercase font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#booking" 
              onClick={() => setIsOpen(false)}
              className="bg-brand-forest text-white text-center py-3.5 rounded-full text-sm font-medium tracking-wide active:bg-brand-forest/90 transition-colors mt-2"
            >
              Book Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}