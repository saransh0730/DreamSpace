// import React, { useEffect, useState } from "react";
// import "../styles/Services.css";
// import { LuPaintbrush } from "react-icons/lu";
// import { PiRuler } from "react-icons/pi";
// import { LuSofa } from "react-icons/lu";
// import { GrHomeRounded } from "react-icons/gr";
// import { PiBuildingOffice } from "react-icons/pi";
// import { PiLightbulb } from "react-icons/pi";
// import { motion } from "framer-motion";

// function Services() {
//   const [isVisible, setIsVisible] = useState(false);

//   // Intersection Observer callback to set visibility state when the component comes into view
//   const observerCallback = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         setIsVisible(true); // Trigger animation when the component is in view
//       }
//     });
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(observerCallback, {
//       threshold: 0.1, // Trigger the callback when 10% of the component is visible
//     });

//     const servicesSection = document.getElementById("services-section");
//     if (servicesSection) {
//       observer.observe(servicesSection);
//     }

//     return () => {
//       if (servicesSection) {
//         observer.unobserve(servicesSection);
//       }
//     };
//   }, []);

//   // Define the animation for each service item
//   const serviceAnimation = {
//     initial: { x: "-100%", opacity: 0 },
//     animate: {
//       x: 0,
//       opacity: 1,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   return (
//     <div id="services-section" className="services">
//       <div className="service-heading">
//         <h1>Our Services</h1>
//         <p>Comprehensive design solutions for every space and need.</p>
//       </div>
//       <div className="service-types-container">
//         <div className="service-types">
//           {[
//             {
//               icon: <LuPaintbrush size={25} />,
//               title: "Interior Design",
//               description:
//                 "Full-service interior design solutions tailored to your lifestyle and preferences.",
//             },
//             {
//               icon: <PiRuler size={25} />,
//               title: "Space Planning",
//               description: "Optimize your space for maximum functionality and flow.",
//             },
//             {
//               icon: <LuSofa size={25} />,
//               title: "Furniture Selection",
//               description:
//                 "Curated furniture and decor pieces that match your style and budget.",
//             },
//             {
//               icon: <GrHomeRounded size={25} />,
//               title: "Residential Design",
//               description:
//                 "Create your perfect home with our comprehensive residential design services.",
//             },
//             {
//               icon: <PiBuildingOffice size={25} />,
//               title: "Commercial Design",
//               description:
//                 "Transform your business space to enhance productivity and impress clients.",
//             },
//             {
//               icon: <PiLightbulb size={25} />,
//               title: "Lighting Design",
//               description:
//                 "Strategic lighting solutions that enhance the ambiance of your space.",
//             },
//           ].map((service, index) => (
//             <motion.div
//               key={index}
//               className="service"
//               variants={serviceAnimation}
//               initial="initial"
//               animate={isVisible ? "animate" : "initial"}
//             >
//               <div>{service.icon}</div>
//               <h2>{service.title}</h2>
//               <p>{service.description}</p>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Services;

import React, { useEffect, useState, useRef } from "react";
import "../styles/Services.css";
import { LuPaintbrush, LuSofa } from "react-icons/lu";
import { PiRuler, PiBuildingOffice, PiLightbulb } from "react-icons/pi";
import { GrHomeRounded } from "react-icons/gr";
import { motion } from "framer-motion";

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const servicesRef = useRef(null);

  // Intersection Observer callback to set visibility state when the component comes into view
  useEffect(() => {
    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger animation when the component is in view
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1, // Trigger the callback when 10% of the component is visible
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

  // Define parent and child animations for staggered effect
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
