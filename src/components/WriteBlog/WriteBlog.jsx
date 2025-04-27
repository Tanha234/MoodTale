import React, { useState } from 'react';
import { motion } from 'framer-motion';

const quickTips = [
  'Pick a Clear Topic',
  'Know Your Audience',
  'Create an Outline',
  'Write a Strong Headline',
  'Hook Readers Early',
  'Use Simple Language',
  'Add Images or Examples',
  'Format for Easy Reading',
  'Edit Ruthlessly',
  'End with a Call-to-Action',
];

const trendingTopics = [
  'AI in Blogging',
  'Sustainable Living',
  'Personal Finance Tips',
  'Mental Health Awareness',
  'Travel on a Budget',
];

const motivationalQuotes = [
  "Write what should not be forgotten. — Isabel Allende",
  "Start writing, no matter what. — Louis L’Amour",
  "The first draft is just you telling yourself the story. — Terry Pratchett",
];

function BlogIdeasPage() {
  const [titleKeyword, setTitleKeyword] = useState('');
  const [generatedTitle, setGeneratedTitle] = useState('');

  const handleTitleGenerate = (e) => {
    e.preventDefault();
    const ideas = [
      `The Ultimate Guide to ${titleKeyword}`,
      `How to Master ${titleKeyword} in 30 Days`,
      `Top 10 Secrets About ${titleKeyword}`,
      `${titleKeyword}: What You Need to Know`,
      `Mistakes to Avoid in ${titleKeyword}`,
    ];
    setGeneratedTitle(ideas[Math.floor(Math.random() * ideas.length)]);
  };

  return (
    <div className="min-h-screen bg-slate-500 py-10 px-6 sm:px-10 md:px-20 lg:px-28 flex flex-col md:flex-row gap-10">

      {/* Left Side */}
      <div className="w-full md:w-1/2 flex flex-col gap-10">

        {/* Sticky Notes (Quick Tips) */}
        <div className="relative w-[400px] h-[400px] self-center">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-400 text-white text-sm font-bold rounded-full shadow-2xl flex items-center justify-center w-40 h-40">
            Blog Writing Tips
          </div>
          {quickTips.map((tip, index) => {
            const angle = (360 / quickTips.length) * index;
            const radius = 150;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);

            const colors = [
              'bg-pink-400', 'bg-yellow-400', 'bg-green-400',
              'bg-blue-400', 'bg-purple-400', 'bg-red-300',
              'bg-teal-400', 'bg-indigo-400', 'bg-orange-400', 'bg-rose-400'
            ];

            return (
              <motion.div
                key={index}
                className={`${colors[index % colors.length]} p-3 rounded-xl shadow-lg text-center font-bold text-white text-xs absolute`}
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
                  {tip}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Progress Tracker */}
        <div className="bg-green-300 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-green-800 mb-4">🛤️ Your Blog Writing Progress</h2>
          <ol className="list-decimal list-inside space-y-2 text-green-900 font-semibold">
            <li>Choose Your Topic</li>
            <li>Research & Outline</li>
            <li>Write the First Draft</li>
            <li>Edit & Format</li>
            <li>Publish & Share</li>
          </ol>
        </div>

        {/* 🔥 Tiny Inspiration Card */}
        <motion.div 
          className="bg-gradient-to-r from-yellow-200 to-pink-200 p-6 rounded-3xl shadow-xl mt-2"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-slate-800 mb-4">💬 Writing Inspiration</h2>
          <p className="text-slate-600 italic text-lg">
            "You can always edit a bad page. You can’t edit a blank page."
          </p>
          <p className="mt-4 text-right text-slate-500 text-sm">– Jodi Picoult</p>
        </motion.div>
        

      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex flex-col gap-10">

        {/* Title Generator */}
        <div className="bg-pink-200 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-pink-800 mb-4">⚡ Blog Title Generator</h2>
          <form onSubmit={handleTitleGenerate} className="flex flex-col gap-4">
            <input 
              type="text"
              value={titleKeyword}
              onChange={(e) => setTitleKeyword(e.target.value)}
              className="border-2 border-pink-500 p-3 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              placeholder="Enter a keyword (e.g., Travel, Fitness)"
              required
            />
            <button 
              type="submit"
              className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-lg transition-all"
            >
              Generate Title
            </button>
          </form>
          {generatedTitle && (
            <div className="mt-4 p-4 bg-green-200 text-green-900 rounded-lg font-semibold shadow-inner">
              Suggested Title: "{generatedTitle}"
            </div>
          )}
        </div>

        {/* Trending Topics */}
        <div className="bg-blue-300 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-blue-800 mb-4">🔥 Trending Topics</h2>
          <ul className="space-y-3 text-blue-900 font-semibold">
            {trendingTopics.map((topic, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-blue-600 text-lg">•</span> {topic}
              </li>
            ))}
          </ul>
        </div>

        {/* Motivational Quotes */}
        <div className="bg-purple-300 p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-bold text-purple-800 mb-4">💬 Motivation for You</h2>
          <div className="space-y-4 text-purple-900 italic font-semibold">
            {motivationalQuotes.map((quote, index) => (
              <blockquote key={index}>
                "{quote}"
              </blockquote>
            ))}
          </div>
        </div>

        {/* Bottom Section: Two Columns */}
        <div className="flex flex-col md:flex-row gap-3">

          {/* ✏️ Mini Idea Board */}
          <div className="bg-teal-300 p-6 rounded-2xl shadow-md w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-teal-800 mb-4">✏️ Mini Idea Board</h2>
            <ul className="space-y-3 text-teal-900 font-semibold">
              {[
                "How AI is Changing Everyday Life",
                "Best Morning Routines for Success",
                "Top 10 Budget Travel Destinations",
                "Simple Recipes for Busy People",
                "Mental Health Tips for Creatives",
              ].map((idea, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-teal-700 text-lg">•</span> {idea}
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Final Blog Checklist */}
          <div className="bg-orange-300 p-6 rounded-2xl shadow-md w-full md:w-1/2">
            <h2 className="text-2xl font-bold text-orange-800 mb-4">✅ Final Blog Checklist</h2>
            <ul className="space-y-3 text-orange-900 font-semibold">
              {[
                "Clear Topic Selected",
                "Audience Understood",
                "Strong Headline Written",
                "Simple Language Used",
                "Images/Examples Added",
                "Proofread and Edited",
                "Clear Call-to-Action Given",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-green-600 text-xl">✔️</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>

    </div>
  );
}

export default BlogIdeasPage;
