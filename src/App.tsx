import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Terminal from './components/Terminal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <Hero />
      <Terminal />
      <Features />
      <Footer />
    </div>
  );
}

export default App;