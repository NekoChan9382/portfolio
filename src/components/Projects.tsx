import React from "react";
import { ProjectContent, projectList } from "./Contents";
import "./Projects.css";

const Projects: React.FC = () => {
  const projects = projectList;
  const projectCards = projects.map((p) => {
    return <ProjectCard key={p.name} content={p} />;
  });
  return (
    <section id="projects">
      <div className="section-content">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className="cards">{projectCards}</div>
      </div>
    </section>
  );
};

type ProjectCardProps = { content: ProjectContent };

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  const { name, description, link, img, techs } = content;
  const techSpan = techs.map((tech) => {
    return (
      <span className="tech-tag" key={tech}>
        {tech}
      </span>
    );
  });
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={img} alt={`${name} logo`} />
      </div>
      <div className="project-detail">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{description}</p>
        <div className="tech-list">{techSpan}</div>
      </div>
      <div className="project-link">
        <a href={link} target="blank">
          <span className="link-btn">Visit</span>
        </a>
      </div>
    </div>
  );
};

export default Projects;
