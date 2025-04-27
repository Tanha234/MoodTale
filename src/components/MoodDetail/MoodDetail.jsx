import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const moodDetails = {
  happy: {
    emoji: '😄',
    title: 'Feeling Happy!',
    description: 'You are radiating positive vibes! Enjoy this beautiful feeling.',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-TVWV-NqXIHo4LIEhKYpxSxRdSwWHhwH8Nw&s',
    tag: 'happy',
  },
  sad: {
    emoji: '😢',
    title: 'Feeling Sad',
    description: 'It’s okay to have sad days. Take time for yourself.',
    image: 'https://images.unsplash.com/photo-1525072126621-4f1a746f6d93?auto=format&fit=crop&w=1200&q=80',
    tag: 'sad',
  },
  calm: {
    emoji: '🧘‍♂️',
    title: 'Feeling Calm',
    description: 'You’re in a peaceful state. Embrace the tranquility.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    tag: 'calm',
  },
  romantic: {
    emoji: '😍',
    title: 'Feeling Romantic',
    description: 'Love is in the air! Enjoy the warm feelings.',
    image: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=1200&q=80',
    tag: 'love',
  },

};

function MoodDetail() {
  const { moodName } = useParams();
  const mood = moodDetails[moodName.toLowerCase()];
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      if (!mood) return;
      try {
        const response = await fetch(`https://dev.to/api/articles?tag=${mood.tag}&per_page=5`);
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching mood blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [mood]);

  if (!mood) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-2xl font-semibold">Mood not found 😔</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-500 py-16 px-6 sm:px-10 md:px-20 lg:px-44">
      <motion.div 
        className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center text-center mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="text-6xl mb-6">{mood.emoji}</div>
        <h1 className="text-4xl font-bold mb-4">{mood.title}</h1>
        <p className="text-gray-600 text-lg mb-8">{mood.description}</p>
        <img 
          src={mood.image}
          alt={mood.title}
          className="w-full max-w-2xl rounded-lg mb-6"
        />
        <Link 
          to="/mood" 
          className="mt-4 px-6 py-2 bg-slate-800 text-white rounded-full hover:bg-yellow-400 transition"
        >
          Choose Another Mood
        </Link>
      </motion.div>

      <div className="mt-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Blogs Related to "{moodName}" Mood</h2>

        {loading ? (
          <div className="text-center text-xl">Loading blogs...</div>
        ) : blogs.length === 0 ? (
          <div className="text-center text-xl text-gray-500">No blogs found for this mood 😔</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogs.map((blog) => (
              <motion.div
                key={blog.id}
                className="p-6 rounded-lg bg-white shadow-md hover:shadow-xl transition cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <img 
                  src={blog.cover_image || 'https://via.placeholder.com/400x200'} 
                  alt={blog.title} 
                  className="rounded-lg mb-4 w-full h-48 object-cover"
                />
                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 mb-4">{blog.description ? blog.description.slice(0, 100) + '...' : 'No description available.'}</p>
                <a 
                  href={blog.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-800 hover:text-yellow-400 transition"
                >
                  Read Blog →
                </a>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MoodDetail;
