import styled from "styled-components";
import backgroundShift from "./backgroundShift";

export default styled.div`
  background-image: url(landing.jpg);
  min-height: 100vh;
  background-position: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 70% 92%, 25% 100%, 0 94%);
  animation: ${backgroundShift} 20s linear 0s infinite forwards;
  background-repeat: repeat-x;
  background-size: 200% 100%;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: color;
  align-items: center;
`;
