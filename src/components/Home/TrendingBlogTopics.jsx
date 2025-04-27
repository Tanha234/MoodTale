import { motion } from 'framer-motion';
import { FaTrophy, FaAppleAlt, FaMedal, FaHome, FaGlobe, FaCandyCane, FaFutbol, FaShip, FaTv, FaCamera } from 'react-icons/fa';

const topics = [
  { label: "Achievements", icon: <FaTrophy />, color: "bg-white col-span-2 row-span-2" },
  { label: "Education", icon: <FaAppleAlt />, color: "bg-green-200" },
  { label: "Extracurricular", icon: <FaMedal />, color: "bg-yellow-200" },
  { label: "Home", icon: <FaHome />, color: "bg-cyan-200" },
  { label: "Media", icon: <FaCamera />, color: "bg-cyan-300" },
  { label: "Geography", icon: <FaGlobe />, color: "bg-red-200 col-span-2 row-span-2" },
  { label: "Entertainment", icon: <FaCandyCane />, color: "bg-pink-200" },
  { label: "Sports", icon: <FaFutbol />, color: "bg-purple-300" },
  { label: "Commerce", icon: <FaShip />, color: "bg-green-300" },
  { label: "TV & Movies", icon: <FaTv />, color: "bg-blue-300" },
];

const TrendingBlogTopics = () => {
  return (
    <section className="py-20 bg-slate-500 min-h-screen md:px-44 sm:px-0">
      <h2 className="text-4xl font-bold text-white text-center mb-10">🔥 Trending Blog Topics</h2>
      <div className="grid grid-cols-4 grid-rows-4 gap-2 max-w-6xl mx-auto">
        {topics.map((topic, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, type: "spring", stiffness: 100 }}
            whileHover={{ scale: 1.05, rotate: 1 }}
            className={`flex flex-col justify-center items-center text-center p-6 rounded-xl shadow-lg cursor-pointer transition-all duration-300 ${topic.color}`}
          >
            <div className="text-5xl mb-2 text-gray-700">{topic.icon}</div>
            <div className="text-lg font-semibold">{topic.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TrendingBlogTopics;
