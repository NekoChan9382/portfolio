import React from "react";
import {
  SkillCardContent,
  skillList,
  SkillTypeList,
  SkillType,
} from "./Contents";
import "./Skills.css";

type SkillSectionProps = { category: SkillType; skills: SkillCardContent[] };

const Skills: React.FC = () => {
  const groupedSkills: SkillSectionProps[] = Object.values(SkillTypeList).map(
    (category) => {
      const skills = skillList.filter((skill) => skill.type === category);
      return { category, skills };
    }
  );
  const skillCards = groupedSkills.map((group) => (
    <SkillSection key={group.category} content={group} />
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

const SkillSection: React.FC<{ content: SkillSectionProps }> = ({
  content,
}) => {
  const { category, skills } = content;
  const skillCards = skills.map((s) => {
    return <SkillCard key={s.name} props={s} />;
  });
  return (
    <div className="skill-field">
      <h2 className="skill-category">{category}</h2>
      <div className="cards">{skillCards}</div>
    </div>
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
    </div>
  );
};

export default Skills;
