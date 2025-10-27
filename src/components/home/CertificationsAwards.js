import React, { useState } from "react";
import { motion } from "framer-motion";
import { Award, Star, X } from "lucide-react";
import ParticleBackground from "../ParticleBackground";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CertificationsAwards = ({ profile }) => {
  const safeCerts = Array.isArray(profile?.certifications)
    ? profile.certifications
    : [];
  const safeAwards = Array.isArray(profile?.awards) ? profile.awards : [];

  const [popupImage, setPopupImage] = useState(null);

  return (
    <section
      id="certifications-awards"
      className="relative z-10 py-8 text-white text-center overflow-hidden"
    >
      <ParticleBackground />

      {/* === Image Popup Modal === */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setPopupImage(null)}
        >
          <div className="relative">
            <img
              src={popupImage}
              alt="certificate or award"
              className="max-w-full max-h-[85vh] rounded-lg shadow-lg border border-gray-700"
            />
            <button
              className="absolute -top-4 -right-4 bg-red-600 text-white rounded-full p-2 hover:bg-red-500"
              onClick={() => setPopupImage(null)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <div className="glass glass-hover w-full max-w-7xl mx-auto p-10 md:p-16 rounded-2xl backdrop-blur-xl shadow-lg relative z-[1]">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-emerald-400 mb-6"
        >
          Certifications & Awards
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-gray-300 mb-14 text-lg"
        >
          Recognition of ongoing learning, achievement, and contributions in
          research and technology.
        </motion.p>

        {/* === Grid Layout === */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* === Certifications === */}
          {safeCerts.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gray-900/80 to-gray-800/60 border border-emerald-400/20 rounded-2xl p-8 shadow-lg hover:shadow-emerald-400/30 transition-all backdrop-blur-lg text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <Award className="text-emerald-400 w-6 h-6" />
                <h3 className="text-2xl font-semibold text-emerald-300">
                  Certifications
                </h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                {safeCerts.map((cert, i) => (
                  <li key={i} className="border-b border-emerald-400/20 pb-3">
                    <span className="font-medium text-white">{cert.title}</span>{" "}
                    <span className="text-sm text-gray-400">({cert.year})</span>
                    <div className="mt-2 flex flex-wrap gap-3 items-center">
                      {cert.link && (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-emerald-400 text-sm hover:underline"
                        >
                          View Certificate
                        </a>
                      )}
                      {cert.image && (
                        <img
                          src={cert.image}
                          alt={cert.title}
                          onClick={() => setPopupImage(cert.image)}
                          className="w-20 h-20 object-cover rounded-md border border-emerald-400/30 cursor-pointer hover:scale-105 transition"
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* === Awards === */}
          {safeAwards.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="bg-gradient-to-b from-gray-900/80 to-gray-800/60 border border-cyan-400/20 rounded-2xl p-8 shadow-lg hover:shadow-cyan-400/30 transition-all backdrop-blur-lg text-left"
            >
              <div className="flex items-center gap-3 mb-4">
                <Star className="text-cyan-400 w-6 h-6" />
                <h3 className="text-2xl font-semibold text-cyan-300">Awards</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                {safeAwards.map((award, i) => (
                  <li key={i} className="border-b border-cyan-400/20 pb-3">
                    <span className="font-medium text-white">
                      {award.title}
                    </span>{" "}
                    <span className="text-sm text-gray-400">
                      ({award.year})
                    </span>
                    <div className="mt-2 flex flex-wrap gap-3 items-center">
                      {award.link && (
                        <a
                          href={award.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-cyan-400 text-sm hover:underline"
                        >
                          View Details
                        </a>
                      )}
                      {award.image && (
                        <img
                          src={award.image}
                          alt={award.title}
                          onClick={() => setPopupImage(award.image)}
                          className="w-20 h-20 object-cover rounded-md border border-cyan-400/30 cursor-pointer hover:scale-105 transition"
                        />
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsAwards;
