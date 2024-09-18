import { Post } from "./Post";

export default function BlogCard({
  title,
  cover_image,
  description,
  canonical_url,
  tag_list,
  public_reactions_count,
  reading_time_minutes,
  comments_count,
}: Post) {
  return (
    <a
      href={canonical_url}
      className="text-zinc-300 item-right"
      target="_blank"
    >
      <div className="w-128 bg-zinc-700 rounded-lg shadow-lg m-4">
        <div
          className="bg-zinc-700 bg-cover h-64 bg-center"
          style={{
            backgroundImage: `url(${cover_image || "/hero-pattern.svg"})`,
          }}
        ></div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <p className="text-zinc-300">{description}</p>
        </div>
        <div className="px-4 text-zinc-300 flex flex-row text-sm">
          {tag_list.map((item, idx) => (
            <div className="text-zinc-300 mr-2" key={idx}>
              #{item}
            </div>
          ))}
        </div>
        <div className="ml-2 text-zinc-300 flex flex-row text-sm items-center justify-between">
          <div className="text-zinc-300 text-sm flex flex-row items-center">
            <div className="ml-2 mb-2 mr-8 flex flex-row item-center">
              {public_reactions_count} Reactions
            </div>
            <p className="flex flex-row item-center">
              {comments_count} Comments
            </p>
          </div>
          <div className="text-zinc-300 text-sm mr-4">
            <p>{reading_time_minutes} min read</p>
          </div>
        </div>
      </div>
    </a>
  );
}
