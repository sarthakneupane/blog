import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const BlogCard = ({ blog }) => (
  <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all hover:shadow-xl">
    <div className="relative h-52 overflow-hidden">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />

      <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-xs font-medium rounded-full">
        {blog.category}
      </div>
    </div>

    <div className="p-6">
      <h3 className="font-semibold text-xl line-clamp-2 group-hover:text-indigo-600 transition-colors">
        {blog.title}
      </h3>

      <p className="mt-3 text-gray-600 text-sm line-clamp-3">
        {blog.excerpt}
      </p>

      <div className="flex items-center gap-3 mt-6">
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
          <img
            src={blog.authorAvatar}
            alt={blog.author}
            className="w-full h-full object-cover"
          />
        </div>

        <div>
          <p className="font-medium text-sm">{blog.author}</p>
          <p className="text-xs text-gray-500">
            {blog.date} • {blog.readTime}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [blogs, setBlogs] = useState([]);

  // check login
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setIsLoggedIn(true);
  }, []);

  // fetch blogs
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8080/api/get-blogs"
        );
        setBlogs(res.data);
      } catch (err) {
        console.error("Error fetching blogs:", err);
      }
    };

    fetchBlogs();
  }, []);

  // transform API → UI format
  const formattedBlogs = useMemo(() => {
    return blogs.map((blog) => ({
      id: blog.id,
      title: blog.title,
      excerpt: blog.content?.slice(0, 120) + "...",
      category: blog.categories?.[0]?.name || "Uncategorized",
      image: blog.image
        ? `http://localhost:8080/uploads/${blog.image}`
        : "https://via.placeholder.com/400",
      author: "Admin",
      authorAvatar: "https://i.pravatar.cc/150",
      date: blog.created_at
        ? new Date(blog.created_at).toDateString()
        : "",
      readTime: `${Math.ceil((blog.content?.length || 0) / 500)} min read`,
    }));
  }, [blogs]);

  // filter blogs
  const filteredBlogs = useMemo(() => {
    if (selectedCategory === "All") return formattedBlogs;

    return formattedBlogs.filter(
      (blog) => blog.category === selectedCategory
    );
  }, [formattedBlogs, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* HERO */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter mb-6">
            Stories that shape tomorrow
          </h1>

          <p className="text-xl text-indigo-100 mb-8">
            Join a community of thinkers, creators, and storytellers.
          </p>

          <a
            href="/add-blog"
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all shadow-lg"
          >
            ✍️ Add Blog
          </a>
        </div>
      </div>

      {/* BLOG LIST */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold text-gray-900">
            {selectedCategory === "All"
              ? "Latest Stories"
              : selectedCategory}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}