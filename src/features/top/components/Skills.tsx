import React from "react";
import { GroupedSkills } from "../../../shared/types/Types";
import { SkillGroups } from "../../../shared/utils/Helper";
import SkillCard from "../../../shared/components/SkillCard/SkillCard";
import Section from "../../../shared/components/Section/Section";
import "./Skills.css";

const Skills: React.FC = () => {
  const groupedSkills = SkillGroups;
  const skillCards = groupedSkills.map((skillGroup) => (
    <SkillSection key={skillGroup.category} skillGroup={skillGroup} />
  ));
  return (
    <Section id="skills" title="Skills">
      <div className="skill-list">{skillCards}</div>
    </Section>
  );
};

const SkillSection: React.FC<{ skillGroup: GroupedSkills }> = ({
  skillGroup,
}) => {
  const { category, skills } = skillGroup;

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
