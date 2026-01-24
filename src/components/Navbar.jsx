import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", id: "home" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Experience", href: "#experience", id: "experience" },
  { name: "Achievements", href: "#achievements", id: "achievements" },
  { name: "Contact", href: "#contact", id: "contact" },
];

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.25, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.2, ease: "easeIn" },
  },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 120;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);
        if (!section) return;

        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollY >= top && scrollY < top + height) {
          setActiveSection(link.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between bg-black/70 backdrop-blur-md" role="navigation" aria-label="Main navigation">
        
        {/* Logo */}
        <a href="#home" className="text-white font-semibold text-xl focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 rounded-md px-2 py-1" aria-label="Gautam Gupta - Portfolio home">
          GG.
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 relative">
            {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                <li key={link.name} className="relative">
                    <a
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`
                      text-sm transition py-2 px-1 rounded-md
                      focus:outline-2 focus:outline-offset-2 focus:outline-blue-400
                      ${isActive ? "text-white" : "text-gray-300 hover:text-white"}
                    `}
                    >
                    {link.name}
                    </a>

                    {isActive && (
                    <motion.span
                        layoutId="active-dot"
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        aria-hidden="true"
                    />
                    )}
                </li>
                );
            })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden relative w-8 h-8 flex items-center justify-center focus:outline-2 focus:outline-offset-2 focus:outline-blue-400 rounded-md"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          {/* Top line */}
          <span
            className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45" : "-translate-y-2"
            }`}
          />

          {/* Middle line */}
          <span
            className={`absolute h-0.5 w-6 bg-white transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Bottom line */}
          <span
            className={`absolute h-0.5 w-6 bg-white transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45" : "translate-y-2"
            }`}
          />
        </button>

      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-gradient-to-b from-black/25 to-black/5 backdrop-blur-xl border-t border-white/10"
            id="mobile-menu"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col items-center gap-6 py-10">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;

                return (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      aria-current={isActive ? "page" : undefined}
                      className={`
                        text-lg transition py-2 px-3 rounded-md
                        focus:outline-2 focus:outline-offset-2 focus:outline-blue-400
                        block
                        ${isActive
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                        }
                      `}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
