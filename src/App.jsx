import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Lookbook from './components/Lookbook';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="bg-brand-bg text-brand-dark font-sans min-h-screen antialiased selection:bg-brand-forest selection:text-white">
      {/* Fixed Layout Global Header */}
      <Navbar />
      
      {/* Semantic Main Workspace Content */}
      <main className="relative z-10 pt-24">
        <Hero />
        <About />
        <Lookbook />
        <Services />
        <Reviews />
        <Contact />
      </main>
    </div>
  );
}