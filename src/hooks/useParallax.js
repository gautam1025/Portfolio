import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function useParallax(strength = 20) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring (important for premium feel)
  const smoothX = useSpring(x, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(y, { stiffness: 50, damping: 20 });

  useEffect(() => {
    // Disable on mobile/tablet
    if (window.innerWidth < 768) return;

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      const moveX = (e.clientX - innerWidth / 2) / innerWidth;
      const moveY = (e.clientY - innerHeight / 2) / innerHeight;

      x.set(moveX * strength);
      y.set(moveY * strength);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [strength, x, y]);

  return { x: smoothX, y: smoothY };
}
