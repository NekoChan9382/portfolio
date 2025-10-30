import React from "react";
import "./Skills.css";

type SkillCardContent = {
  img: string;
  name: string;
  color: string;
};

const Skills: React.FC = () => {
  const skillList: SkillCardContent[] = [
    {
      img: "./assets/stack-icons/cplusplus.png",
      name: "C++",
      color: "#00599C",
    },
    {
      img: "./assets/stack-icons/python.png",
      name: "Python",
      color: "#3776AB",
    },
    {
      img: "./assets/stack-icons/javascript.png",
      name: "JavaScript",
      color: "#F7DF1E",
    },
    {
      img: "./assets/stack-icons/typescript.png",
      name: "TypeScript",
      color: "#3178C6",
    },
    {
      img: "./assets/stack-icons/html5.png",
      name: "HTML",
      color: "#E34F26",
    },
    {
      img: "./assets/stack-icons/css.png",
      name: "CSS",
      color: "#663399",
    },
    {
      img: "./assets/stack-icons/react.png",
      name: "React",
      color: "#61DAFB",
    },
  ];
  const skillCards = skillList.map((s) => {
    return <SkillCard key={s.name} props={s} />;
  });
  return (
    <section className="skills-section">
      <div className="section-content">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="cards">{skillCards}</div>
      </div>
    </section>
  );
};

type SkillCardProps = { props: SkillCardContent };

const SkillCard: React.FC<SkillCardProps> = ({ props }) => {
  const { img, name, color } = props;
  return (
    <div className="skill-card">
      <div className="skill-img" style={{ background: color }}>
        <img src={img} alt={`${name} logo`} />
      </div>
      <h3 className="skill-name">{name}</h3>
    </div>
  );
};

export default Skills;
