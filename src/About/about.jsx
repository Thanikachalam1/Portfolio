import React from "react";
import "./about.css";
import { color } from "framer-motion";

function About() {
  return (
    <section className="About" id="about">
      <div className="about-container">
        <h2 className="heading">About Me</h2>
        
        <div className="about-bubble">
          <p>
            Hey, I'm <strong>Thanikachalam</strong> — a developer and content creator with a passion for blending design with functionality.
          </p>
          <p>
            I'm currently a student and an editor who enjoys building interactive, accessible experiences using modern web tech.
          </p>
          <p>
            My goal is to make technology feel intuitive and human, whether through front-end development, content creation, or backend logic.
          </p>
        </div>

        <div className="skills-section">
          <h3 style={{color : "#ffa500" }}>My Tech Stack</h3>
          <div className="tech-scroll">
            <span className="tech-chip">React</span>
            <span className="tech-chip">JavaScript</span>
            <span className="tech-chip">Python</span>
            <span className="tech-chip">Flask</span>
            <span className="tech-chip">MySQL</span>
            <span className="tech-chip">Tailwind</span>
            <span className="tech-chip">Git</span>
            <span className="tech-chip">GitHub</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
