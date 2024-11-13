import LandingWrapper from "@/components/main/LandingWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <LandingWrapper>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Welcome to the Contact Page</h1>
        Contact page
      </div>
    </LandingWrapper>
  );
}
