"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 30, stiffness: 700, mass: 0.3 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const hoverRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const pendingTargetRef = useRef<EventTarget | null>(null);

  useEffect(() => {
    const processFrame = () => {
      rafRef.current = null;
      const target = pendingTargetRef.current as HTMLElement | null;
      if (!target) return;
      const next = !!target.closest?.(".cursor-hover");
      if (next !== hoverRef.current) {
        hoverRef.current = next;
        setIsHovered(next);
      }
    };

    const onMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      pendingTargetRef.current = e.target;
      if (rafRef.current === null) {
        rafRef.current = requestAnimationFrame(processFrame);
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 bg-primary rounded-full pointer-events-none z-[9999] will-change-transform"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        translateX: "-50%",
        translateY: "-50%",
      }}
      initial={{ width: 10, height: 10, opacity: 1 }}
      animate={{
        width: isHovered ? 40 : 10,
        height: isHovered ? 40 : 10,
        opacity: isHovered ? 0.4 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    />
  );
}
