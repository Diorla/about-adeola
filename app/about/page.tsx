"use client";

import { Code, Palette, Zap } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";
import LandingWrapper from "@/components/main/LandingWrapper";
import { CheckCircle } from "lucide-react";
import TypewriterEffect from "@/components/main/TypeWriter";
import ProcessSection from "../../components/about/Process";

function SkillBadge({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center bg-white bg-opacity-20 rounded-full px-4 py-2">
      {icon}
      <span className="ml-2">{text}</span>
    </div>
  );
}

export default function AboutPage() {
  const skills = [
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "TypeScript", level: 80 },
    { name: "Node.js", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ];
  // 1. Estimate the time-frame and cost upfront
  // 2. Email you a daily or weekly progress report
  // 3. Include a task overview on your sprint board
  // 4. Be available to speak to you during the project
  // 5. Handle urgent requests when you get in touch
  // 6. Based in London and happy to meet in person
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

      <section className="w-full flex items-center flex-col my-4">
        <FadeInWhenVisible>
          <p className="mb-4 max-w-xl text-center text-xl">
            This is the portfolio of Adeola, a full-time freelance web designer
            and developer, University of Sunderland graduate, MSc, providing
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

      <section className="bg-muted py-4">
        <div className="flex flex-col gap-8 items-center justify-center px-4">
          <div className="text-lg mb-4 max-w-md w-full">
            <h2 className="text-3xl font-bold mb-6">My Skills</h2>
            <div className="grid gap-4">
              {skills.map((skill) => (
                <div key={skill.name} className="flex items-center">
                  <span className="w-36 font-medium">{skill.name}</span>
                  <Progress value={skill.level} className="flex-grow" />
                  <span className="ml-4 w-12 text-right">{skill.level}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="py-4">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-xl font-semibold">
              Senior Web Developer - Tech Innovators Inc.
            </h3>
            <p className="text-muted-foreground">January 2020 - Present</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Lead a team of 5 developers in creating responsive web
                applications
              </li>
              <li>
                Implemented CI/CD pipelines, improving deployment efficiency by
                40%
              </li>
              <li>Mentored junior developers and conducted code reviews</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold">
              Full Stack Developer - Digital Solutions Ltd.
            </h3>
            <p className="text-muted-foreground">June 2017 - December 2019</p>
            <ul className="list-disc list-inside mt-2">
              <li>
                Developed and maintained multiple client websites using React
                and Node.js
              </li>
              <li>
                Optimized database queries, resulting in a 30% improvement in
                application performance
              </li>
              <li>
                Collaborated with UX designers to implement intuitive user
                interfaces
              </li>
            </ul>
          </div>
        </div>
      </section> */}

      {/* <motion.section
        className="mb-16"
        initial="initial"
        animate="animate"
        variants={fadeInUp}
      >
        <h2 className="text-3xl font-bold mb-6">Education</h2>
        <div>
          <h3 className="text-xl font-semibold">BSc in Computer Science</h3>
          <p className="text-muted-foreground">
            University of Technology, Graduated 2017
          </p>
          <p className="mt-2">
            Relevant coursework: Data Structures, Algorithms, Web Development,
            Database Management
          </p>
        </div>
      </motion.section> */}

      <section className="pl-8 py-8">
        <h2 className="text-3xl font-bold mb-6">
          Why hire me as your full-stack developer
        </h2>
        <p className="text-lg mb-4">
          As your full-stack developer, you can count on me to:
        </p>
        <ul className="space-y-2 mb-6">
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            <span>Deliver high-quality, scalable, and maintainable code</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            <span>
              Provide end-to-end solutions, from database design to user
              interface implementation
            </span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            <span>Optimize application performance and user experience</span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            <span>
              Stay updated with the latest technologies and best practices
            </span>
          </li>
          <li className="flex items-center">
            <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
            <span>Collaborate effectively with cross-functional teams</span>
          </li>
        </ul>
        <Button asChild>
          <Link href="/services">Compare Services</Link>
        </Button>
      </section>
      <ProcessSection />
    </div>
  );
}
