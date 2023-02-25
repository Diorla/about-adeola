import SectionTitle from "components/SectionTitle";
import { useRef, useState } from "react";
import { useBoolean, useIntersection, useInterval } from "react-use";
import truncateText from "scripts/truncate-text";
import styled from "styled-components";

const Main = styled.main`
  margin: 0;
  padding: 0;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  font-family: "DM Sans", sans-serif;
  transition: background 0.4s ease-in;
  background-color: #c394f8;
  flex-direction: column;
  background-image: url(/questions.png);
`;

type Position = "before" | "current" | "after";
const Card = styled.div<{ position: Position }>`
  position: absolute;
  width: 60%;
  height: 100%;
  left: 0;
  right: 0;
  margin: auto;
  transition: transform 0.4s ease;
  cursor: pointer;
  border: 1px solid silver;
  background-color: white;
  box-shadow: ${({ position }) =>
    position === "current" ? "0 0 4px silver" : "none"};
  transform: ${({ position }) => getTransform(position)};
  opacity: ${({ position }) => getOpacity(position)};
  z-index: ${({ position }) => getZIndex(position)};
  display: flex;
  align-items: center;
  padding: 8px;
  flex-direction: column;
  justify-content: space-evenly;
  &:hover {
    border: 1px solid ${({ theme }) => theme.color.primary};
  }
`;

const getTransform = (val: Position) => {
  if (val === "current") return "translateX(0) scale(1)";
  if (val === "before") return "translatex(40%) scale(0.8)";
  return "translatex(-40%) scale(0.8)";
};

const getOpacity = (val: Position) => {
  if (val === "current") return 1;
  return 0.4;
};

const getZIndex = (val: Position) => {
  if (val === "current") return 1;
  return 0;
};

const Container = styled.div`
  width: 100%;
  max-width: 800px;
  max-height: max-content;
  height: 100%;
  transform-style: preserve-3d;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const Cards = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
`;

const imageList = [
  {
    src: "https://images.unsplash.com/photo-1530651788726-1dbf58eeef1f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=882&q=80",
    role: "Superman",
    name: "Clark Kent",
    description:
      "Nulla aliqua amet pariatur consequat duis cillum. Non elit non anim officia labore culpa ea tempor. 1",
  },
  {
    src: "https://images.unsplash.com/photo-1559386484-97dfc0e15539?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1234&q=80",
    role: "The flash",
    name: "Wally West",
    description:
      "Laborum ut consequat velit reprehenderit eu sit. Ut irure et proident id in deserunt mollit dolore. Ullamco amet pariatur amet aliqua aliquip est dolore culpa. 2",
  },
  {
    src: "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    role: "Batman",
    name: "Bruce Wayne",
    description:
      "Reprehenderit Lorem adipisicing velit consectetur elit do reprehenderit amet irure laboris ad. Laborum tempor reprehenderit consequat enim est sint adipisicing dolor pariatur dolore dolore. 3",
  },
  {
    src: "https://this-person-does-not-exist.com/img/avatar-1196fc9fc86f78bd498f4687e1f60a5d.jpg",
    role: "Spiderman",
    name: "Peter Parker",
    description:
      "Reprehenderit Lorem adipisicing velit consectetur elit do reprehenderit amet irure laboris ad. Laborum tempor reprehenderit consequat enim est sint adipisicing dolor pariatur dolore dolore. 4",
  },
  {
    src: "https://this-person-does-not-exist.com/img/avatar-118336b1addd3e39e8932468b605f856.jpg",
    role: "Ironman",
    name: "Tony Stark",
    description:
      "Reprehenderit Lorem adipisicing velit consectetur elit do reprehenderit amet irure laboris ad. Laborum tempor reprehenderit consequat enim est sint adipisicing dolor pariatur dolore dolore. 5",
  },
  {
    src: "https://this-person-does-not-exist.com/img/avatar-11a1618ab66e63b3543441ffe76b3ce4.jpg",
    role: "Manhunter",
    name: "John Jones",
    description:
      "Reprehenderit Lorem adipisicing velit consectetur elit do reprehenderit amet irure laboris ad. Laborum tempor reprehenderit consequat enim est sint adipisicing dolor pariatur dolore dolore. 6",
  },
];

const getPosition = (currentPos: number, itemIdx: number): Position => {
  const score = currentPos - itemIdx;
  if (score === 0) return "current";
  if (score === -2 || score === 1) return "before";
  // -1, 2
  return "after";
};

const CardQuote = styled.div`
  font-size: ${({ theme }) => theme.font.subText};
  font-style: italic;
`;
const CardRole = styled.div`
  font-size: ${({ theme }) => theme.font.subText};
`;

const CardTitle = styled.div`
  font-size: ${({ theme }) => theme.font.headerThree};
`;

export default function Testimonials({
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

  if (intersection && intersection.intersectionRatio >= 1)
    setPath("testimonial");
  // TODO: Set it to false
  /**
   * So it will only start running when it comes into screen and
   * will stop as soon as it leaves the screen
   * intersection observer here
   */
  const [isRunning, setIsRunning] = useBoolean(true);

  const delay = 5e3;
  useInterval(
    () => {
      updateImageList(active);
    },
    isRunning ? delay : null
  );
  const [active, setActive] = useState(0);

  const [images, setImages] = useState(imageList.slice(0, 3));

  const [remaining, setRemaining] = useState(imageList.slice(3));

  const executiveUpdate = (idx: number) => {
    const removedImage = images[active];
    setImages([
      ...images.slice(0, active),
      remaining[0],
      ...images.slice(active + 1),
    ]);
    setRemaining([...remaining.slice(1), removedImage]);
    setActive(idx);
  };
  const updateImageList = (idx: number) => {
    if (idx === active) {
      if (idx === 0) executiveUpdate(2);
      else executiveUpdate(idx - 1);
    } else executiveUpdate(idx);
  };

  return (
    <Main>
      <SectionTitle ref={ref} id="testimonial" style={{ color: "white" }}>
        Testimonials
      </SectionTitle>
      <Container>
        <Cards className="cards">
          {images.map((item, idx) => (
            <Card
              key={idx}
              position={getPosition(active, idx)}
              onClick={() => {
                updateImageList(idx);
              }}
              onMouseEnter={() => setIsRunning(false)}
              onMouseLeave={() => setIsRunning(true)}
            >
              <CardQuote title={item.description}>
                {truncateText(item.description, 120)}
              </CardQuote>
              <Image src={item.src} alt="song" />
              <div style={{ textAlign: "center" }}>
                <CardTitle>{item.name}</CardTitle>
                <CardRole>{item.role}</CardRole>
              </div>
            </Card>
          ))}
        </Cards>
      </Container>
    </Main>
  );
}
