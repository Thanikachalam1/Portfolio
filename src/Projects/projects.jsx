import React, { useEffect, useRef } from "react";
import "./projects.css";

const projects = [
  { id: 1, title: "Project One", desc: "Description 1" },
  { id: 2, title: "Project Two", desc: "Description 2" },
  { id: 3, title: "Project Three", desc: "Description 3" },
  { id: 4, title: "Project Four", desc: "Description 4" },
  { id: 5, title: "Project Five", desc: "Description 5" },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const container = containerRef.current;

    // Total width to scroll horizontally
    const totalScrollWidth = container.scrollWidth - window.innerWidth;

    const onScroll = () => {
      const scrollTop = window.scrollY;
      const sectionTop = section.offsetTop;
      const scrollDistance = scrollTop - sectionTop;

      if (scrollDistance >= 0 && scrollDistance <= totalScrollWidth) {
        // Fix the section to viewport
        section.style.position = "fixed";
        section.style.top = 0;
        section.style.left = 0;
        section.style.width = "100vw";

        // Translate projects container horizontally
        container.style.transform = `translateX(-${scrollDistance}px)`;
      } else if (scrollDistance > totalScrollWidth) {
        // Release fix and fix container at max scroll
        section.style.position = "relative";
        section.style.top = "";
        section.style.left = "";
        section.style.width = "";
        container.style.transform = `translateX(-${totalScrollWidth}px)`;
      } else {
        // Before reaching section
        section.style.position = "relative";
        section.style.top = "";
        section.style.left = "";
        section.style.width = "";
        container.style.transform = "translateX(0)";
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="Projects" id="projects">
      <div ref={containerRef} className="projects-container">
        {projects.map(({ id, title, desc }) => (
          <div key={id} className="project-card">
            <h3>{title}</h3>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
