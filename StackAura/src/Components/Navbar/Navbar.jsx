import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NAVBAR_HEIGHT = -38; // Adjust this to match your navbar height

  return (
    <nav className="navbar-container">
      {/* Logo Container */}
      <div className="logo">
        <a href="#home">Your Logo</a>
      </div>

      {/* Navbar Links */}
      <div className={`navbar ${isMenuOpen ? 'show' : ''}`}>
        <ul className="nav-links">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              spy={true}
              offset={NAVBAR_HEIGHT}
              activeClass="active"
              onSetActive={(section) => console.log('Active section:', section)}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              spy={true}
              offset={NAVBAR_HEIGHT}
              activeClass="active"
              onSetActive={(section) => console.log('Active section:', section)}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="services"
              smooth={true}
              duration={500}
              spy={true}
              offset={NAVBAR_HEIGHT}
              activeClass="active"
              onSetActive={(section) => console.log('Active section:', section)}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="pricing"
              smooth={true}
              duration={500}
              spy={true}
              offset={NAVBAR_HEIGHT}
              activeClass="active"
              onSetActive={(section) => console.log('Active section:', section)}
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="developers"
              smooth={true}
              duration={500}
              spy={true}
              offset={NAVBAR_HEIGHT}
              activeClass="active"
              onSetActive={(section) => console.log('Active section:', section)}
            >
              Developers
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              offset={NAVBAR_HEIGHT}
              activeClass="active"
              onSetActive={(section) => console.log('Active section:', section)}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}
    </nav>
  );
}

export default Navbar;
