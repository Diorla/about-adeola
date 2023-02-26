import SectionTitle from "components/SectionTitle";
import { useRef } from "react";
import { useIntersection } from "react-use";
import Item from "./Item";
import Row from "./Row";

export default function Services({
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

  if (intersection && intersection.intersectionRatio >= 1) setPath("services");
  return (
    <div id="services">
      <SectionTitle ref={ref}>Services</SectionTitle>
      <Row>
        <Item src="/pencil.png" title="Design">
          <li>Design web layout and structure</li>
          <li>Create positive user experience</li>
          <li>Create visually appealing designs</li>
          <li>Create palette, themes and brands</li>
        </Item>
        <Item src="/code.png" title="Code">
          <li>Turn design to code</li>
          <li>Optimise website for different devices</li>
          <li>Integrate various features and functionality</li>
        </Item>
        <Item src="/maintain.png" title="Maintenance">
          <li>Update design and security</li>
          <li>Fixing issues as they arise</li>
          <li>Ensuring the website is up to date</li>
        </Item>
      </Row>
    </div>
  );
}
