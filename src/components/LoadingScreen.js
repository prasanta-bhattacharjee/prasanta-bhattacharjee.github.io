import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LoadingScreen() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowLogo(false), 2500); // fade-out after 2.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 2.8, duration: 0.6 }}
      className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#0b1020] via-[#111827] to-[#0b1020] z-[9999]"
    >
      {showLogo && (
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-2 tracking-tight">
            <span className="text-emerald-400">Prasanta</span> Bhattacharjee
          </h1>
          <p className="text-gray-300 text-lg">Full-Stack Software Developer</p>
          <motion.div
            className="mt-6 w-16 h-1 bg-emerald-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.6, duration: 1 }}
          />
        </motion.div>
      )}
    </motion.div>
  );
}
