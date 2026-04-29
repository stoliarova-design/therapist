import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Approaches } from './components/Approaches';
import { Testimonials } from './components/Testimonials';
import { AboutMe } from './components/AboutMe';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f5f0e8] text-[#2a2420] font-body overflow-x-hidden selection:bg-[#c4794a] selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Approaches />
        <Testimonials />
        <AboutMe />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
