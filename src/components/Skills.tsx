import React from "react";
import "./Skills.css";

type SkillCardContent = {
  img: string;
  name: string;
};

const Skills: React.FC = () => {
  const skillList: SkillCardContent[] = [
    { img: "./assets/NullTasker.png", name: "C++" },
    { img: "./assets/NullTasker.png", name: "Python" },
  ];
  const skillCards = skillList.map((s) => {
    return <SkillCard key={s.name} props={s} />;
  });
  return (
    <section className="skills-section">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <div className="cards">{skillCards}</div>
    </section>
  );
};

type SkillCardProps = { props: SkillCardContent };

const SkillCard: React.FC<SkillCardProps> = ({ props }) => {
  const { img, name } = props;
  return (
    <div className="skill-card">
      <img className="skill-img" src={img} alt={`${name} logo`} />
      <h3 className="skill-name">{name}</h3>
    </div>
  );
};

export default Skills;
