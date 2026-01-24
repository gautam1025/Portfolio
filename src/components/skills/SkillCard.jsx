import React from "react";
import BaseCard from "../ui/BaseCard";
import TiltCard from "../ui/TiltCard";

const SkillCard = ({ title, description, className = "" }) => {
  return (
    <TiltCard>
      <BaseCard
        className={`
          p-6 
          relative 
          group 
          overflow-hidden
          ${className}
        `}
      >
        {/* Accent Glow */}
        <div
          className="
            pointer-events-none
            absolute inset-0 
            rounded-xl 
            opacity-0 
            group-hover:opacity-100 
            transition-opacity duration-300 ease-out
            bg-linear-to-br
            from-blue-500/10 
            to-transparent
          "
        />

        {/* Content */}
        <div className="relative z-10">
          <h4 className="text-lg font-medium text-white">
            {title}
          </h4>

          {description && (
            <p className="mt-2 text-sm text-gray-500">
              {description}
            </p>
          )}
        </div>
      </BaseCard>
    </TiltCard>
  );
};

export default SkillCard;
