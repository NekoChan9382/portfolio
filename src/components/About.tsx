import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section id="about">
      <div className="section-contents">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="greeting">
          <div className="greeting-image">
            <img src="./assets/kanibaPigeon.jpg" alt="kanibaPigeon"></img>
          </div>
          <div className="greeting-text">
            <p>大阪公大高専2年生のbitです。組み込みやWeb開発を行っています。</p>
            <p>最近はWebデザインに興味があったりするかも</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
