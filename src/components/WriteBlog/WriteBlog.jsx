import React, { useState } from 'react';
import { motion } from 'framer-motion';

const notes = [
  { text: 'Pick a Clear Topic', color: 'bg-yellow-200' },
  { text: 'Know Your Audience', color: 'bg-pink-200' },
  { text: 'Create an Outline', color: 'bg-green-200' },
  { text: 'Write a Strong Headline', color: 'bg-blue-200' },
  { text: 'Hook Readers Early', color: 'bg-purple-200' },
  { text: 'Use Simple Language', color: 'bg-orange-200' },
  { text: 'Add Images or Examples', color: 'bg-red-200' },
  { text: 'Format for Easy Reading', color: 'bg-lime-200' },
  { text: 'Edit Ruthlessly', color: 'bg-cyan-200' },
  { text: 'End with a Call-to-Action', color: 'bg-amber-200' },
];

function WriteBlog() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    image: '',
    tags: '',
    content: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Blog Posted:', formData);
    alert('Blog posted successfully! 🎉');
    setFormData({ title: '', description: '', image: '', tags: '', content: '' });
  };

  return (
    <div className="min-h-screen bg-slate-500 py-10 px-6 sm:px-10 md:px-20 lg:px-28 flex flex-col md:flex-row gap-8">
      
      {/* Left Side Sticky Notes in Circle */}
      <div className="w-full md:w-1/2 flex justify-center relative mt-16">
        <div className="relative w-[400px] h-[400px]">
          
          {/* Center Text */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white text-slate-800 text-sm font-bold rounded-full shadow-lg flex items-center justify-center w-40 h-40">
            How to Write a Blog
          </div>

          {/* Sticky Notes around */}
          {notes.map((note, index) => {
            const angle = (360 / notes.length) * index;
            const radius = 150;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            return (
              <motion.div
                key={index}
                className={`${note.color} p-3 rounded-xl shadow-md text-center font-semibold text-gray-700 text-xs absolute`}
                style={{
                  width: '80px',
                  height: '80px',
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) translate(${x}px, ${y}px) rotate(${angle}deg)`,
                  transformOrigin: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{ transform: `rotate(-${angle}deg)`, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {note.text}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Right Side Form */}
      <form onSubmit={handleSubmit} className="w-full bg-purple-200 md:w-1/2 bg-white p-8 rounded-2xl shadow-xl space-y-6">
        <h1 className="text-3xl font-bold text-slate-800 mb-6 text-center">Post Your Blog</h1>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Title</label>
          <input 
            type="text" 
            name="title" 
            value={formData.title}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter blog title"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Short Description</label>
          <textarea 
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Write a short description"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Image URL</label>
          <input 
            type="url" 
            name="image" 
            value={formData.image}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Enter cover image URL"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Tags (comma separated)</label>
          <input 
            type="text" 
            name="tags" 
            value={formData.tags}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="e.g. motivation, writing, coding"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-semibold mb-2">Blog Content</label>
          <textarea 
            name="content"
            value={formData.content}
            onChange={handleChange}
            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-400"
            placeholder="Write your blog here..."
            rows="8"
            required
          ></textarea>
        </div>

        <button 
          type="submit"
          className="bg-blue-400 hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full w-full transition-all"
        >
          Post Blog
        </button>
      </form>

    </div>
  );
}

export default WriteBlog;
