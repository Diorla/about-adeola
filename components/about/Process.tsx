"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, Phone, Zap, ListTodo } from "lucide-react";

const processSteps = [
  {
    icon: Clock,
    title: "Estimate",
    description: "Estimate the timeframe and cost upfront",
  },
  {
    icon: Mail,
    title: "Report",
    description: "Email you a daily or weekly progress report",
  },
  {
    icon: ListTodo,
    title: "Overview",
    description: "Include a task overview on your sprint board",
  },
  {
    icon: Phone,
    title: "Available",
    description: "Be available to speak to you during the project",
  },
  {
    icon: Zap,
    title: "Urgent",
    description: "Handle urgent requests when you get in touch",
  },
];

const ProcessStep = ({
  icon: Icon,
  title,
  description,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-48 h-48 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="w-full h-full transition-color"
        initial={false}
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <div
          className="absolute w-full h-full flex flex-col items-center justify-center bg-white border border-gray-200 rounded-lg shadow-md p-4 backface-hidden"
          style={{ transform: isFlipped ? "rotateY(180deg)" : "rotateY(0)" }}
        >
          {isFlipped ? (
            <p className="text-center animate-opacity">{description}</p>
          ) : (
            <div className="animate-opacity w-full h-full flex flex-col items-center justify-center">
              <Icon className="w-12 h-12 text-primary mb-2" />
              <h3 className="text-lg font-semibold text-center">{title}</h3>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default function ProcessSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="relative flex justify-between items-center max-w-4xl mx-auto">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <ProcessStep {...step} icon={step.icon as unknown} />
              {index < processSteps.length - 1 && (
                <div className="flex-grow h-0.5 bg-gray-300 mx-2" />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
