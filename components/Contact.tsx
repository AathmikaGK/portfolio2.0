"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowToast(true);
    }, 1500); // Mock processing time
  };

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => setShowToast(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const socialVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  const fieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const InputFieldStyle = { transition: "border-color 0.2s ease" };

  return (
    <section className="py-24 px-6 md:px-20 relative" id="connect">
      <motion.div 
        className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-xs font-label text-primary uppercase tracking-[0.5em] mb-4"><br/></h2>
            <h3 className="text-4xl font-bold text-tertiary tracking-tight">Let's Connect</h3>
            <p className="mt-4 text-on-surface-variant leading-relaxed">Always happy to connect, whether it’s for collaboration, a technical discussion, or simply to exchange ideas.</p>
          </motion.div>

          <motion.div
            className="flex gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            {[
              {
                name: "LinkedIn",
                href: "https://www.linkedin.com/in/aathmika-gokula-krishna/",
                svg: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.446-2.136 2.94v5.666H9.351V9h3.414v1.561h.046c.476-.9 1.637-1.852 3.37-1.852 3.601 0 4.266 2.37 4.266 5.455v6.288zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.063 2.063 0 112.063 2.065zM7.119 20.452H3.554V9h3.565v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
              },
              {
                name: "GitHub",
                href: "https://github.com/AathmikaGK",
                svg: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                ),
              },
              {
                name: "Email",
                href: "mailto:aathmika.gk@gmail.com",
                svg: (
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" aria-hidden="true">
                    <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 010 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" />
                  </svg>
                ),
              },
            ].map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={item.name}
                variants={socialVariants}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="cursor-hover w-14 h-14 glass-card rounded-full flex items-center justify-center text-tertiary hover:text-primary transition-all duration-300"
              >
                {item.svg}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <div className="glass-card p-10 rounded-2xl relative space-y-6">
          <motion.form 
            onSubmit={handleSubmit}
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.1 }}
          >
            <motion.div variants={fieldVariants} className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant"> Name</label>
              <input style={InputFieldStyle} className="w-full bg-surface-container-low border-b border-outline-variant/20 focus:border-primary px-0 py-3 text-tertiary outline-none" placeholder="John Doe" type="text" required />
            </motion.div>
            <motion.div variants={fieldVariants} className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Email</label>
              <input style={InputFieldStyle} className="w-full bg-surface-container-low border-b border-outline-variant/20 focus:border-primary px-0 py-3 text-tertiary outline-none" placeholder="john@protocol.io" type="email" required />
            </motion.div>
            <motion.div variants={fieldVariants} className="space-y-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">Message </label>
              <textarea style={InputFieldStyle} className="w-full bg-surface-container-low border-b border-outline-variant/20 focus:border-primary px-0 py-3 text-tertiary outline-none resize-none" placeholder="Speak your mind..." rows={3} required />
            </motion.div>
            <motion.button 
              type="submit"
              variants={fieldVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className="cursor-hover w-full bg-primary text-on-primary py-4 rounded-xl font-bold uppercase tracking-widest text-xs flex justify-center items-center h-14 hover:shadow-[0_0_30px_rgba(245,150,99,0.2)]"
            >
              {isLoading ? (
                <motion.svg className="w-6 h-6 border-2 border-on-primary border-t-transparent rounded-full" animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }} />
              ) : (
                "Send Message"
              )}
            </motion.button>
          </motion.form>

          <AnimatePresence>
            {showToast && (
              <motion.div 
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 60, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="absolute left-10 right-10 bottom-6 flex items-center gap-3 bg-stone-900/90 backdrop-blur-md p-4 rounded-lg border border-primary/20 shadow-lg"
              >
                <span className="material-symbols-outlined text-primary text-sm" data-icon="check_circle">check_circle</span>
                <span className="text-[10px] font-label uppercase tracking-wider text-on-surface-variant">Message sent! I'll be in touch 🙌</span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
