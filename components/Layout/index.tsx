import Head from "next/head";
import Wrapper from "./Wrapper";

function Layout(props: {
  children: React.ReactNode;
  title?: string;
  canonical?: string;
  description?: string;
  active: string;
}) {
  const {
    children,
    active,
    canonical = "/",
    title = "Adeola Ade",
    description = "Welcome to Adeola Ade's personal website.",
  } = props;
  const image = `https://og-image.now.sh/${encodeURI(
    title
  )}.png?theme=light&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-black.svg&images=https%3A%2F%2Fucarecdn.com%2F79dc47ef-1afc-4bcb-bb35-167d1bb8348b%2Fadeola.jpg`;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta name="author" content="Adeola Ade" />
        <meta name="keywords" content="Programmer, Freelance, Web developer" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />
        <meta name="og:title" content={title} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:site" content="@dihorla" />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:creator" content="@therealdanvega" />
        <title>{title}</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Oleo+Script&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2&display=swap"
          rel="stylesheet"
        />
        <link rel="canonical" href={`https://adeolaade.com${canonical}`} />
      </Head>
      <Wrapper active={active}>{children}</Wrapper>
    </>
  );
}

export default Layout;
