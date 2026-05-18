import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

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
      <h3 className="font-semibold text-xl leading-tight line-clamp-2 group-hover:text-indigo-600 transition-colors">
        {blog.title}
      </h3>
      
      <p className="mt-3 text-gray-600 text-sm line-clamp-3">
        {blog.excerpt}
      </p>

      <div className="flex items-center gap-3 mt-6">
        <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
          <img src={blog.authorAvatar} alt={blog.author} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="font-medium text-sm">{blog.author}</p>
          <p className="text-xs text-gray-500">{blog.date} • {blog.readTime}</p>
        </div>
      </div>
    </div>
  </div>
);

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState('All');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // 👇 check token on load
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (token) {
        setIsLoggedIn(true);
      }
    }, []);

  const blogs = [
    {
      id: 1,
      title: "The Future of AI in Everyday Life",
      excerpt: "Artificial Intelligence is transforming how we live, work, and interact. From smart homes to self-driving cars, AI is becoming part of daily life.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      author: "Sarthak Sharma",
      authorAvatar: "https://i.pravatar.cc/150?img=1",
      date: "May 10, 2026",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "10 Healthy Habits for a Better Lifestyle",
      excerpt: "Building small habits like daily exercise and mindful eating can significantly improve your overall lifestyle and mental health.",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      author: "Anisha Karki",
      authorAvatar: "https://i.pravatar.cc/150?img=2",
      date: "May 8, 2026",
      readTime: "4 min read"
    },
    {
      id: 3,
      title: "Top Travel Destinations in 2026",
      excerpt: "Explore the most beautiful and trending travel destinations you must visit this year, from mountains to tropical beaches.",
      category: "Travel",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      author: "Rohit Adhikari",
      authorAvatar: "https://i.pravatar.cc/150?img=3",
      date: "May 5, 2026",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Delicious Street Foods You Must Try",
      excerpt: "Street food offers a unique taste of culture. Here are some must-try street foods from around the world.",
      category: "Food",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
      author: "Priya Shrestha",
      authorAvatar: "https://i.pravatar.cc/150?img=4",
      date: "May 3, 2026",
      readTime: "3 min read"
    },
    {
      id: 5,
      title: "How Startups Are Changing the Business World",
      excerpt: "Startups are disrupting traditional industries with innovation, technology, and bold ideas.",
      category: "Business",
      image: "https://images.unsplash.com/photo-1556761175-4b46a572b786",
      author: "Aman Gupta",
      authorAvatar: "https://i.pravatar.cc/150?img=5",
      date: "May 1, 2026",
      readTime: "7 min read"
    },
    {
      id: 6,
      title: "Understanding Cloud Computing Basics",
      excerpt: "Cloud computing is the backbone of modern apps. Learn the basics and how it powers everything online.",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa",
      author: "Neha Rai",
      authorAvatar: "https://i.pravatar.cc/150?img=6",
      date: "April 28, 2026",
      readTime: "5 min read"
    }
  ];

  const filteredBlogs = selectedCategory === 'All' 
    ? blogs 
    : blogs.filter(blog => blog.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar 
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        isLoggedIn={isLoggedIn}
        setIsLoggedIn={setIsLoggedIn}
      />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-violet-700 text-white py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          
          <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-6">
            Stories that<br />shape tomorrow
          </h1>

          <p className="text-xl text-indigo-100 max-w-md mx-auto mb-8">
            Join a community of thinkers, creators, and storytellers.
          </p>

          {/* ✅ ADD BLOG BUTTON */}
          <a
            href="/add-blog"
            className="inline-block px-8 py-3 bg-white text-indigo-600 font-semibold rounded-2xl hover:bg-gray-100 transition-all shadow-lg"
          >
            ✍️ Add Blog
          </a>

        </div>
      </div>

      {/* Blog Feed */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900">
            {selectedCategory === 'All' ? 'Latest Stories' : selectedCategory}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map(blog => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}