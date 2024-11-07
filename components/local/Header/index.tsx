import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="flex h-14 items-center justify-between">
        <div className="mr-4 hidden sm:flex">
          <Link className="ml-2 flex items-center space-x-2" href="/">
            <Image
              className="dark:invert"
              src="/brand.png"
              alt="Adeola logo"
              height={50}
              width={75}
              priority
            />
          </Link>
        </div>
        <div className="mr-4 sm:hidden flex">
          <Link className="ml-2 flex items-center space-x-2" href="/">
            <Image
              className="dark:invert"
              src="/favicon.svg"
              alt="Adeola logo"
              height={50}
              width={75}
              priority
            />
          </Link>
        </div>
        <nav className=" hidden sm:flex items-center space-x-6 text-sm font-medium">
          <Link
            className="transition-colors hover:text-foreground/100 text-foreground/80"
            href="/about"
          >
            About
          </Link>
          <Link
            className="transition-colors hover:text-foreground/100 text-foreground/80"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="transition-colors hover:text-foreground/100 text-foreground/80"
            href="/services"
          >
            Services
          </Link>
          <Link
            className="transition-colors hover:text-foreground/100 text-foreground/80"
            href="/journal"
          >
            Journal
          </Link>
        </nav>
        <div className="hidden sm:flex items-center space-x-2 md:justify-end mr-2">
          <Button asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </div>
        <MobileMenu />
      </div>
    </header>
  );
}
