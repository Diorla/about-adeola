import LandingWrapper from "@/components/main/LandingWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
};

export default function Journal() {
  return (
    <LandingWrapper>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Journal Page</h1>
        Journal page
      </div>
    </LandingWrapper>
  );
}
