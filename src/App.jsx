import React, { useState } from "react";
import { Navbar } from "./Layout/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import ProjectTabs from "./components/ProjectTabs";
import { ThemeProvider } from "@/components/theme-provider"

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
      </div>
    </ThemeProvider>
  );
}

export default App;
