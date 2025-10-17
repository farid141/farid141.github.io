import { ModeToggle } from '@/components/mode-toggle';
import React from 'react';

export const Navbar = ({ activeSection }) => {
  const NavLink = ({ section }) => (
    <a
      href={`#${section}`}
      className={`px-4 py-2 capitalize transition-colors duration-300 ${
        activeSection === section
          ? 'text-primary'
          : 'text-muted-foreground hover:text-primary'
      }`}
    >
      {section}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-primary">FN</span>
          <div className="hidden md:flex space-x-4">
            {['home', 'experience', 'projects', 'skills', 'education'].map((section) => (
              <NavLink key={section} section={section} />
            ))}
            <ModeToggle/>
          </div>
        </div>
      </div>
    </nav>
  );
};