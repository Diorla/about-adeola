import FadeInWhenVisible from "./FadeInWhenVisible";
import ServiceCard from "./ServiceCard";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites built with modern technologies for optimal performance and user experience.",
    img: "web-structure",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and attractive user interfaces that enhance user engagement and satisfaction.",
    img: "digital-art",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Robust online stores with secure payment gateways and inventory management systems.",
    img: "shopping-cart",
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    img: "mobile-apps",
  },
  {
    title: "SEO Optimization",
    description:
      "Improving your website&apos;s visibility in search engines to drive organic traffic.",
    img: "search",
  },
  {
    title: "Website Maintenance",
    description:
      "Ongoing support and updates to keep your website secure, fast, and up-to-date.",
    img: "repair-tools",
  },
];
export default function Services() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-bold mb-12 text-center">My Services</h2>
        </FadeInWhenVisible>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeInWhenVisible key={index}>
              <ServiceCard {...service} />
            </FadeInWhenVisible>
          ))}
        </div>
      </div>
    </section>
  );
}
