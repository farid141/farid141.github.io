"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/content";

export default function ProjectTabs() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("web_dev");

  const categories = ["web_dev", "iot", "web_scrap"];
  
  const categoryLabels = {
    iot: "IoT Projects",
    web_dev: "Web Development",
    web_scrap: "Web Scraping"
  };

  return (
    <div id="projects" className="py-20 bg-background min-h-screen">
      <div className="max-w-5xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center text-foreground">My Projects</h2>

        {/* Mobile View - Dropdown */}
        <div className="md:hidden w-full mb-6">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                {categoryLabels[selectedCategory]}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-full min-w-[200px]">
              {categories.map((cat) => (
                <DropdownMenuItem 
                  key={cat}
                  className={selectedCategory === cat ? "bg-accent" : ""}
                  onSelect={() => setSelectedCategory(cat)}
                >
                  {categoryLabels[cat]}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Desktop View - Tabs */}
        <Tabs defaultValue="iot" value={selectedCategory} onValueChange={setSelectedCategory} className="hidden md:block">
          <TabsList className="grid w-full grid-cols-3 bg-muted">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {categoryLabels[cat]}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((cat) => (
            <TabsContent key={cat} value={cat}>
              <div className="grid md:grid-cols-3 gap-6 mt-6">
                {projects[cat].map((p, i) => (
                  <ProjectCard
                    key={i}
                    project={p}
                    onClick={() => setSelectedProject(p)}
                  />
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* Mobile View - Content */}
        <div className="md:hidden mt-6">
          <div className="grid md:grid-cols-3 gap-6">
            {projects[selectedCategory].map((p, i) => (
              <ProjectCard
                key={i}
                project={p}
                onClick={() => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>

        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </div>
  );
}
