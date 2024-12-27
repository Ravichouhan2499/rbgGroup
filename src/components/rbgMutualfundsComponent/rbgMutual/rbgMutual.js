import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './rbgMutual.css';
import gold from '../../images/image copy.png'
import mutualFund from '../../images/mutual-funds.png'

const RbgMutualFunds = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  return (
    <section className="rbg-section">
      {/* Animated background elements */}
      <div className="animated-bg">
        {[...Array(5)].map((_, index) => (
          <div key={index} className="floating-shape" />
        ))}
      </div>

      <div className="rbg-container">
        {/* Left Side Image with animations */}
        <div className="rbg-image-wrapper" data-aos="fade-right" data-aos-delay="100">
          <div className="image-overlay"></div>
          <img
            src={gold}
            alt="Gold assets representing investment"
            className="rbg-image"
          />
          <div className="image-shine"></div>
        </div>

        {/* Right Side Content with staggered animations */}
        <div className="rbg-content" data-aos="fade-left" data-aos-delay="300">
          <div className="rbg-header" data-aos="zoom-in" data-aos-delay="500">
            <div className="logo-wrapper">
              <img
                src={mutualFund}
                alt="RBG Mutual Funds Logo"
                className="rbg-logo"
              />
              <div className="logo-glow"></div>
            </div>
            
            <h2 className="rbg-title">
              <span className="highlight">RBG</span> MICRO FINANCE SERVICES
            </h2>
          </div>

          <p className="rbg-text" data-aos="fade-up" data-aos-delay="700">
            Rbg Financial Services Private Limited is a private company
            incorporated on 05 September 2008. It is classified as a
            Non-government company and is registered at the Registrar of
            Companies, Ernakulam. Its authorized share capital is Rs. 35,100,000
            and its paid-up capital is Rs. 34,000,000. It is involved in
            activities auxiliary to financial intermediation, excluding
            insurance and pension funding, focusing on enhancing financial
            opportunities and innovations.
          </p>

          <Link
            to="https://www.birlagroup.com/"
            className="rbg-button"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="zoom-in"
            data-aos-delay="900"
          >
            <span>Visit Official Website</span>
            <div className="button-glow"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RbgMutualFunds;