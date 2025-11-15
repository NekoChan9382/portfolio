import React from "react";
import "./AboutPage.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Graph from "../components/About/Graph";

const AboutPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Graph />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
