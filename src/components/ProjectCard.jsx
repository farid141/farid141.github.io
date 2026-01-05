import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProjectCard({ project, onClick }) {
  let thumbnail;
  switch (project.media[0].type) {
    case 'gdrive':
      thumbnail = `https://drive.google.com/thumbnail?id=${project.media[0].src}&sz=w640`;
      break;
    case 'youtube':
      thumbnail = `https://img.youtube.com/vi/${project.media[0].src}/maxresdefault.jpg`;
      break;
  
    default:
      thumbnail = project.media[0].src;
      break;
  }
  
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
