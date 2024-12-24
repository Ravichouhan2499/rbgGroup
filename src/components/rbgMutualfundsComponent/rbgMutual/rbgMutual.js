import React from "react";
import "./rbgMutual.css";
import mutualFund from "../../images/mutual-funds.png";
import gold from "../../images/gold.jpg";
import { Link } from "react-router-dom";

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
            <h2 className="foundation-title">RBG MICRO FINANCE SERVICES</h2>
          </div>

          <p className="foundation-text">
          Rbg Financial Services Private Limited is a Private company incorporated on 05 September 2008. It is classified as Non-government company and is registered at Registrar of Companies, Ernakulam. Its authorized share capital is Rs. 35,100,000 and its paid up capital is Rs. 34,000,000. It's NIC code is 671 (which is part of its CIN). As per the NIC code, it is inolved in Activities auxiliary to financial intermediation, except insurance and pension funding.[This Group includes activities involved in or closely related to financial inter-mediation other than insurance and pension funding but not themselves involving financial inter-mediation]..
          </p>

          <Link
            to="https://www.birlagroup.com/"
            className="website-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RbgMutualFunds;
