import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SocialProof } from './components/SocialProof';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-brand-dark text-brand-silver selection:bg-brand-navyLight selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Gallery />
      </main>
      <Footer />
    </div>);

}