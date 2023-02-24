import SectionTitle from "components/SectionTitle";
import styled from "styled-components";
import Work from "./Work";

const Wrapper = styled.div`
  clip-path: polygon(
    75% 0,
    100% 5%,
    100% 100%,
    80% 100%,
    67% 99%,
    50% 100%,
    0 100%,
    0 5%
  );
  background: hsl(90deg 10% 46%);
  background-image: url(/sunrise.png);
  background-position: center;
  min-height: 50vh;
  background-size: cover;
  background-color: rgb(255, 255, 255, 0.7);
  background-blend-mode: screen;
`;

const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.font.subHeader};
  text-align: center;
`;

export default function Works() {
  return (
    <Wrapper>
      <div style={{ height: 70 }} />
      <SectionTitle>My works</SectionTitle>
      <Subtitle>Some of my recent work</Subtitle>
      <Work />
      <Work />
      <Work />
      <Work />
      <Work />
      <div style={{ height: 35 }} />
    </Wrapper>
  );
}
