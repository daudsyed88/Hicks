import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen selection:bg-primary/30 selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Gallery />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;
