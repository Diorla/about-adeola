import styled from "styled-components";

export default styled.input`
  font-size: 16px;
  border: none;
  box-shadow: inset 0 0 2px black;
  padding: 8px 12px;
  outline: none;
  background: transparent;
  color: #ffffff;
  &:focus {
    box-shadow: inset 0 0 2px;
  }
  &:disabled {
    cursor: not-allowed;
  }
  &::placeholder {
    font-style: italic;
    color: rgb(255 255 255 / 70%);
  }
`;
