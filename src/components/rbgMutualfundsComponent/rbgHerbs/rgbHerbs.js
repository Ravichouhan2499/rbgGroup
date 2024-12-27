import React from "react";
import "../../aboutComponent/about.css";
import image from "../../images/image.png"; // Replace with the actual path to your image
import { Link } from "react-router-dom";

const RbgHerbs = () => {
  return (
    <div className="hero-section">
      <div className="bubbles">
        {/* Background bubbles animation */}
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
        <div className="bubble"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="logo">
            <h1>
              <span className="logo-icon">🔵</span> RBG HERBS AND AYURVEDA PRIVATE LIMITED
            </h1>
          </div>
          <p className="description">
            Rbg Herbs And Ayurveda Private Limited is a Private company incorporated on 19 December 2018.
            It is classified as a Non-government company and is registered at the Registrar of Companies, Delhi.
            Its authorized share capital is Rs. 1,000,000, and its paid-up capital is Rs. 500,000.
            It is involved in Other service activities.
          </p>
          <Link
            to="https://www.birlagroup.com/"
            className="animated-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </Link>
        </div>
        
        <div className="image-grid">
          <div className="hover-effect">
            <img src={image} alt="RBG Herbs" />
          </div>
        </div>
      </div>

      <button className="scroll-top" onClick={() => window.scrollTo(0, 0)}>
        ↑
      </button>
    </div>
  );
};

export default RbgHerbs;
