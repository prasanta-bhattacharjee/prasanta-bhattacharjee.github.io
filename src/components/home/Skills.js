import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ParticleBackground from "../ParticleBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Skill = ({ profile }) => {
  const safeSkills = profile?.skills || {};

  return (
    <section
      id="skills"
      className="relative py-8 overflow-hidden text-center text-white"
    >
      <div className="glass glass-hover w-full max-w-7xl mx-auto p-8 md:p-14 rounded-2xl backdrop-blur-xl shadow-lg relative z-[1]">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-emerald-400 mb-6"
        >
          Skills
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto text-gray-300 mb-14 text-lg"
        >
          I’ve spent years mastering both backend logic and frontend design to
          craft complete, high-performance web experiences.
          <br />
          My skill set blends precision engineering with a focus on elegant,
          maintainable, and scalable solutions.
        </motion.p>

        {/* Responsive Grid (1 → 2 → 3 columns) */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          {Object.entries(safeSkills).map(([category, items]) => (
            <motion.div
              key={category}
              whileHover={{ scale: 1.05 }}
              className="relative bg-[#0e1a1a]/70 border border-emerald-400/20 rounded-2xl p-6 
                       backdrop-blur-md hover:border-emerald-400/50 hover:shadow-emerald-400/30 
                       shadow-lg transition-all cursor-default group"
            >
              {/* <h3 className="text-xl font-semibold mb-4 text-emerald-300">
                {category}
              </h3> */}
              <div className="text-emerald-400 group-hover:text-emerald-300 transition mb-3">
                {category}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {items.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-gray-800/60 text-gray-200 px-3 py-1 rounded-lg text-sm flex items-center"
                  >
                    <i className={`${skill.icon} mr-2 text-emerald-400`}></i>
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 italic text-emerald-300"
        >
          “Skill is built through obsession, not luck.”
        </motion.p>
      </div>
    </section>
  );
};

export default Skill;
