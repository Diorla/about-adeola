import Link from "next/link";

export default function PostCard({
  title,
  summary,
  slug,
}: {
  title: string;
  summary: string;
  slug: string;
}) {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm">
      <div className="p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{summary}</p>
        <Link
          className="text-sm text-primary hover:underline mt-4 inline-block"
          href={`journal/${slug}`}
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
