import React from "react";
import "./rbgMutual.css";
import mutualFund from "../images/mutual-funds.png";
import gold from "../images/gold.jpg";

const RbgMutualFunds = () => {
  return (
    <section className="foundation-section">
      <div className="foundation-container">
        {/* Left Side Image */}
        <div className="foundation-image">
          <img
            src={gold}
            alt="Gold assets representing investment"
            className="grayscale-img"
          />
        </div>

        {/* Right Side Content */}
        <div className="foundation-content">
          <div className="foundation-header">
            <img
              src={mutualFund}
              alt="RBG Mutual Funds Logo"
              className="foundation-logo"
            />
            <h2 className="foundation-title">RBG Mutual Funds NIDHI LIMITED</h2>
          </div>

          <p className="foundation-text">
            RBG Mutual Benefits Nidhi Limited is a Nidhi company registered with
            the Government of India, Ministry of Corporate Affairs, with its
            registered and corporate office in B-5 Akruti Trade Center, Andheri
            East. At RBG Mutual Benefits Nidhi Limited, we stimulate the mutual
            growth of our members through trust and responsibility.
          </p>

          <a
            href="https://www.birlagroup.com/"
            className="website-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </a>
        </div>
      </div>
    </section>
  );
};

export default RbgMutualFunds;
