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
    { id: "home", href: "#home", icon: "terminal", label: "ABOUT ME" },
    { id: "tech", href: "#tech", icon: "biotech", label: "PROJECTS" },
    { id: "projects", href: "#projects", icon: "folder_open", label: "experience" },
    { id: "connect", href: "#connect", icon: "alternate_email", label: "CONTACT ME" },
  ];

  return (
    <aside className="bg-stone-950 text-orange-400 font-bold tracking-tight Inter labels-mono-space-grotesk fixed left-0 top-0 h-[1024px] w-64 hidden md:flex flex-col p-8 gap-8 border-r border-white/5" data-stitch-vh="h-[1024px]===h-screen">
      <motion.div 
        className="flex items-center gap-3 cursor-hover"
        initial={{ x: -30, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <div className="w-10 h-10 rounded-full bg-surface-container overflow-hidden">
          <img alt="Engineer portrait" className="w-full h-full object-cover" data-alt="professional portrait of a software engineer with soft dramatic lighting and dark background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK27zWII50ErFl_b_bTfb6xVl7thId2dTBAnNQOdqis-3IAahvQWU4YaxnBNRja0HgneWsQToMbE08Br9JZ11wC-Mq9VPvQUj9CAl42ZCvxXHLWtrjimhg0GUlnQ8rceGrqtqrdsnK9x1HEv_mNH18qrHeoZxsrNLosDUxSfuGfR6rOEzQlRKbwkvMuBCmPi1SKmmVMMWKPLflKZETMFk78rvfxr5zdJru_sDTU05rSlwgCLG39jn8nUfm7yyVPVg8C9izK2CuxwM" />
        </div>
        <div>
          <h2 className="text-stone-50 font-black text-sm leading-tight">Aathmika Gokula Krishna</h2>
          <p className="text-stone-500 text-[10px] uppercase tracking-widest">ASPIRING Software DEVELOPER</p>
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
                isActive ? "text-white border-orange-400" : "text-stone-500 hover:text-stone-200 hover:bg-stone-900 border-transparent"
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
              <span className="material-symbols-outlined relative z-10" data-icon={link.icon}>{link.icon}</span>
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
        <p className="text-stone-600 font-mono text-[10px] tracking-widest uppercase">v2.4.0</p>
      </div>
    </aside>
  );
}
