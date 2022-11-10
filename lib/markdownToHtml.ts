import { unified } from "unified";
import parse from "remark-parse";
import rehype from "remark-rehype";
import prism from "rehype-prism";
import stringify from "rehype-stringify";
import slug from "rehype-slug";
import toc from "@jsdevtools/rehype-toc";

export default async function markdownToHtml(markdown: string) {
  const result = await unified()
    .use(parse)
    .use(rehype)
    .use(slug)
    .use(toc)
    .use(prism, { plugins: ["line-numbers"] })
    .use(stringify)
    .process(markdown);
  return String(result);
}
