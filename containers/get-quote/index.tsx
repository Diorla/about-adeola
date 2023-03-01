import styled from "styled-components";

const Wrapper = styled.div`
  min-height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Text = styled.div`
  font-family: cursive;
  font-size: ${({ theme }) => theme.font.headerTwo};
  margin-bottom: 16px;
`;

export default function GetQuote() {
  return (
    <Wrapper>
      <Text>Interested?</Text>
    </Wrapper>
  );
}
