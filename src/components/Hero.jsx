import React from "react";
import { motion } from "framer-motion";

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

const buttonVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -3,
    boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)",
  },
  tap: { scale: 0.95 },
};

const name = "Gautam Gupta";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        className="text-center max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Top Badges */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-3 mb-8"
        >
          {/* Availability */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500/30 text-blue-400 text-sm bg-blue-500/5">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Available for Opportunities
          </div>

          {/* LeetCode */}
          <motion.a
            href="https://leetcode.com/u/gautam4300_/"
            target="_blank"
            rel="noopener noreferrer"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-white text-sm font-medium hover:bg-white/10"
          >
            <span className="text-yellow-400">●</span>
            100+ DSA solved
          </motion.a>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent"
          style={{
            fontFamily: "Space Grotesk",
            textShadow: "0 0 14px rgba(147, 197, 253, 0.25)",
          }}
        >
          {name}
        </motion.h1>

        {/* Role */}
        <motion.h2
          variants={itemVariants}
          className="mt-4 text-xl sm:text-2xl text-gray-300"
        >
          Web Developer
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-gray-400 text-base sm:text-lg leading-relaxed"
        >
          I build scalable, high-performance web applications with modern
          frontend technologies, focusing on clean code and great user
          experience.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="#projects"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600"
          >
            View Projects →
          </motion.a>

          <motion.a
            href="#contact"
            variants={buttonVariants}
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            className="px-8 py-3 rounded-lg border border-white/20 text-white hover:bg-white/5"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
