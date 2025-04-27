import React, { useEffect, useState } from "react";
import { FaPenNib, FaUsers, FaLayerGroup, FaProjectDiagram, FaHandshake, FaBrain, FaChartLine } from "react-icons/fa";
import { motion } from "framer-motion";

const Orbit = () => {
  return (
      
    <div className="bg-slate-500 h-[700px] text-white relative overflow-hidden py-10">
        
      
      <h2 className="text-3xl font-bold mb-10 text-center tracking-tight">
        Our Achievements ✨
      </h2>

      {/* Circle Orbit */}
      <div className="relative w-[400px] h-[400px] mx-auto my-24">
        <OrbitingStats
          stats={[
            { number: 50, label: "Articles", icon: <FaPenNib />, color: "from-blue-400 to-blue-600", description: "Articles published" },
            { number: 40, label: "Bloggers", icon: <FaUsers />, color: "from-purple-400 to-purple-600", description: "Creative minds" },
            { number: 70, label: "Topics", icon: <FaLayerGroup />, color: "from-green-400 to-green-600", description: "Hot topics" },
            { number: 25, label: "Projects", icon: <FaProjectDiagram />, color: "from-yellow-400 to-yellow-600", description: "Successful projects" },
            { number: 90, label: "Clients", icon: <FaHandshake />, color: "from-pink-400 to-pink-600", description: "Happy collaborations" },
            { number: 1200, label: "Followers", icon: <FaUsers />, color: "from-cyan-400 to-cyan-600", description: "Growing followers" },
            { number: 30, label: "Awards", icon: <FaBrain />, color: "from-orange-400 to-orange-600", description: "Awards won" },
          ]}
        />
      </div>
    </div>
  );
};

const OrbitingStats = ({ stats }) => {
  const radius = 150;
  const center = 200;

  return (
    <motion.div
      className="relative w-full h-full flex items-center justify-center"
      animate={{ rotate: 360 }}
      transition={{
        repeat: Infinity,
        ease: "linear",
        duration: 60,
      }}
    >
      {/* Glowing center */}
      <div className="absolute w-16 h-16 bg-gradient-to-br from-indigo-400 to-indigo-700 rounded-full blur-2xl opacity-40"></div>

      {stats.map((stat, index) => {
        const angle = (index / stats.length) * 360;
        const x = radius * Math.cos((angle * Math.PI) / 180);
        const y = radius * Math.sin((angle * Math.PI) / 180);

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2, type: "spring", stiffness: 120 }}
            className="absolute flex flex-col items-center text-center group"
            style={{
              left: `${center + x}px`,
              top: `${center + y}px`,
              transform: "translate(-50%, -50%)",
            }}
          >
            <div
              className={`w-20 h-20 flex flex-col items-center justify-center bg-gradient-to-br ${stat.color} rounded-full shadow-2xl group-hover:scale-110 transition-transform duration-500`}
            >
              <div className="text-2xl">{stat.icon}</div>
              <AnimatedNumber value={stat.number} />
            </div>
            <div className="mt-2 font-semibold text-xs">{stat.label}</div>

            {/* Tooltip */}
            <div className="absolute bottom-full mb-2 hidden group-hover:block text-xs bg-black/70 px-2 py-1 rounded-md whitespace-nowrap">
              {stat.description}
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

const AnimatedNumber = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 1000;
    const stepTime = Math.max(Math.floor(duration / end), 15);

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="text-sm font-bold mt-1">{count}+</div>
    
    
  );
};

export default Orbit;
