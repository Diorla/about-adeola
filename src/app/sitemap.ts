import { getProjects } from "@/app/projects/utils";

export const baseUrl = "https://adeolaade.com";

export default async function sitemap() {
  const projects = getProjects().map((post) => ({
    url: `${baseUrl}/projects/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/projects"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...projects];
}
