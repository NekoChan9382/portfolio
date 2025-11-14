import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopPage from "./components/TopPage";
import AboutPage from "./components/AboutPage";
import SkillPage from "./components/SkillPage";
import ProjectPage from "./components/ProjectPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
