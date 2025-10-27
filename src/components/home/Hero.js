import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ParticleBackground from "../ParticleBackground";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const Heros = ({ profile }) => {
  const gradients = [
    "from-blue-100 to-purple-100",
    "from-pink-100 to-blue-100",
    "from-green-100 to-teal-100",
  ];
  const [bg, setBg] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setBg((b) => (b + 1) % gradients.length),
      5000
    );
    return () => clearInterval(interval);
  }, [gradients.length]);
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col-reverse md:flex-row items-center justify-center text-center md:text-left"
    >
      <div className="glass glass-hover pb-0 w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 rounded-2xl ">
        {/* ====== Left Content ====== */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="relative z-[2] md:w-1/2 px-6 md:px-20 flex flex-col items-center md:items-start space-y-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Hey <span className="inline-block animate-wave">👋</span>{" "}
            <span className="block">
              I’m{" "}
              <span className="text-emerald-400">
                {profile?.name || "Your Name"}
              </span>
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl font-medium text-gray-300">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Software Engineer",
                "Tech Explorer 🚀",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>

          <p className="text-lg max-w-md text-gray-300">
            {profile?.bio || "Building modern full-stack applications."}
          </p>

          <a
            href="/assets/PRASANTA-BHATTACHARJEE-RESUME.pdf"
            target="_blank"
            rel="noreferrer"
            className="inline-block px-10 py-3 text-white bg-emerald-600 hover:bg-emerald-700 rounded-full transition-all font-semibold shadow-md"
          >
            My Resume
          </a>

          {/* ====== Social Icons under text ====== */}
          <div className="flex gap-5 mt-8">
            {profile.social.linkedin && (
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            )}

            {profile.social.behance && (
              <a
                href={profile.social.behance}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition transform hover:scale-110"
                aria-label="Behance"
              >
                <i className="fab fa-behance text-2xl"></i>
              </a>
            )}

            {profile.social.github && (
              <a
                href={profile.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-emerald-400 transition transform hover:scale-110"
                aria-label="GitHub"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
            )}
          </div>
        </motion.div>

        {/* ====== Right Image Section ====== */}
        {/* ====== Right Image Section ====== */}
        {/* ====== Right Profile Image ====== */}
        {/* ====== Right Section ====== */}
        <div className="relative flex justify-center items-center w-full md:w-1/2 min-h-[700px]">
          {/* ===== Background Image fills entire section ===== */}

          {/* ===== Soft Emerald Overlay for depth ===== */}
          <img
            src="/assets/backgroundasstes.png"
            alt="Decorative background"
            className="
    absolute inset-0
    w-[102%] h-full
    -left-[1%]
    object-cover object-center
    opacity-100
    pointer-events-none select-none
  "
          />
          {/* ===== Portrait Container (centered) ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="
      relative z-[2]
      w-[320px] md:w-[420px]
      h-[700px] md:h-[720px]
      flex items-end justify-center
      pt-4 pl-4 pr-4
    "
          >
            <img
              src={profile?.image || "./assets/profile.png"}
              alt={profile?.name || "Profile"}
              className="w-full h-auto object-cover object-top relative z-[3]"
              style={{
                filter: "contrast(105%) brightness(104%)",
              }}
            />
          </motion.div>

          {/* ===== Optional soft spotlight behind portrait ===== */}
          {/* <div className="absolute w-[500px] h-[500px] bg-emerald-500/20 blur-[150px] rounded-full opacity-60 z-[1]"></div> */}
        </div>
      </div>
    </section>
  );
};

export default Heros;
