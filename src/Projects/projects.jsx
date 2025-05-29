import React, { useRef, useEffect } from "react";
import "./Projects.css";

const projects = [
  {
    title: "1. Research Journal",
    description:
      "A web-based journal platform I developed to showcase academic research papers from faculty, students, and researchers. It features a clean, user-friendly interface with advanced search and filter options to easily explore papers by domain, title, or author. Each paper includes detailed abstracts and downloadable PDFs, making research access simple and efficient. Built with a focus on accessibility, responsiveness, and seamless navigation.",
    image: "/pictures/journal.png",
    link: "https://ijrce.com/",
    tech: ["React", "Tailwind"],
  },
  {
    title: "2. First Portfolio",
    description:
      "Made when I thought mobile-first meant mobile-only. It's proudly allergic to desktop screens and runs best on phones from this decade. No animations, no responsiveness — just raw HTML ambition and pixel dreams. View on mobile... or risk broken layouts and broken hopes.",
    image: "/pictures/portfolio.png",
    link: "https://thanikachalam1.github.io/PortfolioOld/",
    tech: ["Vannila JS"],
  },
  {
    title: "3. Flappy Bird",
    description:
      "Built 3 years ago when I thought JavaScript was magic and debugging was optional. This game is a tribute to pixels, poor physics, and patience-testing. Spoiler: The bird’s main enemy isn’t gravity — it’s my questionable coding decisions. Tap to fly... and cry.",
    image: "/pictures/flappy.png",
    link: "https://thanikachalam1.github.io/PortfolioOld/flap.html",
    tech: ["Vannila JS"],
  },
  {
    title: "4. Calculator using Tkinter",
    description:
      "Built with Tkinter and fueled by caffeine, this calculator handles all your basic math needs—no judgment if you're using it just to add 7 + 8. It may not solve your life problems, but it'll definitely divide them... literally.",
    image: "/pictures/calculator.png",
    link: "https://thanikachalam1.github.io/PortfolioOld/about.html",
    tech: ["Python"],
  },
];

const Projects = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e) => {
      const deltaY = e.deltaY;

      const canScrollLeft = container.scrollLeft > 0;
      const canScrollRight =
        container.scrollLeft + container.clientWidth < container.scrollWidth - 1;

      if ((deltaY > 0 && canScrollRight) || (deltaY < 0 && canScrollLeft)) {
        e.preventDefault();
        container.scrollBy({
          left: deltaY,
          behavior: "smooth",
        });
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="projects-wrapper snap-section" id="projects">
      <div className="projects-container" ref={containerRef}>
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              View Project
            </a>
            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i} className="tech-item">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
