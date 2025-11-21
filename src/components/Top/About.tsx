import React from "react";
import Section from "../Common/Section";
import "./About.css";

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="greeting">
        <div className="greeting-image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/kanibaPigeon.jpg`}
            alt="kanibaPigeon"
          ></img>
        </div>
        <div className="greeting-text">
          <h3>Name: bit</h3>
          <p>大阪公大高専2年生のbitです。組み込みやWeb開発を行っています。</p>
          <p>最近はWebデザインに興味があったりするかも</p>
        </div>
      </div>
    </Section>
  );
};

export default About;
