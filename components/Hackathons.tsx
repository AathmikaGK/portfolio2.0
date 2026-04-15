"use client";
import { motion } from "framer-motion";
import { useRef, MouseEvent, CSSProperties } from "react";

type Hackathon = {
  title: string;
  badge?: string;
  team: string;
  problem: string;
  highlights: string[];
  tech: string;
  github: string;
};

const hackathons: Hackathon[] = [
  {
    title: "Little Wins — AI Budgeting App",
    badge: "Best Pitch Award",
    team: "Group of 4",
    problem:
      "People struggle to understand spending habits and stay consistent with saving.",
    highlights: [
      "Full-stack app converting transaction data into personalised savings goals and gamified daily/weekly quests",
      "AI-based analysis auto-categorises spending and generates actionable daily quests, with secure auth and production deployment",
    ],
    tech: "Node.js · Supabase · OpenAI API · JWT Auth · Vercel",
    github: "https://github.com/AathmikaGK/LittleWins.git",
  },
  {
    title: "Safeguard AI",
    team: "Group of 2",
    problem: "AI systems are vulnerable to prompt injection attacks.",
    highlights: [
      "Scanner detects risks and rewrites prompts with a scored safety output",
      "Working solution delivered in 24 hours — fast learning and execution under pressure",
    ],
    tech: "Python · FastAPI · Bootstrap 5 · Anthropic Claude API",
    github: "https://github.com/AathmikaGK/Safeguard-AI.git",
  },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function HackathonCard({ item }: { item: Hackathon }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const latest = useRef({ x: 0, y: 0 });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    latest.current.x = e.clientX - rect.left;
    latest.current.y = e.clientY - rect.top;
    if (rafRef.current !== null) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      const el = cardRef.current;
      if (!el) return;
      el.style.setProperty("--spot-x", `${latest.current.x}px`);
      el.style.setProperty("--spot-y", `${latest.current.y}px`);
    });
  };

  const spotStyle: CSSProperties = {
    background:
      "radial-gradient(360px circle at var(--spot-x, -200px) var(--spot-y, -200px), rgba(245,150,99,0.18), transparent 60%)",
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-hover relative glass-card rounded-xl overflow-hidden group flex flex-col will-change-transform"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={spotStyle}
      />
      <div className="p-8 space-y-4 flex-1 flex flex-col relative z-10">
        <div className="flex flex-wrap gap-2 items-center">
          <span className="font-label text-[10px] uppercase tracking-widest text-primary">
            Hackathon
          </span>
          {item.badge && (
            <span className="font-label text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-secondary-container text-on-secondary-container">
              {item.badge}
            </span>
          )}
          <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant">
            · {item.team}
          </span>
        </div>
        <h4 className="text-xl font-bold text-tertiary leading-tight">
          {item.title}
        </h4>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          <span className="text-primary font-bold">Problem: </span>
          {item.problem}
        </p>
        <ul className="space-y-2 text-sm text-on-surface-variant leading-relaxed flex-1">
          {item.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary mt-[2px]">›</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <p className="text-[11px] font-mono text-on-surface-variant/80 leading-relaxed pt-2 border-t border-outline-variant/10">
          <span className="text-primary uppercase tracking-widest">Tech: </span>
          {item.tech}
        </p>
        <motion.a
          href={item.github}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="cursor-hover mt-2 inline-flex items-center justify-center gap-2 bg-surface-container-highest hover:bg-primary hover:text-on-primary text-tertiary font-label text-[10px] uppercase tracking-widest py-3 rounded-lg transition-colors"
        >
          <GitHubIcon />
          View on GitHub
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function Hackathons() {
  return (
    <section className="py-24 px-6 md:px-20 bg-surface-container-low" id="hackathons">
      <motion.div
        className="max-w-7xl mx-auto"
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
          <h2 className="text-xs font-label text-primary uppercase tracking-[0.5em] mb-4">
            48-hour sprints
          </h2>
          <h3 className="text-4xl font-bold text-tertiary tracking-tight">
            Hackathon Projects
          </h3>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {hackathons.map((item) => (
            <motion.div
              key={item.title}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              <HackathonCard item={item} />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
