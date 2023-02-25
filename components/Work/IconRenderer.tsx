import iconList from "./iconList";

export default function IconRenderer({
  icon,
}: {
  icon: keyof typeof iconList;
}) {
  const Icon = iconList[icon]?.name;
  const color = iconList[icon]?.color;
  if (Icon) return <Icon color={String(color)} />;
  console.log("not found: ", icon);
  return null;
}
