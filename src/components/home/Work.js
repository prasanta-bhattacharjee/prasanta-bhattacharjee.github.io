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
const Work = ({ profile }) => {
  const safeExperience = Array.isArray(profile?.experience)
    ? profile.experience
    : [];
  const workRef = useRef(null);
  const { scrollYProgress: workProgress } = useScroll(
    workRef.current ? { target: workRef } : { target: undefined }
  );
  const workHeight = useTransform(workProgress, [0, 1], ["0%", "100%"]);
  return (
    <section
      id="experience"
      className="relative py-8 overflow-hidden text-center text-white"
    >
      <div className="glass glass-hover w-full max-w-7xl mx-auto p-10 md:p-16 rounded-2xl backdrop-blur-xl shadow-lg relative z-[1]">
        {/* ====== SECTION TITLE ====== */}
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-emerald-400 mb-6"
        >
          Work History
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-gray-300 mb-14 text-lg"
        >
          Every role I’ve taken has refined how I think about building software
          balancing precision, scalability, and impact.
          <br />
          Here’s the path that shaped my engineering mindset.
        </motion.p>

        {/* ====== CENTER GLOWING LINE ====== */}
        <div className="relative">
          <div
            className="absolute left-1/2 top-0 h-full w-[3px] 
        bg-gradient-to-b from-emerald-600 via-cyan-400 to-transparent 
        rounded-full shadow-[0_0_20px_#38bdf8] -translate-x-1/2 animate-pulse"
          />

          {/* ====== TIMELINE ITEMS (2 PER ROW) ====== */}
          <div className="flex flex-col space-y-20">
            {safeExperience
              .reduce((rows, exp, index) => {
                if (index % 2 === 0) rows.push([exp]);
                else rows[rows.length - 1].push(exp);
                return rows;
              }, [])
              .map((pair, rowIndex, allRows) => {
                const isLastRow = rowIndex === allRows.length - 1;
                const isSingleItem = pair.length === 1;

                return (
                  <div
                    key={rowIndex}
                    className={`relative flex flex-col md:flex-row justify-between items-start md:items-center gap-10 ${
                      isSingleItem ? "justify-center" : ""
                    }`}
                  >
                    {/* ===== LEFT CARD ===== */}
                    {!isSingleItem && pair[0] && (
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative w-full md:w-[45%] bg-gradient-to-b from-gray-900/80 to-gray-800/60 
              border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-emerald-500/30 
              transition duration-300 text-right"
                      >
                        {/* TIMELINE DOT (LEFT SIDE) */}
                        <div className="absolute -right-[37px] top-10 w-5 h-5 bg-emerald-500 rounded-full shadow-[0_0_15px_#3b82f6]" />

                        {pair[0].isCurrent ? (
                          <span className="absolute top-3 right-3 mb-3 text-xs font-semibold text-green-300 border border-green-400 rounded-full px-3 py-1 shadow-[0_0_10px_#22c55e] animate-pulse">
                            Currently Working
                          </span>
                        ) : (
                          <div className="h-2 rounded-full mb-4 bg-emerald-600"></div>
                        )}

                        <h4 className="text-xl font-semibold text-white text-left">
                          {pair[0].role}
                        </h4>
                        <p className="text-blue-300 text-sm mb-2 text-left">
                          {pair[0].company}
                        </p>
                        <p className="text-gray-300 text-sm mb-2 text-left">
                          {pair[0].location}
                        </p>
                        <ul className="text-gray-300 text-left mb-3 leading-relaxed space-y-2">
                          {pair[0].descriptions?.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-blue-400 mt-1">→</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex justify-between items-center w-full md:w-auto gap-3">
                          {/* Left: Job Type */}
                          <div
                            className="px-3 py-1 text-xs font-semibold rounded 
      bg-emerald-600/20 border border-emerald-500/50 text-blue-300"
                          >
                            {pair[0].jobType}
                          </div>

                          {/* Right: Years */}
                          <div
                            className="px-3 py-1 text-xs font-semibold rounded 
      bg-emerald-600/20 border border-emerald-500/50 text-emerald-300"
                          >
                            {pair[0].years}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ===== CENTER CONNECTING DOT ===== */}
                    {/* <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 w-6 h-6 bg-emerald-500 rounded-full shadow-[0_0_20px_#3b82f6] z-10" /> */}

                    {/* ===== RIGHT CARD ===== */}
                    {!isSingleItem && pair[1] && (
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative w-full md:w-[45%] bg-gradient-to-b from-gray-900/80 to-gray-800/60 
              border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-blue-500/30 
              transition duration-300 text-left"
                      >
                        <div className="absolute -left-[37px] top-10 w-5 h-5 bg-emerald-500 rounded-full shadow-[0_0_15px_#3b82f6]" />

                        {pair[1].isCurrent ? (
                          <span className="absolute top-3 left-3 text-xs font-semibold text-green-300 border border-green-400 rounded-full px-3 py-1 shadow-[0_0_10px_#22c55e] animate-pulse">
                            Currently Working
                          </span>
                        ) : (
                          <div className="h-2 rounded-full mb-4 bg-emerald-600"></div>
                        )}

                        <h4 className="text-xl font-semibold text-white">
                          {pair[1].role}
                        </h4>
                        <p className="text-blue-300 text-sm mb-2">
                          {pair[1].company}
                        </p>
                        <p className="text-gray-300 text-sm mb-2">
                          {pair[1].location}
                        </p>
                        <ul className="text-gray-300 text-left mb-3 leading-relaxed space-y-2">
                          {pair[1].descriptions?.map((point, idx) => (
                            <li key={idx} className="flex items-start gap-1">
                              <span className="text-blue-400 mt-1">→</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex justify-between items-center w-full md:w-auto gap-3">
                          {/* Left: Job Type */}
                          <div
                            className="px-3 py-1 text-xs font-semibold rounded 
      bg-emerald-600/20 border border-emerald-500/50 text-blue-300"
                          >
                            {pair[1].jobType}
                          </div>

                          {/* Right: Years */}
                          <div
                            className="px-3 py-1 text-xs font-semibold rounded 
      bg-emerald-600/20 border border-emerald-500/50 text-emerald-300"
                          >
                            {pair[1].years}
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* ===== CENTERED SINGLE CARD ===== */}
                    {isSingleItem && pair[0] && (
                      <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true }}
                        className="relative md:w-[70%] bg-gradient-to-b from-gray-900/80 to-gray-800/60 
              border border-gray-700 p-6 rounded-2xl shadow-md hover:shadow-emerald-500/30 
              transition duration-300 text-center mx-auto"
                      >
                        {/* CENTER DOT */}
                        {/* <div className="absolute left-1/2 -translate-x-1/2 top-10 w-5 h-5 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6]" /> */}

                        {pair[0].isCurrent ? (
                          <span className="absolute top-3 left-1/2 -translate-x-1/2 text-xs font-semibold text-green-300 border border-green-400 rounded-full px-3 py-1 shadow-[0_0_10px_#22c55e] animate-pulse">
                            Currently Working
                          </span>
                        ) : (
                          <div className="h-2 w-1/2 mx-auto rounded-full mb-4 bg-emerald-600"></div>
                        )}

                        <h4 className="text-xl font-semibold text-white">
                          {pair[0].role}
                        </h4>
                        <p className="text-blue-300 text-sm mb-2">
                          {pair[0].company}
                        </p>
                        <p className="text-gray-300 text-sm mb-2">
                          {pair[0].location}
                        </p>
                        <ul className="text-gray-300 text-left md:text-center mb-3 leading-relaxed space-y-2">
                          {pair[0].descriptions?.map((point, idx) => (
                            <li
                              key={idx}
                              className="flex items-start md:justify-center gap-1"
                            >
                              <span className="text-blue-400 mt-1">→</span>
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="flex justify-between items-center w-full md:w-auto gap-3">
                          {/* Left: Job Type */}
                          <div
                            className="px-3 py-1 text-xs font-semibold rounded 
      bg-emerald-600/20 border border-emerald-500/50 text-blue-300"
                          >
                            {pair[0].jobType}
                          </div>

                          {/* Right: Years */}
                          <div
                            className="px-3 py-1 text-xs font-semibold rounded 
      bg-emerald-600/20 border border-emerald-500/50 text-emerald-300"
                          >
                            {pair[0].years}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
