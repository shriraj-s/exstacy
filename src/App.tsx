import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Achievements from './components/Achievements';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

import cursorImg from './assets/cursor.jpg'; // <-- Make sure it's in `src/assets/`

function App() {
  return (
    <div
      className="min-h-screen bg-white"
      style={{
        cursor: `url(${cursorImg}), auto`,
      }}
    >
      <Navigation />
      <Hero />
      <About />
      <CaseStudies />
      <Achievements />
      <Experience />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;
