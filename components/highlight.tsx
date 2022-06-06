import React from "react";
import styled from "styled-components";
import { FaAppStore, FaApple, FaWindows, FaGooglePlay } from "react-icons/fa";
import { AiOutlineGlobal } from "react-icons/ai";
import Link from "next/link";

interface HighlightProps {
  name: string;
  link: string;
  img: string;
  description: string;
  website?: boolean;
  pc?: boolean;
  mobile?: boolean;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  background: white;
  margin: 8px;
`;

const Header = styled.div<{ image: string }>`
  background-image: ${({ image }) => "url(" + image + ")"};
  display: inline-flex;
  height: 200px;
  width: 320px;
  display: relative;
  background-position: center;
  background-size: cover;
  transition: 0.4s linear;
  background-blend-mode: multiply;
  &:hover {
    text-decoration: none;
    background-color: teal;
  }
`;

const Caption = styled.div`
  height: 60px;
  text-align: center;
`;

const Title = styled.a`
  font-weight: bolder;
  color: #004d40;
`;

const Description = styled.div`
  color: #4c4949;
  font-style: italic;
`;

const Temp = styled.div`
  color: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  background: teal;
  transition: 0.3s linear;
  &:hover {
    opacity: 1;
  }
`;

const Highlight = ({
  name,
  link,
  img,
  description,
  website,
  pc,
  mobile,
}: HighlightProps) => {
  const title = description.length > 30 ? description : "";
  return (
    <Wrapper>
      <Header image={img}>
        <Temp>
          {website && (
            <>
              <AiOutlineGlobal />
            </>
          )}
          {pc && (
            <>
              <FaApple />
              <FaWindows />
            </>
          )}
          {mobile && (
            <>
              <FaAppStore />
              <FaGooglePlay />
            </>
          )}
        </Temp>
      </Header>
      <Caption title={title}>
        <Link href={`/project/${link}`} passHref>
          <Title>{name}</Title>
        </Link>
        <Description>
          {description.substr(0, 30)}
          {description.length > 30 && "..."}
        </Description>
      </Caption>
    </Wrapper>
  );
};

export default Highlight;
