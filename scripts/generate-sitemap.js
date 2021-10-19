const fs = require("fs");
const globby = require("micromatch");

/**
 * Code gotten from https://codebycorey.com/blog/nextjs-sitemap
 */
const generateSitemap = async () => {
  // Fetch all routes based on patterns
  // Your folder structure might be different so change bellow to match your needs
  const pages = globby([
    "pages/**/*.{ts,tsx,mdx}",
    "_content/**/*.mdx",
    "!pages/**/[*.{ts,tsx}",
    "!pages/_*.{ts,tsx}",
    "!pages/api",
    "!pages/admin.tsx", // Ignore pages not meant to be indexed
  ]);

  const urlSet = pages
    .map((page) => {
      // Remove none route related parts of filename.
      const path = page
        .replace("pages", "")
        .replace("_content", "")
        .replace(/(.tsx|.ts)/, "")
        .replace(".mdx", "");
      // Remove the word index from route
      const route = path === "/index" ? "" : path;
      // Build url portion of sitemap.xml
      return `<url><loc>https://adeolaade.com${route}</loc></url>`;
    })
    .join("");

  // Add urlSet to entire sitemap string
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlSet}</urlset>`;

  // Create sitemap file
  fs.writeFileSync("public/sitemap.xml", sitemap);
};

module.exports = generateSitemap;
