"use client";
import { motion } from "framer-motion";

const tiers = [
  {
    label: "Expert",
    skills: [
      "Python",
      "Java",
      "AWS (EC2/S3/ECS/SQS/IAM/CloudWatch/Cognito)",
      "LangChain",
      "FastAPI",
      "Git",
      "OOP",
      "DSA",
      "CI/CD",
    ],
  },
  {
    label: "Proficient",
    skills: [
      "C#",
      "React",
      "SQL",
      "Supabase Vector DB",
      "Docker",
      "Agile",
      "JavaFX",
    ],
  },
  {
    label: "Familiar",
    skills: ["R", "Pandas", "TypeScript"],
  },
];

export default function TechStack() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-24 px-6 md:px-20 bg-surface-container-low" id="tech">
      <motion.div
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xs font-label text-secondary uppercase tracking-[0.5em] mb-4">
            Projects
          </h2>
          <h3 className="text-4xl font-bold text-tertiary tracking-tight">
            My Tech Stack
          </h3>
        </motion.div>

        <div className="space-y-12">
          {tiers.map((tier) => (
            <motion.div
              key={tier.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <h4 className="text-[10px] font-label text-primary uppercase tracking-[0.4em] mb-5">
                {tier.label}
              </h4>
              <motion.div
                className="flex flex-wrap gap-3"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {tier.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    whileHover={{
                      scale: 1.08,
                      boxShadow: "0 0 12px rgba(245, 150, 99, 0.5)",
                    }}
                    transition={{ duration: 0.2 }}
                    className="cursor-hover px-5 py-2 bg-surface-container-highest rounded-full border border-outline-variant/10 font-label text-xs uppercase tracking-widest text-on-surface-variant transition-colors cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="inline-block px-5 py-2 bg-secondary-container text-on-secondary-container rounded-full font-label text-xs uppercase tracking-widest">
              Active Focus: machine learning and artificial intelligence
            </span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
