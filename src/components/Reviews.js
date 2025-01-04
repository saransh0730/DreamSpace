import React, { useRef } from "react";
import { FaQuoteRight } from "react-icons/fa";
import "../styles/Reviews.css";
import { motion, useInView } from "framer-motion";

function Reviews() {
  const projectsRef = useRef(null);

  const isInView = useInView(projectsRef, {
    once: true,
    margin: "0px 0px -45% 0px",
  });

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="main-section" ref={projectsRef}>
      <div className="reviews-heading">
        <h1>
          <h1>What Our Clients Say</h1>
          <p>
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </h1>
      </div>
      <div className="reviews-section">
        <div className="reviews-container">
          <div className="review">
            <FaQuoteRight size={25} />
            <motion.p
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              They transformed our space into something beyond our imagination.
              Truly exceptional work!
            </motion.p>
            <div className="reviewer-details">
              <h2>Sarah Johnson</h2>
              <p>Homeowner</p>
            </div>
          </div>
          <div className="review">
            <FaQuoteRight size={25} />
            <motion.p
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              The team brought our vision to life while keeping everything on
              budget and on schedule.
            </motion.p>
            <div className="reviewer-details">
              <h2>Emma Davis</h2>
              <p>Property Developer</p>
            </div>
          </div>
          <div className="review">
            <FaQuoteRight size={25} />
            <motion.p
              variants={animationVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              Professional, creative, and attentive to every detail. Highly
              recommend their services.
            </motion.p>
            <div className="reviewer-details">
              <h2>Michael Chen</h2>
              <p>Business Owner</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reviews;
