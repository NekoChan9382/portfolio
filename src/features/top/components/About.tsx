import React from "react";
import Section from "../../../shared/components/Section/Section";
import "./About.css";
import { Link } from "react-router-dom";
import { hoverVariants } from "../../../shared/animations";
import { easeOutTransition } from "../../../shared/animations";
import { motion } from "motion/react";
import { profileContent } from "../../../shared";

const About: React.FC = () => {
  return (
    <Section id="about">
      <div className="greeting">
        <div className="greeting-image">
          <img
            src={`${process.env.PUBLIC_URL}${profileContent.image}`}
            alt="kanibaPigeon"
          />
        </div>
        <div className="greeting-text">
          <h3>Name: {profileContent.name}</h3>
          {profileContent.description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
          <Link to="/about">
            <motion.div
              className="about-link-btn"
              role="button"
              variants={hoverVariants}
              initial="initial"
              whileHover="hover"
              transition={easeOutTransition}
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
