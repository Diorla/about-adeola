import { Accordion } from "@/components/ui/accordion";
import Collapse from "./Collapse";

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <Collapse
        question="What services do you offer?"
        answer="I specialize in web development, focusing on React and Next.js
          applications. My services include front-end development, full-stack
          web applications, and performance optimization for existing websites."
      />
      <Collapse
        question="How can I get in touch?"
        answer="You can reach out via the contact form on this website, or connect
          with me on social media platforms like LinkedIn or Twitter. For quick
          inquiries, you can also email me directly at your.email@example.com."
      />
      <Collapse
        question="What is your typical project timeline?"
        answer="Project timelines vary depending on the scope and complexity of the
          work. A simple website might take 2-4 weeks, while a more complex web
          application could take 2-3 months. I always provide a detailed
          timeline estimate at the start of each project."
      />
      <Collapse
        question="Do you offer ongoing maintenance and support?"
        answer="Yes, I offer ongoing maintenance and support packages for all my
          projects. This includes regular updates, security patches, and minor
          feature additions or modifications. We can discuss a maintenance plan
          that suits your needs after the project is completed."
      />
    </Accordion>
  );
}
