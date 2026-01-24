import React from "react";
import { motion } from "framer-motion";
import BaseCard from "../ui/BaseCard";
import TiltCard from "../ui/TiltCard";

const ProjectCard = ({
  title,
  description,
  tech = [],
  github,
  live,
  image,
  featured = false,
  variants,
}) => {
  return (
    <TiltCard>
      <motion.div variants={variants}>
        <BaseCard
        className={`
          relative overflow-hidden group
          ${featured ? "p-8" : "p-6"}
        `}
      >
        {/* Featured Badge */}
        {featured && (
          <span
            className="
              absolute top-4 right-4 z-20
              px-3 py-1 text-xs font-medium
              rounded-full
              bg-blue-500/10 text-blue-300
              border border-blue-500/20
              backdrop-blur-sm
            "
          >
            Featured
          </span>
        )}

        {/* Accent Glow */}
        <div
          className={`
            pointer-events-none absolute inset-0 rounded-xl
            opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 ease-out
            bg-gradient-to-br
            ${featured ? "from-blue-500/15" : "from-blue-500/10"}
            to-transparent
          `}
        />

        <div className="relative z-10 flex flex-col gap-6">

          {/* Image */}
          {image && (
            <div className="w-full bg-white/5 rounded-lg overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
              <img
                src={image}
                alt={`${title} preview`}
                className="
                  w-full h-full object-cover
                  transition-transform duration-500 ease-out
                  md:group-hover:scale-[1.03]
                "
                loading="lazy"
                decoding="async"
                width="1600"
                height="1000"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex flex-col gap-4">

            {/* Title */}
            <h4 className="text-xl font-semibold text-white">
              {title}
            </h4>

            {/* Description */}
            <p className="text-sm text-gray-400 leading-relaxed">
              {description}
            </p>

            {/* Tech Stack */}
            {tech.length > 0 && (
              <ul className="flex flex-wrap gap-2">
                {tech.map((item) => (
                  <li
                    key={item}
                    className="
                      px-3 py-1 text-xs rounded-full
                      border border-white/10
                      text-gray-300
                    "
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {/* Actions */}
            <div className="flex items-center gap-3 pt-2 md:pt-4">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} source code on GitHub (opens in new window)`}
                  className="
                    inline-flex items-center justify-center
                    min-h-[44px] px-4 py-2
                    text-sm font-medium text-blue-400
                    rounded-md border border-blue-500/30
                    bg-blue-500/5
                    hover:bg-blue-500/10 hover:border-blue-500/50
                    focus:outline-2 focus:outline-offset-2 focus:outline-blue-400
                    transition-colors duration-200
                  "
                >
                  Github
                </a>
              )}

              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${title} live demo (opens in new window)`}
                  className="
                    inline-flex items-center justify-center
                    min-h-[44px] px-4 py-2
                    text-sm font-medium text-gray-300
                    rounded-md border border-white/10
                    bg-white/5
                    hover:bg-white/10 hover:border-white/20
                    focus:outline-2 focus:outline-offset-2 focus:outline-blue-400
                    transition-colors duration-200
                  "
                >
                  Live Demo
                </a>
              )}
            </div>

          </div>
        </div>
      </BaseCard>
      </motion.div>
    </TiltCard>

  );
};

export default ProjectCard;
