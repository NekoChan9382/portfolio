import React, { useState } from "react";
import { SkillCategory, SkillCardContent } from "../../../shared/types/Types";
import { SkillGroups, getHoverColor } from "../../../shared/utils/Helper";
import { motion, AnimatePresence } from "motion/react";
import SkillCard from "../../../shared/components/SkillCard/SkillCard";
import Section from "../../../shared/components/Section/Section";
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
    <Section id="skill-list" title="Skills">
      {Grids}
    </Section>
  );
};

type GridItemProps = {
  category: SkillCategory;
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
          <motion.div
            key={skill.name}
            initial={{ y: 0 }}
            whileHover={{ y: -10, color: getHoverColor() }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
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
          </motion.div>
        ))}
      </div>
      <AnimatePresence mode="sync">
        {selectedSkill && selectedSkill.type === category && (
          <motion.div
            key={selectedSkill.name}
            initial={{ opacity: 0, height: 0, y: -20 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={{ opacity: 0, height: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ overflow: "hidden" }}
          >
            <DetailCard skill={selectedSkill} />
          </motion.div>
        )}
      </AnimatePresence>
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
