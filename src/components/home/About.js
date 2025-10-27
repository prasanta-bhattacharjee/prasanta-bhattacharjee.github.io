import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ParallaxBanner } from "react-scroll-parallax";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const Abouts = ({ profile }) => {
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
      id="about"
      className="relative py-8 overflow-hidden text-center text-white"
    >
      <div className="glass glass-hover w-full max-w-7xl mx-auto rounded-2xl md:p-16 relative">
        <ParallaxBanner
          layers={[
            { image: "/assets/bg_aboutf.jpg", speed: -15, opacity: 0.4 },
            { speed: -5, children: <div className="absolute inset-0" /> },
          ]}
          className="relative py-8 flex flex-col md:flex-row items-center justify-center md:justify-between px-8 md:px-20 text-white overflow-visible gap-y-10 md:gap-x-16"
        >
          {/* ===== LEFT SIDE: About Content ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="w-full md:w-7/12 text-left space-y-6 z-10"
          >
            <h2 className="text-4xl font-bold mb-4 text-emerald-400">
              {profile?.about?.heading || "About Me"}
            </h2>
            <p className="text-lg leading-relaxed text-gray-300">
              {profile?.about?.description ||
                "I'm a passionate Full-Stack Developer who blends design, performance, and functionality to craft seamless digital experiences. I focus on scalability, clean UI, and meaningful impact through technology."}
            </p>

            {/* ===== WHAT I DO GRID ===== */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {profile.services.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 border border-emerald-400/30 hover:border-emerald-400/60 
                 rounded-2xl p-5 backdrop-blur-md shadow-lg hover:shadow-emerald-400/30 
                 transition-all duration-300"
                >
                  <div className="text-emerald-400 text-3xl mb-3">
                    <i className={item.icon}></i>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ===== RIGHT SIDE: Floating IMAGE ===== */}
          <div className="relative w-full md:w-5/12 flex justify-center mt-16 md:mt-0 z-20">
            {/* Glowing Halo Behind Image */}
            <div className="absolute inset-0 flex justify-center items-center">
              <div className="w-72 md:w-96 h-72 md:h-96 bg-gradient-to-tr from-emerald-500/30 via-cyan-400/20 to-transparent blur-[120px] rounded-full opacity-70 animate-pulse"></div>
            </div>

            {/* Floating Image */}
            <motion.img
              src={profile?.about?.image || "./assets/about.png"}
              alt="About illustration"
              className="relative rounded-2xl shadow-2xl w-72 md:w-80 lg:w-96 h-auto object-contain 
              transform md:-translate-y-10 md:translate-x-6 hover:scale-105 transition-transform duration-500 ease-out"
              whileHover={{ scale: 1.08 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            />
          </div>
        </ParallaxBanner>
        {/* Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          viewport={{ once: true }}
          className="mt-16 italic text-emerald-300 text-center"
        >
          “Where curiosity meets code, and automation fuels creativity.”
        </motion.p>
      </div>
    </section>
  );
};

export default Abouts;
