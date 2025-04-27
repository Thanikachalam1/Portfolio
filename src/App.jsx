import React, { useEffect } from "react";
import './App.css';
import Header from './Home/header/Header';
import Home from './Home/home';
import About from './About/about';
import Skills from './Skills/skills';
import Projects from './Projects/projects';
import Contact from './Contact/contact';
import ParticlesBackground from './Background/background';
import LazyCursor from './LazyCursor/LazyCursor';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.substring(1); // Get section ID from URL

    if (sectionId) {
      const targetElement = document.getElementById(sectionId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToSection /> {/* Scrolls to the section based on URL */}
      <div className="App">
        <div className="background">
          <ParticlesBackground />
        </div>
        <Header />
        <LazyCursor />
        <div className="content">
          <Home />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>
      </div>
    </Router>
  );
}

export default App;
