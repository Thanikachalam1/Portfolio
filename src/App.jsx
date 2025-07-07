import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./Home/Header/header";
import Home from './Home/home';
import About from './About/about';
import Projects from "./Projects/projects";
import Contact from "./Contact/contact";
import ParticlesBackground from './Background/background';
import LazyCursor from './LazyCursor/LazyCursor';

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
      { threshold: 0.2 }
    );

    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div className="App">
        <div className="background">
          <ParticlesBackground />
        </div>
        <Header activeSection={activeSection} setActiveSection={setActiveSection} />
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
