import React from "react";
import { SkillType, SkillCardContent } from "../Common/Contents";
import { SkillGroups } from "../Common/SkillUtils";
import SkillCard from "../Common/SkillCard";
import styles from "./SkillList.module.css";

const SkillList: React.FC = () => {
  const groupedSkills = SkillGroups;
  const Grids = groupedSkills.map((group) => (
    <GridItem
      key={group.category}
      category={group.category}
      skills={group.skills}
    />
  ));
  return <div>{Grids}</div>;
};

type GridItemProps = {
  category: SkillType;
  skills: SkillCardContent[];
};

const GridItem: React.FC<GridItemProps> = ({ category, skills }) => {
  return (
    <div className={styles.gridItem}>
      <h2 className={styles.skillCategory}>{category}</h2>
      <div className={styles.cards}>
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
            showName={true}
            className={styles.skillCard}
            imgClassName={styles.skillImg}
            nameClassName={styles.skillName}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillList;
