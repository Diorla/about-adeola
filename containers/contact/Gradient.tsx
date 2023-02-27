import styled from "styled-components";

const Gradient = styled.div`
  ${({ theme }) =>
    `background: linear-gradient(180deg, ${theme.color.primaryLight} 0%, #333333 80%)`};
`;

export default Gradient;
