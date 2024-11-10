"use client";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import SlideIn from "./SlideIn";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "-100%",
      transition: {
        duration: 0.3,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="sm:hidden">
      <button
        onClick={toggleMenu}
        className="z-50 relative w-10 h-10 text-gray-500 hover:text-gray-700 focus:outline-none"
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span className="sr-only">{isOpen ? "Close menu" : "Open menu"}</span>
        <motion.div
          className="w-6 h-0.5 bg-current absolute left-2 top-4"
          animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-current absolute left-2 top-6"
          animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
        <motion.div
          className="w-6 h-0.5 bg-current absolute left-2 top-8"
          animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
          transition={{ duration: 0.3 }}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-white z-40 flex flex-col p-5"
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
          >
            <nav className="flex flex-col space-y-4 text-lg">
              <SlideIn>
                <Link
                  href="/"
                  className="hover:text-primary hover:underline"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </SlideIn>
              <SlideIn idx={1}>
                <Link
                  href="/about"
                  className="hover:text-primary hover:underline"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </SlideIn>
              <SlideIn idx={2}>
                <Link
                  href="/projects"
                  className="hover:text-primary hover:underline"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </SlideIn>
              <SlideIn idx={3}>
                <Link
                  href="/services"
                  className="hover:text-primary hover:underline"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </SlideIn>
              <SlideIn idx={4}>
                <Link
                  href="/journal"
                  className="hover:text-primary hover:underline"
                  onClick={toggleMenu}
                >
                  Journal
                </Link>
              </SlideIn>
              <SlideIn idx={5}>
                <Link
                  href="/contact"
                  className="hover:text-primary hover:underline"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </SlideIn>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
