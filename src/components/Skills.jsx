import React from "react";
import SkillCard from "./skills/SkillCard";
import { motion } from "framer-motion";

const primarySkills = [
  {
    name: "React",
    description: "Building scalable, component-based user interfaces",
  },
  {
    name: "JavaScript",
    description: "Writing clean, modern ES6+ logic for web applications",
  },
  {
    name: "HTML & CSS",
    description: "Creating responsive and accessible layouts",
  },
  {
    name: "Tailwind CSS",
    description: "Rapid UI development with utility-first styling",
  },
];

const secondarySkills = [
  "Node.js",
  "Express.js",
  "REST APIs",
  "Git & GitHub",
];

const tools = ["VS Code", "Figma", "Postman", "Vercel"];

/* Animation Variants (same language as Hero) */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
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

const Skills = () => {
  return (
    <motion.section
      id="skills"
      className="py-24 bg-transparent"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.header
          variants={itemVariants}
          className="max-w-2xl mx-auto mb-20 text-center"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold text-white"
            style={{ fontFamily: "Space Grotesk" }}
            variants={itemVariants}
          >
            Skills
          </motion.h2>

          {/* Ascent Line */}
          <motion.div
            className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-500/40"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
            style={{ originX: 0.5 }}
          />

          <p className="mt-6 text-gray-400">
            Technologies I use to build modern, scalable web applications.
          </p>
        </motion.header>

        {/* Core Skills */}
        <div className="mb-24">
          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold text-white mb-8"
          >
            Core Skills
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {primarySkills.map((skill) => (
              <SkillCard
                key={skill.name}
                title={skill.name}
                description={skill.description}
              />
            ))}
          </div>
        </div>

        {/* Supporting Skills */}
        <div className="mb-24">
          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold text-white mb-8"
          >
            Supporting Skills
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {secondarySkills.map((skill) => (
              <SkillCard
                key={skill}
                title={skill}
                className="p-4 text-center bg-white/2 hover:translate-y-0"
              />
            ))}
          </div>
        </div>

        {/* Problem Solving */}


        {/* Tools */}
        <div>
          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold text-white mb-8"
          >
            Tools & Platforms
          </motion.h3>

          <div className="flex flex-wrap gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-4 py-2 rounded-full border border-white/10 text-sm text-gray-300 hover:border-white/30 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.section>
  );
};

export default Skills;
