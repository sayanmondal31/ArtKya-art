import React from "react";
import "./Slider.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderImages } from "../../utils/images";

const Slider = () => {
  return (
    <div className="hero-slider">
      <div className="hero-slider-item">
        <img
          src={sliderImages[1]}
          alt=""
          style={{
            height: "750px",
            width: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Slider;
