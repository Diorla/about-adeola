import Link from "next/link";
import { useWindowSize } from "react-use";
import { WorkProps } from "../../interfaces/WorkProps";
import Button from "./Button";
import Controls from "./Controls";
import Description from "./Description";
import IconRenderer from "./IconRenderer";
import Icons from "./Icons";
import StyledImage from "./StyledImage";
import Title from "./Title";
import Wrapper from "./Wrapper";

export default function Work({ work }: { work: WorkProps }) {
  const { width } = useWindowSize();
  return (
    <Wrapper>
      <Link href={`/project/${work.name}`}>
        <StyledImage column={width < 640} src={work.img} />
      </Link>
      <Description column={width < 640}>
        <div
          style={{ display: "flex", alignItems: "flex-start", marginBottom: 8 }}
        >
          <Link href={`/project/${work.name}`}>
            <Title>{work.name}</Title>
          </Link>
        </div>
        <Icons>
          {work.icons.map((item, idx) => (
            <IconRenderer key={idx} icon={item} />
          ))}
        </Icons>
        <div>{work.description}</div>
        <Controls>
          <a href={work.source} target="_blank" rel="noreferrer">
            <Button>View source</Button>
          </a>
          <a href={work.link} target="_blank" rel="noreferrer">
            <Button>Try it live</Button>
          </a>
        </Controls>
      </Description>
    </Wrapper>
  );
}
