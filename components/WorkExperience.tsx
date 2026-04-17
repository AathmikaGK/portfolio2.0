"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WorkExperience() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(lineRef.current, {
        scaleY: 0,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 30%",
          scrub: true
        }
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: "Customer Consultant",
      subtitle: "Telstra • 2026",
      side: "left",
      tasks: [
        { label: "Situation:", text: "Customers needed clear guidance on plans, devices, and technical issues in a fast-paced retail setting." },
        { label: "Task:", text: "Identify needs and recommend the right solutions." },
        { label: "Action:", text: "Asked targeted questions and simplified technical concepts for non-technical customers." },
        { label: "Result:", text: "Improved customer confidence and satisfaction; strengthened communication, problem-solving, and customer-first thinking." }
      ]
    },
    {
      title: "Private Freelance Tutor",
      subtitle: "SuperProf • Jan 2024 - Present",
      side: "right",
      tasks: [
        { label: "Situation:", text: "Students struggling with coding and engineering concepts." },
        { label: "Task:", text: "Help them improve understanding and performance." },
        { label: "Action:", text: "Designed personalised lessons and practical coding exercises." },
        { label: "Result:", text: "Consistent grade improvements; built strong communication, adaptability, and ability to explain complex ideas clearly." }
      ]
    },
    {
      title: "Customer Service Executive",
      subtitle: "Remox Currency Exchange • Jun 2025 - Present",
      side: "left",
      tasks: [
        { label: "Situation:", text: "High-volume transactions with accuracy-critical cash handling." },
        { label: "Task:", text: "Process transactions and guide customers on exchange rates." },
        { label: "Action:", text: "Maintained precision under pressure and handled customer queries efficiently." },
        { label: "Result:", text: "Clean cash-handling record; developed attention to detail, accountability, and quick decision-making." }
      ]
    },
    {
      title: "Team Member",
      subtitle: "Pizza Hut & Noodle Box • Jul 2023 - Jun 2025",
      side: "right",
      tasks: [
        { label: "Situation:", text: "Fast-paced hospitality environment alongside full-time studies." },
        { label: "Task:", text: "Manage operations and maintain service quality." },
        { label: "Action:", text: "Handled multiple tasks during peak hours while working in a team." },
        { label: "Result:", text: "Built strong time management, teamwork, and reliability under pressure." }
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-20 bg-surface-container-low" id="experience">
      <motion.div
        className="max-w-4xl mx-auto"
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
          <h2 className="text-xs font-label text-secondary uppercase tracking-[0.5em] mb-4">Experience</h2>
          <h3 className="text-4xl font-bold text-tertiary tracking-tight">Work Experience</h3>
        </motion.div>

        <div className="space-y-12 relative">
          <div ref={lineRef} className="absolute left-[3px] top-0 bottom-0 w-[1px] bg-outline-variant/20 origin-top" />

          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="relative pl-8"
              initial={{ opacity: 0, x: exp.side === "left" ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
            >
              <motion.div
                className={`absolute left-[-5px] top-0 w-2 h-2 rounded-full ${idx === 0 ? 'bg-primary shadow-[0_0_10px_#f59663]' : 'bg-stone-700'}`}
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-tertiary">{exp.title}</h4>
                    <p className="text-primary font-label text-xs uppercase tracking-wider">{exp.subtitle}</p>
                  </div>
                  {idx === 0 && <span className="bg-surface-container px-3 py-1 rounded text-[10px] font-mono text-stone-500 uppercase"><br /></span>}
                </div>
                <motion.div
                  className="cursor-hover glass-card p-6 rounded-xl space-y-4"
                  whileHover={{
                    scale: 1.04,
                    boxShadow: "0 0 28px rgba(180, 80, 30, 0.3)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {exp.tasks.map((task, tidx) => (
                    <div key={tidx} className="flex gap-2">
                      <span className="text-primary font-bold text-xs uppercase tracking-tighter">{task.label}</span>
                      <p className="text-sm text-on-surface-variant">{task.text}</p>
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
