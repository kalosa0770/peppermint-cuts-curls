import React from 'react';
import Navbar from './components/HeaderHero';
import HeaderHero from './components/HeaderHero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Lookbook from './components/Lookbook';
import Contact from './components/Contact';
import ContactTopBar from './components/ContactTopBar';

export default function App() {
  return (
    <div className="bg-brand-bg text-brand-dark font-sans min-h-screen antialiased selection:bg-brand-forest selection:text-white">
      {/* Fixed Layout Global Header */}
        <ContactTopBar />
        <HeaderHero />
      {/* Semantic Main Workspace Content */}
      <main className="relative z-10">
        
        <Reviews />
        <Lookbook />
        <About />
        
        <Services />
        
        <Contact />
      </main>
    </div>
  );
}