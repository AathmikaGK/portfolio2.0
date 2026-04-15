"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const projects = [
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA4oDTA1OZqrHfH_uqg7sWJp2MzvCySzDUCMFxtU1aEbdIx-G07uB-t6YMparo7V4CYVNS1TRE8f06GxwfToV2WSLvegysP2SQYd9pKvyEY6c9-qH7NNwJ4Pm6RCM44JgEMXZGQpLEM3RN1M2l5Nlau7MIJ4dIiC-VpexOFzghroDfbTAuI1YGay2uo2kVxOT9G25ByZ4tKtswMksxgZUZrpZHzr2jSiFq4psYOj1yu4B3DeE3YwQE-EVJLGbXqot1mYYMcZI7h-2Y",
      tag: "Cybersecurity / AI",
      title: "SafeGuard AI",
      desc: "A web app to detect zero-day vulnerabilities in prompts with 99.4% accuracy provides risk analysis."
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBlLHE37Gd-_ilobE62qwpNIAjy-jp6_6_6nYc5BT9LKSJbIG6eA0rErUApMMlVKSg8-0PlItLxIz-HlVY52-j-OFHG37FYtm2nuvWyL5JF4QgjYyZaMpc0iajuJHm5PV8O1-jdCEJX3Vcxo7aFtA0wyTM7SKIABwPJU7YkQroCSW_BlQknQt2c7Hz1nTfOGH-QSwOSVeTsFNDQ8L_wrRSVZ6zRVtQQsG8dgDma4DKdkrCRwIaJqTv0rHk1-lYv5HhADOts_HlaTFA",
      tag: "lang chain/",
      title: "AI Learning Assistant",
      desc: "RAG based chatbot that answers questions directly from the student's learning material and prevents helps to complete assignments efficiently."
    },
    {
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAvE_jukc8mBW-M_3a6ZsBWxhFUKTjAoOJ0i9OyX9Ye5-JIxHBHal3NgLEJhERXeaFh8683PasHjLPtjcKStrkknFJh3flP54u8kUY5OIYx9ipSYXCA0EneUD-fzCSSJoxW-1xipJRdgP5YaivZrr5aOcZsReToNceMAe2Zot8wvd8RJIG0cip8c1a-MNIzK8lgTsVtTCJltN9mzhTHaKH-PQfeQEbhBx1MADPQRLi_m8d-I4ntGP01kgeI7UHzr1pyzIYEuiPj1ck",
      tag: "AWS/ python",
      title: "Video-Audio Transcoder",
      desc: "High-performance video transcoder microservies built in integration with AWS services like EC2, ECS, Cognito, SQS, Lambda, CloudWatch, S3."
    }
  ];

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
          className="mb-16 flex justify-between items-end"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2 className="text-xs font-label text-primary uppercase tracking-[0.5em] mb-4">my work</h2>
            <h3 className="text-4xl font-bold text-tertiary tracking-tight">Portfolio Projects</h3>
          </div>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((proj, idx) => (
            <motion.div 
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.04, 
                boxShadow: "0 0 28px rgba(180, 80, 30, 0.3)" 
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="cursor-hover glass-card rounded-xl overflow-hidden group"
            >
              <div className="h-48 overflow-hidden">
                <img alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={proj.img} />
              </div>
              <div className="p-8 space-y-4">
                <span className="font-label text-[10px] uppercase tracking-widest text-primary">{proj.tag}</span>
                <h4 className="text-xl font-bold text-tertiary">{proj.title}</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">{proj.desc}</p>
                <div className="flex gap-4 pt-2">
                  <span className="cursor-hover material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer" data-icon="terminal">terminal</span>
                  <span className="cursor-hover material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors cursor-pointer" data-icon="open_in_new">open_in_new</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
