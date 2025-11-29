import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopPage from "../features/top/pages/TopPage";
import AboutPage from "../features/about/pages/AboutPage";
import SkillPage from "../features/skills/pages/SkillPage";
import ProjectPage from "../features/projects/pages/ProjectPage";
import Layout from "../shared/components/Layout/Layout";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL ? "/portfolio" : "/"}>
      <Layout>
        <Routes>
          <Route path="/" element={<TopPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillPage />} />
          <Route path="/projects" element={<ProjectPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
