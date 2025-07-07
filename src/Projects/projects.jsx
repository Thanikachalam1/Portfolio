import React, { useState, useEffect, useRef } from 'react';
import './Projects.css';

const projects = [
  {
    title: "1. Research Journal",
    description:
      "A web-based journal platform to showcase academic research with search, filters, and downloadable PDFs.",
    image: "/Portfolio/pictures/journal.png",
    link: "https://ijrce.com/",
    tech: ["React", "Tailwind"],
  },
  {
    title: "2. First Portfolio",
    description:
      "My first portfolio: strictly mobile-only — desktops are just jealous! Warning: may cause thumb cramps and random bursts of nostalgia",
    image: "/Portfolio/pictures/portfolio.png",
    link: "https://thanikachalam1.github.io/PortfolioOld/",
    tech: ["Vanilla JS"],
  },
  {
    title: "3. Flappy Bird",
    description:
      "Bird goes up… eventually. Maybe. Poor physics included",
    image: "/Portfolio/pictures/flappy.png",
    link: "https://thanikachalam1.github.io/PortfolioOld/flap.html",
    tech: ["Vanilla JS"],
  },
];

const Projects = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = windowHeight * 4; // 200vh
      const progress = Math.min(Math.max(scrollPosition / totalHeight, 0), 1);

      // console.log('scrollY:', scrollPosition, 'progress:', progress);

      setScrollProgress(progress);

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (containerRef.current) {
          const containerWidth = containerRef.current.scrollWidth;
          const scrollX = progress * (containerWidth - window.innerWidth);
          containerRef.current.style.transform = `translateX(-${scrollX}px)`;
        }
      }, 100); // Debounce for smooth scrolling
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <section className="projects-container" id = "projects">
      <div className="projects-wrapper" ref={containerRef}>
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-content">
              <h2 className="project-title">{project.title}</h2>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((techItem, techIndex) => (
                  <span key={techIndex} className="tech-badge">
                    {techItem}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;