import React from "react";
import "./AboutPage.css";
import Career from "../components/About/Career";
import Profile from "../components/About/Profile";

const AboutPage: React.FC = () => {
  return (
    <>
      <Profile />
      <Career />
    </>
  );
};

export default AboutPage;
