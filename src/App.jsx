import React, { useState } from "react";
import { Navbar } from "./Layout/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import ProjectTabs from "./components/ProjectTabs";

function App() {
  const activeSection = window.location.hash;

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Experience />
      <ProjectTabs />
      <Skills />
      <Education />
    </div>
  );
}

export default App;
