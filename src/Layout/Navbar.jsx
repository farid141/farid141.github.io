import { ModeToggle } from '@/components/mode-toggle';
import React from 'react';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

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
          <span className="text-xl font-bold text-primary">
            <a href='#home'>
            FN
            </a>
          </span>
          <div className="hidden md:flex space-x-4">
            {['home', 'experience', 'projects', 'skills', 'education'].map((section) => (
              <NavLink key={section} section={section} />
            ))}
            <ModeToggle/>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <ModeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger className="p-2 hover:bg-accent rounded-md">
                <Menu className="h-5 w-5" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                {['home', 'experience', 'projects', 'skills', 'education'].map((section) => (
                  <DropdownMenuItem key={section} asChild>
                    <a
                      href={`#${section}`}
                      className={`w-full capitalize ${
                        activeSection === section
                          ? 'text-primary'
                          : 'text-muted-foreground hover:text-primary'
                      }`}
                    >
                      {section}
                    </a>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};