import type { Metadata } from "next";
import TabSection from "./TabSection";
import Jumbotron from "@/components/main/Jumbotron";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <main>
      <Jumbotron
        title="Services"
        subtitle="Comprehensive solutions to bring your digital vision to life"
      />
      <TabSection />
    </main>
  );
}
