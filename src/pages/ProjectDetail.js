import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const ProjectDetail = ({ projects }) => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <main className="flex items-center justify-center h-screen text-gray-200">
        <p>Project not found.</p>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* ===== Background Particles ===== */}
      <ParticleBackground />
      <div className="absolute inset-0 -z-[1]" />

      {/* ===== Floating Back Button (Top Right) ===== */}
      <motion.button
        onClick={() => navigate(-1)}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 
          rounded-full border border-emerald-400/40 text-emerald-400
          bg-[#0b1220]/70 backdrop-blur-md shadow-lg
          hover:bg-emerald-400/10 hover:shadow-emerald-400/40
          transition-all duration-300 hover:scale-105"
      >
        <ArrowLeft size={18} />
        <span className="font-medium hidden sm:inline">Back</span>
      </motion.button>

      {/* ===== PAGE CONTENT ===== */}
      <div className="max-w-5xl mx-auto px-6 py-24 relative z-[2] space-y-10">
        {/* ===== HERO ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-5 text-center"
        >
          <h1 className="text-4xl font-bold text-emerald-400">
            {project.title}
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto">
            {project.description}
          </p>
        </motion.div>

        {/* ===== IMAGE ===== */}
        {project.image && (
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full rounded-2xl shadow-2xl border border-emerald-400/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          />
        )}

        {/* ===== DETAILS ===== */}
        <div className="space-y-10 mt-10">
          {/* Overview */}
          <section>
            <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
              Overview
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {project.caseStudy?.overview}
            </p>
          </section>

          {/* Features */}
          {project.caseStudy?.features && (
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
                Key Features
              </h2>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {project.caseStudy.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack */}
          {project.tech && (
            <section>
              <h2 className="text-2xl font-semibold mb-3 text-emerald-400">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Links */}
          <section className="flex gap-4 mt-8">
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 bg-emerald-500 hover:bg-emerald-600 rounded-lg text-white font-semibold transition"
              >
                Live Demo
              </a>
            )}
            {project.repoLink && (
              <a
                href={project.repoLink}
                target="_blank"
                rel="noreferrer"
                className="px-6 py-2 border border-emerald-400/60 rounded-lg hover:bg-emerald-400/10 transition"
              >
                View Code
              </a>
            )}
          </section>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
