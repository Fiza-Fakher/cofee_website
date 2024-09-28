import React from "react";
import './Features.css';
import { features } from "../Data";
import shape from'../images/shape.png';

const Features = () => {
  return (
    <section className="features section" id="features">
      <h1 className="about">Features</h1>
      <h2 className="section-title" data-title='About Us'>
        Our Best Features
      </h2>
      <div className="features-grid">
        {features.map(({ img, title, description }, index) => {
          return (
            <div className="features-item" key={index}>
              <img src={img} alt="" className="feature-img" />
              <h3 className="feature-title">{title}</h3>
              <p className="feature-description">{description}</p>
              <img src={shape} alt="" className="feature-shape" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
