import { Dialog, DialogContent } from "@/components/ui/dialog";
import ProjectCarousel from "./ProjectCarousel";

export default function ProjectModal({ project, onClose }) {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden">
        <div className="grid md:grid-cols-2">
          <ProjectCarousel media={project.media} />
          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">
              {project.longDesc}
            </p>
            <p>
              <strong>Tech Stack:</strong> {project.tech.join(", ")}
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
