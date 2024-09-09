import Particles from "~/components/particles";
import { projectList } from "~/constants/projectList";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blog" },
];

const Card = ({
  title,
  description,
  path,
  img,
}: {
  title: string;
  description: string;
  path: string;
  img: string;
}) => {
  return (
    <div className="w-64 h-64 bg-zinc-800 rounded-lg shadow-lg m-4">
      <div className="bg-zinc-700 bg-hero-pattern bg-cover">
        <img
          src={`./app/public/${img}`}
          alt={title + " logo"}
          className="w-28 h-28 rounded-t-lg bg-center bg-75% bg-no-repeat m-auto"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        <p className="text-zinc-400">{description}</p>
        <p className="flex  justify-end">
          <a
            href={`./project/${path}`}
            className="text-zinc-300 hover:underline item-right"
          >
            Open
          </a>
        </p>
      </div>
    </div>
  );
};

export default function Projects() {
  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-2 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </a>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={1000}
      />
      <div className="flex flex-wrap justify-evenly overflow-y-scroll mb-10 w-screen min-h-screen">
        {projectList.map((item, idx) => (
          <Card key={idx} {...item} />
        ))}
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
