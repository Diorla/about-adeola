import PostType from "interfaces/PostType";
import Link from "next/link";
import styled from "styled-components";

const Card = styled.div`
  box-shadow: 0 0 1px silver;
  max-width: 480px;
  margin: 4px;
  padding: 4px;
`;

const Image = styled.div`
  width: 100px;
  height: 100px;
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`;

const Row = styled.div`
  display: flex;
`;

const Caption = styled.div`
  font-size: 14px;
  color: #555;
`;

const H2 = styled.h2`
  text-align: center;
  font-weight: bolder;
  cursor: url(/cursor/pointer.svg), pointer;
`;
const Tag = styled.span`
  display: inline-block;
  margin-right: 4px;
  font-size: 14px;
`;
export default function Story(post: PostType) {
  return (
    <Card>
      <Link href={`/posts/${post.slug}`}>
        <H2>{post.title}</H2>
      </Link>
      <Row>
        <div>{post.excerpt}</div>
        <Image style={{ backgroundImage: `url(${post.coverImage})` }} />
        {/* <Image src={post.coverImage} alt={post.title} /> */}
      </Row>
      <Caption>{new Date(post.date).toDateString()}</Caption>
      <div style={{ marginLeft: 4 }}>
        {post.tags.map((item, idx) => (
          <Tag key={idx}>{item}</Tag>
        ))}
      </div>
    </Card>
  );
}
