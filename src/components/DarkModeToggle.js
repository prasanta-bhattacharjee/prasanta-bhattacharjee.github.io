// // src/components/DarkModeToggle.js
// import React, { useEffect, useState } from "react";
// import { Sun, Moon } from "lucide-react";

// const DarkModeToggle = () => {
//   const [dark, setDark] = useState(
//     () =>
//       localStorage.getItem("theme") === "dark" ||
//       (!localStorage.getItem("theme") &&
//         window.matchMedia("(prefers-color-scheme: dark)").matches)
//   );

//   useEffect(() => {
//     const root = document.documentElement;
//     if (dark) {
//       root.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       root.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [dark]);

//   return (
//     <button
//       onClick={() => setDark(!dark)}
//       className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg transition-all bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:scale-110 z-50"
//       aria-label="Toggle theme"
//     >
//       {dark ? <Sun size={22} /> : <Moon size={22} />}
//     </button>
//   );
// };

// export default DarkModeToggle;
// src/components/DarkModeToggle.js
import React from "react";
import { Sun } from "lucide-react";

const DarkModeToggle = () => {
  return (
    <button
      className="fixed bottom-5 right-5 p-3 rounded-full shadow-lg bg-blue-600 text-white hover:bg-blue-700 transition-all z-50 cursor-default"
      aria-label="Theme locked"
    >
      <Sun size={22} />
    </button>
  );
};

export default DarkModeToggle;
