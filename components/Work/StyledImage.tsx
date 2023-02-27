import styled from "styled-components";

export default styled.div<{ $src: string; column: boolean }>`
  height: 300px;
  min-width: 300px;
  border-radius: 50%;
  background-image: url(${({ $src }) => $src});
  margin-right: 16px;
  background-color: black;
  background-blend-mode: luminosity;
  box-shadow: 0 0 8px black;
  transition: 0.25s linear;
  margin: ${({ column }) => (column ? "auto" : "auto 16px auto 0")};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  &:hover {
    box-shadow: 0 0 4px black;
  }
`;

// Aiden Pierce -

// Eunice Pardo -

// Kyle Vettori -

// Esther Manning -

// Leila Bini

// Lucile Caruso
