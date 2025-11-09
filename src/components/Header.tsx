import React from "react";
import { Link } from "react-scroll";
import "./Header.css";

const Header: React.FC = () => {
  const buttons: NavButtonContent[] = [
    { label: "About", link: "about" },
    { label: "Skills", link: "skills" },
    { label: "Projects", link: "projects" },
  ];
  const navs = buttons.map((b) => {
    return <NavButton key={b.label} content={b} />;
  });

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <div className="nav-icon">
            <span>Portfolio</span>
          </div>
          <ul className="nav-links">{navs}</ul>
        </nav>
      </div>
    </header>
  );
};

const NavButton: React.FC<{ content: NavButtonContent }> = ({ content }) => {
  const { label, link } = content;
  return (
    <li>
      <Link to={link} smooth={true} duration={500} offset={-80}>
        <button className="nav-button">{label}</button>
      </Link>
    </li>
  );
};

type NavButtonContent = {
  label: string;
  link: string;
};

export default Header;
