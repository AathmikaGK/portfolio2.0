"use client";
import { motion } from "framer-motion";

const categories = [
  {
    label: "Programming Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C#", "R"],
  },
  {
    label: "Web Development",
    skills: ["React", "Next.js", "FastAPI", "JavaFX", "OOP", "DSA"],
  },
  {
    label: "Databases",
    skills: ["SQL", "Supabase", "Supabase Vector DB", "SQLite"],
  },
  {
    label: "DevOps & Cloud",
    skills: ["AWS", "EC2", "S3", "ECS", "SQS", "IAM", "CloudWatch", "Docker", "Git", "CI/CD"],
  },
];

export default function TechStack() {
  return (
    <section className="py-24 px-6 md:px-20 bg-surface-container-low" id="tech">
      <motion.div className="max-w-7xl mx-auto" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <div className="mb-16">
          <h2 className="text-xs font-label text-secondary uppercase tracking-[0.5em] mb-4">Tech</h2>
          <h3 className="text-4xl font-bold text-tertiary tracking-tight">My Tech Stack</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category) => (
            <motion.div key={category.label} className="glass-card rounded-2xl p-6" whileHover={{ y: -4 }}>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-primary mb-5">{category.label}</h4>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-hover px-4 py-2 bg-surface-container-highest rounded-full border border-outline-variant/10 font-label text-xs uppercase tracking-widest text-on-surface-variant"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
