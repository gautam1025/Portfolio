import React from "react";

const BaseCard = ({ children, className = "" }) => {
  return (
    <div
      className={`
        relative
        group
        overflow-hidden

        rounded-xl
        border border-white/10
        bg-white/5 backdrop-blur-sm

        transition-all duration-300 ease-out
        hover:border-white/20
        hover:-translate-y-1
        hover:shadow-lg hover:shadow-blue-500/10

        will-change-transform
        ${className}
      `}
    >
      {/* ✨ Glass Reflection / Light Sweep */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          rounded-xl

          opacity-0
          group-hover:opacity-80

          transition-all duration-300 ease-out

          bg-gradient-to-tr
          from-white/10 via-white/5 to-transparent

          blur-sm
        "
      />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default BaseCard;
