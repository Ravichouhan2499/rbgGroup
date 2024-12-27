import React from "react";
import "./rbgMulti.css";
import { Link } from "react-router-dom";

const RbgMultiPurpose = () => {
  return (
    <div className="nita-container">
      <div className="nita-images">
        <img
          src='' // Replace with the left image URL
          alt="Elevators"
          className="nita-image"
        />
        <img
          src='' // Replace with the engineer's image URL
          alt="Engineer"
          className="nita-image-engineer"
        />
      </div>
      <div className="nita-content">
        <h1 className="nita-title">RBG MULTIPURPOSE MUTUAL BENEFITS NIDHI LIMITED, </h1>
        <p className="nita-description">
        Rbg Multipurpose Mutual Benefits Nidhi Limited is a Public company incorporated on 26 June 2019. It is classified as Non-government company and is registered at Registrar of Companies, Patna. Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 539,800. It's NIC code is 659 (which is part of its CIN). As per the NIC code, it is inolved in Other financial intermediation. [This group includes financial intermediation other than that conducted by monetary institutions.].

        </p>
        <Link
            to="https://www.zaubacorp.com/company/RBG-MULTIPURPOSE-MUTUAL-BENEFITS-NIDHI-LIMITED/U65990BR2019PLC042499"
            className="website-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Website
          </Link>
      </div>
    </div>
  );
};

export default RbgMultiPurpose;
