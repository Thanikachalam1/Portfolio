import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header({ activeSection }) {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => setIsMobile(!isMobile);
  const closeMenu = () => setIsMobile(false);

  const isActive = (id) => activeSection === id ? 'active' : '';

  return (
    <div className="HeaderContainer">
      <div className={`hamburger ${isMobile ? 'active' : ''}`} onClick={toggleMobile}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-section ${isMobile ? 'active' : ''}`}>
        <ul>
          <li>
  <Link to="/home" className={`nav-button ${isActive('home')}`} onClick={closeMenu}>
    Home
  </Link>
</li>
<li>
  <Link to="/about" className={`nav-button ${isActive('about')}`} onClick={closeMenu}>
    About
  </Link>
</li>
<li>
  <Link to="/Portfolio/projects" className={`nav-button ${isActive('projects')}`} onClick={closeMenu}>
    Projects
  </Link>
</li>
<li>
  <Link to="/contact" className={`nav-button ${isActive('contact')}`} onClick={closeMenu}>
    Hire Me
  </Link>
</li>

        </ul>
      </div>
    </div>
  );
}

export default Header;
