import React, { useEffect, useRef, useState } from "react";
import { Navbar } from "./Layout/Navbar";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Education } from "./components/Education";
import ProjectTabs from "./components/ProjectTabs";

function App() {
  const [activeSection, setActiveSection] = useState("hero");

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <ProjectTabs />
    </div>
  );
}

export default App;
