import { SiAntdesign, SiCss3, SiFirebase, SiHtml5 } from "react-icons/si";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 640px;
  margin: 16px auto;
  align-items: center;
  &:hover div {
    background-blend-mode: unset;
  }
`;

const StyledImage = styled.div<{ src: string }>`
  height: 300px;
  min-width: 300px;
  border-radius: 50%;
  background-image: url(${({ src }) => src});
  margin-right: 16px;
  background-color: black;
  background-blend-mode: luminosity;
  box-shadow: 0 0 8px black;
  transition: 0.25s linear;
  &:hover {
    box-shadow: 0 0 4px black;
  }
`;

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.headerTwo};
`;

const Description = styled.div`
  max-height: 100px;
  overflow: hidden;
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 4px;
`;

const Button = styled.button`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.shadeDark};
  padding: 6px 10px;
  transition: 0.5s linear;
  font-size: ${({ theme }) => theme.font.subText};
  &:hover {
    background-color: ${({ theme }) => theme.color.shade};
  }
`;

export default function Work() {
  return (
    <Wrapper>
      <StyledImage src="https://cdn.pixabay.com/photo/2017/03/21/08/34/joint-project-2161493_960_720.jpg" />
      <div>
        <Title>Title</Title>
        <Icons>
          <SiAntdesign color="#1890ff" />
          <SiHtml5 color="#e65327" />
          <SiCss3 color="#498bda" />
          <SiFirebase color="#ffcb2c" />
        </Icons>
        <Description>
          Dolore ut ad nisi veniam ipsum consequat dolor irure ut amet ipsum.
          Cupidatat mollit fugiat dolor quis id ullamco ad. Excepteur dolor
          aliquip quis voluptate eu consectetur proident. Magna anim adipisicing
          consectetur elit labore amet eu nulla sunt consequat in reprehenderit.
        </Description>
        <Controls>
          <Button>View source</Button>
          <Button>Try it live</Button>
        </Controls>
      </div>
    </Wrapper>
  );
}
