import styled from "styled-components";

export default styled.input`
  background: #ffffff;
  border: 1px solid ${({ theme }) => theme.color.secondaryLight};
  font-size: ${({ theme }) => theme.font.subText};
  padding: 8px;
  outline: none;
  &:focus {
    border: 1px solid ${({ theme }) => theme.color.secondaryDark};
  }
`;
