import React from "react";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <motion.h1
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h1>
      <p>
        Hi, I'm <span>Akkash Dharsaun</span>, a passionate developer.
      </p>
    </section>
  );
};

export default Home;
