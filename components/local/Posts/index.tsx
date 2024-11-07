import PostCard from "./PostCard";

export default function Posts() {
  return (
    <section className="py-12 px-6">
      <div className="">
        <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <PostCard
            title="My Latest Project"
            summary="A deep dive into my most recent web application..."
            slug="latest-project"
          />
          <PostCard
            title="The Future of Web Dev"
            summary="Exploring upcoming trends in web development..."
            slug="future-of-web-dev"
          />
          <PostCard
            title="Optimizing React Apps"
            summary="Tips and tricks for better React performance..."
            slug="optimizing-react-apps"
          />
        </div>
      </div>
    </section>
  );
}
