import SectionTitle from "components/SectionTitle";
import { useRef } from "react";
import { useIntersection } from "react-use";
import Flex from "./Flex";
import ImageWrapper from "./ImageWrapper";
import ProfileImage from "./ProfileImage";
import Tools from "./tools";
import { Wrapper } from "./Wrapper";

export default function About({
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

  if (intersection && intersection.intersectionRatio >= 1) setPath("about");
  return (
    <Wrapper>
      <ImageWrapper ref={ref} id="about">
        <ProfileImage />
      </ImageWrapper>
      <SectionTitle style={{ marginTop: -40 }}>Hello, I am Adeola</SectionTitle>
      <div style={{ textAlign: "center" }}>
        <div>I am a web designer and developer based in London.</div>
        <div>
          I enjoy programming and creating things for the web or mobile devices.
        </div>
        <div>
          I&apos;m committed to creating great experience through my work.
        </div>
      </div>
      <Flex>
        <Tools />
      </Flex>
    </Wrapper>
  );
}
