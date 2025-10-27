import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaImage,
  FaProjectDiagram,
  FaEnvelope,
  FaBlog,
} from "react-icons/fa";

const SidebarNav = ({ name }) => {
  const navLinks = [
    // { to: "/", label: "Home", icon: <FaHome /> },
    // { to: "/gallery", label: "Gallery", icon: <FaImage /> },
    // { to: "/projects", label: "Projects", icon: <FaProjectDiagram /> },
    // { to: "/blog", label: "Blog", icon: <FaBlog /> },
    // { to: "/contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-20 border-r bg-gray-200/40 dark:bg-gray-800/40 backdrop-blur-lg px-4 py-6 shadow-lg border border-gray-300/30 dark:border-gray-700/30">
      {/* Brand / Logo */}
      <div className="flex flex-col items-center space-y-1">
        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-xl font-bold">
          {name ? name[0] : "P"}
        </div>
      </div>

      {/* Nav Icons */}
      <ul className="flex-1 flex flex-col justify-center space-y-6 mt-10">
        {navLinks.map((link, idx) => (
          <li key={idx}>
            <NavLink
              to={link.to}
              end
              className={({ isActive }) =>
                `flex flex-col items-center text-lg transition-all ${
                  isActive
                    ? "text-blue-600 dark:text-blue-400"
                    : "text-gray-600 dark:text-gray-400 hover:text-blue-500"
                }`
              }
            >
              {link.icon}
              <span className="text-[10px] mt-1">{link.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Footer */}
      <div className="text-xs text-gray-400 dark:text-gray-500">
        © {new Date().getFullYear()}
      </div>
    </aside>
  );
};

export default SidebarNav;
