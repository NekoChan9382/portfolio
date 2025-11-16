import React from "react";
import "./AboutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Career from "../components/About/Career";
import Profile from "../components/About/Profile";

const AboutPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Profile />
        <Career />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
