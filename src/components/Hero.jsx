import React from 'react';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-32 pb-24 flex items-center bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Column - Text */}
        <div className="space-y-8 order-2 lg:order-1">
          <div className="space-y-4">
            <h2 className="text-primary font-bold tracking-widest uppercase text-sm">Welcome to Hicks Men Salon</h2>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-on-surface leading-tight">
              Grooming in a <br/> Warm Retreat.
            </h1>
          </div>
          
          <p className="font-body text-lg text-on-surface-variant leading-relaxed max-w-lg">
            Experience traditional barbering and premium treatments in our relaxing, wood-accented studio. Precision cuts, expert beard styling, and a welcoming atmosphere.
          </p>
          
          <div className="pt-4 flex flex-col sm:flex-row items-center gap-6">
            <a href="https://wa.me/923001234567" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-on-surface text-background rounded px-10 py-4 font-bold uppercase tracking-wide text-sm text-center hover:bg-primary transition-colors soft-shadow">
              Book Your Visit
            </a>
            <a href="#services" className="w-full sm:w-auto text-on-surface px-10 py-4 font-bold uppercase tracking-wide text-sm text-center border-2 border-outline rounded hover:border-primary hover:text-primary transition-colors">
              Our Services
            </a>
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative order-1 lg:order-2 mt-8 lg:mt-0">
          <div className="relative z-10 rounded-2xl overflow-hidden soft-shadow border-4 border-surface">
            {/* Using the user's uploaded salon logo/graphic */}
            <img 
              src="/salon4.jpg" 
              alt="Hicks Barber Shop Studio" 
              className="w-full h-[500px] md:h-[600px] object-cover"
            />
          </div>
          {/* Decorative softer offset block representing the warm wood paneling */}
          <div className="absolute -bottom-6 -right-6 w-full h-full bg-surface-high rounded-2xl -z-10"></div>
          {/* Subtle glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-primary/20 rounded-full blur-[100px] -z-20"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
