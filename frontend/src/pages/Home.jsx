import React, { useState } from 'react';
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

  const blogs = [ /* ... same blog data as before ... */ ];

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
          <p className="text-xl text-indigo-100 max-w-md mx-auto">
            Join a community of thinkers, creators, and storytellers.
          </p>
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