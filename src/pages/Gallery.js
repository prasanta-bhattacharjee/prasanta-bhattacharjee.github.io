import React, { useState, useMemo } from "react";
import ParticleBackground from "../components/ParticleBackground";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";

const Gallery = ({ gallery = [] }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ Extract categories dynamically
  const categories = useMemo(() => {
    const all = gallery.map((g) => g.category || "Uncategorized");
    return ["All", ...new Set(all)];
  }, [gallery]);

  // ✅ Filter by category
  const filtered = gallery.filter(
    (g) => selectedCategory === "All" || g.category === selectedCategory
  );

  // ✅ Open modal
  const openModal = (index) => {
    setSelectedImage(filtered[index]);
    setCurrentIndex(0);
  };

  const nextImage = () => {
    const next = (currentIndex + 1) % selectedImage.images.length;
    setCurrentIndex(next);
  };

  const prevImage = () => {
    const prev =
      (currentIndex - 1 + selectedImage.images.length) %
      selectedImage.images.length;
    setCurrentIndex(prev);
  };

  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* ===== Background ===== */}
      <div className="absolute inset-0]" />
      <div className="relative max-w-7xl mx-auto px-6 py-16 z-[2]">
        {/* ===== Header ===== */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-emerald-400 mb-4">
            Moments & Memories
          </h1>
          <p className="text-gray-400">
            A collection of my journeys, events, and experiences.
          </p>
        </div>

        {/* ===== Category Filters ===== */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 ${
                selectedCategory === cat
                  ? "bg-emerald-500 text-white border-emerald-400 shadow-lg shadow-emerald-500/30"
                  : "border-emerald-400/30 text-emerald-300 hover:bg-emerald-400/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ===== Masonry Grid ===== */}
        {filtered.length === 0 ? (
          <p className="text-center text-gray-400">
            No images found in this category.
          </p>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filtered.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl border border-emerald-400/20 
                hover:border-emerald-400/40 shadow-lg hover:shadow-emerald-400/30 
                cursor-pointer group"
                onClick={() => openModal(i)}
              >
                <img
                  src={item.cover}
                  alt={item.title}
                  className="w-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-4">
                  <h3 className="text-lg font-semibold text-emerald-300">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-300">
                    {item.date} • {item.category}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* ===== Modal / Lightbox ===== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-[999] bg-black/90 flex items-center justify-center backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <div className="absolute top-6 right-6 flex gap-3">
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 bg-emerald-500/20 border border-emerald-400/40 rounded-full hover:bg-emerald-500/40 transition"
              >
                <X size={20} />
              </button>
            </div>

            {/* Navigation */}
            {selectedImage.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 p-3 bg-emerald-500/20 border border-emerald-400/40 rounded-full hover:bg-emerald-500/40 transition"
                >
                  <ChevronLeft size={28} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 p-3 bg-emerald-500/20 border border-emerald-400/40 rounded-full hover:bg-emerald-500/40 transition"
                >
                  <ChevronRight size={28} />
                </button>
              </>
            )}

            {/* Image Display */}
            <div className="max-w-5xl max-h-[80vh] px-4 text-center">
              <img
                src={selectedImage.images[currentIndex]}
                alt={`${selectedImage.title} - ${currentIndex + 1}`}
                className="w-full h-full object-contain rounded-lg border border-emerald-400/20 shadow-lg"
              />
              <div className="mt-4">
                <h2 className="text-2xl text-emerald-400 font-semibold">
                  {selectedImage.title}
                </h2>
                <p className="text-sm text-gray-400 mt-2">
                  {selectedImage.date} • {selectedImage.category}
                </p>
                <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
                  {selectedImage.description}
                </p>

                {/* Counter */}
                {selectedImage.images.length > 1 && (
                  <p className="text-xs text-gray-500 mt-3">
                    Image {currentIndex + 1} of {selectedImage.images.length}
                  </p>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ===== Floating Camera Icon ===== */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="fixed bottom-6 right-6 bg-emerald-500/90 p-3 rounded-full shadow-lg shadow-emerald-400/40 border border-emerald-300/50 cursor-pointer hover:scale-110 transition"
      >
        <Camera size={22} />
      </motion.div> */}
    </main>
  );
};

export default Gallery;
