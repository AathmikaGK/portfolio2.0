"use client";
import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [taglineText, setTaglineText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);

  const fullTagline = useMemo(
    () =>
      "Software Engineering Student & AI Specialist | Building Scalable RAG & Cloud-Native Solutions that bridge complex data and user experience.",
    []
  );

  const animatedWords = ["Builder", "Engineer", "AI Enthusiast", "Problem Solver"];

  useEffect(() => {
    let i = 0;
    const intervalId = setInterval(() => {
      setTaglineText(fullTagline.substring(0, i + 1));
      i += 1;
      if (i >= fullTagline.length) clearInterval(intervalId);
    }, 18);

    return () => clearInterval(intervalId);
  }, [fullTagline]);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((current) => (current + 1) % animatedWords.length);
    }, 1800);
    return () => clearInterval(id);
  }, [animatedWords.length]);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 py-24" id="home">
      <motion.div
        className="max-w-4xl space-y-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span className="font-label text-primary uppercase tracking-[0.3em] text-sm font-bold block">
          Building real systems
        </motion.span>

        <h1 className="text-6xl md:text-8xl font-black text-tertiary leading-[0.9] tracking-tighter">
          <span className="italic text-primary">Aathmika</span> Gokula Krishna
        </h1>

        <div className="-mt-2 h-8 text-primary font-semibold text-lg md:text-2xl">
          <AnimatePresence mode="wait">
            <motion.span
              key={animatedWords[wordIndex]}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="inline-block"
            >
              {animatedWords[wordIndex]}
            </motion.span>
          </AnimatePresence>
        </div>

        <motion.p className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl min-h-[4rem]">
          {taglineText}
        </motion.p>

        <div className="flex flex-wrap gap-4 pt-4">
          <motion.a href="#projects" className="cursor-hover bg-primary text-on-primary px-8 py-4 rounded-xl font-bold" whileHover={{ scale: 1.05 }}>
            My work
          </motion.a>
          <motion.a
            href="#connect"
            className="cursor-hover bg-surface-variant/40 backdrop-blur-md border border-outline-variant/20 px-8 py-4 rounded-xl font-bold text-tertiary"
            whileHover={{ scale: 1.05 }}
          >
            Connect with me
          </motion.a>
        </div>
      </motion.div>
    </section>
  );
}
