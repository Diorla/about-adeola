import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/CustomMDX";
import { getBlogPosts } from "@/app/projects/utils";
import { baseUrl } from "@/app/sitemap";
import Link from "next/link";
import Particles from "@/components/particles";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
  { name: "Blogs", href: "/blog" },
];

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    description,
    image,
  } = post.metadata;
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
      url: `${baseUrl}/blog/${post.slug}`,
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

export default function Blog({ params }: { params: { slug: string } }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-2 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
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
                headline: post.metadata.title,
                datePublished: post.metadata.publishedAt,
                dateModified: post.metadata.publishedAt,
                description: post.metadata.description,
                image: post.metadata.image
                  ? `${baseUrl}${post.metadata.image}`
                  : `/og?title=${encodeURIComponent(post.metadata.title)}`,
                url: `${baseUrl}/blog/${post.slug}`,
                author: {
                  "@type": "Person",
                  name: "My Portfolio",
                },
              }),
            }}
          />
          <h1 className="title font-semibold text-2xl tracking-tighter text-zinc-100 text-center">
            {post.metadata.title}
          </h1>

          <article className="prose m-4 text-zinc-300 mb-20">
            <CustomMDX source={post.content} />
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
