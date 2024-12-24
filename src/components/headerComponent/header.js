import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import img from '../images/img copy.png';
import './header.css';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo-container">
          <div className="logo">
            <img src={img} alt="Logo" />
            <span>RBG</span>
          </div>
          <button className="menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className={`nav-links ${isMenuOpen ? 'show' : ''}`}>
          <a
            href="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </a>
          <a
            href="/about"
            className={activeLink === '/about' ? 'active' : ''}
            onClick={() => handleLinkClick('/about')}
          >
            About Us
          </a>
          <a
            href="/rbgMutualFunds"
            className={activeLink === '#services' ? 'active' : ''}
            onClick={() => handleLinkClick('#services')}
          >
            Services
          </a>
          <a
            href="#product"
            className={activeLink === '#product' ? 'active' : ''}
            onClick={() => handleLinkClick('#product')}
          >
            Product
          </a>
          <a
            href="#contact"
            className={`contact-button ${activeLink === '#contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#contact')}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;