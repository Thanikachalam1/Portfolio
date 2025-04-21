import React from "react";
import { useState } from "react";
import './Header.css'
function Header(){

    const [isMobile , setisMobile] = useState(false)

    function toggleMobile(){
        setisMobile(!isMobile)
    }


    return(
        <>
            <div className="HeaderContainer">
                <div className={`nav-section ${isMobile ? 'active' : ''}`}>
                    <li>
                        <a href="/">
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="/About">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="/Skills">
                            Skills
                        </a>
                    </li>
                    <li>
                        <a href="/Projects">
                            Projects
                        </a>
                    </li>
                    <li>
                        <a href="/Contacct">
                            Contact Me
                        </a>
                    </li>
                </div>

                <div className="nav-bar" onClick={toggleMobile}>
                    <span className="bar" ></span>
                    <span className="bar" ></span>
                    <span className="bar" ></span>
                </div>

            </div>
        </>
    )

}

export default Header