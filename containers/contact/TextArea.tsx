import styled from "styled-components";

export default styled.textarea`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.color.primaryLight};
  font-size: ${({ theme }) => theme.font.subText};
  padding: 4px;
  outline: none;
  resize: vertical;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.primaryDark};
  }
`;
