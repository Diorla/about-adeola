import PostType from "interfaces/PostType";
import Link from "next/link";
import styled from "styled-components";

const CoverImage = styled.div<{ bkg: string }>`
  height: 120px;
  width: 100%;
  background-image: ${({ bkg }) => "url(" + bkg + ")"};
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const H2 = styled.h2`
  text-align: center;
  font-weight: bolder;
  cursor: url(/cursor/pointer.svg), pointer;
`;

const Caption = styled.div`
  max-width: 480px;
  text-align: center;
  margin: auto;
  font-size: 14px;
  color: #555;
`;

const Wrapper = styled.div`
  border-bottom: 1px solid silver;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 4px;
  font-size: 14px;
`;

export default function HeaderPost(post: PostType) {
  return (
    <Wrapper>
      <CoverImage bkg={post.coverImage} />
      <Link href={`/posts/${post.slug}`}>
        <H2>{post.title}</H2>
      </Link>
      <Caption>
        <div>{post.excerpt}</div>
        <div>{new Date(post.date).toDateString()}</div>
      </Caption>
      <div style={{ marginLeft: 4 }}>
        {post.tags.map((item, idx) => (
          <Tag key={idx}>{item}</Tag>
        ))}
      </div>
    </Wrapper>
  );
}
