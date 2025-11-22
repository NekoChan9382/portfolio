import React from "react";
import { useLocation } from "react-router-dom";
import ProjectList from "../components/Project/ProjectList";
import "./ProjectPage.css";

const ProjectPage: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  }, [location]);

  return <ProjectList />;
};

export default ProjectPage;
