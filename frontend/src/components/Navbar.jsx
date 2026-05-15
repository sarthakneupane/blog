import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ selectedCategory, setSelectedCategory, isLoggedIn, setIsLoggedIn }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  const categories = ['All', 'Technology', 'Lifestyle', 'Travel', 'Food', 'Business'];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl">
            B
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900">Blogora</h1>
            <p className="text-[10px] text-gray-500 -mt-1">stories that matter</p>
          </div>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-md mx-8 hidden md:block">
          <div className="relative">
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full bg-gray-100 border border-transparent focus:border-gray-300 rounded-full py-2.5 pl-10 text-sm focus:outline-none"
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-gray-400 absolute left-4 top-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 01-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Categories Dropdown */}
          <div className="relative group hidden md:block">
            <button className="flex items-center gap-1.5 text-sm font-medium px-4 py-2 hover:bg-gray-100 rounded-xl transition-colors">
              <span>{selectedCategory}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            <div className="absolute hidden group-hover:block pt-2 w-52 z-50">
              <div className="bg-white rounded-2xl shadow-xl py-2 border border-gray-100 text-sm">
                {categories.map(cat => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-6 py-2.5 hover:bg-gray-50 transition-colors ${selectedCategory === cat ? 'text-indigo-600 font-semibold' : ''}`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Auth Buttons */}
          {isLoggedIn ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-9 h-9 bg-indigo-100 text-indigo-700 rounded-full flex items-center justify-center font-semibold hover:ring-2 hover:ring-indigo-200"
              >
                S
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl py-2 border border-gray-100 text-sm z-50">
                  <div className="px-6 py-3 border-b">
                    <p className="font-semibold">Sarthak Sharma</p>
                    <p className="text-gray-500 text-xs">@sarthakdev</p>
                  </div>
                  <Link to="/profile" className="block px-6 py-3 hover:bg-gray-50">👤 Profile</Link>
                  <Link to="/my-articles" className="block px-6 py-3 hover:bg-gray-50">📝 My Articles</Link>
                  <button className="w-full text-left px-6 py-3 hover:bg-gray-50">❤️ Bookmarks</button>
                  <div className="border-t my-1"></div>
                  <button 
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full text-left px-6 py-3 hover:bg-gray-50 text-red-600"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <Link 
                to="/login"
                className="px-5 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                Log in
              </Link>
              <Link 
                to="/register"
                className="px-5 py-2 text-sm font-semibold bg-indigo-600 text-white rounded-2xl hover:bg-indigo-700 transition-all"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;