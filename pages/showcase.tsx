import Highlight from "../components/highlight";
import styled from "styled-components";
import React from "react";
import Layout from "../components/Layout";

const website = true;
const mobile = true;
const pc = true;
const works = [
  {
    name: "Quotiday",
    link: "https://gamitask.web.app/",
    img: "images/gamitask.png",
    description: "The quickest way to get things done",
    website,
    pc,
    mobile,
  },
  {
    name: "Hera",
    link: "https://hera.adeolaade.com/",
    img: "images/hera.svg",
    description: "Spa and massage demo website",
    website,
  },
  {
    name: "Character generator",
    link: "https://github.com/Diorla/character-generator/releases/tag/2.0.1",
    img: "images/chargen.svg",
    description: "Generates random attributes for fictional characters",
    mobile,
  },
  {
    name: "Weblink",
    link: "https://weblinkio.app/",
    img: "images/linker.svg",
    description: "Cross browser, cross platform web bookmarking",
    website,
  },
  {
    name: "Leadership",
    link: "https://leadership.vercel.app/",
    img: "images/leadership.jpeg",
    description: "Leadership and management tools",
    website,
  },
  {
    name: "Image converter",
    link: "https://image-converter.adeolaade.com/",
    img: "images/image-converter.jpeg",
    description: "Convert and resize images",
    website,
  },
  {
    name: "App icons",
    link: "https://dribbble.com/shots/14631173-App-icons",
    img: "images/app-icons.jpg",
    description: "Mobile theme app icons",
    mobile,
  },
  {
    name: "Social app",
    link: "https://dribbble.com/shots/14835363-user-profile",
    img: "images/profile.jpg",
    description: "User profile page in a mobile app",
    mobile,
  },
  {
    name: "E-commerce app",
    link: "https://dribbble.com/shots/14597485-Credit-card-checkout",
    img: "images/checkout.jpg",
    description: "Checkout page in a mobile app",
    mobile,
  },
  {
    name: "Mortgage calculator",
    link: "https://dribbble.com/shots/14616342-mortgage-calculator",
    img: "images/mortgage-calculator.jpg",
    description: "Calculate monthly payment",
    mobile,
  },
  {
    name: "Digit-all",
    link: "https://codepen.io/Diorla/pen/yEMvgv",
    img: "images/digit-all.jpeg",
    description: "All your electronics here",
    website,
  },
  {
    name: "Puzzle",
    link: "https://codepen.io/Diorla/full/WZZEpE",
    img: "images/puzzle.jpeg",
    description: "Solve the puzzle in record time",
    website,
  },
  {
    name: "Calculator",
    link: "https://codepen.io/Diorla/full/borwJx",
    img: "images/calculator.jpeg",
    description: "Calculator with multiple themes",
    website,
  },
];

const ShowcaseDiv = styled.main`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Showcase = () => (
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

export default Showcase;
