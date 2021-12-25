import styled from "styled-components";
import breakpoints from "theme/breakpoints";

const generateGradient = (color: string) =>
  `linear-gradient(${color}, ${color})`;

const HeaderLink = styled.a`
  color: white;
  font-weight: 500;
  font-size: 21px;
  cursor: pointer;
  background-image: ${generateGradient("rgba(0, 0, 0, 0)")},
    ${generateGradient("white")};
  background-size: 100% 2px, 0 2px;
  background-position: 100% 100%, 50% 100%;
  background-repeat: no-repeat;
  transition: ${({ theme }) => theme.timing.transition};
  text-decoration: none;
  margin: auto 5px;
  &:hover {
    background-size: 0 2px, 100% 2px;
    text-decoration: none;
  }
  @media screen and (max-width: ${breakpoints.sm}) {
    display: none;
  }
`;

export default HeaderLink;
