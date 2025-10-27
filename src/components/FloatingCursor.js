import React, { useEffect, useState } from "react";

const FloatingCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    const click = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 200);
    };

    const handleHover = (e) => {
      if (e.target.closest("a, button, .cursor-hover")) setHovered(true);
      else setHovered(false);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", click);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", click);
      window.removeEventListener("mouseover", handleHover);
    };
  }, []);

  return (
    <>
      {/* Outer ring */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] w-8 h-8 rounded-full border border-emerald-400 
        transition-transform duration-150 ease-out mix-blend-difference ${
          clicked
            ? "scale-75 opacity-80"
            : hovered
            ? "scale-125 opacity-100"
            : "opacity-70"
        }`}
        style={{
          transform: `translate3d(${position.x - 16}px, ${
            position.y - 16
          }px, 0)`,
        }}
      ></div>

      {/* Inner dot */}
      <div
        className={`pointer-events-none fixed top-0 left-0 z-[9999] w-2 h-2 rounded-full bg-emerald-400 
        transition-transform duration-150 ease-out ${
          clicked ? "scale-125" : hovered ? "scale-150" : "scale-100"
        }`}
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      ></div>
    </>
  );
};

export default FloatingCursor;
