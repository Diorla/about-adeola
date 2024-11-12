import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Card, CardContent } from "../ui/card";
import { Badge } from "../ui/badge";
import ProjectProps from "../../types/ProjectProps";

export default function ProjectCard({
  image,
  title,
  description,
  tags,
}: ProjectProps) {
  return (
    <Card className="overflow-hidden">
      <FadeInWhenVisible>
        <Image
          src={image}
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
            {tags.map((tag, idx) => (
              <Badge key={idx}>{tag}</Badge>
            ))}
          </div>
        </CardContent>
      </FadeInWhenVisible>
    </Card>
  );
}
