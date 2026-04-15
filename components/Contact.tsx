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
            {["share", "code", "mail"].map((icon) => (
              <motion.a 
                key={icon}
                href="#"
                variants={socialVariants}
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="cursor-hover w-14 h-14 glass-card rounded-full flex items-center justify-center text-tertiary hover:text-primary transition-all duration-300"
              >
                <span className="material-symbols-outlined" data-icon={icon}>{icon}</span>
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
