"use client";
import { motion } from "framer-motion";
import { useRef, useState, useEffect, MouseEvent } from "react";

type Project = {
  title: string;
  tag: string;
  problem: string;
  highlights: string[];
  tech: string;
  github: string;
};

const projects: Project[] = [
  {
    title: "Video & Audio Transcoder API",
    tag: "AWS / Python",
    problem: "Large media files are slow and hard to process at scale.",
    highlights: [
      "Cloud-native system converting uploads up to 500 MB into MP3/AAC/OGG in <30 seconds",
      "Scalable architecture with ECS + SQS, secured via Cognito JWT + IAM",
    ],
    tech: "Python · FastAPI · FFmpeg · AWS (S3, EC2, ECS, SQS, Route 53, IAM, CloudWatch, API Gateway, Cognito)",
    github: "https://github.com/AathmikaGK/video_audio_transcoder.git",
  },
  {
    title: "AI Planner & Learning Assistant",
    tag: "RAG / LangChain",
    problem: "Students struggle to extract answers from long study materials.",
    highlights: [
      "RAG-based system delivering answers in <2 seconds on 100+ page documents",
      "Full-stack app with async backend and efficient retrieval pipeline",
    ],
    tech: "TypeScript · Python · FastAPI · LangChain · RAG · Supabase · Vercel · Docker · Railway",
    github: "https://github.com/AathmikaGK/ai-planner-and-learning-assistant.git",
  },
  {
    title: "AI Quiz Master",
    tag: "Java / Local LLM",
    problem: "Creating quizzes manually is slow and not adaptive.",
    highlights: [
      "AI-powered system generating 10 MCQs in <8 seconds with 1000+ stored questions",
      "Desktop app with multiple modes and team-based Agile workflow",
    ],
    tech: "Java · Llama (local LLM) · JavaFX · SQLite",
    github: "https://github.com/FindabhairDoolan/CAB302-AI-repo.git",
  },
  {
    title: "Obstacle Avoidance & Pathfinding System",
    tag: "C# / Algorithms",
    problem: "Efficient pathfinding is critical in dynamic environments.",
    highlights: [
      "A* and Dijkstra's achieving 98% success across 200+ grids in <50 ms",
      "Strong algorithmic thinking and performance-focused design",
    ],
    tech: "C# · Algorithms · OOP",
    github: "https://github.com/AathmikaGK/Obstacle-Avoidance-System.git",
  },
];

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4" aria-hidden="true">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [spot, setSpot] = useState({ x: -200, y: -200, active: false });

  const handleMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    setSpot({ x: e.clientX - rect.left, y: e.clientY - rect.top, active: true });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={() => setSpot((s) => ({ ...s, active: true }))}
      onMouseLeave={() => setSpot((s) => ({ ...s, active: false }))}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="cursor-hover relative glass-card rounded-xl overflow-hidden group snap-start shrink-0 w-[340px] md:w-[380px] flex flex-col"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(320px circle at ${spot.x}px ${spot.y}px, rgba(245,150,99,0.18), transparent 60%)`,
        }}
      />
      <div className="p-8 space-y-4 flex-1 flex flex-col relative z-10">
        <span className="font-label text-[10px] uppercase tracking-widest text-primary">
          {project.tag}
        </span>
        <h4 className="text-xl font-bold text-tertiary leading-tight">
          {project.title}
        </h4>
        <p className="text-sm text-on-surface-variant leading-relaxed">
          <span className="text-primary font-bold">Problem: </span>
          {project.problem}
        </p>
        <ul className="space-y-2 text-sm text-on-surface-variant leading-relaxed flex-1">
          {project.highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-primary mt-[2px]">›</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
        <p className="text-[11px] font-mono text-on-surface-variant/80 leading-relaxed pt-2 border-t border-outline-variant/10">
          <span className="text-primary uppercase tracking-widest">Tech: </span>
          {project.tech}
        </p>
        <motion.a
          href={project.github}
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

export default function Projects() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 4);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };

  return (
    <section className="py-24 px-6 md:px-20" id="projects">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="mb-12 flex justify-between items-end gap-6"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-xs font-label text-primary uppercase tracking-[0.5em] mb-4">
              my work
            </h2>
            <h3 className="text-4xl font-bold text-tertiary tracking-tight">
              Portfolio Projects
            </h3>
          </div>
          <div className="hidden md:flex gap-2">
            <motion.button
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              whileHover={{ scale: canScrollLeft ? 1.08 : 1 }}
              whileTap={{ scale: canScrollLeft ? 0.94 : 1 }}
              aria-label="Scroll projects left"
              className={`cursor-hover w-12 h-12 rounded-full glass-card flex items-center justify-center text-tertiary transition-opacity ${
                canScrollLeft ? "opacity-100 hover:text-primary" : "opacity-30 cursor-not-allowed"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
            <motion.button
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              whileHover={{ scale: canScrollRight ? 1.08 : 1 }}
              whileTap={{ scale: canScrollRight ? 0.94 : 1 }}
              aria-label="Scroll projects right"
              className={`cursor-hover w-12 h-12 rounded-full glass-card flex items-center justify-center text-tertiary transition-opacity ${
                canScrollRight ? "opacity-100 hover:text-primary" : "opacity-30 cursor-not-allowed"
              }`}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </motion.button>
          </div>
        </motion.div>

        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-6 -mx-6 px-6 [&::-webkit-scrollbar]:hidden [scrollbar-width:none]"
          >
            {projects.map((project) => (
              <ProjectCard key={project.title} project={project} />
            ))}
          </div>
          {canScrollRight && (
            <div className="pointer-events-none absolute top-0 right-0 bottom-6 w-24 bg-gradient-to-l from-background to-transparent hidden md:block" />
          )}
        </div>
      </motion.div>
    </section>
  );
}
