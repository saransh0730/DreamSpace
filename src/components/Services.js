import React, { useEffect, useState, useRef } from "react";
import "../styles/Services.css";
import { LuPaintbrush, LuSofa } from "react-icons/lu";
import { PiRuler, PiBuildingOffice, PiLightbulb } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { motion } from "framer-motion";

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); 
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
    });

    const servicesSection = servicesRef.current;
    if (servicesSection) {
      observer.observe(servicesSection);
    }

    return () => {
      if (servicesSection) {
        observer.unobserve(servicesSection);
      }
    };
  }, []);

  const parentAnimation = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const services = [
    {
      icon: <LuPaintbrush size={25} />,
      title: "Interior Design",
      description: "Full-service interior design solutions tailored to your lifestyle and preferences.",
    },
    {
      icon: <PiRuler size={25} />,
      title: "Space Planning",
      description: "Optimize your space for maximum functionality and flow.",
    },
    {
      icon: <LuSofa size={25} />,
      title: "Furniture Selection",
      description: "Curated furniture and decor pieces that match your style and budget.",
    },
    {
      icon: <GrHomeRounded size={25} />,
      title: "Residential Design",
      description: "Create your perfect home with our comprehensive residential design services.",
    },
    {
      icon: <PiBuildingOffice size={25} />,
      title: "Commercial Design",
      description: "Transform your business space to enhance productivity and impress clients.",
    },
    {
      icon: <PiLightbulb size={25} />,
      title: "Lighting Design",
      description: "Strategic lighting solutions that enhance the ambiance of your space.",
    },
  ];

  return (
    <div ref={servicesRef} className="services">
      <div className="service-heading">
        <h1>Our Services</h1>
        <p>Comprehensive design solutions for every space and need.</p>
      </div>
      <motion.div
        className="service-types-container"
        variants={parentAnimation}
        initial="initial"
        animate={isVisible ? "animate" : "initial"}
      >
        <div className="service-types">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service"
              variants={childAnimation}
            >
              <div>{service.icon}</div>
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Services;
