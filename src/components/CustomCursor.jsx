import React, { useEffect, useRef } from "react";
import "./cursorstyle.css";

const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cursorPosition = useRef({ x: 0, y: 0 });
  const requestRef = useRef(null);

  useEffect(() => {
    const cursorDot = cursorDotRef.current;

    // Mouse movement event for updating the target cursor position
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.pageX, y: e.pageY };
    };

    const animateCursor = () => {
      // Interpolating the current cursor position towards the target mouse position
      cursorPosition.current.x += (mousePosition.current.x - cursorPosition.current.x) * 0.1;
      cursorPosition.current.y += (mousePosition.current.y - cursorPosition.current.y) * 0.1;

      // Updating the style to move the custom cursor
      cursorDot.style.top = `${cursorPosition.current.y}px`;
      cursorDot.style.left = `${cursorPosition.current.x}px`;

      // Keep the animation running
      requestRef.current = requestAnimationFrame(animateCursor);
    };

    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animateCursor);

    const bentoElements = document.querySelectorAll("#bento"); // Replace this with ".bento" if using class

    const handleMouseOver = () => {
      cursorDot.style.transform = "scale(1.75)";
      cursorDot.style.backgroundColor = "#FF5733  "; // Optional color change
    };

    const handleMouseOut = () => {
      // Remove the inverse color filter
      cursorDot.style.filter = "none";
      cursorDot.style.transform = "scale(1)";
      cursorDot.style.backgroundColor = "#FFA587"; // Reset to the original color
    };

    bentoElements.forEach((bentoElement) => {
      bentoElement.addEventListener("mouseover", handleMouseOver);
      bentoElement.addEventListener("mouseout", handleMouseOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);

      bentoElements.forEach((bentoElement) => {
        bentoElement.removeEventListener("mouseover", handleMouseOver);
        bentoElement.removeEventListener("mouseout", handleMouseOut);
      });
    };
  }, []);

  return <div className="cursor-dot hidden md:flex" ref={cursorDotRef}></div>;
};

export default CustomCursor;
