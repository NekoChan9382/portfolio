import React from "react";
import { SkillCardContent, skillList } from "./Contents";
import "./Skills.css";

const Skills: React.FC = () => {
  const skills = skillList;
  const skillCards = skills.map((s) => {
    return <SkillCard key={s.name} props={s} />;
  });
  return (
    <section id="skills">
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
