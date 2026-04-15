"use client";
import { motion } from "framer-motion";

export default function Volunteering() {
  const cards = [
    {
      img: "/volunteering/qut-connect.png",
      title: "Event Facilitator, QUT Connect",
      desc: "Ran QUT 101 orientation for incoming students. Walked a full cohort through university systems and answered questions to help them settle in confidently.",
      startX: -50
    },
    {
      img: "/volunteering/qut-guild.png",
      title: "Volunteer, QUT Guild",
      desc: "Organised Welcome Week activities helping new students connect and feel at ease during their first days on campus.",
      startX: 50
    }
  ];

  return (
    <section className="py-24 px-6 md:px-20" id="volunteering">
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
          <h2 className="text-xs font-label text-primary uppercase tracking-[0.5em] mb-4">Community</h2>
          <h3 className="text-4xl font-bold text-tertiary tracking-tight">Volunteering</h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: card.startX }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              whileHover={{ 
                scale: 1.04, 
                boxShadow: "0 0 28px rgba(180, 80, 30, 0.3)" 
              }}
              className="cursor-hover flex flex-col md:flex-row glass-card rounded-xl overflow-hidden"
            >
              <div className="md:w-1/3 bg-surface-container-highest flex items-center justify-center p-4">
                <img alt={card.title} className="w-full h-full object-contain transition-all duration-500" src={card.img} />
              </div>
              <div className="p-8 md:w-2/3">
                <h4 className="text-lg font-bold text-tertiary mb-2">{card.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{card.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
