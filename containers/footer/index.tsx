import styled from "styled-components";

const Wrapper = styled.div`
  background-color: #333;
  color: white;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.color.primaryLight};
`;

const Line = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 16px;
`;

const TextCenter = styled.div`
  text-align: center;
  margin-bottom: 12px;
`;

export default function Footer() {
  return (
    <Wrapper>
      <Line>
        <Link
          href="https://dev.to/diorla"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Blogs
        </Link>
        <Link href="#" target="_blank" referrerPolicy="no-referrer">
          Privacy and Policy
        </Link>
        <Link
          href="https://github.com/Diorla/about-adeola/blob/main/LICENSE"
          target="_blank"
          referrerPolicy="no-referrer"
        >
          Terms of use
        </Link>
        <Link href="#" target="_blank" referrerPolicy="no-referrer">
          Resources
        </Link>
      </Line>
      <TextCenter>
        Be ashamed to die until you’ve score some victory for humanity - Horace
        Mann
      </TextCenter>
      <TextCenter style={{ marginBottom: 0 }}>
        Made with <span style={{ color: "red" }}>♥️</span> by Adeola Ade
      </TextCenter>
    </Wrapper>
  );
}
