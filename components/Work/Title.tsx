import styled from "styled-components";

const generateGradient = (color: string) =>
  `linear-gradient(${color}, ${color})`;

export default styled.h3`
  font-size: ${({ theme }) => theme.font.headerThree};
  background-image: ${generateGradient("rgba(0, 0, 0, 0)")},
    ${generateGradient("#333")};
  background-size: 100% 2px, 0 2px;
  background-position: 100% 100%, 50% 100%;
  background-repeat: no-repeat;
  transition: 0.25s linear;
  margin-bottom: 0;
  &:hover {
    background-size: 0 2px, 100% 2px;
  }
`;
