"use client";
import { motion } from "framer-motion";

export default function Quote() {
  const quoteText = "\"The measure of intelligence is the ability to change.\"".split(" ");

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04 } },
  };

  const wordVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0 },
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
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-label text-primary uppercase tracking-[0.5em] mb-4">Values</h2>
          <h3 className="text-4xl font-bold text-tertiary tracking-tight mb-8">What Drives Me</h3>
        </motion.div>

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
          className="block font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant not-italic"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: quoteText.length * 0.04 + 0.4, duration: 0.5 }}
        >
          — Albert Einstein
        </motion.cite>

        <motion.p
          className="max-w-2xl mx-auto text-base md:text-lg text-on-surface-variant leading-relaxed pt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: quoteText.length * 0.04 + 0.7, duration: 0.6 }}
        >
          Driven by this, I try to keep learning and adapting as things change with AI,
          and I enjoy working with others to build and contribute wherever I can.
        </motion.p>
      </motion.div>
    </section>
  );
}
