import PostType from "interfaces/PostType";
import styled from "styled-components";
import Layout from "./Layout";

const Header = styled.h1`
  text-align: center;
  font-weight: bolder;
`;

const Image = styled.div`
  background-position: center;
  background-size: contain;
  height: 200px;
  background-repeat: no-repeat;
`;

const Caption = styled.div`
  font-size: 14px;
  color: #555;
  margin-left: 8px;
`;

const Tag = styled.span`
  display: inline-block;
  margin-right: 4px;
  font-size: 14px;
`;

const PostHeader = ({ title, coverImage, date, tags }: PostType) => {
  return (
    <div>
      <div>
        <Header>{title}</Header>
        <Image style={{ backgroundImage: `url(${coverImage})` }} />
        <Caption>{new Date(date).toDateString()}</Caption>
        <div style={{ marginLeft: 4 }}>
          {tags.map((item, idx) => (
            <Tag key={idx}>{item}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostHeader;
