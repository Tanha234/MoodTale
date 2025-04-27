import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BloggerFeature from './BloggerFeature';
import HomeExtraSections from './Orbit';
import TrendingBlogTopics from './TrendingBlogTopics';
import BlogOfTheDay from './BlogOfTheDay';
import Orbit from './Orbit';

function Home() {
  const [articles, setArticles] = useState([]);
  const [bigBlog, setBigBlog] = useState(null);
  const [smallBlogs, setSmallBlogs] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch('https://dev.to/api/articles');
        const data = await response.json();
        setArticles(data);

        if (data.length > 0) {
          setBigBlog(data[0]);
          setSmallBlogs(data.slice(1, 4)); // next 3 blogs
        }
      } catch (error) {
        console.error('Failed to fetch articles:', error);
      }
    };

    fetchArticles();
  }, []);

  const handleSwap = (clickedBlog) => {
    if (!bigBlog) return;
    const updatedSmallBlogs = smallBlogs.map((blog) =>
      blog.id === clickedBlog.id ? bigBlog : blog
    );
    setBigBlog(clickedBlog);
    setSmallBlogs(updatedSmallBlogs);
  };

  if (!bigBlog) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl font-semibold">Loading blogs...</div>
      </div>
    );
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-44 bg-slate-500 text-white">
        <div className="w-full md:w-1/2">
          <motion.img
            src="https://www.rmcad.edu/wp-content/uploads/2024/12/shutterstock_2176161815-scaled.jpg"
            alt="Mood Image"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          />
        </div>

        <div className="w-full md:w-1/2 md:pl-8">
          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Discover Your Mood, Share Your Story
          </motion.h1>
          <motion.p
            className="text-lg mb-6"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Welcome to MoodTale! Explore blogs, share your thoughts, and find the perfect mood that resonates with you.
          </motion.p>
          <Link to="/mood/happy" className="px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-yellow-400 transition">
            Start Exploring
          </Link>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 px-6 sm:px-10 md:px-20 lg:px-44 bg-slate-500">
        <motion.h2
          className="text-4xl font-bold text-white text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Latest Blogs
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Big Blog */}
          <motion.div
            className="lg:col-span-2 p-6 rounded-lg bg-white cursor-pointer"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ minHeight: 'auto' }}
          >
            <img
              src={bigBlog.cover_image || "https://via.placeholder.com/400x200"}
              alt={bigBlog.title}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-4">{bigBlog.title}</h3>
            <p
              className="text-lg mb-4"
              style={{ whiteSpace: 'pre-line' }}
            >
              {bigBlog.description || bigBlog.body_markdown || "No description available."}
            </p>
            <Link
              to={`/blog/${bigBlog.id}`}
              className="text-slate-800 hover:text-yellow-400 transition"
            >
              Read More
            </Link>
          </motion.div>

          {/* Small Blogs */}
          <div className="space-y-6">
            {smallBlogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                className="p-6 rounded-lg bg-white cursor-pointer"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: index * 0.1 }}
                onClick={() => handleSwap(blog)}
              >
                <img
                  src={blog.cover_image || "https://via.placeholder.com/400x200"}
                  alt={blog.title}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-base font-semibold mb-2">{blog.title}</h3>
                <Link
                  to={`/blog/${blog.id}`}
                  className="text-slate-900 hover:text-yellow-400 text-sm transition"
                >
                  Read More
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Sections */}
      <TrendingBlogTopics />
      <Orbit />
      <BloggerFeature />
      <BlogOfTheDay />
    </div>
  );
}

export default Home;
