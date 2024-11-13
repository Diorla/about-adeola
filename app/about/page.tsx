import { Code, Palette, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";
import LandingWrapper from "@/components/main/LandingWrapper";
import TypewriterEffect from "@/components/main/TypeWriter";
import Approach from "./Approach";
import type { Metadata } from "next";
import Check from "@/components/main/Check";

export const metadata: Metadata = {
  title: "About",
};

function SkillBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <LandingWrapper>
        <FadeInWhenVisible>
          <div className="min-h-screen flex flex-col justify-center items-center p-4 text-white">
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-2">Adeola</h1>
              <h2 className="lg:text-5xl text-3xl text-center py-2">
                <TypewriterEffect
                  text="A freelancer that works with individuals, startups and
                companies."
                />
              </h2>
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <SkillBadge icon={<Code size={24} />} text="Web Development" />
                <SkillBadge icon={<Palette size={24} />} text="UI/UX Design" />
                <SkillBadge
                  icon={<Zap size={24} />}
                  text="Performance Optimization"
                />
              </div>
            </div>
          </div>
        </FadeInWhenVisible>
      </LandingWrapper>

      <section className="w-full flex items-center flex-col py-8">
        <FadeInWhenVisible>
          <p className="mb-4 px-16 text-center text-xl">
            This is the portfolio of Adeola, a full-time freelance web designer
            and developer, a University of Sunderland graduate, providing
            websites for clients in London and all over the world since 2016. I
            create 100% bespoke, responsive websites tailored to meet your
            requirements. I am a flexible, dedicated, professional freelancer,
            who understands the importance of a well designed, functional
            website that makes an impact online and helps your business grow. In
            short, I design websites, I develop websites, I tweak websites and I
            work with HTML, CSS and JavaScript, as well as framework like
            React.js and CMS like Wordpress. I work with a range of businesses
            from individuals, startups and large corporates. If you have a
            project you&apos;d like to discuss, send me an email and I&apos;ll
            get back to you.
          </p>
        </FadeInWhenVisible>
      </section>

      <section className="pl-8 py-8 bg-muted">
        <h2 className="text-3xl font-bold mb-6">
          Why hire me as your full-stack developer
        </h2>
        <p className="text-lg mb-4">
          As your full-stack developer, you can count on me to:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <Check />
            <span>Deliver high-quality, scalable, and maintainable code</span>
          </li>
          <li className="flex items-center">
            <Check />
            <span className="flex-inline">
              Provide end-to-end solutions, from database design to user
              interface implementation
            </span>
          </li>
          <li className="flex items-center">
            <Check />
            <span>Optimize application performance and user experience</span>
          </li>
          <li className="flex items-center">
            <Check />
            <span>
              Stay updated with the latest technologies and best practices
            </span>
          </li>
          <li className="flex items-center">
            <Check />
            <span>Collaborate effectively with cross-functional teams</span>
          </li>
        </ul>
        <Button asChild>
          <Link href="/services">Compare Services</Link>
        </Button>
      </section>
      <Approach />
    </div>
  );
}
