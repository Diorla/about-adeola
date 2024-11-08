import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeInWhenVisible from "./FadeInWhenVisible";

export default function About() {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        </FadeInWhenVisible>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <FadeInWhenVisible>
            <div className="md:w-1/2">
              <Image
                src="/people/me.jpeg"
                alt="Adeola"
                width={400}
                height={400}
                className="rounded"
              />
            </div>
          </FadeInWhenVisible>
          <div className="md:w-1/2">
            <FadeInWhenVisible>
              <p className="text-lg mb-4">
                Hello! I&apos;m Adeola, a passionate web developer and designer
                with over 5 years of experience. I specialize in creating
                responsive, user-friendly websites and applications that not
                only look great but also perform exceptionally well.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <p className="text-lg mb-4">
                My expertise includes front-end technologies like React and
                Next.js, as well as back-end development with Node.js. I&apos;m
                committed to writing clean, efficient code and staying
                up-to-date with the latest web technologies and best practices.
              </p>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <Button asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </FadeInWhenVisible>
          </div>
        </div>
      </div>
    </section>
  );
}
