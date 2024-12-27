// HeroSection.jsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './about.css';  // Changed from about.css to match component name
import img from '../../components/images/image.png';

export default function About() {   // Changed component name to match file

  const [showScrollTop, setShowScrollTop] = useState(false);


  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setShowScrollTop(true);
    } else {
      setShowScrollTop(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', handleScroll);

  return (
    <div className="hero-section">
      {/* Animated background bubbles */}
      <div className="bubbles">
        {[...Array(7)].map((_, i) => (
          <div 
            key={i} 
            className="bubble"
            style={{
              animationDelay: `${Math.random() * 2}s`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="hero-container">
        {/* Left Content */}
        <div className="hero-content" data-aos="fade-right">
          <div className="glowing-text">Welcome to</div>
          <h1 className="main-title">
            My Creative <span className="highlight">World</span>
          </h1>
          <p className="description" data-aos="fade-up" data-aos-delay="200">
            Greetings! I'm Rinku Birla, the driving force behind a dynamic trio
            of innovative ventures – elevating spaces with cutting-edge lifts,
            transforming businesses with IT solutions, and captivating audiences
            with engaging animation.
          </p>
          <button className="animated-button" data-aos="zoom-in" data-aos-delay="400">
            <span>Discover More</span>
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="image-grid" data-aos="fade-left">
          <div className="top-image hover-effect">
            <img src={img} alt="Creative interior" />
          </div>
          <div className="bottom-images">
            <div className="profile-image hover-effect" data-aos="zoom-in">
              <img src={img} alt="Rinku Birla" />
            </div>
            <div className="side-image hover-effect" data-aos="zoom-in">
              <img src={img} alt="Creative space" />
            </div>
          </div>
        </div>
      </div>

      <button
        className={`scroll-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop

        }
      >
        ↑
      </button>
    </div>
  );
}