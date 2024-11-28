import React from 'react'

export default function Navbar() {
    
    function toggleMenu() {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
      }
    return (
        <>
            <nav id="desktop-nav">
                <div className="logo">
                    <img src="https://signature.freefire-name.com/img.php?f=2&t=Karan" style={{height: "150px", width: "200px"}} />
                </div>
                <div>
                    <ul className="nav-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#experience">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
            <nav id="hamburger-nav">
                <div className="logo">
                    <img src="https://signature.freefire-name.com/img.php?f=2&t=Karan" style={{height: "150px", width: "200px"}} />
                </div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        <ul>
                            <li><a href="#about" onClick={toggleMenu}>About</a></li>
                            <li><a href="#experience" onClick={toggleMenu}>Skills</a></li>
                            <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                            <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
