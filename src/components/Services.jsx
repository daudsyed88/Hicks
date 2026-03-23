import React, { useState } from 'react';
import { Scissors, UserCheck, Droplets, Sparkles, Activity, Award } from 'lucide-react';

const categories = [
  {
    id: 'hair',
    title: 'Hair Craft & Styling',
    icon: Scissors,
    items: [
      { name: 'Hair Cut Simple', price: '450' },
      { name: 'Hair Cut (Blow-dry)', price: '500' },
      { name: 'Hair Cut (Styling)', price: '550' },
      { name: 'Fade / Long Hair Cut', price: '650' },
      { name: 'Exclusive Stylist Haircut', price: '550 to 700' },
      { name: 'Head Shave', price: '450' },
      { name: 'Head Trimming', price: '350' },
      { name: 'Head Wash & Conditioning', price: '100 to 200' },
      { name: 'Hair Styling (Simple/Exclusive)', price: '350 to 400' },
      { name: 'Iron for Long Hair', price: '1500' },
      { name: 'Styling with Hair Fiber', price: '650' },
    ]
  },
  {
    id: 'beard',
    title: 'Beard Grooming',
    icon: UserCheck,
    items: [
      { name: 'Shave', price: '350' },
      { name: 'Beard / Faded Beard', price: '350 to 500' },
      { name: 'Beard by Exclusive Stylist', price: '450 to 600' },
      { name: 'Beard Trimming', price: '250' },
      { name: "Beard Dye (Keune/Men's/Loreal)", price: '480 to 1900' },
    ]
  },
  {
    id: 'treatments',
    title: 'Hair Treatments & Color',
    icon: Droplets,
    items: [
      { name: 'Argabeta Treatment', price: '1500' },
      { name: 'Anti-Dandruff Treatment', price: '1500' },
      { name: 'Protein+ Treatment', price: '2500' },
      { name: 'Repair Rescue', price: '3500' },
      { name: 'Keratin (Bio-Tanix / Thermal)', price: 'Varies' },
      { name: 'Hair Dye - Fashion Colour', price: '2000 to 2500' },
      { name: 'Hair Dye - Keune', price: '800+' },
      { name: 'Hair Dye - Loreal', price: '1850+' },
      { name: 'Hair Dye - Framesi', price: '1400+' },
      { name: 'Streaking (Per streak)', price: '1500' },
      { name: 'Streaking (With Cap)', price: '6500' },
    ]
  },
  {
    id: 'skin',
    title: 'Skin Care & Facials',
    icon: Sparkles,
    items: [
      { name: 'Quick Boost Janssen', price: '4700' },
      { name: 'Express Glow Dermalogica', price: '4500' },
      { name: 'Dermalogica Chroma White', price: '7500' },
      { name: 'Dermalogica Age Smart', price: '8500' },
      { name: 'Eveline Pure Control', price: '4500' },
      { name: 'Thalgo Even Skin Tone', price: '6000' },
      { name: 'Janssen Skin Brightening', price: '7950' },
      { name: 'Basic Cleansing Simple', price: '750' },
      { name: 'Basic Cleansing Whitening', price: '2400' },
      { name: 'Face Polish', price: '700' },
    ]
  },
  {
    id: 'body',
    title: 'Body Care & Massage',
    icon: Activity,
    items: [
      { name: 'Scalp Massage (10-15 min)', price: '350 to 400' },
      { name: 'Head & Shoulders Massage', price: '550 to 700' },
      { name: 'Foot Massage/Vibrator', price: '500 to 1000' },
      { name: 'Shower & Refresh (Towel + Wash)', price: '500' },
    ]
  },
  {
    id: 'packages',
    title: 'Groom & Signature Packages',
    icon: Award,
    items: [
      { name: 'Student Package (Haircut+Wash+Trim+Cleans)', price: '1450' },
      { name: 'Smart Package (Hair+Beard+Polish+White)', price: '3300' },
      { name: 'Jobian Package (Hair+Beard+Massage+Polish)', price: '1400' },
      { name: 'Silver Groom Package (Full makeover+Shower)', price: '12500' },
      { name: 'Gold Groom Package (2 Days Complete prep)', price: '19000' },
      { name: 'Platinum Groom Package (3 Days Signature)', price: '26500' },
      { name: 'Executive Groom Package (Ultimate Event Prep)', price: '41000' },
    ]
  }
];

const Services = () => {
  const [activeTab, setActiveTab] = useState(categories[0].id);

  const activeCategory = categories.find(c => c.id === activeTab);

  return (
    <section id="services" className="py-24 bg-surface-lowest">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Grooming Catalog</h2>
          <h3 className="font-display text-4xl md:text-5xl font-bold text-on-surface mb-6">Our Services.</h3>
          <p className="font-body text-on-surface-variant max-w-2xl mx-auto text-lg">
            From precision haircuts to luxurious groom packages, our comprehensive menu is designed to cater to every gentleman's needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar Tabs */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {categories.map((category) => {
              const Icon = category.icon;
              const isActive = activeTab === category.id;
              
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex items-center gap-4 px-6 py-4 rounded-xl font-bold transition-all duration-300 text-left ${
                    isActive 
                      ? 'bg-primary text-on-primary soft-shadow scale-[1.02] origin-left' 
                      : 'bg-surface text-on-surface hover:bg-surface-low subtle-border'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${isActive ? 'text-on-primary' : 'text-primary'}`} />
                  {category.title}
                </button>
              );
            })}
          </div>

          {/* Menu Content */}
          <div className="lg:w-2/3 bg-surface rounded-2xl p-8 md:p-12 soft-shadow subtle-border min-h-[500px]">
            <div className="flex items-center gap-4 mb-10 border-b border-surface-container pb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                {activeCategory && <activeCategory.icon className="w-6 h-6" />}
              </div>
              <h4 className="font-display text-3xl font-bold text-on-surface">
                {activeCategory?.title}
              </h4>
            </div>

            <div className="grid gap-6">
              {activeCategory?.items.map((item, idx) => (
                <div key={idx} className="flex justify-between items-center group">
                  <span className="font-body text-lg font-medium text-on-surface group-hover:text-primary transition-colors">
                    {item.name}
                  </span>
                  <div className="hidden sm:block flex-1 border-b border-dashed border-outline-variant mx-4 md:mx-6 translate-y-2 opacity-50 group-hover:border-primary transition-colors"></div>
                  <div className="flex items-center gap-4 sm:gap-6 ml-4 sm:ml-0">
                    <span className="font-display font-bold text-xl text-primary whitespace-nowrap">
                      <span className="text-sm text-on-surface-variant mr-1">Rs</span>
                      {item.price}
                    </span>
                    <a
                      href={`https://wa.me/923001234567?text=Hi! I would like to book the ${encodeURIComponent(item.name)} service.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-1.5 text-xs font-bold uppercase tracking-widest bg-surface-container hover:bg-primary text-on-surface hover:text-on-primary transition-colors rounded shadow-sm shrink-0"
                    >
                      Book
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
