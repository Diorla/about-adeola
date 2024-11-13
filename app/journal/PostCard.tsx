import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";
import Post from "@/components/layout/Posts/Post";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { format } from "date-fns";

export default function PostCard({
  title,
  description,
  slug,
  published_at,
}: Post) {
  return (
    <FadeInWhenVisible>
      <Card>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>
            {format(published_at, "MMMM d, yyyy")}
          </CardDescription>
        </CardHeader>
        <CardContent>{description}</CardContent>
        <CardFooter>
          <Link
            className="text-sm text-primary hover:underline mt-4 inline-block"
            href={`https://dev.to/diorla/${slug}`}
            target="_blank"
          >
            Read more
          </Link>
        </CardFooter>
      </Card>
    </FadeInWhenVisible>
  );
}
