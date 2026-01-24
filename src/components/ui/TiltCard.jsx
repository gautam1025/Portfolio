import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const MAX_ROTATION = 10; // degrees (keep subtle for premium feel)

const TiltCard = ({ children, className = "" }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // smooth premium motion
  const smoothX = useSpring(x, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 150, damping: 20 });

  // map to rotation
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [MAX_ROTATION, -MAX_ROTATION]);
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-MAX_ROTATION, MAX_ROTATION]);

  const handleMove = (e) => {
    if (window.innerWidth < 768) return; // disable on mobile

    const rect = ref.current.getBoundingClientRect();

    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    x.set(px);
    y.set(py);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      whileHover={{ scale: 1.03, y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default TiltCard;
