import React from "react";
import { motion } from "framer-motion";
import {
  Coffee,
  Gamepad2,
  Bed,
  Book,
  Headphones,
  Zap,
  Info,
  Plane,
  User,
} from "lucide-react";
import ParticleBackground from "../ParticleBackground";

const hobbies = [
  {
    icon: <Coffee size={32} />,
    title: "Coffee & Code",
    desc: "Every great idea starts with caffeine and a late-night commit.",
    tip: "Currently automating my coffee machine — because why not ☕",
  },
  {
    icon: <Bed size={32} />,
    title: "Power Naps",
    desc: "Best debugging often happens after a quick recharge.",
    tip: "Half my bugs fix themselves after a nap 😴",
  },
  {
    icon: <Headphones size={32} />,
    title: "Lo-Fi Flow",
    desc: "Coding with chill beats and questionable dance moves.",
    tip: "Volume level = focus level 🎧",
  },
  {
    icon: <Zap size={32} />,
    title: "Productive Laziness",
    desc: "If it repeats twice — I’ll automate it.",
    tip: "Laziness + curiosity = pure innovation ⚡",
  },
  {
    icon: <Plane size={32} />,
    title: "Traveler’s Curiosity",
    desc: "I love exploring new places, cultures, and perspectives.",
    tip: "Every journey sparks a new idea — the world is the best debugger 🌍",
  },
  {
    icon: <User size={32} />,
    title: "Introvert Mode",
    desc: "Peace, silence, and deep thinking — my creative recharge zone.",
    tip: "Not anti-social, just pro-focus 🧘‍♂️",
  },
];

const Hobbies = () => {
  return (
    <section
      id="hobbies"
      className="relative py-8 overflow-hidden text-center text-white"
    >
      {/* Glass Container */}
      <div className="glass glass-hover w-full max-w-7xl mx-auto p-10 md:p-16 rounded-2xl backdrop-blur-xl shadow-lg relative z-[1]">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-emerald-400 mb-6"
        >
          Hobbies & Habits
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-gray-300 mb-14 text-lg"
        >
          I’m a proud believer that lazy developers make the best tools —
          because we’d rather automate than repeat. <br />
          Here’s how my so-called “laziness” keeps me creative and efficient.
        </motion.p>

        {/* Hobby Grid */}
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-10 px-6">
          {hobbies.map((hobby, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{
                rotateY: 10,
                rotateX: 5,
                scale: 1.08,
              }}
              className="relative bg-[#0e1a1a]/70 border border-emerald-400/20 rounded-2xl p-6 
             backdrop-blur-md hover:border-emerald-400/50 hover:shadow-emerald-400/30 
             shadow-lg transition-all cursor-default group"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="text-emerald-400 group-hover:text-emerald-300 transition">
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-semibold text-emerald-300">
                  {hobby.title}
                </h3>
                <p className="text-sm text-gray-400">{hobby.desc}</p>
              </div>

              {/* Tooltip (fixed behavior) */}
              <div
                className="absolute -bottom-10 left-1/2 -translate-x-1/2 
             bg-[#0e1a1a] border border-emerald-400/40 
             text-emerald-100 text-xs px-3 py-1.5 
             rounded-md shadow-[0_0_10px_rgba(16,185,129,0.3)] 
             opacity-0 group-hover:opacity-100 group-hover:-translate-y-2 
             transition-all duration-300 pointer-events-none 
             w-max z-30"
              >
                <div className="flex items-center gap-2">
                  <Info size={12} className="text-emerald-400" />
                  {hobby.tip}
                </div>
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
          “Lazy enough to automate. Curious enough to build.” ☕
        </motion.p>
      </div>
    </section>
  );
};

export default Hobbies;
