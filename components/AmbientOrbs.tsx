"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AmbientOrbs() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 20]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -20]);

  return (
    <>
      <motion.div
        className="glow-orb pointer-events-none fixed z-0 top-[-10%] right-[-10%] rounded-full"
        style={{
          width: 600,
          height: 600,
          background: "radial-gradient(circle, rgba(180, 60, 20, 0.8) 0%, transparent 70%)",
          opacity: 0.35,
          filter: "blur(120px)",
          y: y1,
        }}
        animate={{ scale: [1.0, 1.06, 1.0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="glow-orb pointer-events-none fixed z-0 bottom-[-20%] left-[-10%] rounded-full"
        style={{
          width: 500,
          height: 500,
          background: "radial-gradient(circle, rgba(139, 0, 0, 0.8) 0%, transparent 70%)",
          opacity: 0.30,
          filter: "blur(100px)",
          y: y2,
        }}
        animate={{ scale: [1.0, 1.06, 1.0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </>
  );
}
