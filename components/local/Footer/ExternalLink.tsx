export default function ExternalLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <li>
      <a href={href} className="hover:text-primary" target="_blank">
        {name}
      </a>
    </li>
  );
}
