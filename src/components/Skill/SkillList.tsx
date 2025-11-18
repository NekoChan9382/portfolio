import React from "react";
import {
  SkillCardContent,
  skillList,
  SkillTypeList,
  SkillType,
} from "../Contents";
import { Card } from "@mui/material";
import "./SkillList.css";

type GridProps = { category: SkillType; skills: SkillCardContent[] };

const SkillList: React.FC = () => {
  const groupedSkills: GridProps[] = Object.values(SkillTypeList).map(
    (category) => {
      const skills = skillList.filter((skill) => skill.type === category);
      return { category, skills };
    }
  );
  const Grids = groupedSkills.map((group) => (
    <GridItem key={group.category} content={group} />
  ));
  return <div>{Grids}</div>;
};

const GridItem: React.FC<{ content: GridProps }> = ({ content }) => {
  const { category, skills } = content;
  return (
    <div className="grid-item">
      <h2 className="skill-category">{category}</h2>
      <div className="cards">
        {skills.map((s) => (
          <SkillCard key={s.name} props={s} />
        ))}
      </div>
    </div>
  );
};

const SkillCard: React.FC<{ props: SkillCardContent }> = ({ props }) => {
  const { img, name, color } = props;
  return (
    <Card className="skill-card">
      <div className="skill-img" style={{ background: color }}>
        <img src={`${process.env.PUBLIC_URL}${img}`} alt={`${name} logo`} />
      </div>
    </Card>
  );
};

export default SkillList;
