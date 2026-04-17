"use client";

import { motion } from "framer-motion";

const resumePath = "/resume/Aathmika_Gokula_Krishna_Resume.pdf";

export default function ResumeSection() {
  const shareResume = async () => {
    if (navigator.share) {
      await navigator.share({
        title: "Aathmika Gokula Krishna Resume",
        text: "Check out my resume",
        url: `${window.location.origin}${resumePath}`,
      });
      return;
    }

    await navigator.clipboard.writeText(`${window.location.origin}${resumePath}`);
    alert("Resume link copied to clipboard.");
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-surface-container-low" id="resume">
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-xs font-label text-primary uppercase tracking-[0.5em] mb-4">Career</h2>
            <h3 className="text-4xl font-bold text-tertiary tracking-tight">Resume (PDF)</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={resumePath}
              download
              className="cursor-hover px-5 py-3 rounded-xl bg-primary text-on-primary font-semibold"
            >
              Download Resume
            </a>
            <button
              onClick={shareResume}
              className="cursor-hover px-5 py-3 rounded-xl border border-outline-variant/30 hover:border-primary text-tertiary font-semibold"
            >
              Share Resume
            </button>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-outline-variant/20 bg-background shadow-[0_10px_40px_rgba(0,0,0,0.1)]">
          <iframe
            src={resumePath}
            title="Aathmika resume PDF"
            className="w-full h-[70vh] min-h-[520px]"
            loading="lazy"
          />
        </div>
      </motion.div>
    </section>
  );
}
