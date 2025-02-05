import React from 'react';

export const Navbar = ({ activeSection }) => {
  const NavLink = ({ section }) => (
    <a
      href={`#${section}`}
      className={`px-4 py-2 capitalize transition-colors duration-300 ${
        activeSection === section
          ? 'text-blue-400'
          : 'text-gray-400 hover:text-blue-400'
      }`}
    >
      {section}
    </a>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold text-blue-400">FN</span>
          <div className="hidden md:flex space-x-4">
            {['hero', 'experience', 'projects', 'skills', 'education'].map((section) => (
              <NavLink key={section} section={section} />
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};