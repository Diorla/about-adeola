"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import LandingWrapper from "../main/LandingWrapper";

export default function Landing() {
  return (
    <LandingWrapper>
      <motion.section
        className="py-20 md:py-40  flex h-screen"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex-1 flex align-center justify-center flex-col ml-4">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I am Adeola
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8"
            initial={{ y: 50 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Design, Develop, Create something beautiful
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 1.6 }}
          >
            <Button asChild size="lg">
              <Link href="#services">Learn more</Link>
            </Button>
          </motion.div>
        </div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, duration: 1.6 }}
          className="flex-1 hidden sm:flex items-center justify-center"
        >
          <Image
            src="/laptop.png"
            alt="Laptop"
            width={500}
            height={500}
            priority
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex-1 sm:hidden flex items-center justify-center"
        >
          <Image src="/tablet.png" alt="Laptop" width={500} height={500} />
        </motion.div>
      </motion.section>
    </LandingWrapper>
  );
}
