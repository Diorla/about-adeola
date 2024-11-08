import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import Testimonial from "@/components/home/Testimonial";
import Services from "@/components/home/Services";
import Project from "@/components/home/Project";
import Brands from "@/components/home/Brands";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Landing />

      <About />

      <Testimonial />

      <Services />

      <Project />

      <hr />

      <Brands />
    </div>
  );
}
