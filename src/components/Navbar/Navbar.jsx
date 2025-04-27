import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-4  bg-slate-500  text-white md:px-44 sm:px-0">
      {/* Logo with Mood Icon */}
      <Link to="/" className="text-xl font-bold flex items-center gap-2">
        MoodTale
        <i className="fas fa-smile text-xl"></i> {/* Mood Icon */}
      </Link>

      {/* Mobile Toggle */}
      <div className="block md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-2xl"
        >
          <i className={`fas ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
      </div>

      {/* Links - Desktop and Mobile Menu */}
      <div className={`flex flex-col md:flex-row md:gap-4 absolute md:static  bg-slate-500  w-full md:w-auto left-0 top-16 md:top-0 transition-all ${isMobileMenuOpen ? 'block' : 'hidden'} md:block`}>
        <Link to="/" className="hover:underline py-2 px-4">
          Home
        </Link>
        <Link to="/about" className="hover:underline py-2 px-4">
      About
        </Link>
        <Link to="/blog" className="hover:underline py-2 px-4">
          Blogs
        </Link>
        <Link to="/mood" className="hover:underline py-2 px-4">
          Mood Selection
        </Link>
        
      </div>

    
    </nav>
  );
};

export default Navbar;
