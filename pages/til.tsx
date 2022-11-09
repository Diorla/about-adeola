import { getAllPosts } from "../lib/api";
import Post from "../interfaces/PostType";
import Layout from "components/Layout";
import styled from "styled-components";
import HeaderPost from "components/HeaderPost";
import MoreStories from "components/MoreStories";

type Props = {
  allPosts: Post[];
};
const Wrapper = styled.main`
  background-color: white;
  min-height: calc(100vh - 135px);
`;

const Blockquote = styled.div`
  text-align: center;
`;

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <Layout
      active="about"
      title="Ade Adeola - Things I've learnt"
      canonical="/til"
      description="A few nugget of information based on the challenges I've faced and recorded"
    >
      <Wrapper>
        <Blockquote style={{ fontStyle: "italic" }}>
          Be ashamed to die until you have scored some victory for humanity ―
          Horace Mann
        </Blockquote>
        {heroPost && <HeaderPost {...heroPost} />}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        <Blockquote>
          I'm afraid we've come to the end of the road. Of course, I can't
          record everything I've learnt, this is just a bits but hopefully
          helpful
        </Blockquote>
      </Wrapper>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
    "tags",
  ]);

  return {
    props: { allPosts },
  };
};
