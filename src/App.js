// src/App.js
import React, { useEffect, useState } from "react";
import {
  HashRouter as Router, // ✅ use HashRouter for GitHub Pages
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ParallaxProvider } from "react-scroll-parallax";
import SidebarNav from "./components/SidebarNav";
import ScrollToTopButton from "./components/ScrollToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

// ====== Pages ======
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Projects from "./pages/Projects";
import ProjectDetail from "./pages/ProjectDetail";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Contact from "./pages/Contact";

// ====== Components ======
import ScrollProgress from "./components/ScrollProgress";
import SectionNav from "./components/SectionNav";
import LoadingScreen from "./components/LoadingScreen";
import ParticleBackground from "./components/ParticleBackground";
import Layout from "./components/Layout";
import FloatingCursor from "./components/FloatingCursor";

// ====== Animated Page Wrapper ======
function AnimatedRoutes({ profile, setIsHome }) {
  const location = useLocation();

  // ✅ Detect route changes and update `isHome`
  useEffect(() => {
    setIsHome(location.pathname === "/");
  }, [location, setIsHome]);

  const pageTransition = {
    initial: { opacity: 0, y: 15 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -15 },
    transition: { duration: 0.4 },
  };

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div {...pageTransition}>
              <Home profile={profile} />
            </motion.div>
          }
        />
        <Route
          path="/gallery"
          element={
            <motion.div {...pageTransition}>
              <Gallery profile={profile} />
            </motion.div>
          }
        />
        <Route
          path="/projects"
          element={
            <motion.div {...pageTransition}>
              <Projects projects={profile.projects} />
            </motion.div>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <motion.div {...pageTransition}>
              <ProjectDetail projects={profile.projects} />
            </motion.div>
          }
        />
        <Route
          path="/blog"
          element={
            <motion.div {...pageTransition}>
              <Blog blogs={profile.blogs} />
            </motion.div>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <motion.div {...pageTransition}>
              <BlogDetail blogs={profile.blogs} />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div {...pageTransition}>
              <Contact />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

// ====== MAIN APP ======
function App() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

    fetch("/profile.json")
      .then((res) => res.json())
      .then((data) => {
        setProfile(data);
        setTimeout(() => setLoading(false), 2000);
      })
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  if (loading || !profile) {
    return <LoadingScreen />;
  }

  return (
    <ParallaxProvider>
      <Router>
        <div className="relative min-h-screen text-gray-100 overflow-hidden ">
          <ParticleBackground />
          <FloatingCursor />
          <div className="absolute inset-0" />
          {/* <SidebarNav name={profile.name} image={profile.image} /> */}

          <div className="flex-1 ml-20 relative z-[1] pb-24">
            <ScrollProgress />

            {/* ✅ Now SectionNav works perfectly */}
            <AnimatePresence mode="wait">
              {isHome && (
                <motion.div
                  key="sectionnav"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <SectionNav />
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatedRoutes profile={profile} setIsHome={setIsHome} />
            <Layout profile={profile} />
            <ScrollToTopButton />
          </div>
        </div>
      </Router>
    </ParallaxProvider>
  );
}

export default App;
