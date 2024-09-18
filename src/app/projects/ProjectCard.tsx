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
  return (
    <div className="w-64 h-64 bg-zinc-700 rounded-lg shadow-lg m-4">
      <div className="bg-zinc-700 bg-[url('https://raw.githubusercontent.com/Diorla/about-adeola/9d92c97e115198560409dc264561aba40f402e96/app/public/hero-pattern.svg')] bg-cover">
        <img
          src={image}
          alt={title + " logo"}
          className="w-28 h-28 rounded-t-lg bg-center bg-75% bg-no-repeat m-auto"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-zinc-300">{description}</p>
        <p className="flex justify-end">
          <a
            href={`./projects/${slug}`}
            className="text-zinc-300 hover:underline item-right"
          >
            Open
          </a>
        </p>
      </div>
    </div>
  );
}
