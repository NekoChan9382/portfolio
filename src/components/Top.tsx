import React from "react";
import "./Top.css";
import Header from "./Header";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Footer from "./Footer";

function Top() {
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
}

export default Top;
