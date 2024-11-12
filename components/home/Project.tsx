import Link from "next/link";
import { Button } from "@/components/ui/button";
// import ProjectProps from "./ProjectProps";
import ProjectCard from "./ProjectCard";
import FadeInWhenVisible from "./FadeInWhenVisible";
import projects from "@/data/projects";

// const projects: ProjectProps[] = [
//   {
//     title: "Cloudmark",
//     description: "",
//     tools: [
//       "React",
//       "Next.js",
//       "Tailwind",
//       "Material-ui",
//       "Expo",
//       "React-native",
//       "Firebase",
//     ],
//     img: "/projects/cloudmark.png",
//   },
//   {
//     title: "Focus forge",
//     description: "",
//     tools: ["Expo", "React-native", "Firebase"],
//     img: "/projects/focus-forge.jpg",
//   },
//   {
//     title: "Hera",
//     description: "",
//     tools: ["React.js", "Styled-jsx"],
//     img: "/projects/hera.jpg",
//   },
// ];

export default function Project() {
  return (
    <section id="projects" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <FadeInWhenVisible>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
