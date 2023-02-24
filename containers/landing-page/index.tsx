import { useEffect, useRef, useState } from "react";
import { useIntersection } from "react-use";
import styled, { keyframes } from "styled-components";
const backgroundShift = keyframes`
  0% {
    background-position: 0% 50%;
    background-size: 200% 100%;
  }
  50% {
    background-position: 100% 50%;
    background-size: 100% 150%;
  }
  100% {
    background-position: 200% 50%;
    background-size: 200% 100%;
  }
`;

const StyledLanding = styled.div`
  background-image: url(landing.jpg);
  min-height: 100vh;
  background-position: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 92%, 25% 100%, 0 94%);
  animation: ${backgroundShift} 20s linear 0s infinite forwards;
  background-repeat: repeat-x;
  background-size: 200% 100%;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.font.headerOne};
  line-height: 40px;
`;

const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.font.subHeader};
  margin-left: 48px;
`;

const CTA = styled.div`
  color: white;
  text-shadow: 0 0 black;
  margin-bottom: 10%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export default function LandingPage({
  setPath,
}: {
  setPath: (path: string) => void;
}) {
  const ref = useRef(null);
  const intersection = useIntersection(ref, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  if (intersection && intersection.intersectionRatio >= 1) setPath("");
  return (
    <StyledLanding>
      <div ref={ref}></div>
      <CTA>
        <Title>Web developer</Title>
        <Subtitle>Design, Developer, Create something beautiful</Subtitle>
      </CTA>
    </StyledLanding>
  );
}
