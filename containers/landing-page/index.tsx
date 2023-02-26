import { useRef } from "react";
import { useIntersection } from "react-use";
import CTA from "./CTA";
import StyledLanding from "./StyledLanding";
import Subtitle from "./Subtitle";
import Title from "./Title";

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
