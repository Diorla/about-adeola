"use client";
import Link from "next/link";
import { Card, CardContent } from "../ui/card";
import ServiceIcon from "./ServiceIcon";
import { useState } from "react";

export default function ServiceCard({
  title,
  description,
  img,
}: {
  title: string;
  description: string;
  img: string;
}) {
  const [isHover, setIsHover] = useState(false);
  return (
    <Link
      href={`/services/${title.toLocaleLowerCase().replaceAll(/\s/g, "-")}`}
    >
      <Card
        onMouseOut={() => setIsHover(false)}
        onMouseOver={() => setIsHover(true)}
      >
        <ServiceIcon animated={isHover} img={img} />
        <CardContent className="p-6 pt-2">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
