import React from "react";
import { motion } from "framer-motion";

const CircularTransition = ({ color, onAnimationComplete }) => {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 1 }}
      animate={{ scale: 100, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      style={{
        position: "fixed",
        top: "50%",
        left: "50%",
        width: "100px",  // Start with a small width
        height: "100px", // Start with a small height
        backgroundColor: color,
        borderRadius: "50%",
        transform: "translate(-50%, -50%)", // Center the circle
        zIndex: 1000, 
      }}
      onAnimationComplete={onAnimationComplete} 
    />
  );
};

export default CircularTransition;
