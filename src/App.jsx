import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./Home/Header/header";
import Home from './Home/home';
import About from './About/about';
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
import ParticlesBackground from './Background/background';
import LazyCursor from './LazyCursor/LazyCursor';
import { useLocation } from "react-router-dom";

// Scroll to section when route changes
function ScrollToSection() {
  const location = useLocation();

  useEffect(() => {
    const sectionId = location.pathname.substring(1);
    if (sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  return null;
}

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleContextMenu = (e) => e.preventDefault();
    const handleCopy = (e) => e.preventDefault();
    const handleSelectStart = (e) => e.preventDefault();

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("copy", handleCopy);
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
      { threshold: 0.6 }
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

export default App;
