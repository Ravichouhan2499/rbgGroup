import React from "react";
import "../rbgHerbs/rbgHerb.css";
import image from "../../images/image.png"; // Replace with the actual path to your image
import { Link } from "react-router-dom";

const RbgEducation = () => {
  return (
    <div className="container-1">
      <div className="content">
        <div className="logo">
          <h1>
            <span className="logo-icon">🔵</span>  RBG EDUCATION HUB PRIVATE LIMITED, 

          </h1>
        </div>
        <p>
        RBG EDUCATION HUB PRIVATE LIMITED is a Private Limited Company, incorporated under the Companies Act as a Company limited by shares. It is classified as Non-government company and is registered at RoC-Delhi.
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
        <img src="{image}" alt="Laptop and workspace" />
      </div>
    </div>
  );
};

export default RbgEducation;
