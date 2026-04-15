import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Hackathons from "@/components/Hackathons";
import WorkExperience from "@/components/WorkExperience";
import Volunteering from "@/components/Volunteering";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-[1024px]">
      <Sidebar />
      <main className="md:ml-64">
        {/* Mobile TopAppBar */}
        <nav className="bg-surface-container-lowest/80 backdrop-blur-xl text-primary font-bold tracking-tighter uppercase Inter docked full-width top-0 z-50 md:hidden border-b border-outline-variant/30 flex justify-between items-center px-6 py-4 w-full transition-colors duration-300">
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
        <Contact />

        {/* FOOTER */}
        <footer className="w-full py-12 bg-transparent text-[10px] font-mono tracking-widest uppercase text-primary">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center opacity-60 hover:opacity-100 transition-opacity">
            <p className="">© 2026 Aathmika gokula krishna</p>
            <div className="flex gap-8 text-on-surface-variant">
              <a className="hover:text-tertiary transition-colors" href="#">Source</a>
              <a className="hover:text-tertiary transition-colors" href="#">Status</a>
              <a className="hover:text-tertiary transition-colors" href="#">Logs</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
