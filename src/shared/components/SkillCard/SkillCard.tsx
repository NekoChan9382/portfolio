import React from "react";
import { SkillCardContent } from "../../types/Types";

type SkillCardProps = {
  skill: SkillCardContent;
  showName?: boolean;
  className?: string;
  imgClassName?: string;
  nameClassName?: string;
  onClick?: () => void;
};

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  showName = false,
  className = "",
  imgClassName = "",
  nameClassName = "",
  onClick,
}) => {
  const { img, name, color } = skill;

  return (
    <div className={className} onClick={onClick}>
      <div className={imgClassName} style={{ background: color }}>
        <img src={`${process.env.PUBLIC_URL}${img}`} alt={`${name} logo`} />
      </div>
      {showName && <div className={nameClassName}>{name}</div>}
    </div>
  );
};

export default SkillCard;
