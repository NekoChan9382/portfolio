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
  const { name, description, link, imgs, techs } = content;
  return (
    <div className={styles.projectCard}>
      <Images imgs={imgs || []} />
      <div className={styles.projectDescription}>
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

const Images: React.FC<{ imgs: string[] }> = ({ imgs }) => {
  const [selectedImgIndex, setSelectedImgIndex] = React.useState<number>(0);
  return (
    <div className={styles.projectImages}>
      <div className={styles.mainImage}>
        <img
          src={`${process.env.PUBLIC_URL}${imgs[selectedImgIndex]}`}
          alt="Project main"
        />
      </div>
      <div className={styles.thumbnailContainer}>
        {imgs.map((img, index) => (
          <img
            key={index}
            src={`${process.env.PUBLIC_URL}${img}`}
            alt={`Project screenshot ${index + 1}`}
            className={styles.projectImage}
            onClick={() => setSelectedImgIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
