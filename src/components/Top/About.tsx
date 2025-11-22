import React from "react";
import Section from "../Common/Section";
import "./About.css";
import { Link } from "react-router-dom";
import { borderColor, hoverColor } from "../Common/Contents";
import { motion } from "motion/react";

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="greeting">
        <div className="greeting-image">
          <img
            src={`${process.env.PUBLIC_URL}/assets/kanibaPigeon.jpg`}
            alt="kanibaPigeon"
          />
        </div>
        <div className="greeting-text">
          <h3>Name: bit</h3>
          <p>大阪公大高専2年生のbitです。組み込みやWeb開発を行っています。</p>
          <p>最近はWebデザインに興味があったりするかも</p>
          <Link to="/about">
            <motion.div
              className="about-link-btn"
              role="button"
              initial={{
                borderColor: borderColor,
              }}
              whileHover={{
                borderColor: hoverColor,
                boxShadow: `0 0 20px ${hoverColor}40`,
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              View Profile
            </motion.div>
          </Link>
        </div>
      </div>
    </Section>
  );
};

export default About;
