import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://adeolaade.com/",
      lastModified: new Date(),
      // changeFrequency: "yearly",
      // priority: 1,
    },
    {
      url: "https://adeolaade.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://adeolaade.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://adeolaade.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://adeolaade.com/journal",
      lastModified: new Date(),
    },
    {
      url: "https://adeolaade.com/contact",
      lastModified: new Date(),
    },
  ];
}
