import LandingWrapper from "@/components/main/LandingWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function Services() {
  return (
    <LandingWrapper>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Services Page</h1>
        Services page
      </div>
    </LandingWrapper>
  );
}
