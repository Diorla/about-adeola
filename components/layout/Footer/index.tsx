import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";
import ExternalLink from "./ExternalLink";
import LocalLink from "./LocalLink";
import SocialLink from "./SocialLink";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <FadeInWhenVisible>
    <div className="space-y-2">
      <h3 className="text-lg font-semibold">{title}</h3>
      {children}
    </div>
  </FadeInWhenVisible>
);

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Section title="About Me">
            <p className="text-sm">
              I&apos;m Adeola, a passionate web developer specializing in
              creating modern, responsive, and user-friendly websites. With a
              keen eye for design and a love for clean code, I bring ideas to
              life in the digital realm.
            </p>
          </Section>
          <Section title="Current Projects">
            <ul className="text-sm space-y-2">
              <ExternalLink
                href="https://quick-feedback.xyz/"
                name="Quick feedback"
              />
            </ul>
            <ul className="text-sm space-y-2">
              <ExternalLink
                href="https://novella.adeolaade.com/"
                name="Novella"
              />
            </ul>
            <ul className="text-sm space-y-2">
              <ExternalLink href="https://habiterie.com/" name="Habiterie" />
            </ul>
          </Section>
          <Section title="Navigation">
            <ul className="text-sm space-y-2">
              <LocalLink href="/about" name="About" />
              <LocalLink href="/projects" name="Projects" />
              <LocalLink href="/services" name="Services" />
              <LocalLink href="/journal" name="Journal" />
              <LocalLink href="/contact" name="Contact" />
              <LocalLink href="/questionnaire" name="Questionnaire" />
            </ul>
          </Section>
          <Section title="Reach Out">
            <ul className="text-sm space-y-2">
              <SocialLink href="https://github.com/Diorla" type="github" />
              <SocialLink
                href="https://www.linkedin.com/in/ade-adeola/"
                type="linkedin"
              />
              <SocialLink href="https://x.com/dihorla" type="twitter" />
              <SocialLink href="https://dribbble.com/diorla" type="dribbble" />
              <SocialLink
                href="https://www.behance.net/adeolaade"
                type="behance"
              />
            </ul>
          </Section>

          <Section title="Services">
            <ul className="text-sm space-y-2">
              <LocalLink
                href="/services/web-development"
                name="Web Development"
              />
              <LocalLink href="/services/ui-ux-design" name="UI/UX Design" />
              <LocalLink
                href="/services/mobile-app-development"
                name="Mobile App Development"
              />
              <LocalLink
                href="/services/e_commerce-solutions"
                name="E-commerce Solutions"
              />
              <LocalLink
                href="/services/performance-optimization"
                name="Performance Optimization"
              />
            </ul>
          </Section>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center">
          <p className="text-sm">Made with ❤️ by Adeola</p>
        </div>
      </div>
    </footer>
  );
}
