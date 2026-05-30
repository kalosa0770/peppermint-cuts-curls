import React from 'react';
import { Phone, Clock, MapPin, Zap } from 'lucide-react'; // Zero brand icons imported here now

export default function ContactTopBar() {
  return (
    <div className="bg-brand-forest/60 text-white/90 text-[10px] md:text-[11px] font-sans tracking-widest uppercase border-b border-white/10 relative z-50 hidden sm:block">
      <div className="max-w-6xl mx-auto px-6 py-2 sm:py-0 sm:h-10 flex sm:flex-row justify-between items-center gap-2 sm:gap-0">
        
        {/* Left Side: Operations Info & Location */}
        <div className="flex flex-col sm:flex-row items-center gap-1.5 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <Zap className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>shinondonatasha@gmail.com</span>
          </div>
          
          <div className="hidden md:flex items-center gap-2">
            <MapPin className="w-3.5 h-3.5 text-brand-gold shrink-0" />
            <span>+260977819811</span>
          </div>
        </div>

        {/* Right Side: Direct Communication & Social Links */}
        <div className="flex items-center gap-4 sm:gap-6">

          {/* Pure SVG Layouts (100% build-safe) */}
          <div className="flex items-center gap-4">
            {/* Inline Instagram SVG */}
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-brand-gold transition-colors duration-200 p-0.5 block"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
            </a>

            {/* Inline Facebook SVG */}
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-brand-gold transition-colors duration-200 p-0.5 block"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}