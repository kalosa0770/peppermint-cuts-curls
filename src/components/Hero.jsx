import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-brand-bg pt-24 px-6 overflow-hidden">
      
      {/* --- STATIC BRAND ACCENTS & MIRRORED DOT PATTERNS --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        
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

      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Left Column: Text & Content */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-lg z-10"
        >
          <h1 className="text-5xl md:text-6xl font-display tracking-tight leading-[1.1] text-[#957345] uppercase">
            Luxurious <br />
            <span className="font-normal font-brand tracking-wide text-brand-dark block text-4xl md:text-5xl mt-1">
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

        {/* Right Column: Modern Asymmetric Editorial Portrait */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full h-[50vh] md:h-[70vh] flex justify-center items-center"
        >
          {/* Flat, offset background solid container block matching the template rhythm */}
          <div className="absolute inset-0 bg-brand-gold/10 rounded-b-[40px] md:rounded-b-[80px] translate-x-3 translate-y-3" />
          
          <img 
            src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=800&q=80" 
            alt="Premium hair styling showcase"
            className="relative z-10 w-full h-full object-cover object-center rounded-b-[40px] md:rounded-b-[80px] shadow-sm"
          />
        </motion.div>

      </div>
    </section>
  );
}