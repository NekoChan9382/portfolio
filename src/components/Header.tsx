import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  const buttonLabels: string[] = ["About", "Skills", "Projects"];
  const navs = buttonLabels.map((label) => {
    return (
      <li key={label}>
        <button className="nav-button">{label}</button>
      </li>
    );
  });

  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-icon">
          <span>Portfolio</span>
        </div>
        <ul className="nav-links">{navs}</ul>
      </nav>
    </header>
  );
};

export default Header;
