import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./Home/Header/header";
import Home from './Home/home';
import About from './About/about';
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";

import ParticlesBackground from './Background/background';
import LazyCursor from './LazyCursor/LazyCursor';
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";


// Scroll to section when route changes (optional enhancement)
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
  const sectionId = location.pathname.substring(1); // remove leading slash
  
  if (sectionId) {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
}, [location]);


  return null;
}

// Main app content with scroll tracking
function AppContent() {
  const [activeSection, setActiveSection] = useState("home");
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => e.preventDefault();
    document.addEventListener("contextmenu", handleContextMenu);

    // Disable copy
    const handleCopy = (e) => e.preventDefault();
    document.addEventListener("copy", handleCopy);

    // Disable text selection
    const handleSelectStart = (e) => e.preventDefault();
    document.addEventListener("selectstart", handleSelectStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("copy", handleCopy);
      document.removeEventListener("selectstart", handleSelectStart);
    };
  }, []);
  useEffect(() => {
  const sections = document.querySelectorAll("section[id]");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
         
          setActiveSection(entry.target.id);
        }
      });
    },
    {
      threshold: 0.6
    }
  );

  sections.forEach(section => observer.observe(section));
  return () => observer.disconnect();
}, []);


  return (
    <>
      <ScrollToSection />
      <div className="App">
        <div className="background">
          <ParticlesBackground />
        </div>
        <Header activeSection={activeSection} />
        <LazyCursor />
        <div className="content">
          <section id="home"><Home /></section>
<section id="about"><About /></section>
<section id="projects"><Projects /></section>
<section id="contact"><Contact /></section>

        </div>
      </div>
    </>
  );
}

// Router wrapper
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<AppContent />} />
      </Routes>
    </Router>
  );
}

export default App;
