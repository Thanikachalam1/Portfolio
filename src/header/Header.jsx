import React, { useState } from "react";
import './Header.css';

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
          <li><button className="nav-button" onClick={() => window.location.href = '/home'}>Home</button></li>
          <li><button className="nav-button" onClick={() => window.location.href = '/about'}>About</button></li>
          <li><button className="nav-button" onClick={() => window.location.href = '/skills'}>Skills</button></li>
          <li><button className="nav-button" onClick={() => window.location.href = '/projects'}>Projects</button></li>
          <li><button className="nav-button" onClick={() => window.location.href = '/contact'}>Contact Me</button></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
