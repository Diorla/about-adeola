import { useState } from "react";
import { MdClose } from "react-icons/md";
import styled, { keyframes } from "styled-components";
import MenuItem from "./menu-item";

const hide = keyframes`
  0% {
    transform: scaleX(1);
  }
  100% {
    transform: scaleX(0);
  }
`;
const show = keyframes`
  0% {
    transform: scaleX(0);
  }
  100% {
    transform: scaleX(1);
  }
`;

const StyledSidebar = styled.div`
  position: absolute;
  width: clamp(200px, 50%, 320px);
  min-height: 100vh;
  z-index: 1000;
  top: 0;
  right: 0;
  transition: 1s linear;
  transform-origin: right;
  background-color: ${({ theme }) => theme.color.primaryDark};
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  color: white;
`;

const Show = styled(StyledSidebar)`
  animation: ${show} 0.6s ease 0s 1 forwards;
`;

const Hide = styled(StyledSidebar)`
  animation: ${hide} 0.6s ease 0s 1 forwards;
`;

export default function Sidebar({
  toggleSidebar,
  showSidebar,
}: {
  toggleSidebar: () => void;
  showSidebar: boolean;
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  if (showSidebar)
    return (
      <Show>
        <div>
          <MdClose
            onClick={() => {
              toggleSidebar();
              setIsRevealed(true);
            }}
            size={36}
          />
        </div>
        <MenuItem href="#about" active>
          About
        </MenuItem>
        <MenuItem href="#works">Works</MenuItem>
        <MenuItem href="#services">Services</MenuItem>
        <MenuItem href="#testimonial">Testimonial</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </Show>
    );
  if (isRevealed)
    return (
      <Hide>
        <div>
          <MdClose
            onClick={() => {
              toggleSidebar();
              setIsRevealed(true);
            }}
            size={36}
          />
        </div>
        <MenuItem href="#about" active>
          About
        </MenuItem>
        <MenuItem href="#works">Works</MenuItem>
        <MenuItem href="#services">Services</MenuItem>
        <MenuItem href="#testimonial">Testimonial</MenuItem>
        <MenuItem href="#contact">Contact</MenuItem>
      </Hide>
    );
  return null;
}
