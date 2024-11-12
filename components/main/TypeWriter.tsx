"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface TypewriterEffectProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypewriterEffect({
  text,
  speed = 200,
  className = "",
}: TypewriterEffectProps) {
  const [displayedText, setDisplayedText] = useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    let index = 0;
    if (inView) {
      const intervalId = setInterval(() => {
        setDisplayedText((prev) => {
          if (index <= text.length) {
            index++;
            return text.slice(0, index);
          }
          clearInterval(intervalId);
          return prev;
        });
      }, speed);

      return () => clearInterval(intervalId);
    }
  }, [inView, text, speed]);

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {displayedText}
      {displayedText.length !== text.length && (
        <span className="animate-blink">|</span>
      )}
    </motion.span>
  );
}

// <span className="animate-blink">|</span>
