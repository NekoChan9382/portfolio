import React from "react";
import { motion } from "motion/react";
import { ProjectContent, projectList } from "../../../shared/data/Contents";
import Section from "../../../shared/components/Section/Section";
import { getBorderColor, getHoverColor } from "../../../shared/data/Contents";
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
  const borderColor = getBorderColor();
  const hoverColor = getHoverColor();
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
          initial={{
            borderColor: borderColor,
          }}
          whileHover={{
            borderColor: hoverColor,
            boxShadow: `0 0 20px ${hoverColor}40`,
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
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
