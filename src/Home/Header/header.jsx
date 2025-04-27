import React, { useState } from "react";
import './Header.css';
import { Link } from "react-router-dom";

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobile = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div className="HeaderContainer">
      <div className={`hamburger ${isMobile ? 'active' : ''}`} onClick={toggleMobile}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-section ${isMobile ? 'active' : ''}`}>
        <ul>
          <li><Link to="/home" className="nav-button">Home</Link></li>
          <li><Link to="/about" className="nav-button">About</Link></li>
          <li><Link to="/skills" className="nav-button">Skills</Link></li>
          <li><Link to="/projects" className="nav-button">Projects</Link></li>
          <li><Link to="/contact" className="nav-button">Contact Me</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
