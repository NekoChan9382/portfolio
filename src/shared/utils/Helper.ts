import { SkillCategoryList, GroupedSkills } from "../types/Types";
import { skillList } from "../data/Contents";
import { useMediaQuery } from "react-responsive";
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

const mobileWidth: number = 768;

export const useIsMobile = (): boolean => {
  return useMediaQuery({ query: `(max-width: ${mobileWidth}px)` });
};
