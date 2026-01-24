import React from "react";
import { motion } from "framer-motion";
import AchievementCard from "./achievements/AchievementCard";
import { achievements } from "../data/achievements";

const Achievements = () => {
  return (
    <motion.section
      id="achievements"
      className="py-24 bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-2xl mx-auto mb-20 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Achievements & Certifications
          </h2>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-500/40" />

          <p className="mt-6 text-gray-400">
            Continuous learning and professional growth through courses and certifications.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((item, index) => (
            <AchievementCard key={index} {...item} />
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Achievements;
