import {
  skillList,
  SkillTypeList,
  SkillType,
  SkillCardContent,
} from "../data/Contents";

type SkillGroup = {
  category: SkillType;
  skills: SkillCardContent[];
};

export const SkillGroups: SkillGroup[] = Object.values(SkillTypeList).map(
  (category) => ({
    category,
    skills: skillList.filter((skill) => skill.type === category),
  })
);
