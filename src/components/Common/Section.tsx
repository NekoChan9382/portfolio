import React from "react";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  title?: string;
};

const Section: React.FC<SectionProps> = ({ children, id, title }) => {
  return (
    <section id={id}>
      <div className="section-content">
        <div className="section-title">{title && <h2>{title}</h2>}</div>
        {children}
      </div>
    </section>
  );
};

export default Section;
