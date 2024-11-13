import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Service from "./Service";
import Check from "@/components/main/Check";
import { Button } from "@/components/ui/button";

export default function ServiceCard({ service }: { service: Service }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="h-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader>
        <div className="flex items-center justify-between">
          <service.icon className="h-8 w-8 text-primary" />
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isHovered ? 1 : 0 }}
            transition={{ duration: 0.2 }}
          >
            <Button variant="outline" size="sm">
              Learn More
            </Button>
          </motion.div>
        </div>
        <CardTitle className="mt-4">{service.title}</CardTitle>
        <CardDescription>{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {service.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <Check />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
