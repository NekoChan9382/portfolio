import React from "react";
import { SkillCardContent } from "./Common/Contents";
import { Card } from "@mui/material";

type SkillCardProps = {
  skill: SkillCardContent;
  showName?: boolean;
  className?: string;
};

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  showName = false,
  className,
}) => {
  const { img, name, color } = skill;

  return (
    <Card className={className}>
      <div className="skill-img" style={{ background: color }}>
        <img src={`${process.env.PUBLIC_URL}${img}`} alt={`${name} logo`} />
      </div>
      {showName && <div className="skill-name">{name}</div>}
    </Card>
  );
};
