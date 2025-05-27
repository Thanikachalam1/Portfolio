import React, { useRef, useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    title: "Project One",
    description: "Description for project one.",
    image: "/project1.jpg",
    link: "#",
    tech: ["React", "CSS"],
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "/project2.jpg",
    link: "#",
    tech: ["Node.js", "MongoDB"],
  },
  {
    title: "Project Three",
    description: "Description for project three.",
    image: "/project3.jpg",
    link: "#",
    tech: ["Python", "Flask"],
  },
  {
    title: "Project Four",
    description: "Description for project four.",
    image: "/project4.jpg",
    link: "#",
    tech: ["HTML", "JS"],
  },
];

const Projects = () => {
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const el = scrollContainerRef.current;

    const handleWheel = (e) => {
      const isInside =
        el && el.getBoundingClientRect().top < window.innerHeight &&
        el.getBoundingClientRect().bottom > 0;

      if (!isInside) return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        if (
          (e.deltaY < 0 && el.scrollLeft === 0) ||
          (e.deltaY > 0 &&
            el.scrollLeft + el.clientWidth >= el.scrollWidth - 1)
        ) {
          // Let the page scroll vertically if at horizontal ends
          return;
        }

        e.preventDefault();
        el.scrollLeft += e.deltaY * 13.5; // Increase scroll speed
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section className="projects-wrapper snap-section" id="projects">
      <h2 className="projects-title">My Works</h2>
      <div className="projects-container" ref={scrollContainerRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
