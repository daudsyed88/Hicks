import React from 'react';

const Gallery = () => {
  const images = [
    { src: '/salon1.jpg', alt: 'Warm Barber Interior 1' },
    { src: '/salon2.jpg', alt: 'Warm Barber Interior 2' },
    { src: '/salon3.jpg', alt: 'Warm Barber Interior 3' },
  ];

  return (
    <section id="gallery" className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">The Atmosphere</h2>
          <h3 className="font-display text-4xl font-bold text-on-surface">A Relaxing Retreat.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-2xl soft-shadow subtle-border">
            <img 
              src={images[0].src} 
              alt={images[0].alt} 
              className="w-full h-full min-h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
          <div className="md:col-span-4 relative group overflow-hidden rounded-2xl soft-shadow subtle-border">
            <img 
              src={images[1].src} 
              alt={images[1].alt} 
              className="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="md:col-span-4 relative group overflow-hidden rounded-2xl soft-shadow subtle-border">
            <img 
              src={images[2].src} 
              alt={images[2].alt} 
              className="w-full h-full min-h-[300px] object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
