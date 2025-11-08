import React from "react";
import "./Projects.css";

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
    {
      name: "Train Info Board",
      description: "APIを通じて列車案内板を表示するツール",
      link: "https://colab.research.google.com/drive/1DtQIWg34rP2i_r0hwOCLPYTyFxwjilA7?usp=sharing",
      img: "./null.png",
      techs: ["Python", "Colab"],
    },
    {
      name: "PR Issue Notifier",
      description: "GitHubのPRに関連するIssueを通知するツール",
      link: "https://github.com/NekoChan9382/pr-issue-notification",
      img: "./null.png",
      techs: ["Elixir", "GitHub"],
    },
  ];
  const projectCards = projectList.map((p) => {
    return <ProjectCard key={p.name} content={p} />;
  });
  return (
    <section className="projects">
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
