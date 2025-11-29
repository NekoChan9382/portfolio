import React from "react";
import {
  getBorderColor,
  getHoverColor,
  ProjectContent,
  projectList,
} from "../Common/Contents";
import Section from "../Common/Section";
import styles from "./ProjectList.module.css";
import { Modal } from "@mui/material";
import { motion, AnimatePresence } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

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
  const { id, name, about, description, link, imgs, techs } = content;
  return (
    <div className={styles.projectCard} id={id}>
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
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);
  const direction = React.useRef<number>(0);
  const hoverColor = getHoverColor();
  const borderColor = getBorderColor();

  const paginate = (newDirection: number) => {
    direction.current = newDirection;
    setSelectedImgIndex(
      (prevIndex) => (prevIndex + newDirection + imgs.length) % imgs.length
    );
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  const pageArrowVariants = {
    initial: {
      color: "black",
      borderColor: borderColor,
    },
    hover: {
      color: hoverColor,
      borderColor: hoverColor,
      boxShadow: `0 0 20px ${hoverColor}40`,
    },
  };

  return (
    <>
      <div className={styles.projectImages}>
        <div className={styles.mainImage}>
          {imgs.length > 0 && (
            <img
              src={`${process.env.PUBLIC_URL}${imgs[selectedImgIndex]}`}
              alt="Project main"
              onClick={() => setIsModalOpen(true)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  setIsModalOpen(true);
                }
              }}
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
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal">
          {imgs.length > 0 && (
            <>
              <div className={styles.modalContent}>
                <motion.button
                  className={styles.changeImageBtn}
                  onClick={() => paginate(-1)}
                  variants={pageArrowVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  aria-label="Previous Image"
                >
                  <FontAwesomeIcon icon={faCaretLeft} />
                </motion.button>

                <div className={styles.imageContainer}>
                  <AnimatePresence
                    initial={false}
                    custom={direction.current}
                    mode="sync"
                  >
                    <motion.img
                      className={styles.modalImage}
                      key={selectedImgIndex}
                      src={`${process.env.PUBLIC_URL}${imgs[selectedImgIndex]}`}
                      alt="Project enlarged"
                      custom={direction.current}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ ease: "easeOut", duration: 0.3 }}
                    />
                  </AnimatePresence>
                </div>

                <motion.button
                  className={styles.changeImageBtn}
                  onClick={() => paginate(1)}
                  variants={pageArrowVariants}
                  initial="initial"
                  whileHover="hover"
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  aria-label="Next Image"
                >
                  <FontAwesomeIcon icon={faCaretRight} />
                </motion.button>
              </div>
              <p>{`${selectedImgIndex + 1} / ${imgs.length}`}</p>
            </>
          )}
        </div>
      </Modal>
    </>
  );
};
export default ProjectList;
