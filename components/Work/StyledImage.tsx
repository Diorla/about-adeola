import styled from "styled-components";

export default styled.div<{ $src: string; column: boolean }>`
  border-radius: 50%;
  background-image: url(${({ $src }) => $src});
  margin-right: 16px;
  background-color: black;
  background-blend-mode: luminosity;
  box-shadow: 0 0 8px black;
  transition: 0.25s linear;
  margin: ${({ column }) => (column ? "auto" : "auto 16px auto 8px")};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: clamp(200px, 40%, 320px);
  aspect-ratio: 1/1;
  &:hover {
    box-shadow: 0 0 4px black;
  }
`;
