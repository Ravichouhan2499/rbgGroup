import React from "react";
import "./radient.css";
import { Link } from "react-router-dom";

const RadientHieght = () => {
  return (
    <div className="nita-container">
      <div className="nita-content">
        <h1 className="nita-title">
        RADIANT HEIGHTS INN PRIVATE LIMITED,
        </h1>
        <p className="nita-description">
        RADIANT HEIGHTS INN PRIVATE LIMITED is a Private Limited Company, incorporated under the Companies Act as a Company limited by Shares. It is classified as Non-govt company and is registered at RoC-Delhi.
        </p>
        <Link
          to="https://www.indiafilings.com/search/radiant-heights-inn-private-limited-cin-U55101HR2024PTC121074"
          className="website-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Website
        </Link>
      </div>
      <div className="nita-images">
        <img
          src="https://via.placeholder.com/600x400" // Replace with the left image URL
          alt="Elevators"
          className="nita-image"
        />
        <img
          src="https://via.placeholder.com/200x300" // Replace with the engineer's image URL
          alt="Engineer"
          className="nita-image-engineer"
        />
      </div>
    </div>
  );
};

export default RadientHieght;
