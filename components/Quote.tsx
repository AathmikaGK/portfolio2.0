"use client";
import { motion } from "framer-motion";

const quotes = [
  {
    text: "We can only see a short distance ahead, but we can see plenty there that needs to be done.",
    author: "Alan Turing",
  },
  {
    text: "The best way to predict the future is to invent it.",
    author: "Alan Kay",
  },
  {
    text: "Simplicity is the ultimate sophistication.",
    author: "Leonardo da Vinci",
  },
  {
    text: "Any sufficiently advanced technology is indistinguishable from magic.",
    author: "Arthur C. Clarke",
  },
];

export default function Quote() {
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
        className="max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-label text-primary uppercase tracking-[0.5em] mb-4">
            Values
          </h2>
          <h3 className="text-4xl font-bold text-tertiary tracking-tight">
            What Drives Me
          </h3>
        </motion.div>

        <div className="space-y-20">
          {quotes.map((quote, idx) => {
            const words = `"${quote.text}"`.split(" ");
            return (
              <motion.div
                key={idx}
                className="space-y-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <motion.blockquote
                  className="text-2xl md:text-4xl font-extrabold text-tertiary leading-tight italic tracking-tighter"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {words.map((word, i) => (
                    <motion.span
                      key={i}
                      variants={wordVariants}
                      className="inline-block mr-[0.3em]"
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.blockquote>

                <motion.cite
                  className="block font-label text-sm uppercase tracking-[0.3em] text-on-surface-variant not-italic"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: words.length * 0.04 + 0.4, duration: 0.5 }}
                >
                  — {quote.author}
                </motion.cite>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
