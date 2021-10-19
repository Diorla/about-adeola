import styled from "styled-components";

const Feature = styled.div<{ isOdd: boolean }>`
  display: flex;
  flex-direction: ${({ isOdd }) => (isOdd ? "row" : "row-reverse")};
  flex-wrap: wrap;
  margin-bottom: 16px;
  align-items: center;
  box-shadow: 0 0 3px silver;
  margin: 8px;
`;

export default Feature;
