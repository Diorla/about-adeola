"use client";

import React from "react";
import { Clock, Mail, Phone, Zap, ListTodo, Handshake } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const approachList = [
  {
    icon: Clock,
    title: "Estimate",
    description: "Provide an upfront estimate of the time frame and cost",
  },
  {
    icon: Mail,
    title: "Report",
    description: "Send you daily or weekly progress reports via email",
  },
  {
    icon: ListTodo,
    title: "Overview",
    description: "Include an overview of tasks on your sprint board",
  },
  {
    icon: Phone,
    title: "Available",
    description: "Be available for discussions throughout the project",
  },
  {
    icon: Zap,
    title: "Urgent",
    description: "Address urgent requests promptly when you reach out",
  },
  {
    icon: Handshake,
    title: "Meeting",
    description:
      "Offer in-person meetings for those located in or around London",
  },
];

const ApproachStep = ({
  icon: Icon,
  title,
  description,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  title: string;
  description: string;
}) => {
  return (
    <Card className="flex justify-center align-center">
      <CardContent className="flex flex-col justify-center align-center p-4">
        <p className="text-center animate-opacity">{description}</p>
        <div className="animate-opacity w-full h-full flex flex-col items-center justify-center">
          <Icon className="w-8 h-8 mb-2 text-red-900" />
          <h3 className="text-lg font-semibold text-center">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Approach() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Process</h2>
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {approachList.map((step, index) => (
            <React.Fragment key={index}>
              <ApproachStep {...step} icon={step.icon as unknown} />
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
