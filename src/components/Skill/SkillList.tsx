import React, { useState } from "react";
import { SkillType, SkillCardContent } from "../Common/Contents";
import { SkillGroups } from "../Common/SkillUtils";
import SkillCard from "../Common/SkillCard";
import styles from "./SkillList.module.css";

const SkillList: React.FC = () => {
  const groupedSkills = SkillGroups;
  const [selectedSkill, setSelectedSkill] = useState<SkillCardContent | null>(
    null
  );

  const OnSkillCardClick = (skill: SkillCardContent) => {
    setSelectedSkill(skill === selectedSkill ? null : skill);
  };

  const Grids = groupedSkills.map((group) => (
    <GridItem
      key={group.category}
      category={group.category}
      skills={group.skills}
      onSkillClick={OnSkillCardClick}
      selectedSkill={selectedSkill}
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
  onSkillClick: (skill: SkillCardContent) => void;
  selectedSkill: SkillCardContent | null;
};

const GridItem: React.FC<GridItemProps> = ({
  category,
  skills,
  onSkillClick,
  selectedSkill,
}) => {
  return (
    <div className={styles.gridItem}>
      <h2 className={styles.skillCategory}>{category}</h2>
      <div className={styles.cards}>
        {skills.map((skill) => (
          <SkillCard
            skill={skill}
            showName={true}
            className={`${styles.skillCard} ${
              selectedSkill?.name === skill.name ? styles.selected : ""
            }`}
            imgClassName={styles.skillImg}
            nameClassName={styles.skillName}
            onClick={() => onSkillClick(skill)}
          />
        ))}
      </div>
      {selectedSkill && <DetailCard skill={selectedSkill} />}
    </div>
  );
};

const DetailCard: React.FC<{ skill: SkillCardContent }> = ({ skill }) => {
  const { name, about, description } = skill;
  return (
    <div className={styles.detailCard}>
      <div className={styles.detailTitle}>
        <SkillCard
          skill={skill}
          showName={false}
          imgClassName={styles.detailImg}
        />
        <div className={styles.detailName}>{name}</div>
      </div>
      <div className={styles.detailAbout}>
        <h4>{about}</h4>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SkillList;
