import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useId } from "react";

export default function Collapse({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const id = useId();
  return (
    <FadeInWhenVisible>
      <AccordionItem value={id}>
        <AccordionTrigger>{question}</AccordionTrigger>
        <AccordionContent>{answer}</AccordionContent>
      </AccordionItem>
    </FadeInWhenVisible>
  );
}
