import './App.css';

import React, { useState, useEffect } from 'react';

// all components:
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import About from './components/About';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';




export default function App() {

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <About />

      {/* Features Section */}
      <Features />

      {/* Testimonials / Feedback Section */}
      <Testimonials />

      {/* Footer */}
      <Footer />
    </>
  );
}
