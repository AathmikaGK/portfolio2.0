"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 24, stiffness: 1000, mass: 0.2 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const hoverRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const pendingTargetRef = useRef<EventTarget | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    document.body.classList.add("custom-cursor-enabled");
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

    const onMove = (e: PointerEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      pendingTargetRef.current = e.target;
      if (rafRef.current === null) rafRef.current = requestAnimationFrame(processFrame);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      document.body.classList.remove("custom-cursor-enabled");
      window.removeEventListener("pointermove", onMove);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [cursorX, cursorY, enabled]);

  if (!enabled) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 bg-primary rounded-full pointer-events-none z-[9999] will-change-transform mix-blend-difference"
      style={{ x: cursorXSpring, y: cursorYSpring, translateX: "-50%", translateY: "-50%" }}
      initial={{ width: 8, height: 8, opacity: 1 }}
      animate={{ width: isHovered ? 30 : 8, height: isHovered ? 30 : 8, opacity: isHovered ? 0.55 : 1 }}
      transition={{ type: "spring", stiffness: 480, damping: 24 }}
    />
  );
}
