"use client";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useState } from "react";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import { projects } from "@/content";

export default function ProjectTabs() {
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["iot", "web_dev", "web_scrap"];

  return (
    <div id="projects" className="py-20 bg-gray-800 min-h-screen">
      <div className="max-w-5xl mx-auto py-10">
        <h2 className="text-3xl font-bold mb-6 text-center">My Projects</h2>

        <Tabs defaultValue="iot">
          <TabsList className="grid w-full grid-cols-3 bg-gray-900">
            {categories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat.toUpperCase()}
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
