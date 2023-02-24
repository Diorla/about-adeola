import Link from "next/link";
import styled from "styled-components";

const NavButton = styled.a<{ active?: boolean }>`
  margin-right: 18px;
  background: ${({ theme, active }) =>
    active ? theme.color.secondary : theme.color.shadeLight};
  font-size: 16px;
  padding: 4px 12px;
  border-radius: 18px;
  color: ${({ active }) => (active ? "white" : "black")};
  transition: 0.5s linear;
  &:hover {
    text-decoration: none;
    background: ${({ theme, active }) =>
      active ? theme.color.secondaryDark : theme.color.shade};
    color: white;
  }
`;

export default function NavItem({
  children,
  href,
  active,
  external,
}: {
  children: string;
  href: string;
  active?: boolean;
  external?: boolean;
}) {
  if (external)
    return (
      <NavButton active={active} href={href}>
        {children}
      </NavButton>
    );
  return (
    <Link href={href}>
      <NavButton active={active}>{children}</NavButton>
    </Link>
  );
}
