import styled from "styled-components";
import styles from "./styles";

const { main } = styles;

export default styled.div`
  display: ${main.display};
  justify-content: ${main.justifyContent};
  padding: ${main.padding};
  align-items: ${main.alignItems};
  position: ${main.position};
  top: ${main.top};
  z-index: ${main.zIndex};
  background: ${main.backgroundColor};
  box-shadow: ${main.boxShadow};
  width: ${main.width};
  @media screen and (max-width: ${main.breakpoint}) {
    flex-direction: ${main.mdDirection};
    justify-content: ${main.mdJustifyContent};
    position: ${main.mdPosition};
  }
`;
