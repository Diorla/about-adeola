export default function Card({
  title,
  description,
  slug,
  image,
}: {
  title: string;
  description: string;
  slug: string;
  image: string;
}) {
  console.log("image", `./app/public/${image}`);
  return (
    <div className="w-64 h-64 bg-zinc-800 rounded-lg shadow-lg m-4">
      <div className="bg-zinc-700 bg-hero-pattern bg-cover">
        <img
          src={`./app/public/${image}`}
          alt={title + " logo"}
          className="w-28 h-28 rounded-t-lg bg-center bg-75% bg-no-repeat m-auto"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-zinc-400">{description}</p>
        <p className="flex  justify-end">
          <a
            href={`./project/${slug}`}
            className="text-zinc-300 hover:underline item-right"
          >
            Open
          </a>
        </p>
      </div>
    </div>
  );
}
