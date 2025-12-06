import React from "react";
import { motion } from "motion/react";
import { ProjectContent } from "../../../shared/types/Types";
import { projectList } from "../../../shared/data/Contents";
import Section from "../../../shared/components/Section/Section";
import { hoverVariants } from "../../../shared/animations";
import { easeOutTransition } from "../../../shared/animations";
import { Tooltip } from "@mui/material";
import { Link } from "react-router-dom";
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
  const { id, name, about, thumbnail, techs } = content;
  const techSpan = techs.map((tech) => {
    return (
      <span className="tech-tag" key={tech}>
        {tech}
      </span>
    );
  });
  return (
    <Link to={`/projects#${id}`}>
      <Tooltip title="Click to view project" arrow>
        <motion.div
          className="project-card"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={easeOutTransition}
        >
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
        </motion.div>
      </Tooltip>
    </Link>
  );
};

export default Projects;
