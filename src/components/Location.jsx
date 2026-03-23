import React from 'react';
import { MapPin } from 'lucide-react';

const Location = () => {
  return (
    <section id="location" className="py-24 bg-surface-low relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 order-2 lg:order-1">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Where To Find Us</h2>
            <h3 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-6">Fandi Center.</h3>
            
            <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-8">
              Located in the heart of Bahawalpur, Hicks Men Salon is designed to offer a retreat from the city's rush. A place where traditional barbering meets contemporary comfort.
            </p>
            
            <div className="flex items-start gap-4 p-8 bg-surface rounded-2xl soft-shadow subtle-border">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex justify-center items-center shrink-0">
                <MapPin className="text-primary" />
              </div>
              <div>
                <h4 className="font-bold text-lg text-on-surface mb-2">Address</h4>
                <p className="text-on-surface-variant leading-relaxed">
                  Fandi Center, Kausar Colony<br />
                  Bahawalpur, Punjab<br />
                  Pakistan
                </p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 soft-shadow subtle-border relative rounded-2xl overflow-hidden bg-surface-lowest">
            <div className="relative w-full pb-[75%] sm:pb-[60%] lg:pb-[100%] h-0">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13963.811568205463!2d71.66699131650893!3d29.4005086782433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b91a7c5c56783%3A0x67ee1c55bcaf0dcb!2sKausar%20Colony%2C%20Bahawalpur%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s" 
                className="absolute top-0 left-0 w-full h-full border-0"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps Location for Hicks Bahawalpur"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;
