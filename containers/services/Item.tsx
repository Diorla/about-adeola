import ItemTitle from "./ItemTitle";
import StyledItem from "./StyledItem";

export default function Item({
  src,
  title,
  children,
}: {
  src: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <StyledItem>
      <img src={src} alt={title} />
      <ItemTitle>{title}</ItemTitle>
      <ul>{children}</ul>
    </StyledItem>
  );
}
