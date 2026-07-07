export const SkillCategoryList = {
  Front: "Frontend",
  Back: "Backend",
  Dev: "Dev tools",
  Robo: "Robotics",
} as const;

export const SkillLevelList = {
  1: 1, 2: 2, 3: 3,
} as const;

export type SkillCategory =
  (typeof SkillCategoryList)[keyof typeof SkillCategoryList];

export type SkillLevel =
  (typeof SkillLevelList)[keyof typeof SkillLevelList];

export type SkillCardContent = {
  img: string;
  name: string;
  color: string;
  type: SkillCategory;
  level: SkillLevel;
  about: string;
  description?: string;
};

export type ProjectContent = {
  id: string;
  name: string;
  about: string;
  description?: string;
  link: string;
  thumbnail: string;
  imgs?: string[];
  techs: string[];
};

export type CareerItemContent = {
  date: string;
  title: string;
  description: string;
};

export type GroupedSkills = {
  category: SkillCategory;
  skills: SkillCardContent[];
};

export type LinkItem = {
  name: string;
  url: string;
  icon: string;
};
