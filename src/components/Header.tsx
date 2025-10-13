import React from "react";
import "./Header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav">
        <div className="nav-icon">
          <span>Portfolio</span>
        </div>
        <ul className="nav-links">
          <li>
            <button>About</button>
          </li>
          <li>
            <button>Skills</button>
          </li>
          <li>
            <button>Projects</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
