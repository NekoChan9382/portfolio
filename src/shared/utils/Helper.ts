import { SkillCategoryList, GroupedSkills } from "../types/Types";
import { skillList } from "../data/Contents";
export const SkillGroups: GroupedSkills[] = Object.values(
  SkillCategoryList
).map((category) => ({
  category,
  skills: skillList.filter((skill) => skill.type === category),
}));

export const getCSSVariable = (variableName: string): string => {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variableName)
    .trim();
};

export const getBorderColor = () => getCSSVariable("--border-color");
export const getHoverColor = () => getCSSVariable("--hover-color");

export const mobileWidth: number = 768;
