import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.adeolaade.com/",
      lastModified: new Date(),
      // changeFrequency: "yearly",
      // priority: 1,
    },
    {
      url: "https://www.adeolaade.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://www.adeolaade.com/projects",
      lastModified: new Date(),
    },
    {
      url: "https://www.adeolaade.com/services",
      lastModified: new Date(),
    },
    {
      url: "https://www.adeolaade.com/journal",
      lastModified: new Date(),
    },
    {
      url: "https://www.adeolaade.com/contact",
      lastModified: new Date(),
    },
  ];
}
