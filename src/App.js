import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import StarField from './components/StarField';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App" style={{ position: 'relative', minHeight: '100vh' }}>
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0 }}>
          <StarField />
        </div>
        <Navbar />
        <main style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<div className="content">About Page</div>} />
            <Route path="/experience" element={<div className="content">Experience Page</div>} />
            <Route path="/skills" element={<div className="content">Skills Page</div>} />
            <Route path="/projects" element={<div className="content">Projects Page</div>} />
            <Route path="/contact" element={<div className="content">Contact Page</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
