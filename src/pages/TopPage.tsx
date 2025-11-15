import React from "react";
import "./TopPage.css";
import Header from "../components/Header";
import About from "../components/Top/About";
import Skills from "../components/Top/Skills";
import Projects from "../components/Top/Projects";
import Footer from "../components/Footer";

const TopPage: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <div className="section about">
          <About />
          <Projects />
        </div>
        <div className="section">
          <Skills />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TopPage;
