import React from "react";

type ProjectContent = {
  name: string;
  description: string;
  link: string;
  img: string;
  techs: string[];
};

const Projects: React.FC = () => {
  const projectList: ProjectContent[] = [
    {
      name: "NullTasker",
      description: "チーム向け総合タスク管理システム",
      link: "https://github.com/Team-Nullpo/NullTasker",
      img: "./assets/NullTasker.png",
      techs: ["HTML", "CSS", "JavaScript", "Node.js"],
    },
  ];
  const projectCards = projectList.map((p) => {
    return <ProjectCard key={p.name} content={p} />;
  });
  return <section className="projects">{projectCards}</section>;
};

type ProjectCardProps = { content: ProjectContent };

const ProjectCard: React.FC<ProjectCardProps> = ({ content }) => {
  const { name, description, link, img, techs } = content;
  const techSpan = techs.map((tech) => {
    return <span className="tech-tag">{tech}</span>;
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
