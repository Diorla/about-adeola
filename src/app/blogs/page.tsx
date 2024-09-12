import Particles from "@/components/particles";
import React from "react";
import { Post } from "./Post";
import BlogCard from "./BlogCard";
import Navigation from "@/components/nav";

export default async function Blogs() {
  const data = await fetch("https://dev.to/api/articles/me", {
    headers: {
      "api-key": process.env.API_KEY || "",
    },
  });
  const posts = (await data.json()) as Post[];

  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" />
      <div className="flex flex-wrap justify-evenly overflow-y-scroll mb-20 w-screen min-h-screen">
        <div className="mb-20">
          {posts
            .sort((a, b) => b.public_reactions_count - a.public_reactions_count)
            .map((post) => (
              <BlogCard key={post.id} {...post} />
            ))}
        </div>
      </div>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="mb-2 text-center animate-fade-in fixed bottom-0">
        <h2 className="text-sm text-zinc-500 ">
          Design, Develop, Create something beautiful
        </h2>
      </div>
    </div>
  );
}
