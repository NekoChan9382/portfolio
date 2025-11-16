import React from "react";
import "./AboutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Career from "../components/About/Career";

const AboutPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Career />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
