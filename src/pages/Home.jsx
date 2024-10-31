import React from "react";
import { easeIn, motion } from "framer-motion"; // Importing framer-motion
import {
  Work,
  About,
  Contact,
  Projects,
  Skills,
  Testimonials,
} from "../components";
import { CustomCursor } from "../components";

const Home = ({ onLinkClick }) => {
// Define motion variants for container and cards
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Slightly lower stagger for more compact timing
      when: "beforeChildren", // Ensure children animate after parent
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 20, // Smaller movement for smoother appearance
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "tween", // Use tween for smoother motion
      ease: "easeIn", // Easing for a gentle transition
      duration: 0.2,   // Duration for the visibility animation
    },
  },
};


  return (
    <div className="flex h-full lg:h-screen w-full items-center justify-center">
      {/* Animate the entire grid container */}
      <motion.div
        className="grid h-full w-full gap-8 bg-white p-8 grid-cols-1 md:grid-cols-3 grid-rows-3 rounded-[20px] shadow-md"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          onClick={() => onLinkClick("#ff78b5", "/work")}
          whileHover={{
            scale: 1.02, // Scale up on hover
            transition: { duration: 0.2, ease: easeIn }, // Control the hover animation timing
          }}
          className="col-span-1 row-span-1 md:col-span-1 md:row-span-2 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl bg-strawberry rounded-[20px] shadow-md flex items-center justify-center"
          variants={cardVariants}
        >
          <Work />
        </motion.div>

        <motion.div
          onClick={() => onLinkClick("#fff6a1", "/projects")}
          whileHover={{
            scale: 1.02, // Scale up on hover
            transition: { duration: 0.2, ease: easeIn }, // Control the hover animation timing
          }}
          className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl bg-lemon rounded-[20px] shadow-md flex items-center justify-center"
          variants={cardVariants}
        >
          <Projects />
        </motion.div>

        <motion.div
          onClick={() => onLinkClick("#b0f2c2", "/about")}
          whileHover={{
            scale: 1.02, // Scale up on hover
            transition: { duration: 0.2, ease: easeIn }, // Control the hover animation timing
          }}
          className="col-span-1 row-span-1 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl bg-mint rounded-[20px] shadow-md flex items-center justify-center"
          variants={cardVariants}
        >
          <About />
        </motion.div>

        <motion.div
          onClick={() => onLinkClick("#89d7f7", "/testimonials")}
          whileHover={{
            scale: 1.02, // Scale up on hover
            transition: { duration: 0.2, ease: easeIn }, // Control the hover animation timing
          }}
          className="col-span-1 row-span-1 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl bg-water rounded-[20px] shadow-md flex items-center justify-center"
          variants={cardVariants}
        >
          <Testimonials />
        </motion.div>

        <motion.div
          onClick={() => onLinkClick("#d5a7f9", "/skills")}
          whileHover={{
            scale: 1.02, // Scale up on hover
            transition: { duration: 0.2, ease: easeIn }, // Control the hover animation timing
          }}
          className="col-span-1 row-span-1 md:col-span-2 md:row-span-1 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl bg-lavender rounded-[20px] shadow-md flex items-center justify-center"
          variants={cardVariants}
        >
          <Skills />
        </motion.div>

        <motion.div
          onClick={() => onLinkClick("#ff7a63", "/contact")}
          whileHover={{
            scale: 1.02, // Scale up on hover
            transition: { duration: 0.2, ease: easeIn }, // Control the hover animation timing
          }}
          className="col-span-1 row-span-1 transition-all duration-200 hover:scale-[1.02] hover:shadow-2xl bg-tomato rounded-[20px] shadow-md flex items-center justify-center"
          variants={cardVariants}
        >
          <Contact />
        </motion.div>
      </motion.div>
      <CustomCursor />
    </div>
  );
};

export default Home;
