import React from "react";
import { ProjectContent, projectList } from "../Common/Contents";
import Section from "../Common/Section";
import styles from "./ProjectList.module.css";

const ProjectList: React.FC = () => {
  const cards = projectList.map((p) => (
    <ProjectCard key={p.name} content={p} />
  ));
  return (
    <Section id="project-list" title="Projects">
      <div className={styles.cards}>{cards}</div>
    </Section>
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
        <div className={styles.projectLink}>
          {link && (
            <a href={link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Images: React.FC<{ imgs: string[] }> = ({ imgs }) => {
  const [selectedImgIndex, setSelectedImgIndex] = React.useState<number>(0);
  return (
    <div className={styles.projectImages}>
      <div className={styles.mainImage}>
        {imgs.length > 0 && (
          <img
            src={`${process.env.PUBLIC_URL}${imgs[selectedImgIndex]}`}
            alt="Project main"
          />
        )}
      </div>
      <div className={styles.thumbnailContainer}>
        {imgs.map((img, index) => (
          <button
            key={index}
            className={`${styles.projectImage} ${
              selectedImgIndex === index ? styles.selected : ""
            }`}
            onClick={() => setSelectedImgIndex(index)}
          >
            <img
              src={`${process.env.PUBLIC_URL}${img}`}
              alt={`Project screenshot ${index + 1}`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
export default ProjectList;
