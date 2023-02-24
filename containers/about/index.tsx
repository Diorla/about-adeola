import SectionTitle from "components/SectionTitle";
import styled from "styled-components";
import Tools from "./tools";

const ProfileImage = styled.div`
  background-image: url(/profile.jpeg);
  width: 200px;
  height: 400px;
  background-size: 250%;
  border-radius: 50%;
  transform: rotate(45deg);
  background-position: 50%;
`;

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const Flex = styled.div`
  display: flex;
  flex: 1;
  max-width: 640px;
  margin: auto;
`;

export default function About() {
  return (
    <Wrapper id="about">
      <ImageWrapper>
        <ProfileImage />
      </ImageWrapper>
      <SectionTitle style={{ marginTop: -40 }}>Hello, I am Adeola</SectionTitle>
      <div style={{ textAlign: "center" }}>
        <div>I am a web designer and developer based in London.</div>
        <div>
          I enjoy programming and creating things for the web or mobile devices.
        </div>
        <div>I'm committed to creating great experience through my work.</div>
      </div>
      <Flex>
        <Tools />
      </Flex>
    </Wrapper>
  );
}
