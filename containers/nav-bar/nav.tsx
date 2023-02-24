import styled from "styled-components";

const Row = styled.div`
  display: flex;
  position: sticky;
  top: 0;
`;

type NavProps = React.HTMLAttributes<HTMLDivElement>;

export default function Nav({ children, ...props }: NavProps) {
  return <Row {...props}>{children}</Row>;
}
