import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <span>
            <h1>Hello from bit</h1>
          </span>
        </div>
        <div className="hero-image">
          <img src="./assets/kanibaPigeon.jpg"></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
