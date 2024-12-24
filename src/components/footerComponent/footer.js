import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section company-info">
          <h3>RBG</h3>
          <p>Empowering mutual growth through trust and responsibility.</p>
          <div className="contact-info">
            <p><i className="icon">📍</i> Office no. 122, First Floor, Annex Hotel Ackruti Trade Center, Road No. 7, MIDC, Andheri, Mumbai, MH 400093</p>
            <p><i className="icon">📞</i> +91 70155 86117</p>
            <p><i className="icon">✉️</i>rinkubirla0786@gmail.com</p>
          </div>
        </div>

        {/* Our Services Section */}
        <div className="footer-section services">
          <h3>Our Services</h3>
          <ul className="footer-links">
            <li><Link to="/RbgMutualFunds">RBG Mutual Funds Nidhi Limited</Link></li>
            <li><a href="#app">App Development</a></li>
            <li><a href="#design">UI/UX Design</a></li>
            <li><a href="#digital">Digital Marketing</a></li>
            <li><a href="#consulting">IT Consulting</a></li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div className="footer-section social-links">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <Link to="https://www.facebook.com/p/Rbg-Multipurpose-Mutual-Benifis-Nidhi-Ltd-100066677829889/" className="social-icon" aria-label="Facebook">
              <Facebook />
            </Link>
            <br/>
            <Link to="https://www.instagram.com/rinkubirlaofficial/" className="social-icon" aria-label="Instagram">
              <Instagram />
            </Link>
            <br/>
            <Link to="https://www.youtube.com/@royalbirlagroup3289" className="social-icon" aria-label="YouTube">
              <Youtube />
            </Link>
            <br/>
            <Link to="#" className="social-icon" aria-label="LinkedIn">
              <Linkedin />
            </Link>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>&copy; 2024 RBG. All rights reserved.</p>
        <div className="footer-bottom-links">
          <a href="#privacy">Privacy Policy</a>
          <a href="#terms">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
