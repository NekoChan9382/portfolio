import React from "react";
import "./AboutPage.css";
import Career from "../components/Career";
import Profile from "../components/Profile";

const AboutPage: React.FC = () => {
  return (
    <>
      <Profile />
      <Career />
    </>
  );
};

export default AboutPage;
