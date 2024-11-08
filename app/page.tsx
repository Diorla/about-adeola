import Image from "next/image";
import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import Testimonial from "@/components/home/Testimonial";
import Services from "@/components/home/Services";
import Project from "@/components/home/Project";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Landing />
      <About />

      <Testimonial />

      <Services />

      <Project />

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
                  src="/people/me.jpeg"
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
