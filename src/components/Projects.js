import React, { useRef } from "react";
import "../styles/Projects.css";
import { motion, useInView } from "framer-motion";

function Projects() {
  const projectsRef = useRef(null);

  const isInView = useInView(projectsRef, {
    once: true,
    margin: "0px 0px -50% 0px",
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="projects-section" ref={projectsRef}>
      <div className="project-heading">
        <h1>Featured Projects</h1>
        <p>Explore our latest transformations and design innovations</p>
      </div>
      <div className="project">
        <div className="project-images">
          <div className="image-section">
            <motion.img
              src="/mini.jpg"
              alt="Modern Minimalist Home"
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </div>
          <motion.div
            className="description-section"
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h1>Modern Minimalist Home</h1>
            <p>
              A serene blend of functionality and elegance, this Modern
              Minimalist Home features clean lines, open spaces, and natural
              light. The design emphasizes simplicity and sophistication, making
              it a perfect sanctuary for contemporary living.
            </p>
          </motion.div>
        </div>

        {/* Project 2 */}
        <div className="project-images-right">
          <div className="image-section">
            <motion.img
              src="/office.jpg"
              alt="Luxury Office Space"
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </div>
          <motion.div
            className="description-section align-right"
            variants={animationVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h1>Luxury Office Space</h1>
            <p>
              This Luxury Office Space redefines workplace aesthetics with
              premium materials, ergonomic layouts, and state-of-the-art
              facilities. Designed to foster creativity and collaboration, it
              exudes professionalism and style.
            </p>
          </motion.div>
        </div>

        <div className="project-images">
          <div className="image-section">
            <motion.img
              src="/apart.jpg"
              alt="Urban Apartment"
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </div>
          <motion.div className="description-section"
          variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
          >
          <h1>Urban Apartment</h1>
            <p
            >
              A chic and compact Urban Apartment that maximizes space without
              compromising on comfort. This design boasts smart storage
              solutions, modern furnishings, and a touch of industrial charm for
              urban living enthusiasts.
            </p>
          </motion.div>
        </div>

        <div className="project-images-right">
          <div className="image-section">
            <motion.img
              src="/hotel.jpg"
              alt="Boutique Hotel Lobby"
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            />
          </div>
          <motion.div className="description-section align-right"
          variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
          >
          <h1>Boutique Hotel Lobby</h1>
            <p
            >
              Welcoming and opulent, the Boutique Hotel Lobby sets the tone for
              an unforgettable stay. Featuring luxurious textures, ambient
              lighting, and unique decor, it offers guests an experience of
              comfort and grandeur from the moment they arrive.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
