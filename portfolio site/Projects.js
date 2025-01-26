
import React from "react";
import { motion } from "framer-motion";
import "./Projects.css";

const Projects = () => {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects">
        {[1, 2].map((project, index) => (
          <motion.div
            key={index}
            className="project"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.3 }}
          >
            <h3>Project {project}</h3>
            <p>Description of Project {project}.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
