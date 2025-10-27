// src/components/SectionNav.js
import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  FileText,
  PenTool,
  BookOpen,
  Grid,
  MessageSquare,
  Mail,
  Award,
} from "lucide-react";

const sections = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "hobbies", icon: BookOpen, label: "Hobbies" },
  { id: "skills", icon: FileText, label: "Skills" },
  { id: "experience", icon: Briefcase, label: "Experience" },
  { id: "education", icon: PenTool, label: "Education" },
  // { id: "projects", icon: Grid, label: "Projects" },
  // { id: "testimonials", icon: MessageSquare, label: "Testimonials" },
  {
    id: "certifications-awards",
    icon: Award,
    label: "Certificate & Awards",
  },
  { id: "contact-resume", icon: Mail, label: "Contact" },
];

const SectionNav = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.4;
      let current = "";
      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + window.scrollY;
          if (scrollPos >= top - 200) current = sec.id;
        }
      }
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed left-5 top-1/2 -translate-y-1/2 z-40">
      <div className="flex flex-col items-center gap-5 bg-gray-200/40 dark:bg-gray-800/40 backdrop-blur-lg px-4 py-6 rounded-full shadow-lg border border-gray-300/30 dark:border-gray-700/30">
        {sections.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() =>
              document
                .getElementById(id)
                ?.scrollIntoView({ behavior: "smooth", block: "start" })
            }
            title={label}
            className={`p-2 rounded-full transition-all ${
              active === id
                ? "bg-emerald-400 text-white scale-110 shadow-md"
                : "text-gray-600 dark:text-gray-400 hover:text-emerald-400"
            }`}
          >
            <Icon size={20} strokeWidth={1.6} />
          </button>
        ))}
      </div>
    </div>
  );
};

export default SectionNav;
