"use client";
import { motion } from "framer-motion";

export default function Quote() {
  return (
    <section className="py-32 px-6 bg-surface-container" id="ai-thoughts">
      <motion.div
        className="max-w-4xl mx-auto text-center space-y-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-12">
          <h2 className="text-xs font-label text-primary uppercase tracking-[0.5em] mb-4">AI</h2>
          <h3 className="text-4xl font-bold text-tertiary tracking-tight mb-8">My View on AI Agents</h3>
        </div>

        <motion.blockquote
          className="text-3xl md:text-5xl font-extrabold text-tertiary leading-tight italic tracking-tighter"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          “AI agents should feel like collaborators—fast, transparent, and human-centered.”
        </motion.blockquote>

        <motion.p
          className="max-w-2xl mx-auto text-base md:text-lg text-on-surface-variant leading-relaxed pt-4"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          I like building systems where agents augment decision-making, automate repetitive work,
          and still keep users in control of outcomes.
        </motion.p>
      </motion.div>
    </section>
  );
}
