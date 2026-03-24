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
                src="https://maps.google.com/maps?q=Hicks%20Men%20Salon,%20Kausar%20Colony,%20Bahawalpur&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                className="absolute top-0 left-0 w-full h-full border-0 rounded-2xl"
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
