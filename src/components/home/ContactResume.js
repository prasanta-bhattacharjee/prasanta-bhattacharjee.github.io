import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";
import { MapPin, Phone, Mail } from "lucide-react";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
import ParticleBackground from "../ParticleBackground";

const ContactResume = ({ profile }) => {
  return (
    <section
      id="contact-resume"
      className="relative z-10 py-8 text-white overflow-hidden"
    >
      {/* === Particle Background === */}
      <ParticleBackground />

      {/* === Background Banner with Parallax === */}
      <ParallaxBanner
        layers={[
          { image: "/assets/bg_resume.jpg", speed: -10, opacity: 0.4 },
          {
            speed: -5,
            children: (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/60 to-purple-600/60" />
            ),
          },
        ]}
        className="relative py-24 text-center text-white"
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-6xl mx-auto px-6 space-y-10"
        >
          {/* === Heading & CTA === */}
          <div>
            <h2 className="text-3xl font-bold mb-4 text-emerald-300">
              Let’s Connect
            </h2>
            <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto leading-relaxed">
              Interested in collaborating or learning more about my work? Feel
              free to reach out or grab my resume below.
            </p>
            <a
              href={profile?.resume || "/assets/resume.pdf"}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-lg shadow hover:bg-gray-100 transition"
            >
              Download Resume
            </a>
          </div>

          {/* === Contact Info === */}
          <div className="grid md:grid-cols-2 gap-8 justify-items-center text-gray-100 mt-12">
            <div className="flex items-center gap-3">
              <MapPin className="text-emerald-400 w-6 h-6" />
              <span>Toronto, Ontario, Canada</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="text-emerald-400 w-6 h-6" />
              <a
                href="mailto:prasanta@example.com"
                className="hover:text-emerald-300 transition"
              >
                prasanta.ovi@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center gap-3">
              <Phone className="text-emerald-400 w-6 h-6" />
              <a
                href="tel:+14379879757"
                className="hover:text-emerald-300 transition"
              >
                +1 (437) 987-9757
              </a>
            </div> */}
          </div>

          {/* === Google Map === */}
          <div className="mt-16 mb-16 max-w-6xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-emerald-400/30">
            <iframe
              title="Toronto Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.469376089801!2d-79.3839344845036!3d43.65348157912179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d7b3f4b21f%3A0xf4f7b45b498c7e1a!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1696890999999!5m2!1sen!2sca"
              width="100%"
              height="100%"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </ParallaxBanner>
    </section>
  );
};

export default ContactResume;
