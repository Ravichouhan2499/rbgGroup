import React from "react";
import "./rbgHerb.css";
import image from "../../images/image.png"; // Replace with the actual path to your image
import { Link } from "react-router-dom";

const RbgHerbs = () => {
  return (
    <div className="container-1">
      <div className="content">
        <div className="logo">
          <h1>
            <span className="logo-icon">🔵</span> RBG HERBS AND AYURVEDA PRIVATE LIMITED, 

          </h1>
        </div>
        <p>
        Rbg Herbs And Ayurveda Private Limited is a Private company incorporated on 19 December 2018. It is classified as Non-government company and is registered at Registrar of Companies, Delhi. Its authorized share capital is Rs. 1,000,000 and its paid up capital is Rs. 500,000. It's NIC code is 930 (which is part of its CIN). As per the NIC code, it is inolved in Other service activities.
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
      <div className="image">
        <img src={image} alt="Laptop and workspace" />
      </div>
    </div>
  );
};

export default RbgHerbs;
