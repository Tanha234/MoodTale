import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BloggerFeature from './BloggerFeature';
import HomeExtraSections from './Orbit';
import TrendingBlogTopics from './TrendingBlogTopics';
import BlogOfTheDay from './BlogOfTheDay';
import Orbit from './Orbit';


function Home() {
  // Initial Blogs Data
  const initialBigBlog = {
    id: 1,
    title: "The Importance of Self-Reflection",
    description: "Discover how taking time to reflect on your emotions can lead to personal growth and mental clarit. Self-reflection allows you to pause, observe, and understand your feelings without judgment. It helps you recognize emotional triggers and patterns that influence your behavior.By becoming more aware of your inner world, you can make more conscious and positive choices.Reflecting regularly strengthens your emotional intelligence and builds resilience.It also creates space for gratitude, acceptance, and self-compassion. Through this practice, you learn to navigate challenges with greater ease and confidence. Personal growth begins when you acknowledge both your strengths and areas for improvement.Mental clarity comes from organizing your thoughts and finding meaning in your experiences.Embrace self-reflection as a powerful tool for living a more intentional and fulfilling life..",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcixaZ08PUb9rfDKR1nPB0vLwCGykoxje2UmqW92y8Cz5Ic4o1zxRgEXoQKBxhi2USyMQ&usqp=CAU",
    link: "/blog/self-reflection",
  };

  const initialSmallBlogs = [
    {
      id: 2,
      title: "How to Manage Stress Effectively",
      description: "Learn techniques to handle stress in your everyday life and find ways to achieve a balanced state of mind.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWbTLY--DoJ7G8u8aRgtHnPDl9-jELOOrwEe3hzHDOSaxdWGn2wEesqpT7dmu6e45Wp7w&usqp=CAU",
      link: "/blog/manage-stress",
    },
    {
      id: 3,
      title: "The Power of Positive Thinking",
      description: "Explore the science behind positive thinking and how it can significantly improve your outlook on life.",
      img: "https://miro.medium.com/v2/resize:fit:1358/1*2yoo_9fXl3tZM8ixAB50ew.jpeg",
      link: "/blog/positive-thinking",
    },
    {
      id: 4,
      title: "Exploring the Mind-Body Connection",
      description: "Understanding how mental health and physical health are connected can help you achieve better overall well-being.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvTwwIHw24a1LeGCTB9lYAI_Pe_wfXUtUuq9CgLbJEF6CvN6LuyZNWIMXqUbfpD7xRn-w&usqp=CAU",
      link: "/blog/mind-body-connection",
    },
   
  ];

  // React State
  const [bigBlog, setBigBlog] = useState(initialBigBlog);
  const [smallBlogs, setSmallBlogs] = useState(initialSmallBlogs);

  // Swap function
  const handleSwap = (clickedBlog) => {
    setBigBlog(clickedBlog);
    const updatedSmallBlogs = smallBlogs.map((blog) =>
      blog.id === clickedBlog.id ? bigBlog : blog
    );
    setSmallBlogs(updatedSmallBlogs);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-44 bg-slate-500 text-white">
        {/* Left Side - Image with Framer Motion Animation */}
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

        {/* Right Side - Text */}
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
    >
      <img
        src={bigBlog.img}
        alt={bigBlog.title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-semibold mb-4">{bigBlog.title}</h3>
      <p className="text-lg mb-4">{bigBlog.description}</p>
      <Link
        to={bigBlog.link}
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
            src={blog.img}
            alt={blog.title}
            className="w-full h-48 object-cover rounded-lg mb-4"
          />
          <h3 className="text-base font-semibold mb-2">{blog.title}</h3>
          <Link
            to={blog.link}
            className="text-slate-900 hover:text-yellow-400 text-sm transition"
          >
            Read More
          </Link>
        </motion.div>
      ))}
    </div>
  </div>
</section>



   
<TrendingBlogTopics/>
<Orbit/>
<BloggerFeature/>
<BlogOfTheDay/>

    </div>
  );
}

export default Home;
