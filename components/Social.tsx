import {
  FaCodepen,
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaTwitter,
} from "react-icons/fa";
import { GiLinkedRings } from "react-icons/gi";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  justify-content: space-evenly;
  display: flex;
  & a {
    background: white;
    width: 40px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    padding: 4px;
  }
  & a:hover {
    text-decoration: none;
    box-shadow: 0 1px 4px;
  }
  & .medium {
    color: #00ab6c;
  }
  & .twitter {
    color: #1da1f2;
  }
  & .linkedin {
    color: #0077b5;
  }
  & .github {
    color: #333;
  }
  & .codepen {
    color: #ae63e4;
  }
  & .components {
    color: brown;
  }
`;

export default function Social() {
  return (
    <Wrapper>
      <a
        href="https://components.adeolaade.com/"
        target="_blank"
        rel="noreferrer"
        className="components"
        title="web components"
      >
        <GiLinkedRings />
      </a>
      <a
        href="https://www.github.com/Diorla/"
        target="_blank"
        rel="noreferrer"
        className="github"
        title="repositories"
      >
        <FaGithub />
      </a>
      <a
        href="https://codepen.io/Diorla/"
        target="_blank"
        rel="noreferrer"
        className="codepen"
        title="ui collections"
      >
        <FaCodepen />
      </a>
      <a
        href="https://twitter.com/intent/follow?original_referer=https%3A%2F%2Fwww.adeolaade.com%2Fabout%2F&ref_src=twsrc%5Etfw&region=follow_link&screen_name=dihorla&tw_p=followbutton/"
        target="_blank"
        rel="noreferrer"
        className="twitter"
        title="follow me"
      >
        <FaTwitter />
      </a>
      <a
        href="https://medium.com/@dihorla/"
        target="_blank"
        rel="noreferrer"
        className="medium"
        title="blogs"
      >
        <FaMedium />
      </a>
      <a
        href="https://www.linkedin.com/in/ade-adeola/"
        target="_blank"
        rel="noreferrer"
        className="linkedin"
        title="linkedin"
      >
        <FaLinkedin />
      </a>
    </Wrapper>
  );
}
