import { motion } from 'framer-motion';

const services = [
  { num: "01", name: "Custom Haircut", desc: "Includes customized consultation, botanical wash, and blowout styling." },
  { num: "02", name: "Curl Definition", desc: "Hydration treatment and finger-coiling specialized for curl patterns." },
  { num: "03", name: "Luxury Styling", desc: "Bespoke look transformations designed to showcase movement." },
];

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
      {/* Left Column: Vertical Numbered Menu Cards */}
      <div className="md:col-span-7 order-2 md:order-1 space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl font-display text-brand-forest font-medium">Our Services</h2>
          <div className="w-16 h-[2px] bg-brand-gold/40"></div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {services.map((item, i) => (
            <div key={i} className="bg-white border font-brand border-brand-gold/10 rounded-2xl p-6 space-y-4 shadow-sm hover:border-brand-forest/20 transition-colors">
              <span className="text-2xl font-display font-bold text-brand-gold/60 block">{item.num}</span>
              <div>
                <h3 className="text-sm font-semibold text-brand-dark mb-2">{item.name}</h3>
                <p className="text-brand-muted text-[11px] leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Mirror Image Effect Portrait */}
      <div className="md:col-span-5 order-1 md:order-2 h-[500px] bg-brand-gold/10 rounded-[2rem] overflow-hidden shadow-md">
        <img 
          src="/lady-toner2.jpeg" 
          alt="Premium hair treatment model" 
          className="w-full h-full object-cover grayscale-[10%] hover:scale-105 transition-transform duration-700"
        />
      </div>
    </section>
  );
}