import Gradient from "./Gradient";
import SectionTitle from "../../components/SectionTitle";
import Wrapper from "./Wrapper";
import Form from "./Form";
import BorderBottom from "./BorderBottom";
import { useIntersection } from "react-use";
import { useRef } from "react";

export default function Contact({
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

  if (intersection && intersection.intersectionRatio >= 1) setPath("contact");
  return (
    <Gradient>
      <Wrapper>
        <SectionTitle ref={ref} id="contact" style={{ marginTop: 40 }}>
          <BorderBottom>Want to get in </BorderBottom>
          <span style={{ fontFamily: "cursive", fontStyle: "italic" }}>
            touch
          </span>
          ?
        </SectionTitle>
        <Form />
      </Wrapper>
    </Gradient>
  );
}
