import React from "react";
import { motion, useSpring, useScroll } from "framer-motion";

export default function Layout({ children }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div
        id="scroll-indicator"
        style={{
            scaleX,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "5px",
        originX: 0,
        background: "#C69C6D",
        zIndex: 9999,
        }}
      />
      <main>{children}</main>
    </>
  );
}
