import { Navbar } from "./Layout/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import ProjectTabs from "./components/ProjectTabs";
import { ThemeProvider } from "@/components/theme-provider"
import { Download } from "lucide-react";

function App() {
  const activeSection = window.location.hash;
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground">
        <Navbar activeSection={activeSection} />
        <Hero />
        <Experience />
        <ProjectTabs />
        <Skills />
        <Education />
        <a 
          href="https://drive.google.com/file/d/1CvIfpaLNZ_xG3ohwHTWmUm-taIodDAgV/view?usp=sharing" 
          target="_blank"
          className="fixed bottom-6 right-6 z-50 shadow-lg flex gap-2 bg-primary text-primary-foreground p-5 rounded-full"
        >
          <Download className="h-5 w-5" />
          Download CV
        </a>
      </div>
    </ThemeProvider>
  );
}

export default App;
