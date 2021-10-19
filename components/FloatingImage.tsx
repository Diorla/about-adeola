import styled, { keyframes } from "styled-components";

const imageRotation = keyframes`
  0% {
    transform: rotate(10deg);
  }
  50% {
    transform: rotate(-10deg);
  }
  100% {
    transform: rotate(10deg);
  }
`;

const Image = styled.img`
  animation: ${imageRotation} 40s linear infinite;
  height: 240px;
  width: 240px;
  border-radius: 4px;
  padding: 8px;
  box-shadow: 0 0 4px -1px black;
`;

export default function FloatingImage() {
  return <Image src="/avatar.jpg" alt="Ade Adeola" />;
}
