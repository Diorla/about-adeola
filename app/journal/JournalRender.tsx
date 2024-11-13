"use client";
import { AnimatePresence } from "framer-motion";

export default function JournalRender({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AnimatePresence>{children}</AnimatePresence>;
}
