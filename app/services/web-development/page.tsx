import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WebDevelopmentPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Web Development Services</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Crafting Digital Experiences
        </h2>
        <p className="mb-4">
          Welcome to my web development services page. I specialize in creating
          bespoke, high-performance websites and web applications that drive
          results for businesses and individuals. With a focus on user
          experience, cutting-edge technology, and scalable solutions, I bring
          your digital vision to life.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          The Web Development Process
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Discovery and Planning:</strong> Understanding your goals,
            target audience, and project requirements.
          </li>
          <li>
            <strong>Design and Wireframing:</strong> Creating the visual
            blueprint of your website.
          </li>
          <li>
            <strong>Development:</strong> Building the functional website or
            application.
          </li>
          <li>
            <strong>Testing and Quality Assurance:</strong> Ensuring everything
            works flawlessly across devices and browsers.
          </li>
          <li>
            <strong>Deployment:</strong> Launching your website to the world.
          </li>
          <li>
            <strong>Maintenance and Support:</strong> Keeping your site
            up-to-date and secure.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Web Development Methods</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Static Websites:</strong> Fast, secure, and perfect for
            content that doesn&apos;t change frequently.
          </li>
          <li>
            <strong>Dynamic Websites:</strong> Interactive sites with database
            integration for content that updates regularly.
          </li>
          <li>
            <strong>Single Page Applications (SPAs):</strong> Fluid, app-like
            experiences for modern web applications.
          </li>
          <li>
            <strong>Progressive Web Apps (PWAs):</strong> Combining the best of
            web and mobile apps.
          </li>
          <li>
            <strong>Headless CMS:</strong> Flexible content management with a
            decoupled frontend for ultimate customization.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Technologies and Frameworks
        </h2>
        <p className="mb-4">
          I stay up-to-date with the latest web technologies to ensure your
          project is built on a solid, future-proof foundation. Some of the
          technologies I work with include:
        </p>
        <ul className="list-disc pl-6 grid grid-cols-2 gap-2">
          <li>React.js</li>
          <li>Next.js</li>
          <li>Vue.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
          <li>GraphQL</li>
          <li>Tailwind CSS</li>
          <li>WordPress</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Project Timeline and Collaboration
        </h2>
        <p className="mb-4">
          Every project is unique, but here&apos;s a general timeline you can
          expect:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>Small websites:</strong> 2-4 weeks
          </li>
          <li>
            <strong>Medium-sized websites or web applications:</strong> 4-8
            weeks
          </li>
          <li>
            <strong>Large, complex projects:</strong> 8-12 weeks or more
          </li>
        </ul>
        <p className="mt-4">
          Throughout the process, we&apos;ll maintain clear communication
          channels, regular check-ins, and collaborative tools to ensure
          you&apos;re always in the loop and your vision is being realized.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Pricing and Project Scoping
        </h2>
        <p className="mb-4">
          Web development costs vary based on the complexity, features, and
          scale of your project. I offer transparent pricing and detailed
          project scopes to ensure there are no surprises. After our initial
          consultation, you&apos;ll receive a comprehensive proposal outlining:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Project deliverables and milestones</li>
          <li>Timeline estimates</li>
          <li>Pricing structure (fixed price or hourly rate)</li>
          <li>Ongoing maintenance and support options</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Why Choose Professional Web Development?
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Custom solutions tailored to your specific needs</li>
          <li>Optimized performance and user experience</li>
          <li>Responsive design for all devices</li>
          <li>SEO-friendly structure and code</li>
          <li>Scalability for future growth</li>
          <li>Ongoing support and maintenance</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How much does a website cost?</AccordionTrigger>
            <AccordionContent>
              The cost varies depending on the complexity and features required.
              Simple websites might start from $1,000, while complex web
              applications can go upwards of $10,000 or more. I provide detailed
              quotes after understanding your specific needs.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long will it take to build my website?
            </AccordionTrigger>
            <AccordionContent>
              Project timelines can range from a few weeks for simple sites to
              several months for complex applications. After our initial
              consultation, I&apos;ll provide a more accurate timeline based on
              your project&apos;s scope.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Will my website be mobile-friendly?
            </AccordionTrigger>
            <AccordionContent>
              All websites I develop are fully responsive and optimized for all
              devices, including smartphones, tablets, and desktops.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you provide website hosting and maintenance?
            </AccordionTrigger>
            <AccordionContent>
              Yes, I offer hosting solutions and ongoing maintenance packages to
              keep your website secure, up-to-date, and performing optimally.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Can you help with SEO?</AccordionTrigger>
            <AccordionContent>
              Yes, I implement SEO best practices during development and can
              provide additional SEO services to improve your website&apos;s
              visibility in search engines.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Start Your Web Development Project?
        </h2>
        <p className="mb-4">
          Let&apos;s bring your digital vision to life. Contact me today for a
          free consultation and let&apos;s discuss how we can create a powerful
          online presence for your business.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </section>
    </div>
  );
}
