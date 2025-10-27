import React, { useState, useEffect } from "react";
import Hobbies from "../components/home/Hobbies";
import Heros from "../components/home/Hero";
import Abouts from "../components/home/About";
import Skills from "../components/home/Skills";
import Work from "../components/home/Work";
import Education from "../components/home/Education";
import Contact from "../components/home/ContactResume";
import CertificationsAwards from "../components/home/CertificationsAwards";

const Home = ({ profile }) => {
  return (
    <main className="text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* ================= HERO SECTION ================= */}
      <Heros profile={profile} />
      <div className="h-[1px] bg-gray-700/40 w-11/12 mx-auto my-10" />
      {/* ===== SECTION SEPARATOR ===== */}

      <Abouts profile={profile} />
      <div className="h-[1px] bg-gray-700/40 w-11/12 mx-auto my-10" />
      {/* ===== SECTION SEPARATOR ===== */}
      <Hobbies profile={profile} />
      {/* ===== SECTION SEPARATOR ===== */}
      <div className="h-[1px] bg-gray-700/40 w-11/12 mx-auto my-10" />
      {/* ================= SKILLS SECTION ================= */}
      <Skills profile={profile} />
      {/* ===== SECTION SEPARATOR ===== */}
      <div className="h-[1px] bg-gray-700/40 w-11/12 mx-auto my-10" />
      {/* ================= EXPERIENCE & EDUCATION ================= */}
      <Work profile={profile} />
      {/* ===== SECTION SEPARATOR ===== */}
      <div className="h-[1px] bg-gray-700/40 w-11/12 mx-auto my-10" />
      <Education profile={profile} />
      <div className="h-[1px] bg-gray-700/40 w-11/12 mx-auto my-10" />
      <CertificationsAwards profile={profile} />
      {/* ===== SECTION SEPARATOR ===== */}
      <div className="h-[1px] bg-gray-700/40 w-11/12 mx-auto my-10" />
      <Contact profile={profile} />
    </main>
  );
};

export default Home;
