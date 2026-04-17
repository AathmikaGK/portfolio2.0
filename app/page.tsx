import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import WorkExperience from "@/components/WorkExperience";
import Volunteering from "@/components/Volunteering";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import ResumeSection from "@/components/ResumeSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Sidebar />
      <main className="md:ml-80">
        <nav className="bg-surface-container-lowest/80 backdrop-blur-xl text-primary font-bold tracking-tighter uppercase Inter docked full-width top-0 z-50 md:hidden border-b border-outline-variant/30 flex justify-between items-center px-6 py-4 w-full transition-colors duration-300 sticky">
          <span className="text-lg font-black tracking-widest text-tertiary">Aathmika</span>
          <span className="material-symbols-outlined" data-icon="menu">menu</span>
        </nav>

        <Hero />
        <TechStack />
        <Projects />
        <Hackathons />
        <WorkExperience />
        <Volunteering />
        <Quote />
        <ResumeSection />
        <Contact />

        <footer className="w-full py-12 bg-transparent text-[10px] font-mono tracking-widest uppercase text-primary">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center opacity-70 hover:opacity-100 transition-opacity">
            <p>© 2026 Aathmika gokula krishna</p>
            <a
              href="#home"
              className="cursor-hover text-on-surface-variant hover:text-tertiary transition-colors"
            >
              Go up ↑
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
