const reviews = [
    { name: "Vera", role: "Regular Client", text: "The best curly haircut I've ever had. They treat your curls with absolute love." },
    { name: "Natali", role: "Regular Client", text: "Luxury vibe you can actually afford. The space feels premium and smells fresh." },
    { name: "Lana", role: "Regular Client", text: "Incredibly professional. The peppermint scalp treatment is an absolute dream." },
  ];
  
  export default function Reviews() {
    return (
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 items-center">
        {/* Left Column: Model Image Frame */}
        <div className="md:col-span-5 h-[500px] bg-brand-gold/10 rounded-[2rem] overflow-hidden shadow-md">
          <img 
            src="/lady-beauty.jpeg" 
            alt="Satisfied client" 
            className="w-full h-full object-cover grayscale-[15%]"
          />
        </div>
  
        {/* Right Column: Floating Testimonial Cards */}
        <div className="md:col-span-7 space-y-8">
          <div className="space-y-3">
            <h2 className="text-4xl font-display text-brand-forest font-medium">Reviews</h2>
            <div className="w-16 h-[2px] bg-brand-gold/40"></div>
          </div>
  
          <div className="grid sm:grid-cols-3 gap-4">
            {reviews.map((rev, i) => (
              <div key={i} className="bg-white border font-brand border-brand-gold/10 rounded-2xl p-6 flex flex-col justify-between shadow-sm">
                <p className="text-brand-muted text-[11px] leading-relaxed italic">"{rev.text}"</p>
                <div className="mt-4 pt-4 border-t border-brand-bg flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-xs font-bold text-brand-forest">
                    {rev.name[0]}
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-brand-dark">{rev.name}</h4>
                    <span className="text-[10px] text-brand-muted block">{rev.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }