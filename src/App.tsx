import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ParticleBackground from './components/ParticleBackground';
import ComingSoon from './pages/ComingSoon';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="min-h-screen relative">
        {/* Gradient background with multiple layers */}
        <div className="fixed inset-0 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950" />
        <div className="fixed inset-0 bg-gradient-to-tr from-transparent via-blue-800/20 to-transparent" />
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-700/20 via-transparent to-transparent" />
        
        {/* Animated particles overlay */}
        <ParticleBackground />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <Routes>
            <Route path="/" element={<ComingSoon />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;