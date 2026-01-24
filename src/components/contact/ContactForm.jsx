import React from "react";
import { motion } from "framer-motion";

const inputVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.02, y: -2 },
  tap: { scale: 0.98 },
};

const buttonVariants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.03, y: -3, boxShadow: "0 10px 25px rgba(59, 130, 246, 0.3)" },
  tap: { scale: 0.95 },
};

const ContactForm = () => {
  return (
    <form className="flex flex-col gap-6" aria-label="Contact form">

      <div>
        <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
          Name
        </label>
        <motion.input
          id="name"
          type="text"
          placeholder="Your name"
          required
          aria-required="true"
          className="
            w-full rounded-lg bg-white/5 border border-white/10
            px-4 py-3 text-white placeholder-gray-500
            focus:outline-2 focus:outline-offset-2 focus:outline-blue-400
            focus:border-blue-500/40 focus:bg-white/10
            transition-colors duration-200
          "
          variants={inputVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.2 }}
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
          Email
        </label>
        <motion.input
          id="email"
          type="email"
          placeholder="your.email@example.com"
          required
          aria-required="true"
          className="
            w-full rounded-lg bg-white/5 border border-white/10
            px-4 py-3 text-white placeholder-gray-500
            focus:outline-2 focus:outline-offset-2 focus:outline-blue-400
            focus:border-blue-500/40 focus:bg-white/10
            transition-colors duration-200
          "
          variants={inputVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.2 }}
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
          Message
        </label>
        <motion.textarea
          id="message"
          rows="5"
          placeholder="Tell me about your project..."
          required
          aria-required="true"
          className="
            w-full rounded-lg bg-white/5 border border-white/10
            px-4 py-3 text-white placeholder-gray-500
            resize-none focus:outline-2 focus:outline-offset-2 focus:outline-blue-400
            focus:border-blue-500/40 focus:bg-white/10
            transition-colors duration-200
          "
          variants={inputVariants}
          initial="rest"
          whileHover="hover"
          whileTap="tap"
          transition={{ duration: 0.2 }}
        />
      </div>

      <motion.button
        type="submit"
        aria-label="Send contact message"
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
          mt-2 inline-flex items-center justify-center
          rounded-lg bg-blue-500 px-6 py-3
          text-white font-medium
          hover:bg-blue-600 transition-colors
          active:bg-blue-700
          focus:outline-2 focus:outline-offset-2 focus:outline-blue-400
          will-change-transform
        "
      >
        <motion.span
          className="flex items-center gap-2"
          variants={{
            rest: { x: 0 },
            hover: { x: -2 },
          }}
        >
          <motion.img
            src="/icons/send.svg"
            alt=""
            className="w-5 h-5 brightness-0 invert"
            variants={{
              rest: { x: 0 },
              hover: { x: 4 },
            }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          Send Message
        </motion.span>

      </motion.button>

    </form>
  );
};

export default ContactForm;
