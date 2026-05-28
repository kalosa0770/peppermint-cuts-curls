import { motion } from 'framer-motion';

const galleryItems = [
  { id: 1, img: "/lady-washing-hair2.jpeg", alt: "Vibrant multi-tonal sleek hair" },
  { id: 2, img: "/lady-toner.jpeg", alt: "Classic sharp bob cut" },
  { id: 3, img: "/lady-toner2.jpeg", alt: "Long luxurious dark waves" },
  { id: 4, img: "/lady-toner3.jpeg", alt: "Soft texture framing fringe" },
  { id: 5, img: "/lady-toner-4.jpeg", alt: "Bold vibrant magenta styling" },
  { id: 6, img: "/lady-washing-hair.jpeg", alt: "Defined high-glow rich curls" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Lookbook() {
  return (
    <section id="lookbook" className="py-24 bg-brand-bg px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full grid md:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Massive Editorial Anchor Portrait as per Screenshot 2026-05-28 131644.png */}
        <div className="md:col-span-5 flex justify-center md:justify-start">
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full max-w-[420px] aspect-[4/5]"
          >
            <img 
              src="maniquie2.jpeg" 
              alt="Editorial main portrait lookbook"
              className="w-full h-full object-cover rounded-b-[40px]" 
            />
          </motion.div>
        </div>

        {/* Right Column: Title + 3x2 Grid Panel */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start space-y-8">
          
          {/* Section Header */}
          <div className="w-full text-center md:text-left">
            <h2 className="text-4xl font-display tracking-tight text-brand-forest font-medium">
              Our Gallery
            </h2>
          </div>

          {/* 3x2 Image Grid with Custom Rounding to match the file asset */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-3 gap-4 w-full max-w-[500px]"
          >
            {galleryItems.map((item) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                whileHover={{ scale: 1.04, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="aspect-square w-full relative bg-white rounded-[24px] overflow-hidden shadow-sm border border-brand-gold/5 cursor-pointer group"
              >
                <img 
                  src={item.img} 
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle overlay effect on hover */}
                <div className="absolute inset-0 bg-brand-forest/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Centered/Aligned Call to Action Button */}
          <div className="w-full flex justify-center md:justify-start pt-2">
            <button className="bg-brand-forest font-brand text-white hover:bg-brand-gold px-12 py-3 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 transform hover:-translate-y-0.5 shadow-md shadow-brand-forest/15">
              View All
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}