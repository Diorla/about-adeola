import Highlight from "../components/highlight";
import styled from "styled-components";
import React from "react";
import Layout from "../components/Layout";
import { GetStaticProps } from "next";
import path from "path";
import fs from "fs";
import Work from "../interfaces/Work";

const ShowcaseDiv = styled.main`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Showcase = ({ works }: { works: Work[] }) => (
  <Layout
    active="showcase"
    title="Ade Adeola - Showcase"
    canonical="/showcase"
    description="Some of my personal projects"
  >
    <h2 style={{ color: "white" }}>These are some of my projects</h2>
    <ShowcaseDiv>
      {works.map((item, idx) => (
        <Highlight key={idx} {...item} />
      ))}
    </ShowcaseDiv>
    <style jsx>{`
      h2 {
        font-weight: bold;
        text-align: center;
        margin: 24px auto 48px;
        font-style: italic;
      }
      main {
        flex: 1;
        background: linear-gradient(
          rgba(232, 230, 230, 1),
          rgba(232, 230, 230, 0.1)
        );
      }
    `}</style>
  </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
  const res = path.join(process.cwd(), "api/works.json");
  const result = fs.readFileSync(res, "utf8");
  const works: Work[] = JSON.parse(result);

  return {
    props: {
      works,
    },
  };
};
export default Showcase;
