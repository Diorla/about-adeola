import { MorphReplace } from "react-svg-morph";
import styled from "styled-components";
/**
 * // TODO: Use SVG animation
 * replace react-svg-morph with svg-css animation
 */

const Menu = () => (
  <svg width="12" fill="#fff" height="12" viewBox="0 0 24 24">
    <path
      d="M7 6C5.34315 6 4 7.34315 4 9H20C20 7.34315 18.6569 6 17 6H7Z"
      fill="#fff"
    ></path>
    <path
      d="M7 18C5.34315 18 4 16.6569 4 15H20C20 16.6569 18.6569 18 17 18H7Z"
      fill="#fff"
    ></path>
    <path
      d="M3 11C2.44772 11 2 11.4477 2 12C2 12.5523 2.44772 13 3 13H21C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21 11H3Z"
      fill="#fff"
    ></path>
  </svg>
);

const Close = () => (
  <svg width="12" height="12" fill="#fff" viewBox="0 0 24 24">
    <path
      fill="#fff"
      stroke="#fff"
      strokeWidth="2"
      d="M3,3 L21,21 M3,21 L21,3"
    ></path>
  </svg>
);

const StyledMorph = styled.div`
  cursor: url(/cursor/pointer.svg), pointer;
  filter: drop-shadow(0px 0px 1px black);
  display: flex;
  &:hover {
    filter: drop-shadow(0px 0px 2px black);
  }
`;

const Morph = ({
  onClick,
  hidden,
}: {
  onClick: (e: React.SyntheticEvent) => void;
  hidden?: boolean;
}) => {
  return (
    <StyledMorph onClick={onClick}>
      <MorphReplace width={36} height={36}>
        {hidden ? <Menu key="a" /> : <Close key="b" />}
      </MorphReplace>
    </StyledMorph>
  );
};

export default Morph;
