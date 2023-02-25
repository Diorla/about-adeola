import styled from "styled-components";

export default styled.button`
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.color.shadeDark};
  padding: 6px 10px;
  transition: 0.5s linear;
  font-size: ${({ theme }) => theme.font.subText};
  &:hover {
    background-color: ${({ theme }) => theme.color.shade};
  }
`;
