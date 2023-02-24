import styled from "styled-components";

const Title = styled.div`
  font-size: ${({ theme }) => theme.font.headerTwo};
  text-align: center;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ItemTitle = styled.div`
  font-size: ${({ theme }) => theme.font.headerThree};
`;

const StyledItem = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 16px;
`;

const Item = ({
  src,
  title,
  children,
}: {
  src: string;
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <StyledItem>
      <img src={src} alt={title} />
      <ItemTitle>{title}</ItemTitle>
      <ul>{children}</ul>
    </StyledItem>
  );
};

export default function Services() {
  return (
    <div>
      <Title>Services</Title>
      <Row>
        <Item src="/pencil.png" title="Design">
          <li>Design web layout and structure</li>
          <li>Create positive user experience</li>
          <li>Create visually appealing designs</li>
          <li>Create palette, themes and brands</li>
        </Item>
        <Item src="/code.png" title="Code">
          <li>Turn design to code</li>
          <li>Optimise website for different devices</li>
          <li>Integrate various features and functionality</li>
        </Item>
        <Item src="/maintain.png" title="Maintenance">
          <li>Update design and security</li>
          <li>Fixing issues as they arise</li>
          <li>Ensuring the website is up to date</li>
        </Item>
      </Row>
    </div>
  );
}
