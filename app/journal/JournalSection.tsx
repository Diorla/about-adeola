import Post from "@/components/layout/Posts/Post";
import PostCard from "./PostCard";

export default async function JournalSection() {
  const data = await fetch("https://dev.to/api/articles/me", {
    headers: {
      "api-key": process.env.NEXT_PUBLIC_API_KEY || "",
    },
  });
  const posts = (await data.json()) as Post[];
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 my-4 mx-4">
      {posts
        .sort((prevPost, nextPost) => {
          return (
            nextPost.positive_reactions_count -
            prevPost.positive_reactions_count
          );
        })
        .map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
    </div>
  );
}
