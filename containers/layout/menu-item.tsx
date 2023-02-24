import Link from "next/link";
import styled from "styled-components";

const NavButton = styled.a<{ active?: boolean }>`
  width: 100%;
  font-size: 16px;

  background: ${({ theme, active }) =>
    active ? theme.color.primary : theme.color.primaryDark};
  padding: 4px 12px;
  color: black;
  transition: 0.5s linear;
  font-weight: 600;
  align-items: center;
  &:hover {
    text-decoration: none;
    background: ${({ theme, active }) =>
      active ? theme.color.primaryLight : theme.color.primary};
    color: white;
  }
`;

export default function MenuItem({
  children,
  href = "",
  active,
  external,
  onClick,
}: {
  children: string;
  href?: string;
  active?: boolean;
  external?: boolean;
  onClick?: () => void;
}) {
  if (external)
    return (
      <NavButton active={active} href={href} onClick={onClick}>
        {children}
      </NavButton>
    );
  return (
    <Link href={href}>
      <NavButton active={active} onClick={onClick}>
        {children}
      </NavButton>
    </Link>
  );
}
