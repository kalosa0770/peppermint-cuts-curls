import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, Star, ChevronDown, Phone, Mail } from 'lucide-react';

export default function Contact() {
  const [showHours, setShowHours] = useState(false);

  const regularHours = [
    { days: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { days: 'Saturday', time: '9:00 AM - 4:00 PM' },
    { days: 'Sunday', time: 'Closed' },
  ];

  return (
    <section id="booking" className="py-20 px-6 bg-brand-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-12 items-center">
        
        {/* LEFT COLUMN: Editorial Text Intro */}
        <div className="md:col-span-5 space-y-4">
          <h2 className="text-4xl font-display text-brand-forest uppercase tracking-tight leading-tight">
            Luxury <br /> You can afford
          </h2>
          <p className="text-brand-muted font-brand text-sm leading-relaxed max-w-sm">
            Experience premium hair treatments tailored specifically to your unique texture and lifestyle. Walk-ins are welcome, but appointments guarantee your flawless slot.
          </p>
        </div>

        {/* RIGHT COLUMN: Replicating Screenshot 2026-05-28 144523.png Structure */}
        <div className="md:col-span-7 flex justify-center md:justify-end">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-md bg-white rounded-3xl border border-brand-gold/15 p-8 shadow-xl shadow-brand-forest/5"
          >
            {/* Salon Title Block */}
            <div className="space-y-2">
              <h3 className="text-3xl font-display font-display font-bold tracking-tight text-brand-dark">
                Peppermint <br />
                <span className="text-brand-forest font-brand font-normal italic">Cuts & Curls</span>
              </h3>
              
              {/* Star Rating Line */}
              <div className="flex items-center gap-1.5 pt-1">
                <span className="text-sm font-bold text-brand-dark">4.9</span>
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-brand-muted font-medium ml-1">(132 reviews)</span>
              </div>
            </div>

            {/* Core Primary Action Button */}
            <div className="mt-6 mb-8">
              <a 
                href="#booking-engine"
                className="block w-full text-center font-brand bg-brand-forest hover:bg-brand-gold text-white font-medium text-sm py-4 rounded-full transition-all duration-300 shadow-md shadow-brand-forest/10 hover:-translate-y-0.5"
              >
                Book now
              </a>
            </div>

            {/* Divider Line */}
            <div className="border-t border-gray-100 my-6" />

            {/* Informational Rows Container */}
            <div className="space-y-5 text-sm text-brand-dark">
              
              {/* Row 1: Interactive Business Hours */}
              <div className="relative">
                <button 
                  onClick={() => setShowHours(!showHours)}
                  className="flex items-start gap-3 font-brand w-full text-left group focus:outline-none"
                >
                  <Clock className="w-5 h-5 text-brand-forest shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="flex items-center gap-1.5">
                      <span className="text-red-600 font-semibold">Closed</span>
                      <span className="text-brand-muted">— opens at 9:00 AM</span>
                      <ChevronDown className={`w-4 h-4 text-brand-muted transition-transform duration-300 ml-auto ${showHours ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                </button>

                {/* Animated Dropdown Expansion for Business Hours */}
                <AnimatePresence>
                  {showHours && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="overflow-hidden pl-8 mt-2 space-y-1 text-xs text-brand-muted"
                    >
                      {regularHours.map((item, idx) => (
                        <div key={idx} className="flex justify-between max-w-[250px] py-0.5">
                          <span>{item.days}:</span>
                          <span className="font-medium text-brand-dark">{item.time}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Row 2: Location Map Block */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-forest font-brand shrink-0 mt-0.5" />
                <div>
                  <p className="leading-relaxed font-brand">
                    ibex 88 extension Salama park shop no: 6, <br />
                    lusaka, zambia
                  </p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-block text-brand-forest font-brand font-semibold text-xs mt-1 underline decoration-brand-gold/40 hover:text-brand-gold transition-colors"
                  >
                    Get directions
                  </a>
                </div>
              </div>

              {/* Secondary Contacts for Complete UI Utility */}
              <div className="flex items-center gap-3 pt-1 font-brand">
                <Phone className="w-5 h-5 text-brand-forest font-brand shrink-0" />
                <a href="tel:+260977819811" className="hover:text-brand-forest transition-colors">+260977819811</a>
              </div>

            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}