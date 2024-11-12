import Link from "next/link";
import { Button } from "@/components/ui/button";
import LandingWrapper from "@/components/main/LandingWrapper";
import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectsPage() {
  return (
    <div>
      <LandingWrapper>
        <div className="flex flex-col items-center justify-center h-full my-32">
          <h1 className="text-4xl font-bold text-center">
            Welcome to My Projects
          </h1>
          <p className="text-lg text-center mb-8">
            Explore some of my latest projects
          </p>
          <Button asChild>
            <Link href="/contact">Contact Me</Link>
          </Button>
        </div>
      </LandingWrapper>
      <div className="max-w-7xl mx-auto my-8 px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
