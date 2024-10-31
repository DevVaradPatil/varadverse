import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Home, AboutPage, ContactPage, ProjectsPage, SkillsPage, TestimonialsPage, WorkPage } from "./pages";
import { AnimatePresence } from "framer-motion";
import CircularTransition from "./components/CircularTransition"; // Import the new CircularTransition component
import "./App.css";
import ScrollToTop from "./components/ScrollToTop"

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [transitionColor, setTransitionColor] = useState("#fff");

  const handleLinkClick = (color, path) => {
    setTransitionColor(color);  // Set the circle color based on the link
    setIsTransitioning(true);   // Trigger the transition
    setTimeout(() => {
      navigate(path);           // Navigate to the new route after the transition
    }, 400);                    // Ensure this is synced with the duration of the transition
  };

  return (
    <>
    <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home onLinkClick={handleLinkClick} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </AnimatePresence>

      {/* Render the circular transition when transitioning */}
      {isTransitioning && (
        <CircularTransition
          color={transitionColor}
          onAnimationComplete={() => setIsTransitioning(false)}
        />
      )}
    </>
  );
}

export default App;
