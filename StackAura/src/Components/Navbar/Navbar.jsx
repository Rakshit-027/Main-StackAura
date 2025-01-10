import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';
import { Helmet } from 'react-helmet';
import './Navbar.css';
import logo from './logo-2.png';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const navItems = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'services', label: 'Services' },
    { to: 'pricing', label: 'Pricing' },
    { to: 'developers', label: 'Developers' },
    { to: 'contact', label: 'Contact' }
  ];

  return (
    <>
      <Helmet>
        <title>StackAura - Your Think, we build</title>
        <meta name="description" content="StackAura offers innovative web solutions for businesses. Explore our services, pricing, and get in touch with our developers." />
        <meta name="keywords" content="StackAura, Web Solutions, Web Development, Services, Pricing, Contact" />
        <meta name="author" content="StackAura Team" />
      </Helmet>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <Link to="home" smooth={true} duration={500}>
              <img src={logo} alt="StackAura" className="Nav-img" />
            </Link>
          </div>

          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                offset={-70}
                activeClass="active"
                onClick={closeMenu}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu overlay */}
        <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              spy={true}
              offset={-70}
              activeClass="active"
              onClick={closeMenu}
              className="mobile-link"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
