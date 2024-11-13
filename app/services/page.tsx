import LandingWrapper from "@/components/main/LandingWrapper";
import type { Metadata } from "next";
import TabSection from "./TabSection";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <main>
      <LandingWrapper>
        <section className="flex flex-col items-center justify-center my-32">
          <h1 className="text-4xl font-bold">Services</h1>
          <p className="text-xl text-center mb-12">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </section>
      </LandingWrapper>
      <TabSection />
    </main>
  );
}
