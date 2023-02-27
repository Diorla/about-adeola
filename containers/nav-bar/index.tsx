import Link from "next/link";
import { useWindowSize } from "react-use";
import styled from "styled-components";
import Nav from "./nav";
import NavItem from "./nav-item";
import { MdMenu } from "react-icons/md";

const Wrapper = styled.div<{ $offset: boolean }>`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  z-index: 1;
  width: 100vw;
  background-color: ${({ theme, $offset }) =>
    $offset ? theme.color.secondary : "transparent"};
  box-shadow: ${({ theme, $offset: offset }) =>
    offset ? `0 1px 8px ${theme.color.shadeDark}` : "none"};
  transition: 0.5s linear;
  align-items: center;
`;

export default function NavBar({
  toggleSidebar: toggleSideBar,
  path,
  offset,
}: {
  toggleSidebar: () => void;
  path: string;
  offset: boolean;
}) {
  const { width } = useWindowSize();
  return (
    <Wrapper $offset={offset}>
      <Link href="/">
        <img
          src="/white-logo.png"
          alt="Logo"
          height={24}
          style={{ marginLeft: 4 }}
        />
      </Link>
      {width > 640 ? (
        <Nav>
          <NavItem href="#about" active={path === "about"}>
            About
          </NavItem>
          <NavItem href="#works" active={path === "works"}>
            Works
          </NavItem>
          <NavItem href="#services" active={path === "services"}>
            Services
          </NavItem>
          <NavItem href="#testimonial" active={path === "testimonial"}>
            Testimonial
          </NavItem>
          <NavItem href="#contact" active={path === "contact"}>
            Contact
          </NavItem>
        </Nav>
      ) : (
        <MdMenu
          color="white"
          size={36}
          onClick={toggleSideBar}
          style={{ marginRight: 4 }}
        />
      )}
    </Wrapper>
  );
}
