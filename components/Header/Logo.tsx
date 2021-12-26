import Link from "next/link";
import styled from "styled-components";
import { StyledLink } from "./Link";
import styles from "./styles";

const { logo } = styles;

export const StyledLogo = styled(StyledLink)`
  font-family: ${logo.fontFamily};
  font-size: 28px;
  color: white;
  font-weight: bold;
  text-shadow: 0 0 2px black;
  & > span {
    opacity: 0;
    transition: 0.4s linear;
  }
  & > span:first-child {
    transition: 0.6s linear;
  }
  & > span:last-child {
    transition: 0.2s linear;
  }
  &:hover {
    transform: none;
    font-weight: bolder;
  }
  &:hover > span {
    opacity: 1;
  }
`;

const Logo = () => (
  <Link href="/">
    <StyledLogo>
      <span>{"<"}</span>Code<span>{" /"}</span>
      <span>{">"}</span>
    </StyledLogo>
  </Link>
);

export default Logo;
