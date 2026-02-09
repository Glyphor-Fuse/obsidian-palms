import { useState, useEffect } from 'react';
import { Hero } from '@/components/Hero';
import { AtmosphereShift } from '@/components/AtmosphereShift';
import { SanctuaryGrid } from '@/components/SanctuaryGrid';
import { Footer } from '@/components/Footer';

const Index = () => {
  const [isNight, setIsNight] = useState(false);

  // Toggle night mode class on document for global CSS variable shifts
  useEffect(() => {
    if (isNight) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isNight]);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero isNight={isNight} onToggle={() => setIsNight(!isNight)} />
      
      <div className="relative z-0">
        <AtmosphereShift isNight={isNight} />
        
        <SanctuaryGrid />
        
        <section className="bg-primary text-primary-foreground py-24 md:py-32">
          <div className="container px-6 text-center space-y-8">
            <h2 className="text-4xl md:text-7xl font-display font-black uppercase tracking-tighter max-w-4xl mx-auto leading-none">
              Witness the <br /> intersection of <span className="italic text-accent">raw jungle</span> & refined design.
            </h2>
            <p className="text-lg md:text-xl font-light opacity-80 max-w-2xl mx-auto uppercase tracking-widest">
              Limited to 24 Guests. Infinite Experiences.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
};

export default Index;
