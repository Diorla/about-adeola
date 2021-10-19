import { globby } from "globby";
import { GetStaticProps } from "next";
import React from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import Link from "../components/Link";

const generateSitemap = async () => {
  const pages = await globby([
    "pages/**/*.{ts,tsx,mdx}", // All routes inside /pages
    "!pages/**/[*.{ts,tsx}", // Ignore my dynamic route index Example /pages/blog/[slug].tsx
    "!pages/_*.{ts,tsx}", // Ignore next.js files
    "!pages/api", // Ignore API routes
    "!pages/admin.tsx", // Ignore pages not meant to be indexed
  ]);

  const urlSet = pages.map((page) => {
    const path = page
      .replace("pages", "")
      .replace("_content", "")
      .replace(/(.tsx|.ts)/, "")
      .replace(".mdx", "");
    const route = path === "/index" ? "/" : path;
    return route;
  });
  return urlSet;
};

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
`;

const Header = styled.div`
  text-align: center;
  font-size: 2em;
  color: white;
  font-weight: 400;
`;

const formatText = (link: string) =>
  link === "/" ? "home" : link.replace("/", "");

export default function Sitemap({ links }: { links: string[] }) {
  return (
    <Layout title="sitemap" active="sitemap">
      <Header>Sitemap</Header>
      <Column>
        {links &&
          links.map((route) => (
            <div key={route}>
              <Link
                href={`https://adeolaade.com${route}`}
                title={formatText(route)}
              />
            </div>
          ))}
      </Column>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const links = await generateSitemap();

  return {
    props: {
      links,
    },
  };
};
