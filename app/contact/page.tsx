import Jumbotron from "@/components/main/Jumbotron";
import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main>
      <Jumbotron title="Contact" subtitle="Welcome to the Contact Page" />
      <FadeInWhenVisible>
        <div className="flex justify-center my-4">
          <ContactForm />
        </div>
      </FadeInWhenVisible>
    </main>
  );
}
