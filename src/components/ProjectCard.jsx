import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCard({ project, onClick }) {
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
          src={project.thumbnail}
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
