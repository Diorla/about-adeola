import Image from "next/legacy/image";
import FadeInWhenVisible from "./FadeInWhenVisible";

const images = [
  "42.png",
  "affiliate.png",
  "all-for-autism.png",
  "almanac.png",
  "arts-council.png",
  "brixton-labyrinth.png",
  "community-trust.png",
  "focus-forge.png",
  "mount-zion.png",
  "salady.jpg",
  "nga.png",
  "diamond.png",
];

const halfway = Math.ceil(images.length / 2);
const top = images.slice(0, halfway);
const bottom = images.slice(halfway, images.length);

export default function Brands() {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-12 text-center">
            Who I Work With
          </h2>
        </FadeInWhenVisible>
        <FadeInWhenVisible>
          <div className="relative">
            <div className="flex animate-scroll-left">
              {[...top, ...top, ...top, ...top].map((image, i) => (
                <div
                  key={`left-${i}`}
                  className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center rounded-lg"
                >
                  <Image
                    src={`/companies/${image}`}
                    alt={`Client Logo ${i + 1}`}
                    width={100}
                    height={50}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ))}
            </div>

            <div className="flex animate-scroll-right mt-8">
              {[...bottom, ...bottom, ...bottom, ...bottom]
                .reverse()
                .map((image, i) => (
                  <div
                    key={`right-${i}`}
                    className="flex-shrink-0 w-48 h-24 mx-4 flex items-center justify-center rounded-lg"
                  >
                    <Image
                      src={`/companies/${image}`}
                      alt={`Client Logo ${i + 13}`}
                      width={100}
                      height={50}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                ))}
            </div>
          </div>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
