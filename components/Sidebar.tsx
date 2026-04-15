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
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { id: "home", href: "#home", label: "ABOUT ME" },
    { id: "projects", href: "#projects", label: "MY WORK" },
    { id: "hackathons", href: "#hackathons", label: "HACKATHONS" },
    { id: "volunteering", href: "#volunteering", label: "VOLUNTEERING" },
    { id: "connect", href: "#connect", label: "CONTACT ME" },
  ];

  return (
    <aside className="bg-surface-container-lowest text-primary font-bold tracking-tight Inter fixed left-0 top-0 h-[1024px] w-64 hidden md:flex flex-col p-8 gap-8 border-r border-outline-variant/30 transition-colors duration-300">
      <motion.div
        className="flex items-center gap-3 cursor-hover"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div>
          <h2 className="text-tertiary font-black text-sm leading-tight">Aathmika Gokula Krishna</h2>
          <p className="text-on-surface-variant text-[10px] uppercase tracking-widest">ASPIRING Software DEVELOPER</p>
        </div>
      </motion.div>

      <nav className="flex flex-col gap-2 mt-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.id;
          return (
            <motion.a
              key={link.id}
              href={link.href}
              className={`relative flex items-center gap-4 py-3 px-4 rounded-xl font-bold transition-all duration-300 cursor-hover border-r-2 ${
                isActive
                  ? "text-tertiary border-primary"
                  : "text-on-surface-variant hover:text-tertiary hover:bg-surface-container border-transparent"
              }`}
              animate={{ scale: isActive ? 1.05 : 1 }}
              whileHover="hover"
            >
              {isActive && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 bg-primary/20 rounded-xl pointer-events-none"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="font-label text-xs uppercase tracking-widest relative z-10 overflow-hidden">
                {link.label}
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-current"
                  variants={{
                    hover: { scaleX: 1, transition: { duration: 0.25 } }
                  }}
                  initial={{ scaleX: 0 }}
                  style={{ transformOrigin: "left" }}
                />
              </span>
            </motion.a>
          );
        })}
      </nav>

      <div className="mt-auto cursor-hover">
        <p className="text-on-surface-variant/60 font-mono text-[10px] tracking-widest uppercase">v2.4.0</p>
      </div>
    </aside>
  );
}
