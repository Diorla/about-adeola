import Head from "next/head";
import Link from "next/link";

const ErrorPage = () => (
  <main>
    <Head>
      <title>Ade Adeola - 404</title>
    </Head>
    <div className="error">
      Oh Snap! We've searched everywhere but couldn't find the page.
    </div>
    <div className="info">
      You can check out the following links and retrace your steps
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
      </ul>
    </div>
    <div></div>
    <style jsx>{`
      main {
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
      }
      .error {
        font-size: 3rem;
        font-family: "Baloo Tamma 2", cursive;
        text-shadow: 0 0 4px white;
      }
      .info {
        padding: 8px;
        border-radius: 8px 2px 12px 4px;
        background: rgba(255, 255, 255, 0.9);
        align-items: center;
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </main>
);

export default ErrorPage;
