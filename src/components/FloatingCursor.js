import React, { useEffect, useRef } from "react";
import { computePosition, shift, flip, offset } from "@floating-ui/dom";

const FloatingCursor = () => {
  const floatingRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = ({ clientX, clientY }) => {
      const virtualEl = {
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX,
            right: clientX,
            top: clientY,
            bottom: clientY,
          };
        },
      };

      if (floatingRef.current) {
        computePosition(virtualEl, floatingRef.current, {
          placement: "right-start",
          middleware: [offset(5), flip(), shift()],
        }).then(({ x, y }) => {
          Object.assign(floatingRef.current.style, {
            top: `${y}px`,
            left: `${x}px`,
          });
        });
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    document.body.style.cursor = 'none';

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.style.cursor = 'auto'; 
    };
  }, []);

  return (
    <div
      ref={floatingRef}
      style={{
        position: "absolute",
        background: "transparent",
        width: "17px", 
        height: "17px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #fdf5c9, #55413b)",
        border: "2px solid #55413b",
        backgroundColor: "transparent",
        pointerEvents: "none", 
        transform: "translate(-50%, -50%)",
        zIndex: 1000,
      }}
    />
  );
};

export default FloatingCursor;
