import projects from "@/data/projects";
import ProjectCard from "./ProjectCard";

import type { Metadata } from "next";
import Jumbotron from "@/components/main/Jumbotron";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <main>
      <Jumbotron
        title="Projects"
        subtitle="Explore some of my latest projects"
      />
      <div className="max-w-7xl mx-auto my-8 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </main>
  );
}
