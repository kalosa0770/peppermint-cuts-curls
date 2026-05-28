import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex flex-col justify-end md:justify-center md:items-center bg-brand-bg pt-24 md:pb-0 px-6 overflow-hidden">
      
      {/* --- ASYMMETRIC HALF-SCREEN BACKGROUND IMAGE LAYER --- */}
      <div className="absolute top-0 bottom-0 right-0 w-full md:w-1/2 z-0">
        <img 
          src="./hero.png" 
          alt="Premium hair styling showcase background"
          className="w-full h-full object-cover object-center opacity-100 md:opacity-100 mix-blend-multiply" 
        />
        {/* Mobile: Full vertical gradient to protect text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-bg/90 via-brand-bg/40 to-brand-bg md:hidden" />
        
        {/* Desktop: Elegant horizontal gradient that transitions the image smoothly into the brand bg */}
        <div className="hidden md:block absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-brand-bg to-transparent" />
        <div className="hidden md:block absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-brand-bg/20 to-transparent" />
      </div>

      {/* --- STATIC BRAND ACCENTS & MIRRORED DOT PATTERNS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        
        {/* TOP LEFT: Soft atmospheric green glow & dot matrix */}
        <div className="absolute -top-16 -left-16 w-[300px] h-[300px] bg-brand-forest/10 rounded-full blur-[60px]" />
        <div className="absolute top-12 left-12 grid grid-cols-5 gap-3 opacity-40">
          {[...Array(25)].map((_, i) => (
            <div 
              key={`tl-${i}`} 
              className={`w-1.5 h-1.5 rounded-full ${
                i % 3 === 0 ? 'bg-brand-forest' : 'bg-brand-gold/60'
              }`} 
            />
          ))}
        </div>
        <div className="absolute top-36 left-36 w-3 h-3 rounded-full bg-brand-forest/30" />
        <div className="absolute top-40 left-32 w-2 h-2 rounded-full bg-brand-gold/40" />

        {/* BOTTOM RIGHT: Mirrored soft gold glow & dot matrix */}
        <div className="absolute -bottom-16 -right-16 w-[300px] h-[300px] bg-brand-gold/10 rounded-full blur-[60px]" />
        <div className="absolute bottom-12 right-12 grid grid-cols-5 gap-3 opacity-40">
          {[...Array(25)].map((_, i) => (
            <div 
              key={`br-${i}`} 
              className={`w-1.5 h-1.5 rounded-full ${
                i % 3 === 0 ? 'bg-brand-forest' : 'bg-brand-gold/60'
              }`} 
            />
          ))}
        </div>
        <div className="absolute bottom-36 right-36 w-2 h-2 rounded-full bg-brand-forest/40" />
        <div className="absolute bottom-32 right-40 w-3 h-3 rounded-full bg-brand-gold/30" />

      </div>
      {/* --------------------------------------------------- */}

      {/* FOREGROUND WORKSPACE CONTAINER */}
      <div className="max-w-6xl mx-auto w-full relative z-20">
        
        {/* Text & Content Left Column Layer */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-lg bg-brand-bg/90 p-6 rounded-[2rem] shadow-2xl shadow-brand-gold/10"
        >
          <h1 className="text-5xl md:text-6xl font-display tracking-tight leading-[1.1] text-brand-dark uppercase">
            Luxurious <br />
            <span className="font-normal font-brand tracking-wide text-brand-forest block text-4xl md:text-5xl mt-1">
              Hair For You
            </span>
          </h1>
          <p className="text-brand-muted text-sm font-brand leading-relaxed max-w-sm">
            Schedule an appointment online for an hair treatment. The salon has comfortable seats and modern music.
          </p>
          <div className="pt-2">
            <a
              href="#booking"
              className="inline-block bg-brand-forest hover:bg-brand-gold text-white px-10 py-3 rounded-full text-xs uppercase tracking-widest font-semibold transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-brand-forest/10"
            >
              Contact Us
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}