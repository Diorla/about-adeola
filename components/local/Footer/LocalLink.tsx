import Link from "next/link";

export default function LocalLink({
  name,
  href,
}: {
  name: string;
  href: string;
}) {
  return (
    <li>
      <Link href={href} className="hover:text-primary">
        {name}
      </Link>
    </li>
  );
}
