import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import "./Header.css";

const Header: React.FC = () => {
  const buttons: NavButtonContent[] = [
    { label: "About", link: "/about" },
    { label: "Skills", link: "/skills" },
    { label: "Projects", link: "/projects" },
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
  const [isHovered, setIsHovered] = useState(false);

  // CSS変数を取得
  const hoverColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--hover-color")
    .trim();

  return (
    <li>
      <Link to={link}>
        <motion.button
          className="nav-button"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            animate={{ color: isHovered ? hoverColor : "#000000" }}
            transition={{ duration: 0.3 }}
          >
            {label}
          </motion.span>
          <motion.div
            className="nav-button-underline"
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          />
        </motion.button>
      </Link>
    </li>
  );
};

type NavButtonContent = {
  label: string;
  link: string;
};

export default Header;
