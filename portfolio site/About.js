import React from "react";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
    return (
        <section id="about" className="about-section">
            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                About Me
            </motion.h2>
            <p>Write about your skills, achievements, and passion here.</p>
        </section>
    );
};

export default About;
