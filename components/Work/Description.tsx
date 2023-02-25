import styled from "styled-components";

export default styled.div<{ column: boolean }>`
  min-width: 240px;
  flex: 1;
  padding: 8px;
  text-align: ${({ column }) => (column ? "center" : "start")};
`;
