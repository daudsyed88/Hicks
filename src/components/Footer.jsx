import React from 'react';
import { Phone, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background pt-20 pb-10 border-t border-outline-variant">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-on-surface rounded flex items-center justify-center">
              <span className="font-display font-bold text-xl text-background">H</span>
            </div>
            <span className="font-display font-bold text-2xl tracking-tight text-on-surface">
              Hicks
            </span>
          </div>
          <p className="font-body text-on-surface-variant text-sm leading-relaxed max-w-sm">
            Fandi Center, Kausar Colony, Bahawalpur. Providing a welcoming, professional grooming experience since our doors opened.
          </p>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-bold text-on-surface mb-6 uppercase tracking-widest text-sm">Contact</h4>
          <ul className="space-y-4 font-body text-sm text-on-surface-variant">
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <a href="tel:0622883145" className="hover:text-primary transition-colors font-semibold">(062) 2883145</a>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors font-semibold">WhatsApp Us</a>
            </li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display font-bold text-on-surface mb-6 uppercase tracking-widest text-sm">Hours</h4>
          <ul className="space-y-4 font-body text-sm text-on-surface-variant">
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center mt-0.5 shrink-0">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div>
                <p className="text-on-surface mb-1 font-bold">Mon - Sat</p>
                <p>11:00 AM - 10:00 PM</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-surface-lowest flex items-center justify-center mt-0.5 shrink-0">
                <Clock className="w-4 h-4 text-surface-high border-surface-container" />
              </div>
              <div>
                <p className="text-on-surface mb-1 font-bold">Sunday</p>
                <p>10:00 AM - 11:00 PM</p>
              </div>
            </li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <h4 className="font-display font-bold text-on-surface mb-6 uppercase tracking-widest text-sm">Find Us</h4>
          <div className="flex gap-4">
            <a href="#" className="flex items-center justify-center px-6 py-2 bg-on-surface hover:bg-primary transition-colors rounded text-background font-bold text-sm shadow-sm">
              Directions
            </a>
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6 border-t border-outline-variant pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-body text-xs text-on-surface-variant font-medium">
          &copy; {new Date().getFullYear()} Hicks Men Salon. All rights reserved.
        </p>
        <p className="font-body text-xs text-on-surface-variant font-medium uppercase tracking-wider">
          Fandi Center, Kausar Colony
        </p>
      </div>
    </footer>
  );
};

export default Footer;
