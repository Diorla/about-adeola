import { useState } from "react";
import styled from "styled-components";

const Main = styled.main`
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  font-family: "DM Sans", sans-serif;
  transition: background 0.4s ease-in;
  background-color: #c394f8;
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
  max-height: 300px;
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
    src: "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    role: "Spiderman",
    name: "Peter Parker",
    description:
      "Reprehenderit Lorem adipisicing velit consectetur elit do reprehenderit amet irure laboris ad. Laborum tempor reprehenderit consequat enim est sint adipisicing dolor pariatur dolore dolore. 4",
  },
  {
    src: "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
    role: "Ironman",
    name: "Tony Stark",
    description:
      "Reprehenderit Lorem adipisicing velit consectetur elit do reprehenderit amet irure laboris ad. Laborum tempor reprehenderit consequat enim est sint adipisicing dolor pariatur dolore dolore. 5",
  },
  {
    src: "https://images.unsplash.com/photo-1533461502717-83546f485d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
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

export default function Temp() {
  const [active, setActive] = useState(0);

  const [images, setImages] = useState(imageList.slice(0, 3));

  const [remaining, setRemaining] = useState(imageList.slice(3));

  const updateImageList = (idx: number) => {
    const removedImage = images[active];
    setImages([
      ...images.slice(0, active),
      remaining[0],
      ...images.slice(active + 1),
    ]);
    setRemaining([...remaining.slice(1), removedImage]);
    setActive(idx);
  };

  return (
    <Main>
      <Container>
        <Cards className="cards">
          {images.map((item, idx) => (
            <Card
              position={getPosition(active, idx)}
              onClick={() => updateImageList(idx)}
            >
              <CardQuote>{item.description}</CardQuote>
              <Image src={item.src} alt="song" />
              <CardTitle>{item.name}</CardTitle>
              <CardRole>{item.role}</CardRole>
            </Card>
          ))}
        </Cards>
      </Container>
    </Main>
  );
}
