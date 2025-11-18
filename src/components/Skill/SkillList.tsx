import React from "react";
import {
  SkillCardContent,
  skillList,
  SkillTypeList,
  SkillType,
} from "../Contents";
import "./SkillList.css";

type GridProps = { category: SkillType; skills: SkillCardContent[] };

const SkillList: React.FC = () => {
  const groupedSkills: GridProps[] = Object.values(SkillTypeList).map(
    (category) => {
      const skills = skillList.filter((skill) => skill.type === category);
      return { category, skills };
    }
  );
  return <></>;
};

const GridItem: React.FC<{ content: GridProps }> = ({ content }) => {
  const { category, skills } = content;
  return <div className="grid-item"></div>;
};

export default SkillList;
