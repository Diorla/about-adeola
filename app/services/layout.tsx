import type { Metadata } from "next";
import Jumbotron from "@/components/main/Jumbotron";
import TabSection from "./TabSection";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Jumbotron
        title="Services"
        subtitle="Comprehensive solutions to bring your digital vision to life"
      />
      {children}
      {children && <hr />}
      <TabSection />
    </main>
  );
}
