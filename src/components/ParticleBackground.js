// src/components/ParticleBackground.jsx
import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export default function ParticleBackground() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="pointer-events-none fixed inset-0 z-[0]"
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        detectRetina: true,
        particles: {
          number: { value: 80, density: { enable: true, area: 800 } },
          color: { value: ["#60a5fa", "#34d399", "#a78bfa"] },
          shape: { type: "circle" },
          opacity: { value: 0.25 },
          size: { value: { min: 2, max: 6 } },
          links: {
            enable: true,
            distance: 120,
            color: "#64748b",
            opacity: 0.25,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.6,
            outModes: { default: "out" },
          },
        },
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
      }}
    />
  );
}
