export default interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  category: ("development" | "design" | "marketing")[];
  link: string;
}
