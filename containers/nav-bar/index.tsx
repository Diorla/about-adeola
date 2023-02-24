import Link from "next/link";
import styled from "styled-components";
import Nav from "./nav";
import NavItem from "./nav-item";

const Wrapper = styled.div`
  display: flex;
  padding: 4px;
  justify-content: space-between;
  position: fixed;
  top: 0px;
  z-index: 1;
  width: 100vw;
`;

export default function NavBar() {
  return (
    <Wrapper>
      <Link href="/">
        <img src="/white-logo.png" alt="Logo" height={24} />
      </Link>
      <Nav>
        <NavItem href="#about" active>
          About
        </NavItem>
        <NavItem href="#works">Works</NavItem>
        <NavItem href="#services">Services</NavItem>
        <NavItem href="#testimonial">Testimonial</NavItem>
        <NavItem href="#contact">Contact</NavItem>
      </Nav>
    </Wrapper>
  );
}
