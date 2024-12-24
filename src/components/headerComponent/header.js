import React, { useState } from 'react';
import './header.css';
import img from '../images/img copy.png';

const Header = () => {
  const [activeLink, setActiveLink] = useState('#home');

  const handleLinkClick = (hash) => {
    setActiveLink(hash);
  };

  return (
    <header className="navbar">
      <div className="container">
        {/* Logo Section */}
        <div className="logo">
          <img src={img} alt="Logo" />
          <span>RBG</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
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
            href="#services"
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
