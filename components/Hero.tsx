"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [taglineText, setTaglineText] = useState("");
  const fullTagline = "Software Engineering Student & AI Specialist | Building Scalable RAG & Cloud-Native Solutions that Bridge the Gap Between Complex Data and User Experience. ";
  const nameWords = ["Aathmika ", "Gokula Krishna "];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      let i = 0;
      const intervalId = setInterval(() => {
        setTaglineText(fullTagline.substring(0, i + 1));
        i++;
        if (i >= fullTagline.length) clearInterval(intervalId);
      }, 30);
      return () => clearInterval(intervalId);
    }, 500); 
    return () => clearTimeout(timeoutId);
  }, [fullTagline]);

  return (
    <section className="min-h-[1024px] flex flex-col justify-center px-6 md:px-20 py-24" data-stitch-vh="min-h-[1024px]===min-h-screen" id="home">
      <motion.div 
        className="max-w-4xl space-y-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.span 
          className="font-label text-primary uppercase tracking-[0.3em] text-sm font-bold block"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Building real systems
        </motion.span>
        
        <h1 className="text-6xl md:text-8xl font-black text-tertiary leading-[0.9] tracking-tighter flex flex-wrap">
          {nameWords.map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              style={i === 0 ? { color: "rgb(245, 150, 99)", fontStyle: "italic", fontSize: "6rem", letterSpacing: "-0.05em" } : {}}
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p 
          className="text-xl md:text-2xl text-on-surface-variant font-light leading-relaxed max-w-2xl min-h-[4rem]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          {taglineText}
        </motion.p>

        <div className="flex flex-wrap gap-4 pt-4">
          <motion.button 
            className="cursor-hover bg-primary text-on-primary px-8 py-4 rounded-xl font-bold transition-all flex items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            My work
          </motion.button>
          <motion.button 
            className="cursor-hover bg-surface-variant/40 backdrop-blur-md border border-outline-variant/20 px-8 py-4 rounded-xl font-bold text-tertiary transition-all"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Connect with me
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
