import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import ProjectProps from "./ProjectProps";

export default function ProjectCard({
  img,
  title,
  description,
  tools,
}: ProjectProps) {
  return (
    <Card className="overflow-hidden">
      <FadeInWhenVisible>
        <Image
          src={img}
          alt={title}
          width={400}
          height={300}
          className="w-full h-48 object-cover"
        />
      </FadeInWhenVisible>
      <FadeInWhenVisible>
        <CardContent className="p-4">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, idx) => (
              <Badge key={idx}>{tool}</Badge>
            ))}
          </div>
        </CardContent>
      </FadeInWhenVisible>
    </Card>
  );
}
