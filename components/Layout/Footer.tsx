import Link from "next/link";
import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  border-top: 1px solid white;
  color: white;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  z-index: 1000;
  background-color: #123456;
  z-index: 1;
`;

const FooterLink = styled.a`
  color: white;
  font-size: 16px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <div>Ade Adeola &copy; {new Date().getFullYear()}</div>
      <div>
        <Link href="/til">
          <FooterLink>Things I've learnt</FooterLink>
        </Link>
      </div>
      <div>
        Made with <span style={{ color: "#ef9a9a" }}>❤</span> and React, Hosted
        on Vercel
      </div>
    </Wrapper>
  );
}
