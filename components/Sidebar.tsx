"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", href: "#home", label: "About Me" },
    { id: "tech", href: "#tech", label: "Tech Stack" },
    { id: "projects", href: "#projects", label: "Projects" },
    { id: "hackathons", href: "#hackathons", label: "Hackathons" },
    { id: "experience", href: "#experience", label: "Experience" },
    { id: "resume", href: "#resume", label: "Resume" },
    { id: "connect", href: "#connect", label: "Contact" },
  ];

  return (
    <aside className="text-primary font-bold tracking-tight Inter fixed left-6 top-6 bottom-6 w-64 hidden md:flex z-50">
      <div className="w-full h-full bg-surface-container-lowest/85 backdrop-blur-xl rounded-2xl p-6 border border-outline-variant/30 shadow-[0_12px_30px_rgba(0,0,0,0.2)] flex flex-col gap-6">
        <motion.div className="flex items-center gap-3 cursor-hover" initial={{ x: -30, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
          <div>
            <h2 className="text-tertiary font-black text-sm leading-tight">Aathmika Gokula Krishna</h2>
            <p className="text-on-surface-variant text-[10px] uppercase tracking-widest">Aspiring Software Developer</p>
          </div>
        </motion.div>

        <nav className="flex flex-col gap-1 mt-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`cursor-hover relative py-2.5 px-3 rounded-lg text-xs uppercase tracking-widest transition-all ${
                  isActive ? "text-primary bg-primary/10" : "text-on-surface-variant hover:text-tertiary hover:bg-surface-container"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="mt-auto">
          <p className="text-on-surface-variant/60 font-mono text-[10px] tracking-widest uppercase">floating nav</p>
        </div>
      </div>
    </aside>
  );
}
