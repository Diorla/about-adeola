import Jumbotron from "@/components/main/Jumbotron";
import type { Metadata } from "next";
import JournalSection from "./JournalSection";

export const metadata: Metadata = {
  title: "Journal",
};

export default function Journal() {
  return (
    <main>
      <style>
        {`
          .hide-post {
            display: none;
          }
          `}
      </style>
      <Jumbotron title="Journal" subtitle="Welcome to the Journal Page" />
      <JournalSection />
    </main>
  );
}
