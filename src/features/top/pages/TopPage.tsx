import React from "react";
import { AnimatePresence, motion } from "motion/react";
import "./TopPage.css";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import { Popper } from "@mui/material";
import { Link } from "react-router-dom";
import { hoverVariants } from "../../../shared/animations";
import { easeOutTransition } from "../../../shared/animations";

const TopPage: React.FC = () => {
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
      <div className="section" id="section-about">
        <About />
        <Projects />
      </div>
      <Link to="/skills" className="dashboard-link">
        <motion.div
          ref={skillSectionRef}
          className="section"
          id="section-skills"
          variants={hoverVariants}
          initial="initial"
          whileHover="hover"
          transition={easeOutTransition}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Skills />
        </motion.div>
      </Link>
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
