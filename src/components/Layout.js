import React from "react";
import { Outlet } from "react-router-dom";

// src/components/Layout.jsx
const Layout = ({ profile }) => {
  return (
    <footer className="fixed bottom-0 left-0 w-full text-center border-t border-gray-700/50 z-50 bg-gray-200/40 dark:bg-gray-800/40 backdrop-blur-lg px-4 py-6 rounded-full shadow-lg border dark:border-gray-700/30">
      <p className="text-sm text-gray-400">
        © {new Date().getFullYear()} {profile?.name || "Your Name"}
      </p>
    </footer>
  );
};

export default Layout;
