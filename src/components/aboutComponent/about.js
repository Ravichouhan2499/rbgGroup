import React from "react";
import "./about.css";
import img from "../images/image.png"; // Ensure the path to your image is correct

export default function About() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <section className="hero-section">
        <div className="hero-container">
          {/* Left Content */}
          <div className="hero-content">
            <h1>Welcome to My Creative World</h1>
            <p>
              Greetings! I'm Rinku Birla, the driving force behind a dynamic trio
              of innovative ventures – elevating spaces with cutting-edge lifts,
              transforming businesses with IT solutions, and captivating audiences
              with engaging animation.
            </p>
            <button className="read-more-btn">Read More</button>
          </div>

          {/* Right Image Grid */}
          <div className="image-grid">
            <div className="top-image">
              <img src={img} alt="Creative interior" />
            </div>
            <div className="bottom-images">
              <div className="profile-image">
                <img src={img} alt="Rinku Birla" />
              </div>
              <div className="side-image">
                <img src={img} alt="Creative space" />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <button className="scroll-top-btn" onClick={scrollToTop}>
          ↑
        </button>
      </section>
    </div>
  );
}
