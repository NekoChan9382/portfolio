import React from "react";
import { CareerItemContent, careerList } from "../Contents";
import "./Career.css";

const Career: React.FC = () => {
  const careerItems = careerList.map((item) => {
    return <CareerItem key={`${item.date}-${item.title}`} content={item} />;
  });
  return (
    <section id="career">
      <div className="section-content">
        <div className="section-title">
          <h2>Career</h2>
        </div>
        <div className="careers">{careerItems}</div>
      </div>
    </section>
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
