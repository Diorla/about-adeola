export default interface Project {
  metadata: {
    title: string;
    publishedAt: string;
    description: string;
    image: string;
  };
  slug: string;
  content: string;
}
