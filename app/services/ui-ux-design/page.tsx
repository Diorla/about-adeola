import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function UIUXDesignPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">UI/UX Design Services</h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Crafting Intuitive Digital Experiences
        </h2>
        <p className="mb-4">
          Welcome to my UI/UX design services. I specialize in creating
          user-centered designs that not only look stunning but also provide
          seamless, intuitive experiences. By combining aesthetics with
          functionality, I help businesses create digital products that users
          love to interact with.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          The UI/UX Design Process
        </h2>
        <ol className="list-decimal pl-6 space-y-2">
          <li>
            <strong>Research and Discovery:</strong> Understanding your users,
            business goals, and market landscape.
          </li>
          <li>
            <strong>User Personas and Journey Mapping:</strong> Creating
            profiles of your target users and mapping their interactions with
            your product.
          </li>
          <li>
            <strong>Information Architecture:</strong> Organizing and
            structuring content for optimal user flow.
          </li>
          <li>
            <strong>Wireframing:</strong> Creating low-fidelity sketches of key
            screens and user flows.
          </li>
          <li>
            <strong>Prototyping:</strong> Developing interactive prototypes to
            test and refine the user experience.
          </li>
          <li>
            <strong>Visual Design:</strong> Crafting the final look and feel of
            your product, including color schemes, typography, and visual
            elements.
          </li>
          <li>
            <strong>Usability Testing:</strong> Conducting user tests to
            validate design decisions and identify areas for improvement.
          </li>
          <li>
            <strong>Handoff and Implementation:</strong> Providing developers
            with all necessary assets and specifications for seamless
            implementation.
          </li>
        </ol>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Key UI/UX Design Services
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <strong>User Interface (UI) Design:</strong> Creating visually
            appealing and intuitive interfaces for websites and applications.
          </li>
          <li>
            <strong>User Experience (UX) Design:</strong> Ensuring smooth,
            logical user flows and interactions throughout the product.
          </li>
          <li>
            <strong>Responsive Design:</strong> Designing interfaces that work
            seamlessly across all devices and screen sizes.
          </li>
          <li>
            <strong>Design Systems:</strong> Developing comprehensive design
            languages and component libraries for consistent branding and
            efficient development.
          </li>
          <li>
            <strong>Interaction Design:</strong> Crafting engaging
            micro-interactions and animations to enhance user engagement.
          </li>
          <li>
            <strong>Usability Audits:</strong> Evaluating existing products and
            providing recommendations for improvement.
          </li>
          <li>
            <strong>App Design:</strong> Designing intuitive and feature-rich
            mobile and desktop applications.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Benefits of Professional UI/UX Design
        </h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Increased user satisfaction and engagement</li>
          <li>Higher conversion rates and customer retention</li>
          <li>
            Reduced development costs by identifying and solving issues early
          </li>
          <li>Stronger brand identity and recognition</li>
          <li>Improved accessibility for all users</li>
          <li>
            Data-driven design decisions based on user research and testing
          </li>
          <li>Competitive advantage in the market</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Tools and Technologies</h2>
        <p className="mb-4">
          I leverage industry-leading tools and technologies to deliver
          high-quality UI/UX design solutions:
        </p>
        <ul className="list-disc pl-6 grid grid-cols-2 gap-2">
          <li>Figma</li>
          <li>Adobe XD</li>
          <li>Sketch</li>
          <li>InVision</li>
          <li>Protopie</li>
          <li>Adobe Creative Suite</li>
          <li>Zeplin</li>
          <li>Maze</li>
          <li>UserTesting</li>
          <li>Hotjar</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Deliverables</h2>
        <p className="mb-4">
          Depending on your project&apos;s needs, you can expect some or all of
          the following deliverables:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>User personas and journey maps</li>
          <li>Information architecture diagrams</li>
          <li>Wireframes and low-fidelity prototypes</li>
          <li>High-fidelity mockups and prototypes</li>
          <li>UI kit and design system documentation</li>
          <li>Interactive prototypes for user testing</li>
          <li>Usability test reports and recommendations</li>
          <li>Design specifications and assets for development</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What&apos;s the difference between UI and UX design?
            </AccordionTrigger>
            <AccordionContent>
              UI (User Interface) design focuses on the visual aspects of a
              product, including layout, colors, and interactive elements. UX
              (User Experience) design encompasses the entire user journey,
              ensuring the product is intuitive, accessible, and satisfying to
              use. While distinct, both UI and UX work together to create a
              successful digital product.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How long does a UI/UX design project typically take?
            </AccordionTrigger>
            <AccordionContent>
              Project timelines can vary greatly depending on the scope and
              complexity. A simple website redesign might take 2-4 weeks, while
              a complex application could take 8-12 weeks or more. After our
              initial consultation, I&apos;ll provide a more accurate timeline
              based on your specific project requirements.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you offer branding services along with UI/UX design?
            </AccordionTrigger>
            <AccordionContent>
              Yes, I can incorporate branding into the UI/UX design process or
              work with your existing brand guidelines. If you need
              comprehensive branding services, I can either provide those or
              recommend trusted partners.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              How do you ensure the designs will be user-friendly?
            </AccordionTrigger>
            <AccordionContent>
              I employ a user-centered design approach, which includes user
              research, creating personas, and conducting usability tests
              throughout the design process. This ensures that the final product
              is intuitive and meets the needs of your target audience.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can you work with our development team?
            </AccordionTrigger>
            <AccordionContent>
              I&apos;m experienced in collaborating with development teams and
              can provide all necessary design specifications, assets, and
              guidance to ensure smooth implementation of the designs.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">
          Ready to Elevate Your Digital Product&apos;s Design?
        </h2>
        <p className="mb-4">
          Let&apos;s create an exceptional user experience for your digital
          product. Contact me today for a free consultation and discover how we
          can enhance your product&apos;s usability and visual appeal.
        </p>
        <Button asChild>
          <Link href="/contact">Get in touch</Link>
        </Button>
      </section>
    </div>
  );
}
