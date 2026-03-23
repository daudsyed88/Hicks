import React from 'react';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-on-surface rounded flex items-center justify-center">
            <span className="font-display font-bold text-xl text-background">H</span>
          </div>
          <span className="font-display font-bold text-2xl tracking-tight text-on-surface">
            Hicks
          </span>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-on-surface hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Services</a>
          <a href="#gallery" className="text-on-surface hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Atmosphere</a>
          <a href="#location" className="text-on-surface hover:text-primary transition-colors text-sm font-medium uppercase tracking-wide">Location</a>
          <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="bg-on-surface text-background px-6 py-2.5 font-bold uppercase tracking-wide text-sm rounded hover:bg-primary transition-colors">
            Book Appointment
          </a>
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden text-on-surface hover:text-primary transition-colors">
          <Menu className="w-6 h-6" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
