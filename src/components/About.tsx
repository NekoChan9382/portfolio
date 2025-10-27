import React from "react";
import "./About.css";

const About: React.FC = () => {
  return (
    <section className="about">
      <div className="section-content">
        <div className="section-title">
          <h2>About Me</h2>
        </div>
        <div className="greeting">
          <p>大阪公大高専2年生のbitです。組み込みやWeb開発を行っています。</p>
          <p>最近はWebデザインに興味があったりするかも</p>
        </div>
      </div>
    </section>
  );
};

export default About;
