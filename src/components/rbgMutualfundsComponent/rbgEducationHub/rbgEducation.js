import React from "react";
import './rbgEducation.css'; // Using the provided styles
import image from "../../images/image.png"; // Replace with the actual path to your image
import { Link } from "react-router-dom";

const RbgEducation = () => {
  return (
    <div className="hero-section">
      {/* Background Bubbles */}
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
        <div className="hero-content">
          <div className="logo glowing-text">
            <h1>
              <span className="logo-icon">🔵</span> RBG EDUCATION HUB PRIVATE LIMITED
            </h1>
          </div>
          <p className="description">
            RBG EDUCATION HUB PRIVATE LIMITED is a Private Limited Company, incorporated under the Companies Act as a company limited by shares. It is classified as a Non-government company and is registered at RoC-Delhi.
          </p>
          <Link
            to="https://www.birlagroup.com/"
            className="animated-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>View Website</span>
          </Link>
        </div>

        {/* Right Image */}
        <div className="image-grid">
          <div className="top-image hover-effect">
            <img src={image} alt="Laptop and workspace" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RbgEducation;
