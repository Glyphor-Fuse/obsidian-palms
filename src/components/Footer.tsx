import React from 'react';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border pt-24 pb-12">
      <div className="container px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-5 space-y-8">
            <h2 className="text-4xl font-display font-black uppercase tracking-tighter leading-none">
              Stay in the <br /> Shadow.
            </h2>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="flex-1 bg-transparent border-b border-border py-4 focus:outline-none focus:border-primary transition-colors text-xs tracking-widest"
              />
              <button className="px-8 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-[0.2em]">
                Join
              </button>
            </div>
          </div>
          
          <div className="md:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Company</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Experience</h4>
              <ul className="space-y-2 text-sm font-medium">
                <li><a href="#" className="hover:text-primary transition-colors">Beach Club</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Wellness</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Private Events</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground">Social</h4>
              <div className="flex gap-4">
                <Instagram className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
                <Facebook className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
                <Twitter className="h-5 w-5 cursor-pointer hover:text-primary transition-colors" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-8 border-t border-border pt-12 text-[10px] font-medium text-muted-foreground tracking-widest uppercase">
          <p>© 2024 Obsidian Palms Tulum. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
          <p>Adults Only (21+)</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
