import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import TopPage from "./pages/TopPage";
import AboutPage from "./pages/AboutPage";
import SkillPage from "./pages/SkillPage";
import ProjectPage from "./pages/ProjectPage";
import Layout from "./components/Layout";

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
