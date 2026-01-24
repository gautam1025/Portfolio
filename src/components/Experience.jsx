import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./experience/ExperienceCard";
import { experience } from "../data/experience";

/* Same animation language */
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const Experience = () => {
  return (
    <motion.section
      id="experience"
      className="py-24 bg-transparent"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      aria-label="Experience section"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.header
          variants={itemVariants}
          className="max-w-2xl mx-auto mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Experience
          </h2>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-500/40" />

          <p className="mt-6 text-gray-400">
            Practical experience where I applied my skills to real-world
            problems.
          </p>
        </motion.header>

        {/* Experience Cards */}
        <div className="flex flex-col gap-12 max-w-2xl mx-auto">
          {experience.map((item) => (
            <motion.div key={item.id} variants={itemVariants}>
              <ExperienceCard {...item} />
            </motion.div>
          ))}
        </div>

      </div>
    </motion.section>
  );
};

export default Experience;
