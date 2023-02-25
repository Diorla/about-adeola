import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #e0f2f1;
  display: flex;
  justify-content: space-between;
  background-image: url(/notfound.svg);
  padding: 8px;
  flex-direction: column;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

const ErrorDiv = styled.div`
  font-size: 3rem;
  font-family: "Baloo Tamma 2", cursive;
  text-shadow: 0 0 4px white;
`;

const Info = styled.div`
  padding: 8px;
  border-radius: 8px 2px 12px 4px;
  background: rgba(255, 255, 255, 0.9);
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const ErrorPage = () => (
  <Main>
    <Head>
      <title>Ade Adeola - 404</title>
    </Head>
    <ErrorDiv>
      Oh Snap! We&apos;ve searched everywhere but couldn&apos;t find the page.
    </ErrorDiv>
    <Info>
      You can check out the following links and retrace your steps
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </Info>
    <div></div>
  </Main>
);

export default ErrorPage;
