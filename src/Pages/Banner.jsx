import React from "react";
import { Image } from "react-bootstrap";
import banner from "../assests/slider.png";
import './Banner.css'

const Banner = () => {
  return (
    <div className="banner-section">
      <div className="container text-white text-section">
        <h1 className="fs-lg-1 fs-md-2 fs-sm-4 mb-0">Computer Engineering</h1>
        <p>142,765 Computer Engineers Follow this</p>
      </div>
    </div>
  );
};

export default Banner;
