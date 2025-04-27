import React from 'react';
import { motion } from 'framer-motion';

function AboutUsPage() {
  return (
    <div className="min-h-screen  py-16 px-8 sm:px-16 md:px-32 flex flex-col items-center gap-10 bg-slate-500">

      {/* Heading */}
      <motion.h1 
        className="text-5xl font-bold text-white text-center"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        ✨ About Us
      </motion.h1>

      {/* Main Card */}
      <motion.div 
        className="bg-white rounded-3xl shadow-2xl p-10 max-w-6xl w-full flex flex-col gap-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >

        {/* Our Mission */}
        <section className="flex flex-col md:flex-row gap-8 items-center ">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxnGykHGBOh4h7azjbSkkijX2YDq6_DfRIPw&s" 
            alt="Mission"
            className="rounded-2xl shadow-md object-cover w-60 h-60"
          />
          <div>
            <h2 className="text-2xl font-bold text-pink-500 mb-3">🎯 Our Mission</h2>
            <p className="text-slate-600 leading-relaxed">
              We’re here to empower writers, bloggers, and creatives to share their ideas with the world. 
              Whether you're crafting your first blog post or your hundredth, we provide the tools, tips, and motivation you need to succeed.
            </p>
          </div>
        </section>

        {/* Who We Are */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV8Kib6TILS7xukYvd91qZU_RTol-NXp80uQ&s" 
            alt="Team"
            className="rounded-2xl shadow-md object-cover w-60 h-60"
          />
          <div>
            <h2 className="text-2xl font-bold text-blue-500 mb-3">👩‍💻 Who We Are</h2>
            <p className="text-slate-600 leading-relaxed">
              A team of passionate writers, tech enthusiasts, and designers who believe in the power of storytelling. 
              Our goal is to make blogging easier, more fun, and accessible for everyone.
            </p>
          </div>
        </section>

        {/* Fun Facts */}
        <section className="flex flex-col md:flex-row gap-8 items-center">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo_mSKuU0HEZvVIX_AvZP0LOqxdtLYOkKwag&s" 
            alt="Fun Facts"
            className="rounded-2xl shadow-md object-cover w-60 h-60"
          />
          <div>
            <h2 className="text-2xl font-bold text-green-500 mb-3">🌟 Fun Facts</h2>
            <ul className="list-disc list-inside text-slate-600 space-y-2">
              <li>We love coffee almost as much as we love content ☕</li>
              <li>Over 1,000 blog ideas brainstormed so far!</li>
              <li>Our mascot is a dancing cat 🐱</li>
            </ul>
          </div>
        </section>

      </motion.div>

    </div>
  );
}

export default AboutUsPage;
