export const SkillTypeList = {
  Front: "Frontend",
  Back: "Backend",
  Dev: "Dev tools",
  Robo: "Robotics",
} as const;

export type SkillType = (typeof SkillTypeList)[keyof typeof SkillTypeList];

export type SkillCardContent = {
  img: string;
  name: string;
  color: string;
  type: SkillType;
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
  category: SkillType;
  skills: SkillCardContent[];
};
