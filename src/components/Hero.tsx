import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Calendar, Users, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroProps {
  isNight: boolean;
  onToggle: () => void;
}

export const Hero = ({ isNight, onToggle }: HeroProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-background">
      {/* Background Image Transition */}
      <AnimatePresence mode="wait">
        <motion.div
          key={isNight ? 'night' : 'day'}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <img
            src={isNight ? '/images/hero-night.png' : '/images/hero-day.png'}
            alt="Obsidian Palms Resort"
            className="h-full w-full object-cover brightness-[0.7] dark:brightness-[0.5]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background" />
        </motion.div>
      </AnimatePresence>

      {/* Navigation & Toggle */}
      <nav className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-6 md:p-10">
        <div className="text-2xl font-display font-bold tracking-tighter text-white uppercase">
          Obsidian Palms
        </div>
        <div className="flex items-center gap-6">
          <button 
            onClick={onToggle}
            className="group relative flex items-center gap-2 overflow-hidden rounded-full bg-white/10 px-4 py-2 backdrop-blur-md border border-white/20 transition-all hover:bg-white/20"
          >
            <motion.div
              animate={{ rotate: isNight ? 180 : 0 }}
              transition={{ type: 'spring', stiffness: 200 }}
            >
              {isNight ? <Moon className="h-4 w-4 text-accent" /> : <Sun className="h-4 w-4 text-yellow-400" />}
            </motion.div>
            <span className="text-xs font-medium uppercase tracking-widest text-white">
              {isNight ? 'Shadow Mode' : 'Sun Mode'}
            </span>
          </button>
          <Button variant="outline" className="hidden md:flex border-white text-white hover:bg-white hover:text-black rounded-none uppercase tracking-widest text-[10px]">
            The Guide
          </Button>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="max-w-4xl"
        >
          <h1 className="mb-6 font-display text-5xl font-black uppercase tracking-tighter text-white md:text-8xl lg:text-9xl leading-[0.85]">
            {isNight ? 'Darkness \n Defined' : 'Light \n Perfected'}
          </h1>
          <p className="mx-auto max-w-lg text-lg text-white/80 md:text-xl font-light">
            An adults-only sanctuary where the edge of the jungle meets the silence of the obsidian sea.
          </p>
        </motion.div>
      </div>

      {/* Booking Bar */}
      <div className="absolute bottom-10 left-1/2 z-20 w-[90%] -translate-x-1/2 md:w-auto">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center gap-4 rounded-none bg-background p-2 shadow-2xl md:flex-row md:gap-0 md:divide-x md:divide-border border border-border"
        >
          <div className="flex w-full items-center gap-3 px-6 py-4 md:w-64">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Check In</span>
              <span className="text-sm font-medium">12 Oct 2024</span>
            </div>
          </div>
          <div className="flex w-full items-center gap-3 px-6 py-4 md:w-64">
            <Users className="h-4 w-4 text-muted-foreground" />
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Guests</span>
              <span className="text-sm font-medium">2 Adults</span>
            </div>
          </div>
          <Button className="h-full w-full rounded-none bg-primary px-10 py-8 text-sm uppercase tracking-[0.2em] transition-all hover:bg-primary/90 md:w-auto">
            Book Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
