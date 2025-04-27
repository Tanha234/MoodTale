import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const moods = [
  { name: 'Happy', emoji: '😄', description: 'Feeling joyful and bright!' },
  { name: 'Sad', emoji: '😢', description: 'A little blue today.' },
  { name: 'Calm', emoji: '🧘‍♂️', description: 'Peaceful and chill vibes.' },
  { name: 'Romantic', emoji: '😍', description: 'Heart full of love.' },
  { name: 'Angry', emoji: '😡', description: 'Need to cool down.' },
  { name: 'Confident', emoji: '😎', description: 'Ready to conquer the world!' },
  { name: 'Silly', emoji: '🤪', description: 'In a goofy mood!' },
  { name: 'Overwhelmed', emoji: '🤯', description: 'Too much happening at once.' },
];

function MoodSelection() {
  return (
    <div className="min-h-screen bg-slate-500 py-16 px-6 sm:px-10 md:px-20 lg:px-44">
      <motion.h1 
        className="text-4xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Select Your Mood
      </motion.h1>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {moods.map((mood, index) => (
          <motion.div
            key={mood.name}
            className="p-6 bg-white rounded-2xl shadow-xl hover:bg-yellow-100 cursor-pointer transition"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Link to={`/mood/${mood.name.toLowerCase()}`} className="flex flex-col items-center text-center">
              <div className="text-5xl mb-4">{mood.emoji}</div>
              <h2 className="text-xl font-semibold mb-2">{mood.name}</h2>
              <p className="text-gray-600 text-sm">{mood.description}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default MoodSelection;
