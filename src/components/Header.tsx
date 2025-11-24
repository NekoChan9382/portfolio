import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Drawer, Button } from "@mui/material";
import { useIsMobile } from "./Common/Contents";
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
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const isMobile = useIsMobile();

  return (
    <header className="header">
      <div className="header-container">
        <nav className="nav">
          <Link to="/">
            <motion.div
              className="nav-icon"
              initial={{ scale: 1, color: "black" }}
              whileHover={{ scale: 1.1, color: "var(--hover-color)" }}
            >
              <span>Portfolio</span>
            </motion.div>
          </Link>
          {isMobile ? (
            <>
              <Button onClick={() => setIsDrawerOpen(true)}>Menu</Button>
              <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => {
                  setIsDrawerOpen(false);
                }}
                onClick={() => {
                  setIsDrawerOpen(false);
                }}
              >
                {navs}
              </Drawer>
            </>
          ) : (
            <ul className="nav-links">{navs}</ul>
          )}
        </nav>
      </div>
    </header>
  );
};

const NavButton: React.FC<{ content: NavButtonContent }> = ({ content }) => {
  const { label, link } = content;
  const [isHovered, setIsHovered] = useState(false);

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
            animate={{ color: isHovered ? "var(--hover-color)" : "#000000" }}
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
