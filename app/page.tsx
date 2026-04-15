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
    <div className="flex min-h-[1024px]">
      <Sidebar />
      <main className="flex-1 md:ml-64 w-full">
        {/* Mobile TopAppBar */}
        <nav className="bg-stone-950/80 backdrop-blur-xl text-orange-400 font-bold tracking-tighter uppercase Inter docked full-width top-0 z-50 md:hidden shadow-[0_0_20px_rgba(0,0,0,0.4)] flex justify-between items-center px-6 py-4 w-full">
          <span className="text-lg font-black tracking-widest text-stone-50 dark:text-stone-50">ALCHEMIST.IO</span>
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
        <footer className="w-full py-12 bg-transparent text-[10px] font-mono tracking-widest uppercase text-orange-400">
          <div className="max-w-7xl mx-auto px-8 flex justify-between items-center opacity-40 hover:opacity-100 transition-opacity">
            <p className="">© 2026 Aathmika gokula krishna</p>
            <div className="flex gap-8 text-stone-600">
              <a className="hover:text-stone-300 transition-colors" href="#">Source</a>
              <a className="hover:text-stone-300 transition-colors" href="#">Status</a>
              <a className="hover:text-stone-300 transition-colors" href="#">Logs</a>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
