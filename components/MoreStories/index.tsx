import PostType from "interfaces/PostType";
import styled from "styled-components";
import Story from "./Story";

const PostWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export default function MoreStories({ posts }: { posts: PostType[] }) {
  return (
    <PostWrapper>
      {posts.map((item, idx) => (
        <Story key={idx} {...item} />
      ))}
    </PostWrapper>
  );
}
