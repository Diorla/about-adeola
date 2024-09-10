import { getProjects } from "@/app/projects/utils";
import ProjectCard from "./ProjectCard";

export default function ProjectsRender() {
  const projects = getProjects();

  return (
    <div>
      {projects
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <ProjectCard
            key={post.slug}
            title={post.metadata.title}
            description={post.metadata.description}
            slug={post.slug}
            image={post.metadata.image}
          />
        ))}
    </div>
  );
}
