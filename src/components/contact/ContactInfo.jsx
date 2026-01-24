import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const hoverLift = {
  whileHover: {
    y: -4,
    boxShadow: "0 12px 30px rgba(59,130,246,0.25)",
  },
  transition: { type: "spring", stiffness: 280, damping: 20 },
};

const buttonVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.03,
    y: -3,
    boxShadow: "0 18px 40px rgba(59,130,246,0.35)",
  },
  tap: { scale: 0.95 },
};

const ContactInfo = () => {
  return (
    <motion.div
      className="flex flex-col gap-10 w-full"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >

      <motion.a
        variants={fadeUp}
        href="mailto:gautamgupta1025@gmail.com"
        whileHover={{
          y: -4,
          boxShadow: "0 12px 30px rgba(59,130,246,0.25)",
        }}
        transition={{ type: "spring", stiffness: 280, damping: 20 }}
        className=" group flex items-center gap-4 rounded-2xl p-5 bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors cursor-pointer "
      >

        <div
          className=" w-12 h-12 flex items-center justify-center rounded-lg bg-blue-500/15 group-hover:bg-blue-500/25 transition "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l9 6 9-6M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z"
            />
          </svg>
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-xs uppercase tracking-widest text-gray-400">
            Email
          </p>
          <p className="text-white font-medium mt-1 group-hover:text-blue-300 transition-colors">
            gautamgupta1025@gmail.com
          </p>
        </div>
      </motion.a>

      <motion.div variants={fadeUp}>
        <p className="text-sm text-gray-400 mb-4 uppercase tracking-widest">
          Social Links
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* GitHub */}
          <motion.a
            href="https://github.com/gautam1025"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 0, scale: 1 }}
            whileHover={{
              y: -6,
              scale: 1.03,
              boxShadow: "0 18px 40px rgba(59,130,246,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 18,
            }}
            className="
              group
              flex flex-col items-center justify-center text-center
              gap-3 rounded-2xl p-8
              bg-white/5 border border-white/10
              hover:border-blue-500/40 hover:bg-white/10
            "
          >
            <motion.img
              src="/icons/github.svg"
              alt="GitHub"
              className="w-7 h-7 brightness-0 invert"
              whileHover={{ scale: 1.15, rotate: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            />

            <span className="text-white font-medium">
              GitHub
            </span>
          </motion.a>


          {/* LinkedIn */}
          <motion.a
            href="https://www.linkedin.com/in/gautam-gupta-16ab37264/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ y: 0, scale: 1 }}
            whileHover={{
              y: -6,
              scale: 1.03,
              boxShadow: "0 18px 40px rgba(59,130,246,0.25)",
            }}
            whileTap={{ scale: 0.97 }}
            transition={{
              type: "spring",
              stiffness: 420,
              damping: 18,
            }}
            className="
              group
              flex flex-col items-center justify-center text-center
              gap-3 rounded-2xl p-8
              bg-white/5 border border-white/10
              hover:border-blue-500/40 hover:bg-white/10
            "
          >
            <motion.img
              src="/icons/linkedin.svg"
              alt="LinkedIn"
              className="w-7 h-7 brightness-0 invert"
              whileHover={{ scale: 1.15, rotate: 4 }}
              transition={{ type: "spring", stiffness: 400 }}
            />

            <span className="text-white font-medium">
              LinkedIn
            </span>
          </motion.a>

        </div>
      </motion.div>

      <div className="h-px bg-white/10" />

      <motion.a
        href="/resume.pdf"
        download
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
        className="
          group
          w-full inline-flex items-center justify-center gap-2
          rounded-2xl px-6 py-4
          bg-blue-500 hover:bg-blue-600
          text-white font-semibold
          transition-colors
          will-change-transform
        "
      >

        {/* Content wrapper */}
        <motion.span
          className="flex items-center gap-2"
          variants={{
            rest: { x: 0 },
            hover: { x: -2 }, // ← same text shift as GitHub button
          }}
        >

          {/* Download icon */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            variants={{
              rest: { x: 0 },
              hover: { x: 4 }, // ← same directional slide like arrow
            }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v12m0 0l-4-4m4 4l4-4M4 17h16"
            />
          </motion.svg>

          <span>Download Resume</span>

        </motion.span>
      </motion.a>


    </motion.div>
  );
};

export default ContactInfo;
