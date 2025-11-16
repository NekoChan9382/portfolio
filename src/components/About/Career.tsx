import React from "react";
import { CareerItemContent, careerList } from "../Contents";
import "./Career.css";

const Career: React.FC = () => {
  const careerItems = careerList.map((item) => {
    return <CareerItem key={item.title} content={item} />;
  });
  return (
    <section id="career">
      <div className="section-content">
        <div className="careers">
          <h2>Career</h2>
          {careerItems}
        </div>
      </div>
    </section>
  );
};

const CareerItem: React.FC<{ content: CareerItemContent }> = ({ content }) => {
  const { time, title, description } = content;
  return (
    <div className="career-item">
      <p>{time}</p>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Career;
