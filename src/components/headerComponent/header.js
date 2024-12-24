import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import img from '../images/img copy.png';
import './header.css';
import { Link } from 'react-router-dom';

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
          <Link
            to="/"
            className={activeLink === '/' ? 'active' : ''}
            onClick={() => handleLinkClick('/')}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={activeLink === '/about' ? 'active' : ''}
            onClick={() => handleLinkClick('/about')}
          >
            About
          </Link>
          <Link
            to="/rbgMutualFunds"
            className={activeLink === '#services' ? 'active' : ''}
            onClick={() => handleLinkClick('#services')}
          >
            Services
          </Link>
          <Link
            to="/product"
            className={activeLink === '#product' ? 'active' : ''}
            onClick={() => handleLinkClick('#product')}
          >
            Product
          </Link>
          <Link
            to="/contact"
            className={`contact-button ${activeLink === '#contact' ? 'active' : ''}`}
            onClick={() => handleLinkClick('#contact')}
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;