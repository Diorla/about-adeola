import Jumbotron from "@/components/main/Jumbotron";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <main>
      <Jumbotron title="Contact" subtitle="Welcome to the Contact Page" />
    </main>
  );
}
