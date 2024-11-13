import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";
import Link from "next/link";
import Post from "./Post";

export default function PostCard({ title, description, slug }: Post) {
  return (
    <FadeInWhenVisible>
      <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
        <div className="p-6">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <Link
            className="text-sm text-primary hover:underline mt-4 inline-block"
            href={`https://dev.to/diorla/${slug}`}
            target="_blank"
          >
            Read more
          </Link>
        </div>
      </div>
    </FadeInWhenVisible>
  );
}
