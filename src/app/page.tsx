"use client";
import Particles from "@/components/particles";
import React from "react";
import Navigation from "@/components/nav";
import { useInterval } from "react-use";

const list = [
  {
    quote:
      "From the initial consultation to the final launch, Adeola was professional, attentive, and highly skilled.",
    author: "Omotayo Ibrahim",
  },
  {
    quote:
      "Adeola demonstrated an understanding of web dev best practices and seamlessly translate our design ideas into a functional website.",
    author: "Aiden Pierce",
  },
  {
    quote:
      "He were always responsive to our questions and concerns, made sure that our site was optimized for SEO and user experience.",
    author: "Elizabeth Olaniyan",
  },
  {
    quote:
      "What I appreciated most about working with Adeola was their ability to balance technical expertise with a keen eye for design.",
    author: "Eunice Pardo",
  },
  {
    quote:
      "I would highly recommend Adeola to anyone looking for a skilled and reliable web developer. His work is exceptional.",
    author: "Kyle Vettori",
  },
  {
    quote:
      "Adeola took the time to understand our company's brand and values, and used this information to craft a beautiful and intuitive design that truly captured our essence.",
    author: "Mo Basi",
  },
  {
    quote:
      "Adeola was a pleasure to work with. Thank you for bringing our vision to life! Your work is outstanding, and your commitment to your clients is unmatched.",
    author: "Kola Enitan",
  },
];

export default function Home() {
  const [count, setCount] = React.useState(0);

  useInterval(() => {
    setCount(count + 1);
  }, 7000);

  const index = count % list.length;
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-500/20 to-black">
      <Navigation />
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles className="absolute inset-0 -z-10 animate-fade-in" />
      <h1 className="py-3.5 px-0.5 z-10 text-4xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        adeola
      </h1>
      <h2 className="text-sm text-zinc-300 text-center">
        Web Developer & Designer
      </h2>
      <h2 className="text-sm text-zinc-300 ">
        Design, Develop, Create something beautiful
      </h2>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />

      <div className="absolute bottom-0 flex flex-col items-center justify-end w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-500/20 to-black">
        <div
          className="text-sm text-zinc-300 max-w-md mt-2 animate-scroll-by "
          key={count}
        >
          {list[index]?.quote}
          <div className="text-right"> - {list[index]?.author}</div>
        </div>
      </div>
    </div>
  );
}
