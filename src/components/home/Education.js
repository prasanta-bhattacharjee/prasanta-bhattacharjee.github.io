import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ParticleBackground from "../ParticleBackground";
import { GraduationCap } from "lucide-react";
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};
const Education = ({ profile }) => {
  const safeEducation = Array.isArray(profile?.education)
    ? profile.education
    : [];

  // Refs and scroll animations for glowing line

  const eduRef = useRef(null);

  const { scrollYProgress: eduProgress } = useScroll(
    eduRef.current ? { target: eduRef } : { target: undefined }
  );

  // Animated height transform

  const eduHeight = useTransform(eduProgress, [0, 1], ["0%", "100%"]);
  return (
    <section
      id="education"
      className="relative z-10 py-8 text-white text-center overflow-hidden"
    >
      <div className="glass glass-hover w-full max-w-7xl mx-auto p-10 md:p-16 rounded-2xl backdrop-blur-xl shadow-lg relative z-[1]">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-emerald-400 mb-6"
        >
          Education
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-gray-300 mb-14 text-lg"
        >
          My academic journey gave me more than degrees taught me how to think,
          question, and keep learning.
          <br />
          Here’s how that foundation shaped my approach to technology and
          problem-solving.
        </motion.p>

        {/* ========== Center vertical glowing line ========== */}
        <div className="relative grid md:grid-cols-2 gap-12 mt-10">
          {safeEducation.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ rotateY: 3, y: -6 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-gradient-to-br from-gray-900/90 to-gray-800/70 
                 border border-emerald-400/30 rounded-2xl p-8 text-left 
                 shadow-[0_0_30px_rgba(16,185,129,0.15)] 
                 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] 
                 backdrop-blur-lg transition-all duration-500"
            >
              {/* Glow aura */}
              <div
                className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 via-cyan-400/10 to-transparent 
                      blur-2xl opacity-0 group-hover:opacity-100 transition"
              />
              {/* Top Icon */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-emerald-600/30 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                <GraduationCap className="w-6 h-6 text-emerald-300" />
              </div>
              <h3 className="text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-400">
                {edu.degree}
              </h3>
              <p className="text-emerald-300 mb-1">{edu.institution}</p>
              {edu.location && (
                <p className="text-gray-400 text-sm mb-4">{edu.location}</p>
              )}

              <ul className="text-gray-300 space-y-2 mb-6">
                {edu.description.slice(0, 3).map((line, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{line}</span>
                  </li>
                ))}
              </ul>

              <div
                className="absolute bottom-0 left-0 right-0 bg-emerald-600/10 
                      text-emerald-300 text-xs font-semibold py-2 rounded-b-2xl 
                      text-center border-t border-emerald-400/30"
              >
                {edu.years}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
