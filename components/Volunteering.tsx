"use client";
import { motion } from "framer-motion";

export default function Volunteering() {
  const cards = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDsTK0REhEqaBf2alw3Q0vuKX9L9msysqOR7qHXLz1yNEpUvX9sn45VaHpwJZ2iTYM30domvo3mPG6Bny8Utjvah0XVxCQCeK9QdIMTowzXECa_t6QyhFExfjNSJWA3LdhbmzA3i_6wp8nklNmt5qVvJ04nqP-bHsz3oehkdD1-6a2Kj4O8aYyIoZsOz1v12tDlms1O_fIB9hUPoOsmFGmy2LOIJAUP92prV37QjIolAzrmFgT2nd5OBHHTKmEPYJToSdMHI1AoUFE",
      title: "QUT Connector",
      desc: "Mentoring underprivileged youth in basic Python and web development fundamentals.",
      startX: -50
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDhlJp6et0lioJkuS8p0CaZxs2b_pcLzxAKSc9Z9Quu8tRlsHJ3ytzanOG-JuaCxBsIhhrJEbHZjCGqhqUwfM_9RSv4dEEar4TmCeDNtVB9uLUrdNpbnVXKEO7o5b_yfhW_3qFoDBWeQozHXG6d8cGUzLwaZ8Zrn-C_4dVw6lAhQSeSuBmgo494mtONbqXw0NTe13CaaJm34EPtiP1Jjgf7-TgBiZTm_TCmdakMzFgN3gcapffMA7vtc9yJJJVjbeBcC1vcyUgODAA",
      title: "QUT Guild Volunteer",
      desc: "Building open-source sensors for local parks to monitor soil moisture and health via IoT.",
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
              <div className="md:w-1/3">
                <img alt={card.title} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src={card.img} />
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
