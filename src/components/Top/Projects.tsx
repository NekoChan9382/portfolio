import React from "react";
import { ProjectContent, projectList } from "../Common/Contents";
import Section from "../Common/Section";
import "./Projects.css";

const Projects: React.FC = () => {
  const projectCards = projectList.map((p) => {
    return <ProjectCard key={p.name} content={p} />;
  });
  return (
    <Section id="projects" title="Projects">
      <div className="cards">{projectCards}</div>
    </Section>
  );
};

type ProjectCardProps = { content: ProjectContent };

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  const { name, about, thumbnail, techs } = content;
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
        <img
          src={`${process.env.PUBLIC_URL}${thumbnail}`}
          alt={`${name} logo`}
        />
      </div>
      <div className="project-detail">
        <h3 className="project-name">{name}</h3>
        <p className="project-description">{about}</p>
        <div className="tech-list">{techSpan}</div>
      </div>
    </div>
  );
};

export default Projects;
