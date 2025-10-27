import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground"; // ✅ uses your global particle component

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ Failed to send message.");
      }
    } catch (err) {
      setStatus("⚠️ Error sending message.");
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* ===== PARTICLE BACKGROUND ===== */}
      <ParticleBackground />
      <div className="absolute inset-0" />

      {/* ===== CONTENT WRAPPER ===== */}
      <div className="max-w-6xl mx-auto px-6 py-24 relative z-[2] grid md:grid-cols-2 gap-14 items-start">
        {/* ===== LEFT SECTION ===== */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold mb-4 text-emerald-400">
            Let’s Connect
          </h2>
          <p className="text-gray-300 mb-8 leading-relaxed">
            Have a project idea or collaboration in mind? Reach out and let’s
            turn your vision into something remarkable.
          </p>

          <div className="space-y-5 text-gray-300">
            <div className="flex items-center gap-4">
              <MapPin className="text-emerald-400 w-6 h-6" />
              <span>Toronto, Ontario, Canada</span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-emerald-400 w-6 h-6" />
              <a
                href="mailto:prasanta@example.com"
                className="hover:text-emerald-400 transition"
              >
                prasanta@example.com
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="text-emerald-400 w-6 h-6" />
              <a
                href="tel:+11234567890"
                className="hover:text-emerald-400 transition"
              >
                +1 (123) 456-7890
              </a>
            </div>
          </div>

          {/* Decorative Glow */}
          <div className="absolute -top-20 left-0 w-72 h-72 bg-emerald-500/30 blur-[100px] rounded-full opacity-40"></div>
        </motion.div>

        {/* ===== RIGHT SECTION: CONTACT FORM ===== */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/10 border border-emerald-400/20 rounded-2xl backdrop-blur-lg p-8 shadow-lg space-y-5 hover:border-emerald-400/40 transition-all"
        >
          <h3 className="text-2xl font-semibold mb-4 text-emerald-400">
            Send a Message
          </h3>

          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded bg-transparent border border-gray-600 focus:border-emerald-400 outline-none transition"
            required
          />
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded bg-transparent border border-gray-600 focus:border-emerald-400 outline-none transition"
            required
          />
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full p-3 rounded bg-transparent border border-gray-600 focus:border-emerald-400 outline-none transition"
          />
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 h-32 rounded bg-transparent border border-gray-600 focus:border-emerald-400 outline-none transition resize-none"
            required
          />
          <button
            type="submit"
            className="w-full py-3 rounded bg-emerald-500 hover:bg-emerald-600 font-semibold text-white transition"
          >
            Send Message
          </button>
          {status && (
            <p className="text-sm text-center text-emerald-400 mt-3">
              {status}
            </p>
          )}
        </motion.form>
      </div>

      {/* ===== MAP SECTION ===== */}
      <div className="mt-20 max-w-6xl mx-auto h-[400px] rounded-2xl overflow-hidden shadow-2xl border border-emerald-400/30 relative z-[1]">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.469376089801!2d-79.3839344845036!3d43.65348157912179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d7b3f4b21f%3A0xf4f7b45b498c7e1a!2sToronto%2C%20ON!5e0!3m2!1sen!2sca!4v1696890999999!5m2!1sen!2sca"
          width="100%"
          height="100%"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </main>
  );
};

export default Contact;
