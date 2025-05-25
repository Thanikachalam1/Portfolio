import React, { useEffect, useRef } from "react";
import "./LazyCursor.css";

const LazyCursor = () => {
  const cursorRef = useRef(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const posX = useRef(0);
  const posY = useRef(0);
  const scaleTimeout = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Scale up cursor briefly on move
      if (cursorRef.current) {
        cursorRef.current.style.transform += " scale(1.4)";
        clearTimeout(scaleTimeout.current);
        scaleTimeout.current = setTimeout(() => {
          if (cursorRef.current) {
            cursorRef.current.style.transform = cursorRef.current.style.transform.replace(" scale(1.4)", "");
          }
        }, 100); // Reset scale after 100ms
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      posX.current += (mouseX.current - posX.current) * 0.1;
      posY.current += (mouseY.current - posY.current) * 0.1;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${posX.current}px, ${posY.current}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    const hoverElements = document.querySelectorAll("a, button, li");
    const addHoverClass = () => cursorRef.current?.classList.add("cursor-hover");
    const removeHoverClass = () => cursorRef.current?.classList.remove("cursor-hover");

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverClass);
      el.addEventListener("mouseleave", removeHoverClass);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverClass);
        el.removeEventListener("mouseleave", removeHoverClass);
      });
    };
  }, []);

  return <div className="lazy-cursor" ref={cursorRef}></div>;
};

export default LazyCursor;
