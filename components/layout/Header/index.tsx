"use client";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import MobileMenu from "./MobileMenu";
import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setIsScrolled(window.scrollY > 10);
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? "bg-black shadow-md" : "bg-transparent"
      }`}
    >
      <div className="flex items-center justify-between">
        <FadeInWhenVisible>
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
                src="/favicon.svg"
                alt="Adeola logo"
                height={50}
                width={75}
                priority
              />
            </Link>
          </div>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <nav className="hidden sm:flex items-center space-x-6 text-lg font-medium">
            <Link
              className="transition-colors hover:text-background/80 text-white"
              href="/about"
            >
              About
            </Link>
            <Link
              className="transition-colors hover:text-background/80 text-white"
              href="/projects"
            >
              Projects
            </Link>
            <Link
              className="transition-colors hover:text-background/80 text-white"
              href="/services"
            >
              Services
            </Link>
            <Link
              className="transition-colors hover:text-background/80 text-white"
              href="/journal"
            >
              Journal
            </Link>
          </nav>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="hidden sm:flex items-center space-x-2 md:justify-end mr-2">
            <Button asChild variant="secondary">
              <Link href="/contact" className="text-lg">
                Contact
              </Link>
            </Button>
          </div>
          <MobileMenu />
        </FadeInWhenVisible>
      </div>
    </motion.header>
  );
}
