import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from './Layout/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const sectionRefs = {
      hero: document.getElementById('hero'),
      experience: document.getElementById('experience'),
      projects: document.getElementById('projects'),
      skills: document.getElementById('skills'),
      education: document.getElementById('education'),
    };

    const observerOptions = {
      threshold: 0.3,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(sectionRefs).forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <Navbar activeSection={activeSection} />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Education />
    </div>
  );
};

export default App;