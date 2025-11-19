import React from "react";
import { SkillType } from "../Common/Contents";
import { SkillGroups } from "../Common/SkillUtils";
import SkillCard from "../Common/SkillCard";
import "./Skills.css";

const Skills: React.FC = () => {
  const groupedSkills = SkillGroups;
  const skillCards = groupedSkills.map((group) => (
    <SkillSection
      key={group.category}
      category={group.category}
      skills={group.skills}
    />
  ));
  return (
    <section id="skills">
      <div className="section-content">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        <div className="skill-list">{skillCards}</div>
      </div>
    </section>
  );
};

type SkillSectionProps = {
  category: SkillType;
  skills: any[];
};

const SkillSection: React.FC<SkillSectionProps> = ({ category, skills }) => {
  return (
    <div className="skill-field">
      <h2 className="skill-category">{category}</h2>
      <div className="cards">
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            showName={false}
            className="skill-card"
            imgClassName="skill-img"
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
