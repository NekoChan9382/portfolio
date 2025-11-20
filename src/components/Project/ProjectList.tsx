import React from "react";
import { ProjectContent, projectList } from "../Common/Contents";
import styles from "./ProjectList.module.css";

const ProjectList: React.FC = () => {
  const cards = projectList.map((p) => (
    <ProjectCard key={p.name} content={p} />
  ));
  return <>{cards}</>;
};

const ProjectCard: React.FC<{ content: ProjectContent }> = ({ content }) => {
  const { name, description, link, img, techs } = content;
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectImages}></div>
      <div className={styles.projectDescription}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};
export default ProjectList;
