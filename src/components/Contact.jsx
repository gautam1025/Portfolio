import React from "react";
import { motion } from "framer-motion";
import ContactForm from "./contact/ContactForm";
import ContactInfo from "./contact/ContactInfo";

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

const Contact = () => {
  return (
    <motion.section
      id="contact"
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
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Get in Touch
          </h2>

          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-blue-500/40" />

          <p className="mt-6 text-gray-400">
            Have a project in mind or just want to connect? I'm always open to discussing new opportunities.
          </p>
        </motion.header>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left: Contact Form */}
          <motion.div variants={itemVariants}>
            <ContactForm />
          </motion.div>

          {/* Right: Contact Info with Download Resume */}
          <motion.div variants={itemVariants}>
            <ContactInfo />
          </motion.div>

        </div>

      </div>
    </motion.section>
  );
};

export default Contact;
