import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCard({ project, onClick }) {
  const thumbnail = project.media[0]
    ? `https://img.youtube.com/vi/${project.media[0].src}/maxresdefault.jpg`
    : "";
  return (
    <Card
      onClick={onClick}
      className="cursor-pointer hover:scale-105 transition-transform"
    >
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <img
          src={thumbnail}
          alt={project.title}
          className="rounded-lg w-full h-40 object-cover"
        />
        <p className="text-sm mt-2 text-muted-foreground">
          {project.shortDesc}
        </p>
      </CardContent>
    </Card>
  );
}
