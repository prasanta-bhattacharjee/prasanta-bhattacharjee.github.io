// src/components/ScrollToTopButton.js
import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollProgress(scrolled);
      setVisible(scrollTop > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const circumference = 2 * Math.PI * 24; // circle radius = 24

  return (
    <div className="fixed bottom-5 right-8 z-50">
      {visible && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="relative group bg-[#0b1220]/70 backdrop-blur-md rounded-full shadow-lg 
                     border border-emerald-400/30 hover:scale-110 transition-all p-3 overflow-hidden"
          aria-label="Scroll to top"
        >
          {/* Progress ring */}
          <svg
            className="absolute inset-0 w-full h-full transform rotate-[-90deg]"
            viewBox="0 0 60 60"
          >
            <circle
              cx="30"
              cy="30"
              r="24"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="3"
              fill="none"
            />
            <circle
              cx="30"
              cy="30"
              r="24"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={
                circumference - (scrollProgress / 100) * circumference
              }
              strokeLinecap="round"
              className="transition-[stroke-dashoffset] duration-150 ease-linear drop-shadow-[0_0_6px_#10b981]"
            />
            <defs>
              <linearGradient id="progressGradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#34d399" /> {/* Emerald */}
                <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
              </linearGradient>
            </defs>
          </svg>

          {/* 🌿 Pulsing emerald glow core */}
          <span
            className={`absolute inset-0 m-auto w-6 h-6 rounded-full 
              bg-emerald-400/40 blur-md transition-all duration-700 ease-in-out
              ${scrollProgress > 5 ? "animate-pulse-glow" : "opacity-0"}`}
          ></span>

          {/* Arrow icon */}
          <ArrowUp
            size={22}
            className="relative z-10 text-emerald-400 group-hover:text-white transition-colors duration-300"
          />
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
