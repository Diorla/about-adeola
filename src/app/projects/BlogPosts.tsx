import { getBlogPosts } from "@/app/projects/utils";
import ProjectCard from "./ProjectCard";

export default function BlogPosts() {
  const allBlogs = getBlogPosts();

  return (
    <div>
      {allBlogs
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
