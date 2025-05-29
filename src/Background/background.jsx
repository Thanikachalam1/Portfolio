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
        "value": "#343434"
      },
      "opacity": 0.5
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
          "parallax": { "enable": true, "force": 60, "smooth": 20 }
        },
        "resize": { "enable": true, "delay": 0.5 }
      },
      "modes": {
        "grab": {
          "distance": 400,
          "links": { "opacity": 0.1 }
        },
        "push": {
          "quantity": 16
        }
      }
    },
    "particles": {
      "color": { "value": "#ffffff" },
      "links": {
        "color": { "value": "#ffffff" },
        "distance": 100,
        "enable": true,
        "opacity": 0.7,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 2,
        "outModes": { "default": "out" }
      },
      "number": {
        "density": { "enable": true, "width": 1920, "height": 1080 },
        "value": 200
      },
      "opacity": {
        "value": { "min": 0.1, "max": 0.3 },
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
