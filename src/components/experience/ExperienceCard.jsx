import React from "react";
import { motion } from "framer-motion";
import BaseCard from "../ui/BaseCard";
import TiltCard from "../ui/TiltCard";

const dotVariants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const ExperienceCard = ({
  role,
  organization,
  duration,
  points = [],
  mode = "Remote", // Remote | Onsite | Hybrid
}) => {
  return (
    <TiltCard>
      <div className="relative pl-10">

        {/* Timeline line */}
        <div className="absolute left-3 top-0 h-full w-px bg-white/10" />

        {/* Timeline dot */}
        <motion.div
          className="absolute left-0 top-6 h-6 w-6 rounded-full bg-blue-500/20 flex items-center justify-center"
          variants={dotVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <div className="h-2.5 w-2.5 rounded-full bg-blue-500" />
        </motion.div>

        <BaseCard className="p-8 w-full max-w-3xl">
          <div className="flex flex-col gap-6">

            {/* Header row */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">

              {/* Role + Org */}
              <div>
                <h4 className="text-xl font-semibold text-white">
                  {role}
                </h4>
                <p className="text-blue-400 font-medium mt-1">
                  {organization}
                </p>
              </div>

              {/* Meta info */}
              <div className="flex items-center gap-3 text-sm text-gray-400">
                <span className="flex items-center gap-2">
                  <img src="/icons/calendar.svg" alt="Calendar" className="w-4 h-4 brightness-0 invert opacity-70" />
                  {duration}
                </span>

                <span className="
                  px-3 py-1 rounded-full
                  text-xs font-medium
                  bg-blue-500/10 text-blue-300
                  border border-blue-500/20
                ">
                  {mode}
                </span>
              </div>

            </div>

            {/* Divider */}
            <div className="h-px w-full bg-white/10" />

            {/* Key contributions */}
            <div>
              <p className="text-xs font-semibold tracking-wider text-gray-400 mb-4">
                KEY CONTRIBUTIONS
              </p>

              <ul className="space-y-3 text-sm text-gray-400">
                {points.map((point, index) => (
                  <li key={index} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </BaseCard>
      </div>
    </TiltCard>
  );
};

export default ExperienceCard;
