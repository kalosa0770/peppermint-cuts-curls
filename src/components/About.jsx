import { motion } from 'framer-motion';
import { Sparkles, Scissors, Wind } from 'lucide-react';

const features = [
  { icon: Sparkles, title: "Premium Care", desc: "Sign up online for a hair treatment with the best masters of the world." },
  { icon: Scissors, title: "Expert Cuts", desc: "Precision cutting techniques tailored completely to your natural texture." },
  { icon: Wind, title: "Botanical Silk", desc: "Invigorating scalp scrubs and deep conditioning masks to restore shine." },
];

export default function About() {
  return (
    <section id="about" className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
      {/* Left Column: Big Editorial Portrait Image */}
      <div className="md:col-span-5 h-[500px] bg-brand-gold/10 rounded-[2rem] overflow-hidden shadow-md">
        <img 
          src="/maniquie.jpeg" 
          alt="Natural texture styling" 
          className="w-full h-full object-cover grayscale-[20%] hover:scale-105 transition-transform duration-700"
        />
      </div>

      {/* Right Column: Text & Card Module Grid */}
      <div className="md:col-span-7 space-y-8">
        <div className="space-y-3">
          <h2 className="text-4xl font-display text-brand-forest font-medium">About Our Salon</h2>
          <div className="w-16 h-[2px] bg-brand-gold/40"></div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4">
          {features.map((feat, i) => (
            <div key={i} className="bg-white border font-brand border-brand-gold/10 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-brand-bg rounded-xl flex items-center justify-center mx-auto mb-4 border border-brand-gold/15">
                <feat.icon className="w-5 h-5 text-brand-forest" />
              </div>
              <h3 className="text-sm font-semibold text-brand-dark mb-2">{feat.title}</h3>
              <p className="text-brand-muted text-[11px] leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}