import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/CustomMDX";
import { getProjects } from "@/app/projects/utils";
import { baseUrl } from "@/app/sitemap";
import Particles from "@/components/particles";
import Navigation from "@/components/nav";

export async function generateStaticParams() {
  const projects = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = getProjects().find((project) => project.slug === params.slug);
  if (!project) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    description,
    image,
  } = project.metadata;
  const ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/projects/${project.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Project({ params }: { params: { slug: string } }) {
  const project = getProjects().find((project) => project.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <Navigation />
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
                "@type": "projectsprojecting",
                headline: project.metadata.title,
                datePublished: project.metadata.publishedAt,
                dateModified: project.metadata.publishedAt,
                description: project.metadata.description,
                image: project.metadata.image
                  ? `${baseUrl}${project.metadata.image}`
                  : `/og?title=${encodeURIComponent(project.metadata.title)}`,
                url: `${baseUrl}/projects/${project.slug}`,
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
