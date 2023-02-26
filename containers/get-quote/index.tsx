import Link from "next/link";
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

const Button = styled.button`
  background-color: ${({ theme }) => theme.color.shadeDark};
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: ${({ theme }) => theme.font.subHeader};
  &:hover {
    background-color: ${({ theme }) => theme.color.shade};
  }
`;

export default function GetQuote() {
  return (
    <Wrapper>
      <Text>Interested?</Text>
      <Link href="/quote">
        <Button>Get a quote</Button>
      </Link>
    </Wrapper>
  );
}
