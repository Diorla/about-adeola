"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SlideIn({
  children,
  idx = 0,
}: {
  children: React.ReactNode;
  idx?: number;
}) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 50 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
      transition={{ duration: 0.5, delay: 0.2 + idx * 0.2 }}
    >
      {children}
    </motion.div>
  );
}
