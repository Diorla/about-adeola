import { useLoaderData } from "@remix-run/react";
import CustomMDX from "~/components/CustomMDX";
import Particles from "~/components/particles";
import { navigation } from "~/constants/navigation";
import ProjectType from "~/types/Project";
import getProjects from "~/util/getProjects";

export const loader = async ({ params }: { params: { project: string } }) => {
  const projects = getProjects();
  console.log("params", params);

  const project = projects.find((item) => item.slug === params.project);
  return { project };
};

export default function Project() {
  const { project } = useLoaderData<{ project: ProjectType }>();
  console.log("project", project);

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
        <section>
          <script
            type="application/ld+json"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "BlogPosting",
                headline: project.metadata.title,
                datePublished: project.metadata.publishedAt,
                dateModified: project.metadata.publishedAt,
                description: project.metadata.description,
                // image: project.metadata.image
                //   ? `${baseUrl}${project.metadata.image}`
                //   : `/og?title=${encodeURIComponent(project.metadata.title)}`,
                // url: `${baseUrl}/blog/${project.slug}`,
                author: {
                  "@type": "Person",
                  name: "My Portfolio",
                },
              }),
            }}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter text-zinc-100 text-center">
            {project.metadata.title}
          </h1>

          <article className="prose m-4 text-zinc-300 mb-20">
            <CustomMDX source={project.content} />
          </article>
        </section>
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
