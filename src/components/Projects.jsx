import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./projects/ProjectCard";
import { projects } from "../data/projects";

/* Same motion language as Hero & Skills */
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

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Projects = () => {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <motion.section
      id="projects"
      className="py-24 bg-transparent"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      aria-label="Projects section"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <motion.header
          variants={itemVariants}
          className="max-w-2xl mx-auto mb-20 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Projects
          </h2>

          {/* Accent line */}
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-500/40" />

          <p className="mt-6 text-gray-400">
            A selection of projects where I focused on solving real-world
            problems using modern web technologies.
          </p>
        </motion.header>

        {/* Featured Projects */}
        <div className="mb-24">
          <motion.h3
            variants={itemVariants}
            className="text-xl font-semibold text-white mb-10"
          >
            Featured Projects
          </motion.h3>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {featuredProjects.map((project) => (
              <motion.div key={project.id} variants={cardVariants}>
                <ProjectCard
                  {...project}
                  featured
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              variants={itemVariants}
              className="text-xl font-semibold text-white mb-10"
            >
              Other Projects
            </motion.h3>

            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
            >
              {otherProjects.map((project) => (
                <motion.div key={project.id} variants={cardVariants}>
                  <ProjectCard
                    {...project}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}

        {/* CTA Section */}
        <motion.div
          variants={itemVariants}
          className="mt-24 flex justify-center"
        >
          <motion.a
            href="https://github.com/gautam1025"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View more projects on GitHub (opens in new window)"
            initial="rest"
            whileHover="hover"
            whileTap="tap"
            variants={{
              rest: {
                scale: 1,
                y: 0,
                boxShadow: "0 4px 12px rgba(59,130,246,0.15)",
              },
              hover: {
                scale: 1.05,
                y: -4,
                boxShadow: "0 20px 40px rgba(59,130,246,0.35)",
                transition: {
                  type: "spring",
                  stiffness: 400,
                  damping: 12,
                },
              },
              tap: { scale: 0.95 },
            }}
            className=" group inline-flex items-center justify-center min-h-[48px] px-6 sm:px-8 py-3 rounded-lg bg-blue-500/10 border border-blue-500/30 text-blue-400 font-medium text-sm sm:text-base hover:bg-blue-500/20 hover:border-blue-500/50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-400 transition-colors duration-300 will-change-transform "
          >
            {/* Text */}
            <motion.span
              variants={{
                rest: { x: 0 },
                hover: { x: -2 },
              }}
            >
              View more projects on GitHub
            </motion.span>

            {/* Arrow */}
            <motion.span
              className="ml-2 inline-block"
              aria-hidden="true"
              variants={{
                rest: { x: 0 },
                hover: { x: 6 },
              }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              →
            </motion.span>
          </motion.a>
        </motion.div>

      </div>
    </motion.section>
  );
};

export default Projects;
