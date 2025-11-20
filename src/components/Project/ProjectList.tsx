import React from "react";
import { ProjectContent, projectList } from "../Common/Contents";
import styles from "./ProjectList.module.css";

const ProjectList: React.FC = () => {
  const cards = projectList.map((p) => (
    <ProjectCard key={p.name} content={p} />
  ));
  return (
    <section id="project-list">
      <div className="section-content">
        <div className="section-title">
          <h2>Projects</h2>
        </div>
        <div className={styles.cards}>{cards}</div>
      </div>
    </section>
  );
};

const ProjectCard: React.FC<{ content: ProjectContent }> = ({ content }) => {
  const { name, about, description, link, imgs, techs } = content;
  return (
    <div className={styles.projectCard}>
      <Images imgs={imgs || []} />
      <div className={styles.projectDescription}>
        <h2>{name}</h2>
        <h4>{about}</h4>
        <p>{description}</p>
        <div className={styles.techList}>
          <h4 className={styles.techListTitle}>使用技術</h4>
          <div className={styles.techTags}>
            {techs.map((tech) => (
              <span key={tech} className={styles.techTag}>
                {tech}
              </span>
            ))}
          </div>
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            View Project
          </a>
        )}
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
            className={`${styles.projectImage} ${
              selectedImgIndex === index ? styles.selected : ""
            }`}
            onClick={() => setSelectedImgIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
