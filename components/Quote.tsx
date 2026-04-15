"use client";
import { motion } from "framer-motion";

export default function Quote() {
  const quoteText = "\"We can only see a short distance ahead, but we can see plenty there that needs to be done.\"".split(" ");

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } }
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-32 px-6 bg-surface-container">
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.span 
          className="material-symbols-outlined text-primary text-5xl opacity-20 block"
          data-icon="format_quote"
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "backOut" }}
        >
          format_quote
        </motion.span>
        
        <motion.blockquote 
          className="text-3xl md:text-5xl font-extrabold text-tertiary leading-tight italic tracking-tighter"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {quoteText.map((word, i) => (
            <motion.span key={i} variants={wordVariants} className="inline-block mr-[0.3em]">
              {word}
            </motion.span>
          ))}
        </motion.blockquote>
        
        <motion.cite 
          className="block font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: quoteText.length * 0.04 + 0.6, duration: 0.5 }}
        >
          — Alan Turing
        </motion.cite>
      </motion.div>
    </section>
  );
}
