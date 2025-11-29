import React from "react";
import { CareerItemContent, careerList } from "../../../shared/data/Contents";
import Section from "../../../shared/components/Section/Section";
import "./Career.css";

const Career: React.FC = () => {
  const careerItems = careerList.map((item) => {
    return <CareerItem key={`${item.date}-${item.title}`} content={item} />;
  });
  return (
    <Section id="career" title="Career">
      <div className="careers">{careerItems}</div>
    </Section>
  );
};

const CareerItem: React.FC<{ content: CareerItemContent }> = ({ content }) => {
  const { date, title, description } = content;
  return (
    <div className="career-item">
      <p className="date">{date}</p>
      <h4 className="title">{title}</h4>
      <p className="description">{description}</p>
    </div>
  );
};

export default Career;
