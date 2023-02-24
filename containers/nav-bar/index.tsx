import Link from "next/link";
import { useWindowScroll, useWindowSize } from "react-use";
import styled from "styled-components";
import Nav from "./nav";
import NavItem from "./nav-item";
import { MdMenu } from "react-icons/md";

const Wrapper = styled.div<{ offset: boolean }>`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  z-index: 1;
  width: 100vw;
  background-color: ${({ theme, offset }) =>
    offset ? theme.color.secondary : "transparent"};
  box-shadow: ${({ theme, offset }) =>
    offset ? `0 1px 8px ${theme.color.shadeDark}` : "none"};
  transition: 0.5s linear;
`;

export default function NavBar({
  toggleSidebar: toggleSideBar,
}: {
  toggleSidebar: () => void;
}) {
  const { y } = useWindowScroll();
  const { width } = useWindowSize();
  return (
    <Wrapper offset={y > 50}>
      <Link href="/">
        <img src="/white-logo.png" alt="Logo" height={24} />
      </Link>
      {width > 640 ? (
        <Nav>
          <NavItem href="#about" active>
            About
          </NavItem>
          <NavItem href="#works">Works</NavItem>
          <NavItem href="#services">Services</NavItem>
          <NavItem href="#testimonial">Testimonial</NavItem>
          <NavItem href="#contact">Contact</NavItem>
        </Nav>
      ) : (
        <MdMenu
          color="white"
          size={36}
          onClick={toggleSideBar}
          style={{ marginRight: 16 }}
        />
      )}
    </Wrapper>
  );
}
