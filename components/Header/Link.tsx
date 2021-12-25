import React from "react";
import Link from "next/link";
import styled from "styled-components";

export const StyledLink = styled.a<{ active?: boolean }>`
  color: ${({ active }) => (active ? "#ffffff" : "#ffffffcc")};
  font-size: 36px;
  transition: 0.3s linear;
  transform-origin: top;
  &:hover {
    text-decoration: none;
    color: #ffffff;
    transform: skewY(5deg);
  }
`;

const HeaderLink = ({
  href,
  title,
  active,
}: {
  href: string;
  title: string;
  active?: boolean;
}) => (
  <Link href={href}>
    <StyledLink active={active}>{title}</StyledLink>
  </Link>
);

export default HeaderLink;
