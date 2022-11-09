import styled from "styled-components";
import { useState } from "react";
import Link from "next/link";
import Layer from "./Layer";
import Footer from "./Footer";
import Logo from "../Header/Logo";
import MenuControl from "../MenuControl";
import MenuSlide from "../MenuSlide";
import HeaderLink from "./HeaderLink";

const StyledContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-image: url(/backgrounds/brain.jpg);
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const Main = styled.div`
  min-height: calc(100vh - 138px);
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 8px;
  position: sticky;
  top: 0;
  z-index: 100000;
  background-color: teal;
`;
export default function Wrapper({
  children,
  active,
}: {
  children: React.ReactNode;
  active: string;
}) {
  const [hidden, setHidden] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const updateHiddenStatus = () => {
    if (!isLoaded) setIsLoaded(true);
    setHidden(!hidden);
  };
  return (
    <StyledContainer>
      <Layer>
        <div>
          <Menu>
            <div>
              <Logo />
              <Link href="/about">
                <HeaderLink>About</HeaderLink>
              </Link>
              <Link href="/showcase">
                <HeaderLink>Showcase</HeaderLink>
              </Link>
              <Link href="/resources">
                <HeaderLink>Resources</HeaderLink>
              </Link>
            </div>
            <MenuControl
              onClick={() => updateHiddenStatus()}
              clicked={!hidden}
            />
          </Menu>
          <Main>{children}</Main>
          {isLoaded && <MenuSlide hidden={hidden} active={active} />}
          <Footer />
        </div>
      </Layer>
    </StyledContainer>
  );
}
