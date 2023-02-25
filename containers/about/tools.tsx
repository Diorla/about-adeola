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
  SiElectron,
  SiMaterialui,
  SiAntdesign,
  SiGraphql,
  SiExpo,
  SiRedux,
  SiJest,
  SiSass,
  SiSemanticuireact,
  SiAuth0,
  SiFigma,
  SiStorybook,
  SiStyledcomponents,
  SiFramer,
  SiTestinglibrary,
  SiAwsamplify,
} from "react-icons/si";
import styled from "styled-components";
import Icon from "./Icon";

const ToolsWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 4px;
  padding: 4px;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: 16px;
`;

const Tools = () => (
  <ToolsWrapper>
    <Icon color="#e65327">
      <SiHtml5 />
    </Icon>
    <Icon color="#498bda">
      <SiCss3 />
    </Icon>
    <Icon color="#f0db4f">
      <SiJavascript />
    </Icon>
    <Icon color="#0074c1">
      <SiTypescript />
    </Icon>
    <Icon color="#ffcb2c">
      <SiFirebase />
    </Icon>
    <Icon color="#4a96ab">
      <SiReact />
    </Icon>
    <Icon color="#61dafb">
      <SiReact />
    </Icon>
    <Icon color="#450135">
      <SiAdobexd />
    </Icon>
    <Icon color="#f54d27">
      <SiGit />
    </Icon>
    <Icon color="#283037">
      <SiGnubash />
    </Icon>
    <Icon color="#efc62b">
      <SiGooglechrome />
    </Icon>
    <Icon color="#172b4d">
      <SiElectron />
    </Icon>
    <Icon color="#00b0ff">
      <SiMaterialui />
    </Icon>
    <Icon color="#1890ff">
      <SiAntdesign />
    </Icon>
    <Icon color="#e535ab">
      <SiGraphql />
    </Icon>
    <Icon color="#1b1f23">
      <SiExpo />
    </Icon>
    <Icon color="#764abc">
      <SiRedux />
    </Icon>
    <Icon color="#c21325">
      <SiJest />
    </Icon>
    <Icon color="#c76494">
      <SiSass />
    </Icon>
    <Icon color="#35bdb2">
      <SiSemanticuireact />
    </Icon>
    <Icon color="#333">
      <SiAuth0 />
    </Icon>
    <Icon color="#9f61ff">
      <SiFigma />
    </Icon>
    <Icon color="#ff4785">
      <SiStorybook />
    </Icon>
    <Icon color="#cf76b3">
      <SiStyledcomponents />
    </Icon>
    <Icon color="#0099ff">
      <SiFramer />
    </Icon>
    <Icon color="#f33f3e">
      <SiTestinglibrary />
    </Icon>
    <Icon color="#ea8c1f">
      <SiAwsamplify />
    </Icon>
  </ToolsWrapper>
);

export default Tools;
