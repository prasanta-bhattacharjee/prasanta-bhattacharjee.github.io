import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ParticleBackground from "../components/ParticleBackground";

const Projects = ({ projects }) => {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* ===== PARTICLES ===== */}
      <ParticleBackground />
      <div className="absolute inset-0 -z-[1]" />

      <div className="max-w-7xl mx-auto px-6 py-24 relative z-[2]">
        <h2 className="text-4xl font-bold mb-12 text-center text-emerald-400">
          My Projects
        </h2>

        {/* ===== PROJECT GRID ===== */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-white/5 border border-emerald-400/20 hover:border-emerald-400/50 rounded-2xl shadow-lg backdrop-blur-md overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-emerald-400/30"
            >
              {/* Image */}
              {proj.image && (
                <div className="overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold text-emerald-300 group-hover:text-emerald-400 transition">
                  {proj.title}
                </h3>
                <p className="text-gray-300 text-sm line-clamp-3">
                  {proj.description}
                </p>
                <div className="flex justify-between items-center pt-3">
                  <Link
                    to={`/projects/${proj.slug}`}
                    className="text-emerald-400 hover:text-emerald-300 font-medium transition"
                  >
                    View Case Study →
                  </Link>
                  <div className="flex gap-3 text-sm text-gray-400">
                    {proj.tech &&
                      proj.tech.slice(0, 2).map((t, j) => (
                        <span
                          key={j}
                          className="px-2 py-1 bg-emerald-400/10 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
