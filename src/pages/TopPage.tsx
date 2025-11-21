import React from "react";
import { AnimatePresence, motion } from "motion/react";
import "./TopPage.css";
import About from "../components/Top/About";
import Skills from "../components/Top/Skills";
import Projects from "../components/Top/Projects";
import { Popper } from "@mui/material";
import { Link } from "react-router-dom";

const TopPage: React.FC = () => {
  const borderColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--border-color")
    .trim();
  const hoverColor = getComputedStyle(document.documentElement)
    .getPropertyValue("--hover-color")
    .trim();
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null);
  const skillSectionRef = React.useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setAnchorEl(skillSectionRef.current);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div className="dashboard">
      <div className="section about">
        <About />
        <Projects />
      </div>
      <motion.div
        ref={skillSectionRef}
        className="section"
        initial={{
          borderColor: borderColor,
        }}
        whileHover={{
          borderColor: hoverColor,
          boxShadow: `0 0 20px ${hoverColor}40`,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link to="/skills">
          <Skills />
        </Link>
      </motion.div>
      <AnimatePresence>
        {open && (
          <Popper
            open={true}
            anchorEl={anchorEl}
            placement="bottom"
            modifiers={[
              {
                name: "offset",
                options: {
                  offset: [0, 15],
                },
              },
            ]}
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="skill-hover-card">
                <p>技術スタックを確認</p>
              </div>
            </motion.div>
          </Popper>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TopPage;
