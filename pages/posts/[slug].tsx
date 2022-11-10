import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "next/head";
import markdownToHtml from "../../lib/markdownToHtml";
import PostType from "../../interfaces/PostType";
import PostHeader from "components/post-header";
import PostBody from "components/post-body";
import styled from "styled-components";
import Layout from "components/Layout";

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Wrapper = styled.main`
  background-color: white;
  min-height: calc(100vh - 135px);
`;

const Top = styled.a`
  position: fixed;
  bottom: 100px;
  right: 0;
`;

export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  const { title, excerpt } = post;

  return (
    <Layout
      active="about"
      title={`${title} | Adeola Ade`}
      canonical="/til"
      description={excerpt}
    >
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <Wrapper>
          <Head>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <div id="to-the-top"></div>
          <PostHeader {...post} />
          <PostBody content={post.content} />
          <Top href="#to-the-top">Top</Top>
        </Wrapper>
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
    "tags",
  ]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
