import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="
        border-t border-white/10
        bg-transparent
        py-8 mt-16
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-center">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Gautam Gupta. All rights reserved.
          </p>
        </div>

      </div>
    </motion.footer>
  );
};

export default Footer;
