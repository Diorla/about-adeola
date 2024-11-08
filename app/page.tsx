import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import Testimonial from "@/components/home/Testimonial";
import Services from "@/components/home/Services";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Landing />
      <About />

      <Testimonial />

      <Services />

      <section id="projects" className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="overflow-hidden">
                <Image
                  src="/me.jpeg"
                  alt={`Project ${i}`}
                  width={400}
                  height={300}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">
                    Project Title {i}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Brief description of the project and the technologies used.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>Tailwind CSS</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild>
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>

      <hr />
      <section className="py-20 ">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Who I Work With
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="w-32 h-32 flex items-center justify-center bg-muted rounded-lg"
              >
                <Image
                  src="/me.jpeg"
                  alt={`Client Logo ${i}`}
                  width={100}
                  height={100}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
