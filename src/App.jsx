import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import BeyondCode from './components/BeyondCode';
import Paintings from './components/Paintings';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="antialiased bg-[var(--color-dark-bg)] text-white">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <BeyondCode />
      <Paintings />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;