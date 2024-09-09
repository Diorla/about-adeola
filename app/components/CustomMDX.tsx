import markdownit from "markdown-it";
const md = markdownit();

export default function CustomMDX({ source }: { source: string }) {
  const result = md.render(source);

  return <div dangerouslySetInnerHTML={{ __html: result }} />;
}
