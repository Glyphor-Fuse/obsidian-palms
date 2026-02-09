import React from 'react';
import { motion } from 'framer-motion';

const rooms = [
  {
    title: "Obsidian Suite",
    size: "120 m²",
    img: "/images/room-1.png",
    col: "col-span-12 md:col-span-8",
    row: "row-span-1"
  },
  {
    title: "Jungle Loft",
    size: "85 m²",
    img: "/images/room-2.png",
    col: "col-span-12 md:col-span-4",
    row: "row-span-2"
  },
  {
    title: "Garden Sanctuary",
    size: "95 m²",
    img: "/images/room-3.png",
    col: "col-span-12 md:col-span-4",
    row: "row-span-1"
  },
  {
    title: "Ocean Brutal",
    size: "150 m²",
    img: "/images/room-4.png",
    col: "col-span-12 md:col-span-4",
    row: "row-span-1"
  }
];

export const SanctuaryGrid = () => {
  return (
    <section className="bg-background py-24 border-t border-border">
      <div className="container px-6">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase tracking-tighter">
              The Sanctuaries
            </h2>
            <p className="text-muted-foreground font-light max-w-md">
              A collection of curated spaces designed for absolute sensory deprivation and ultimate rest.
            </p>
          </div>
          <div className="flex gap-4">
            <button className="text-xs font-bold uppercase tracking-widest border-b-2 border-primary pb-1">
              View All Suites
            </button>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4 md:gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {rooms.map((room, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative overflow-hidden bg-muted ${room.col} ${room.row}`}
            >
              <img 
                src={room.img} 
                alt={room.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
              <div className="absolute bottom-0 left-0 p-8 w-full flex justify-between items-end">
                <div className="text-white">
                  <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">{room.size}</p>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tighter">{room.title}</h3>
                </div>
                <div className="h-12 w-12 border border-white/20 rounded-full flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all">
                  +
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SanctuaryGrid;
