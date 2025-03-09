import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import ProjectProps from "@/types/ProjectProps";

export default function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div key={project.title}>
      <Card className="h-full flex flex-col">
        <CardHeader className="relative overflow-hidden h-48">
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform hover:scale-110 rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="flex-grow">
          <CardTitle className="my-2">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          {project.sourceLink ? (
            <Button asChild variant="outline" size="sm">
              <a href={project.sourceLink} target="_blank">
                <Image
                  src="/sauce.svg"
                  height={21}
                  width={21}
                  alt="sauce icon"
                />
                Sauce
              </a>
            </Button>
          ) : (
            <span />
          )}
          {project.liveLink ? (
            <Button asChild size="sm">
              <a href={project.liveLink} target="_blank">
                <ExternalLink className="h-4 w-4" />
                Live Demo
              </a>
            </Button>
          ) : (
            <span />
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
