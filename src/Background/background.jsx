// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const options = {
    
    "autoPlay": true,
    "background": {
      "color": {
        "value": "#0d47a1"
      },
      "opacity": 1
    },
    "fullScreen": {
      "enable": true,
      "zIndex": 0
    },
    "detectRetina": true,
    "fpsLimit": 120,
    "interactivity": {
      "events": {
        "onClick": { "enable": true, "mode": "push" },
        "onHover": {
          "enable": true,
          "mode": "grab",
          "parallax": { "enable": true, "force": 60, "smooth": 10 }
        },
        "resize": { "enable": true, "delay": 0.5 }
      },
      "modes": {
        "grab": {
          "distance": 400,
          "links": { "opacity": 1 }
        },
        "push": {
          "quantity": 4
        }
      }
    },
    "particles": {
      "color": { "value": "#ffffff" },
      "links": {
        "color": { "value": "#ffffff" },
        "distance": 150,
        "enable": true,
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "outModes": { "default": "out" }
      },
      "number": {
        "density": { "enable": true, "width": 1920, "height": 1080 },
        "value": 100
      },
      "opacity": {
        "value": { "min": 0.1, "max": 0.5 },
        "animation": {
          "enable": true,
          "speed": 3,
          "startValue": "random",
          "destroy": "none"
        }
      },
      "shape": { "type": "circle" },
      "size": {
        "value": { "min": 1, "max": 10 },
        "animation": {
          "enable": true,
          "speed": 20,
          "startValue": "random",
          "destroy": "none"
        }
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": true,
    "key": "parallax",
    "name": "Parallax",
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    }
  };

  return <Particles id="tsparticles" init={particlesInit} options={options} />;
};

export default ParticlesBackground;
