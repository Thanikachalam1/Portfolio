// src/Home/Header/header.jsx
import React, { useState } from "react";
import './header.css';

const Header = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveSection(id);
      setMenuOpen(false); // close menu on nav click (mobile)
    }
  };

  return (
    <header className="HeaderContainer">
      <div
        className={`hamburger ${menuOpen ? "active" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => { if (e.key === 'Enter') setMenuOpen(!menuOpen); }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <nav className={`nav-section ${menuOpen ? "active" : ""}`}>
        <ul>
          {sections.map(({ id, label }) => (
            <li key={id}>
              <button
                className={`nav-button ${activeSection === id ? "active" : ""}`}
                onClick={() => handleClick(id)}
                aria-current={activeSection === id ? "page" : undefined}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
