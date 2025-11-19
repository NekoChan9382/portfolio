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
  return (
    <section id="skill-list">
      <div className="section-content">
        <div className="section-title">
          <h2>Skills</h2>
        </div>
        {Grids}
      </div>
    </section>
  );
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

const DetailCard: React.FC<{ skill: SkillCardContent }> = ({ skill }) => {
  const { img, name, color } = skill;
  return (
    <div className={styles.detailCard}>
      <div className={styles.detailImg} style={{ background: color }}>
        <img src={`${process.env.PUBLIC_URL}${img}`} alt={`${name} logo`} />
      </div>
      <div className={styles.detailName}>{name}</div>
    </div>
  );
};

export default SkillList;
