import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Eye, ArrowLeft } from "lucide-react";
import ParticleBackground from "../components/ParticleBackground";

const BlogDetail = ({ blogs }) => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [viewCount, setViewCount] = useState(0);

  // ✅ Load blog & update view count via Flask
  useEffect(() => {
    const found = blogs.find((b) => b.slug === slug);
    setBlog(found || null);

    if (found) {
      const viewedKey = `viewed_${slug}`;
      const lastViewed = JSON.parse(localStorage.getItem(viewedKey));

      const now = Date.now();
      const oneDay = 24 * 60 * 60 * 1000; // 24 hours

      const canIncrement = !lastViewed || now - lastViewed.timestamp > oneDay;

      if (canIncrement) {
        fetch(`/api/update_view/${slug}`, { method: "POST" })
          .then((res) => res.json())
          .then((data) => {
            if (data.success) {
              setViewCount(data.views);

              // ✅ Store timestamp
              localStorage.setItem(
                viewedKey,
                JSON.stringify({ timestamp: now })
              );

              // ✅ Update cached blogViews for display
              const views = JSON.parse(localStorage.getItem("blogViews")) || {};
              views[slug] = data.views;
              localStorage.setItem("blogViews", JSON.stringify(views));
            } else {
              setViewCount(found.views || 0);
            }
          })
          .catch(() => setViewCount(found.views || 0));
      } else {
        // ✅ Already viewed within 24 hours
        setViewCount(found.views || 0);
      }
    }

    window.scrollTo(0, 0);
  }, [slug, blogs]);

  if (!blog) {
    return (
      <main className="flex items-center justify-center h-screen text-gray-400">
        Blog not found.
      </main>
    );
  }

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background + Particles */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="absolute inset-0" />

      {/* ===== Floating Back Button ===== */}
      <Link
        to="/blog"
        className="fixed top-6 right-6 z-20 bg-emerald-500/80 hover:bg-emerald-600 
        text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-md transition 
        flex items-center gap-2 border border-emerald-300/40"
      >
        <ArrowLeft size={16} />
        Back to Blog
      </Link>

      <div className="relative max-w-4xl mx-auto px-6 py-20 z-[2]">
        {/* Hero Image */}
        {blog.largeImage && (
          <img
            src={blog.largeImage}
            alt={blog.title}
            className="w-full rounded-2xl mb-10 border border-emerald-400/30 shadow-lg"
          />
        )}

        {/* Title */}
        <h1 className="text-4xl font-bold text-emerald-400 mb-3">
          {blog.title}
        </h1>
        <div className="flex items-center gap-3 text-sm text-gray-400 mb-8">
          <span>{new Date(blog.date).toLocaleDateString()}</span>
          <span>• {blog.category}</span>
          <span className="flex items-center gap-1">
            <Eye size={15} className="text-emerald-400" />
            {viewCount.toLocaleString()} views
          </span>
        </div>

        {/* Content */}
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {blog.content}
        </p>
      </div>
    </main>
  );
};

export default BlogDetail;
