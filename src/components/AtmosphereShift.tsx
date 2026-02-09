import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Music, Star, Waves } from 'lucide-react';

interface AtmosphereShiftProps {
  isNight: boolean;
}

export const AtmosphereShift = ({ isNight }: AtmosphereShiftProps) => {
  const content = isNight ? {
    title: "Shadow Hour",
    description: "As the sun dips below the Caribbean horizon, Obsidian Palms transforms. The air thickens with curated deep-house, and our mixologists pivot to the 'Dark Alchemy' menu.",
    features: [
      { icon: Music, label: "Midnight Pulse", desc: "Curated tech-house and ambient beats." },
      { icon: GlassWater, label: "Dark Alchemy", desc: "Smoked mezcal and obsidian-infused spirits." },
    ],
    image: "/images/night-vibe.png"
  } : {
    title: "Solar Zenith",
    description: "Bathed in pure Mayan gold. The day is defined by architectural stillness, rhythmic waves, and the scent of wild sea salt. A masterclass in minimalist relaxation.",
    features: [
      { icon: Waves, label: "Still Water", desc: "Infinity pools that mirror the morning sky." },
      { icon: GlassWater, label: "Pure Botanicals", desc: "Cold-pressed jungle fruits and herbal elixirs." },
    ],
    image: "/images/day-vibe.png"
  };

  return (
    <section className="bg-background py-24 md:py-40 overflow-hidden">
      <div className="container px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            key={isNight ? 'night-text' : 'day-text'}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60">
                The Shift
              </span>
              <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter leading-none">
                {content.title}
              </h2>
            </div>
            
            <p className="text-xl text-muted-foreground font-light leading-relaxed max-w-xl">
              {content.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-8 border-y border-border">
              {content.features.map((f, i) => (
                <div key={i} className="space-y-2">
                  <f.icon className="h-6 w-6 text-primary" />
                  <h4 className="font-bold uppercase tracking-widest text-xs">{f.label}</h4>
                  <p className="text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-4 group">
              <span className="font-bold uppercase tracking-widest text-xs">Explore the Menu</span>
              <div className="h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                <ArrowRight className="h-4 w-4" />
              </div>
            </button>
          </motion.div>

          <motion.div
            key={isNight ? 'night-img' : 'day-img'}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative aspect-[4/5] overflow-hidden bg-muted"
          >
            <img 
              src={content.image} 
              alt="Atmosphere"
              className="w-full h-full object-cover grayscale-[0.2] hover:scale-105 transition-transform duration-1000"
            />
            <div className="absolute inset-0 border-[20px] border-background/20 pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AtmosphereShift;
