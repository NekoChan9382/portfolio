import React from "react";
import "./AboutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const AboutPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main"></div>
      <Footer />
    </div>
  );
};

export default AboutPage;
