import Jumbotron from "@/components/main/Jumbotron";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
};

export default function Journal() {
  return (
    <main>
      <Jumbotron title="Journal" subtitle="Welcome to the Journal Page" />
    </main>
  );
}
