import React from "react";
import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
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

export default App;
