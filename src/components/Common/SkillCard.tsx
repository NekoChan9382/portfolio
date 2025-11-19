import React from "react";
import { SkillCardContent } from "./Contents";

type SkillCardProps = {
  skill: SkillCardContent;
  showName?: boolean;
  className?: string;
  imgClassName?: string;
  nameClassName?: string;
};

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  showName = false,
  className = "",
  imgClassName = "",
  nameClassName = "",
}) => {
  const { img, name, color } = skill;

  return (
    <div className={className}>
      <div className={imgClassName} style={{ background: color }}>
        <img src={`${process.env.PUBLIC_URL}${img}`} alt={`${name} logo`} />
      </div>
      {showName && <div className={nameClassName}>{name}</div>}
    </div>
  );
};

export default SkillCard;
