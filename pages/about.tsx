import {
  SiAdobexd,
  SiCss3,
  SiFirebase,
  SiGit,
  SiGnubash,
  SiGooglechrome,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiWire,
  SiElectron,
  SiMaterialui,
} from "react-icons/si";
import styled, { keyframes } from "styled-components";
import Layout from "../components/Layout";
import FloatingImage from "../components/FloatingImage";

const Icon = styled.div`
  color: ${(props) => props.color};
  margin-right: 4px;
  display: flex;
  align-items: center;
`;

const Section = styled.div`
  display: flex;
  background: transparent;
`;

const SectionOne = styled(Section)`
  color: white;
  text-shadow: 0 0 1px black;
  width: 100%;
  flex-wrap: wrap;
  margin: 20px 0;
  & div {
    display: flex;
    flex: 1;
    align-items: center;
    padding: 4px;
    min-width: 240px;
  }
  & > div {
    justify-content: space-around;
  }
  & ul {
    font-family: "Baloo Tamma 2", cursive;
  }
`;

const backgroundAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const SectionTwo = styled(Section)`
  height: 210px;
  align-items: center;
  justify-content: space-around;
  font-family: cursive;
  clip-path: polygon(0 10%, 100% 0, 100% 90%, 0% 100%);
  background: linear-gradient(218deg, #e0f2f1, #008080);
  background-size: 400% 400%;
  animation: ${backgroundAnimation} 20s ease infinite;
`;

const SectionThree = styled(Section)`
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    font-weight: 500;
  }
  & ul {
    background: rgb(255 255 255 / 80%);
    width: 150px;
    text-align: center;
    margin: 4px;
    display: flex;
    flex: 1;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
  & li {
    margin: 16px;
    display: flex;
    align-items: center;
  }
  & h1 {
    font-weight: bold;
    border-bottom: 1px solid white;
    text-align: center;
  }
`;
const About = () => (
  <Layout
    active="about"
    title="Ade Adeola - About"
    canonical="/about"
    description="Learn more about Adeola"
  >
    <SectionOne>
      <div>
        <FloatingImage />
      </div>
      <div>
        <ul>
          <li>Hi! I am Adeola, a software engineer based in Nigeria.</li>
          <li>
            I enjoy programming and creating things for the web or mobile
            devices.
          </li>
          <li>I'm committed to creating great experience through my work.</li>
          <li>
            Local Time:{" "}
            {new Date().toLocaleTimeString("en-GB", {
              timeZone: "Africa/Lagos",
            })}
          </li>
        </ul>
      </div>
    </SectionOne>
    <SectionTwo>
      <ul>
        <li>Mobile first developer</li>
        <li>Responsive design</li>
        <li>Keen attention to details</li>
        <li>Curious and a critical thinker</li>
        <li>Cross browser tested website</li>
        <li>Clean code and best practices</li>
      </ul>
    </SectionTwo>
    <SectionThree>
      <h1>Tools</h1>
      <div>
        <ul>
          <li>
            <Icon color="#e65327">
              <SiHtml5 />
            </Icon>
            HTML5
          </li>
          <li>
            <Icon color="#498bda">
              <SiCss3 />
            </Icon>
            CSS
          </li>
          <li>
            <Icon color="#ffcb2c">
              <SiFirebase />
            </Icon>
            Firebase
          </li>
          <li>
            <Icon color="#f0db4f">
              <SiJavascript />
            </Icon>
            Javascript
          </li>
          <li>
            <Icon color="#0074c1">
              <SiTypescript />
            </Icon>
            Typescript
          </li>
          <li>
            <Icon color="#4a96ab">
              <SiReact />
            </Icon>
            React-js
          </li>
          <li>
            <Icon color="#61dafb">
              <SiReact />
            </Icon>
            React-native
          </li>
          <li>
            <Icon color="#450135">
              <SiAdobexd />
            </Icon>
            Adobe XD
          </li>
          <li>
            <Icon color="">
              <SiWire />
            </Icon>
            Wireframe
          </li>
          <li>
            <Icon color="#f54d27">
              <SiGit />
            </Icon>
            Git
          </li>
          <li>
            <Icon color="#283037">
              <SiGnubash />
            </Icon>
            Bash
          </li>
          <li>
            <Icon color="#efc62b">
              <SiGooglechrome />
            </Icon>
            Chrome DevTools
          </li>
          <li>
            <Icon color="#172b4d">
              <SiElectron />
            </Icon>
            Electron
          </li>
          <li>
            <Icon color="#00b0ff">
              <SiMaterialui />
            </Icon>
            Material-UI
          </li>
        </ul>
      </div>
    </SectionThree>
  </Layout>
);

export default About;
