import {
  Code,
  Palette,
  Smartphone,
  ShoppingBag,
  Search,
  Zap,
  Brush,
} from "lucide-react";
import Service from "./Service";

const serviceList: Service[] = [
  {
    title: "Web Development",
    description:
      "Custom websites built with modern technologies for optimal performance and user experience.",
    icon: Code,
    features: [
      "Responsive design",
      "SEO optimization",
      "Cross-browser compatibility",
      "Performance optimization",
      "Accessibility compliance",
    ],
    category: ["development"],
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and attractive user interfaces that enhance user engagement and satisfaction.",
    icon: Palette,
    features: [
      "User research",
      "Wire-framing and prototyping",
      "Visual design",
      "Usability testing",
      "Design system creation",
    ],
    category: ["design"],
  },
  {
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for iOS and Android devices.",
    icon: Smartphone,
    features: [
      "iOS and Android development",
      "Cross-platform solutions",
      "App Store optimization",
      "Push notifications",
      "Offline functionality",
    ],
    category: ["development"],
  },
  {
    title: "E-commerce Solutions",
    description:
      "Robust online stores with secure payment gateways and inventory management systems.",
    icon: ShoppingBag,
    features: [
      "Product catalog management",
      "Secure payment integration",
      "Order processing and fulfillment",
      "Customer account management",
      "Analytics and reporting",
    ],
    category: ["development", "marketing"],
  },
  {
    title: "SEO Optimization",
    description:
      "Improving your website's visibility in search engines to drive organic traffic.",
    icon: Search,
    features: [
      "Keyword research and optimization",
      "On-page SEO",
      "Technical SEO",
      "Content strategy",
      "Link building",
    ],
    category: ["marketing"],
  },
  {
    title: "Performance Optimization",
    description:
      "Enhancing the speed and efficiency of your web applications for better user experience.",
    icon: Zap,
    features: [
      "Code optimization",
      "Caching strategies",
      "Image and asset optimization",
      "Database query optimization",
      "Server-side rendering",
    ],
    category: ["development", "marketing"],
  },
  {
    title: "Branding",
    description:
      "Creating a consistent and memorable brand identity for your business.",
    icon: Brush,
    features: [
      "Brand strategy development",
      "Logo design",
      "Color palette selection",
      "Brand guidelines creation",
      "Brand messaging development",
    ],
    category: ["design", "marketing"],
  },
];

export default serviceList;
