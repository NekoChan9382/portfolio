import React from "react";
import "./TopPage.css";
import Layout from "../components/Layout";
import About from "../components/Top/About";
import Skills from "../components/Top/Skills";
import Projects from "../components/Top/Projects";

const TopPage: React.FC = () => {
  return (
    <div className="dashboard">
      <div className="section about">
        <About />
        <Projects />
      </div>
      <div className="section">
        <Skills />
      </div>
    </div>
  );
};

export default TopPage;
