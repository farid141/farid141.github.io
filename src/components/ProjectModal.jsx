import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectCarousel from "./ProjectCarousel";
import { Logo } from "./Logo";

export default function ProjectModal({ project, onClose }) {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-7xl p-0 overflow-hidden rounded-2xl">
        <div className="grid md:grid-cols-2">
          <ProjectCarousel
            media={project.media}
            mediaPath={project.mediaPath}
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2 text-foreground">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.description}
            </p>
            <p className="text-foreground">
              <div className="flex flex-wrap gap-2 align-center">
                <span className="font-bold self-center">Tech Stack</span>
                {project.tech.split(", ").map((tech, i) => (
                  <Logo src={tech} key={i}/>
                ))}
              </div>
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                className="text-primary mt-4 block"
              >
                View Project →
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
