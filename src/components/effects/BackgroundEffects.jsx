import React, { useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const STRENGTH = 30;

const BackgroundEffects = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 40, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 40, damping: 25 });

  const x1 = useTransform(smoothX, [-1, 1], [-STRENGTH, STRENGTH]);
  const y1 = useTransform(smoothY, [-1, 1], [-STRENGTH, STRENGTH]);

  const x2 = useTransform(smoothX, [-1, 1], [STRENGTH, -STRENGTH]);
  const y2 = useTransform(smoothY, [-1, 1], [STRENGTH, -STRENGTH]);

  const spotX = useMotionValue(0);
  const spotY = useMotionValue(0);

  const smoothSpotX = useSpring(spotX, { stiffness: 60, damping: 30 });
  const smoothSpotY = useSpring(spotY, { stiffness: 60, damping: 30 });

  const handleMove = useCallback((e) => {
    const nx = (e.clientX / window.innerWidth - 0.5) * 2;
    const ny = (e.clientY / window.innerHeight - 0.5) * 2;

    mouseX.set(nx);
    mouseY.set(ny);

    spotX.set(e.clientX - 350);
    spotY.set(e.clientY - 350);
  }, []);

  return (
    <div
      onMouseMove={handleMove}
      className="fixed inset-0 -z-10 pointer-events-none"
    >
      {/* Gradient base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f19] via-black to-black" />

      <ParticlesBackground />

      {/* Grid */}
      <div className="absolute inset-0 opacity-[0.12] bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Parallax blobs */}
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-blue-500/10 blur-3xl"
      />

      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute bottom-0 -right-40 w-[600px] h-[600px] rounded-full bg-blue-400/10 blur-3xl"
      />

      {/* Spotlight */}
      <motion.div
        style={{ x: smoothSpotX, y: smoothSpotY }}
        className="absolute w-[700px] h-[700px] rounded-full blur-[140px] opacity-[0.08]"
      >
        <div className="w-full h-full rounded-full bg-blue-500" />
      </motion.div>

      {/* Noise */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
        style={{ backgroundImage: "url('/noise.png')" }}
      />
    </div>
  );
};

export default BackgroundEffects;
