import Link from "next/link";
import React from "react";

export const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blogs" },
];

export default function Navigation() {
  return (
    <nav className="my-2 animate-fade-in z-50">
      <ul className="flex items-center justify-center gap-4">
        {navigation.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
          >
            {item.name}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
