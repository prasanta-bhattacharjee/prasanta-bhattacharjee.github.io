import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Eye, Search } from "lucide-react";
import { ParallaxBanner } from "react-scroll-parallax";
import ParticleBackground from "../components/ParticleBackground";

const Blog = ({ blogs = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 8;

  // ✅ Defensive: filter invalid blogs
  const validBlogs = blogs.filter((b) => b?.slug && b?.title);

  // ✅ Sort blogs (latest first)
  const sortedBlogs = [...validBlogs].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  // ✅ Extract unique categories
  const categories = useMemo(() => {
    const allCats = sortedBlogs.map((b) => b.category || "Uncategorized");
    return ["All", ...new Set(allCats)];
  }, [sortedBlogs]);

  // ✅ Filter blogs by search + category
  const filteredBlogs = sortedBlogs.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.summary.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // ✅ Featured = latest blog
  const featured = filteredBlogs[0];
  const visibleBlogs = filteredBlogs.filter((b) => b.slug !== featured?.slug);

  // ✅ Pagination
  const totalPages = Math.ceil(visibleBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = visibleBlogs.slice(
    startIndex,
    startIndex + blogsPerPage
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      {/* Background */}
      <div className="absolute inset-0">
        <ParticleBackground />
      </div>
      <div className="absolute inset-0" />

      <div className="relative px-6 py-16 max-w-7xl mx-auto z-[2]">
        <h2 className="text-4xl font-bold mb-10 text-center text-emerald-400">
          Latest Insights
        </h2>

        {/* Search & Category */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-10 bg-[#0e1a1a]/50 border border-emerald-400/20 p-4 rounded-xl backdrop-blur-sm">
          <div className="relative w-full md:w-1/2">
            <Search
              className="absolute left-3 top-3 text-emerald-400"
              size={18}
            />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent border border-emerald-400/30 rounded-md pl-10 pr-4 py-2 text-gray-200 focus:outline-none focus:border-emerald-400"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="bg-transparent border border-emerald-400/30 rounded-md px-4 py-2 text-gray-200 focus:outline-none focus:border-emerald-400"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat} className="bg-[#0b1220]">
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Featured Blog */}
        {featured && featured.slug && (
          <ParallaxBanner
            layers={[
              {
                image: featured.largeImage || featured.image,
                speed: -15,
                opacity: [1, 1],
                scale: [1.05, 1],
              },
              {
                speed: -5,
                children: (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                ),
              },
            ]}
            className="relative mb-14 rounded-2xl overflow-hidden shadow-lg border border-emerald-400/20 hover:shadow-emerald-400/30 transition-all duration-500 h-[450px]"
          >
            <div className="absolute bottom-0 left-0 right-0 p-8 z-10">
              <h3 className="text-3xl font-bold text-emerald-400 mb-3 drop-shadow-lg">
                {featured.title}
              </h3>
              <p className="text-gray-300 mb-4 max-w-2xl line-clamp-3">
                {featured.summary}
              </p>
              <Link
                to={`/blog/${featured.slug.trim().toLowerCase()}`}
                className="inline-block px-5 py-2 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md font-semibold transition"
              >
                Read Featured →
              </Link>
            </div>
          </ParallaxBanner>
        )}

        {/* Blog Grid */}
        {currentBlogs.length === 0 ? (
          <p className="text-center text-gray-500 mt-8">No blog posts found.</p>
        ) : (
          <div
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            data-aos="fade-up"
          >
            {currentBlogs.map((post, i) => (
              <div
                key={i}
                className="relative group bg-[#0e1a1a]/80 border border-emerald-500/20 rounded-2xl 
                  overflow-hidden shadow-lg hover:shadow-emerald-500/30 
                  transition-all duration-300 transform hover:-translate-y-2"
              >
                {post.image && (
                  <div className="h-44 w-full overflow-hidden">
                    <img
                      src={post.smallImage || post.image}
                      alt={post.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}

                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-emerald-400">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">
                    {new Date(post.date).toLocaleDateString()}{" "}
                    {post.category && (
                      <span className="ml-2 text-emerald-300 text-xs uppercase">
                        • {post.category}
                      </span>
                    )}
                  </p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                    {post.summary}
                  </p>

                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <Eye size={15} className="text-emerald-400" />
                      {(post.views || 0).toLocaleString()} views
                    </span>
                    <Link
                      to={`/blog/${post.slug.trim().toLowerCase()}`}
                      className="text-emerald-400 hover:text-emerald-300 font-medium transition"
                    >
                      Read more →
                    </Link>
                  </div>
                </div>

                <div
                  className="absolute inset-0 border border-emerald-400/0 
  group-hover:border-emerald-400/40 rounded-2xl 
  transition-all duration-500 pointer-events-none"
                ></div>
              </div>
            ))}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10 space-x-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToPage(idx + 1)}
                className={`px-3 py-2 text-sm rounded-md border transition-all duration-200 ${
                  currentPage === idx + 1
                    ? "bg-emerald-500 text-white border-emerald-500"
                    : "bg-[#0e1a1a]/70 border-emerald-400/30 text-emerald-300 hover:bg-emerald-400/10"
                }`}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default Blog;
