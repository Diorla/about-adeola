import Image from "next/image";
import FadeInWhenVisible from "./FadeInWhenVisible";
import { Card, CardContent } from "../ui/card";

const testimonial = [
  {
    name: "Omotayo Ibrahim",
    role: "Business owner, Hera beauty",
    image: "/people/omotayo.jpg",
    testimony:
      "From the initial consultation to the final launch, Adeola was professional, attentive, and highly skilled.",
  },
  {
    name: "Aiden Pierce",
    role: "CTO, ARCO Incorporated",
    image: "/people/aiden.jpg",
    testimony:
      "Adeola demonstrated an understanding of web dev best practices and seamlessly translate our design ideas into a functional website.",
  },
  {
    name: "Elizabeth Olaniyan",
    role: "CEO, Novellus Solutions",
    image: "/people/liz.jpg",
    testimony:
      "He were always responsive to our questions and concerns, made sure that our site was optimized for SEO and user experience.",
  },
  // {
  //   name: "Eunice Pardo",
  //   role: "CEO, Tech Company",
  //   image: "/me.jpg",
  //   testimony:
  //     "What I appreciated most about working with Adeola was their ability to balance technical expertise with a keen eye for design.",
  // },
  // {
  //   name: "Kyle Vettori",
  //   role: "CEO, Tech Company",
  //   image: "/me.jpg",
  //   testimony:
  //     "I would highly recommend Adeola to anyone looking for a skilled and reliable web developer. His work is exceptional.",
  // },
  // {
  //   name: "Mo Basi",
  //   role: "CEO, Tech Company",
  //   image: "/me.jpg",
  //   testimony:
  //     "Adeola took the time to understand our company's brand and values, and used this information to craft a beautiful and intuitive design that truly captured our essence.",
  // },
  // {
  //   name: "Kola Enitan",
  //   role: "CEO, Tech Company",
  //   image: "/me.jpg",
  //   testimony:
  //     "Adeola was a pleasure to work with. Thank you for bringing our vision to life! Your work is outstanding, and your commitment to your clients is unmatched.",
  // },
  // {
  //   name: "John Doe",
  //   role: "CEO, Tech Company",
  //   image: "/me.jpg",
  //   testimony:
  //     "Adeola is an exceptional developer. His attention to detail and ability to translate our vision into reality exceeded our expectations.",
  // },
];
export default function Testimonial() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-12 text-center">
            What Clients Say
          </h2>
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonial.map((i) => (
            <FadeInWhenVisible key={i.name}>
              <Card className="bg-background">
                <CardContent className="p-6">
                  <p className="italic mb-4">{i.testimony}</p>
                  <div className="flex items-center">
                    <Image
                      src={i.image}
                      alt={`Client ${i.name}, ${i.role}`}
                      width={50}
                      height={50}
                      className="rounded-full mr-4"
                    />
                    <div>
                      <p className="font-semibold">{i.name}</p>
                      <p className="text-sm text-muted-foreground">{i.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
