import styled from "styled-components";

export default styled.button`
  background-color: ${({ theme }) => theme.color.primary};
  border: none;
  padding: 8px 16px;
  color: white;
  font-size: ${({ theme }) => theme.font.subText};
  transition: 0.5s linear;
  &:hover {
    background-color: ${({ theme }) => theme.color.primaryDark};
  }
`;
