import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Contact.css';

const Contact = () => {
  const formRef = useRef(null);
  const svgRef = useRef(null);

  useEffect(() => {
    // Animate form
    gsap.fromTo(formRef.current, 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    // Animate SVG path
    gsap.fromTo(
      svgRef.current,
      { strokeDasharray: 300, strokeDashoffset: 300 },
      { strokeDashoffset: 0, duration: 2, ease: 'power2.inOut' }
    );
  }, []);

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>

      <div className="svg-wrapper">
        <svg width="100" height="100" viewBox="0 0 100 100">
          <path
            ref={svgRef}
            d="M10 20 L90 20 L90 80 L10 80 Z M10 20 L50 55 L90 20"
            stroke="#3498db"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>

      <form ref={formRef} className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
