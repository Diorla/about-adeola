import styled from "styled-components";

type Props = {
  content: string;
};

const PostWrapper = styled.div`
  padding: 12px;
  & ul {
    margin-left: 24px;
  }
  & h2 {
    font-size: 32px;
    border-bottom: 1px solid silver;
    margin-top: 8px;
  }
  & h3 {
    font-size: 28px;
    margin-top: 8px;
  }
  & h4 {
    font-size: 24px;
  }
  & h5 {
    font-size: 20px;
  }
  & h6 {
    font-size: 16px;
  }
  & pre {
    background-color: #fafafa;
    font-family: monospace;
    font-size: 14px;
    margin: 8px 0;
  }
  & p {
    margin: 8px 0;
  }
  & p code {
    color: #ad1457;
    background: #fce4ec;
    font-family: monospace;
    font-size: 14px;
  }
  & li {
    list-style: square;
  }
`;

const PostBody = ({ content }: Props) => {
  return (
    <PostWrapper>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </PostWrapper>
  );
};

export default PostBody;
