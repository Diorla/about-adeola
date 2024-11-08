import PostCard from "./PostCard";
import Post from "./Post";
import Link from "next/link";
import FadeInWhenVisible from "@/components/home/FadeInWhenVisible";
import { Button } from "@/components/ui/button";

export default async function Posts() {
  const data = await fetch("https://dev.to/api/articles/me", {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  });
  const posts = (await data.json()) as Post[];

  return (
    <FadeInWhenVisible>
      <section className="py-12 px-6">
        <div className="">
          <h2 className="text-2xl font-bold mb-6">Posts</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts
              .slice(0, 3)
              .sort((prevPost, nextPost) => {
                return (
                  nextPost.positive_reactions_count -
                  prevPost.positive_reactions_count
                );
              })
              .map((post) => (
                <PostCard
                  key={post.id}
                  title={post.title}
                  summary={post.description}
                  slug={post.slug}
                />
              ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/journal">View All</Link>
            </Button>
          </div>
        </div>
      </section>
    </FadeInWhenVisible>
  );
}
